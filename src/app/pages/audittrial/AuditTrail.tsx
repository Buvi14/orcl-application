import FileSaver from 'file-saver';
import React, { useContext, useEffect, useState } from 'react';
import { Connectionserver } from '../../Context';
import searchlogo from '../dashboard/images/gen021.svg'
import XLSX from 'sheetjs-style';
import ModalComponent from '../dashboard/ModalComponent';

interface IAuditTrialProps {
}

const AuditTrial = () => {
    const { connectionState } = useContext(Connectionserver);
    const [showModal, setShowModal] = useState<any>(false);
    const [fileName, setFileName] = useState<any>('');
    const [searchAction, setSearchAction] = useState<any>('');

    let json_data: any = [{
        'time_stamp': ''
    }]

    let json_array: any = [
        {
            'action': "upload user excel",
            'environ': "server2",
            'time': 'Tue Dec 06 2022 19:41:20 GMT+0530'
        },
        {
            'action': "login",
            'environ': "server1",
            'time': 'Tue Dec 06 2022 19:41:20 GMT+0530'
        },
        {
            'action': "logout",
            'environ': "server2",
            'time': 'Tue Dec 06 2022 19:41:20 GMT+0530'
        },
        {
            'action': "login",
            'environ': "server2",
            'time': 'Tue Dec 06 2022 19:41:20 GMT+0530'
        },
        {
            'action': "upload user excel",
            'environ': "server1",
            'time': 'Tue Dec 06 2022 19:40:20 GMT+0530'
        }
    ]

    // useEffect(() => {
    //     const t = new Date();
    //     const action = ['logout', 'login', 'update', 'download user excel', 'upload user excel']
    //     const environ = ['server1', 'server2']
    //     let json_arr: any = [];
    //     function create() {
    //         for (let i = 0; i < 5; i++) {
    //             let json: any = {}
    //             json.time = t;
    //             json.action = action[Math.floor(Math.random() * action.length)];
    //             json.environ = environ[Math.floor(Math.random() * environ.length)]
    //             json_arr.push(json);
    //         }
    //         console.log(json_arr);
    //     }
    //     create();
    // })


    const downloadToExcel = async () => {
        setShowModal(!showModal);
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtenion = ".xlsx";

        // const fileName:any = 'roles'
        const ws = XLSX.utils.json_to_sheet(json_array);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: 'array' })
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtenion)
        // await setRolesJson(json_data);
        // fetchData();
    }
    const chooseFileName = (e: any) => {
        setFileName(e.target.value);
    }

    const showmodal = () => {
        setShowModal(!showModal);
    }

    const search = (data: any) => {
        return data && data.filter((item: any) => item.environ?.includes(searchAction) || item.action?.includes(searchAction));
    }


    return <>
        <div className={`card card-xl-stretch mb-xl-8`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5 d-flex flex-column align-items-center justify-content-between'>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <h3 className='card-title align-items-start flex-column'>
                        Audit Trails
                    </h3>

                    <div className="d-flex align-tems-center position-relative my-1">
                        <button className="btn btn-primary align-items-end" onClick={showmodal} >Download to Excel</button>
                    </div>
                </div>

                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className="time w-50 d-flex">
                        <div className="form-group">
                            <label htmlFor="">From Date</label>
                            <input type="date" className='form-control form-control-solid w-150px ps-6' name="" id="" />
                        </div>
                        <div className="form-group ms-4">
                            <label htmlFor="">To date</label>
                            <input type="date" className='form-control form-control-solid w-150px ps-6' name="" id="" />
                        </div>

                    </div>
                    <div className='d-flex justify-content-end w-50 align-items-end'>
                        <div className="d-flex">
                            <input type="text"
                                data-kt-user-table-filter="search"
                                className="form-control form-control-solid w-250px ps-6"
                                placeholder="search actions"
                                value={searchAction}
                                onChange={(e) => { setSearchAction(e.target.value) }} />
                            <img src={searchlogo} alt="search" className="svg-icon-1 position-relative" width="20px" style={{ right: '30px' }} />
                        </div>
                    </div>
                </div>

            </div>
            {/* end::Header */}
            <div className="card-body">

                <div className='table-wrapper-scroll-y my-custom-scrollbar card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold fs-4 text-dark'>
                                    <th className='min-w-150px'>Time Stamp</th>
                                    <th className='min-w-140px'>Actions</th>
                                    <th className='min-w-140px'>Environment</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                {
                                    json_array && search(json_array).map((audit_data: any, i: any) => {
                                        return (
                                            <tr className='' key={i} >
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        {audit_data.time}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-dark  d-block mb-1 fs-6">
                                                        {audit_data.action}
                                                    </span>

                                                </td>
                                                <td>
                                                    <span className="text-muted d-block fs-6">
                                                        <span className="text-dark">{audit_data.environ}</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                    </div>
                    {/* end::Table container */}
                </div>

            </div>

            <ModalComponent showModal={showModal} showmodal={showmodal} downloadToExcel={downloadToExcel} chooseFileName={chooseFileName} />
        </div>

    </>;
};

export default AuditTrial;
