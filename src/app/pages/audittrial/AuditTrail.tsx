import * as React from 'react';
import searchlogo from '../dashboard/images/gen021.svg'

interface IAuditTrialProps {
}

const AuditTrial = () => {
    return <>
        <div className={`card card-xl-stretch mb-xl-8`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5 d-flex flex-column align-items-center justify-content-between'>
                <div className="d-flex align-items-center justify-content-between w-100">
                    <h3 className='card-title align-items-start flex-column'>
                        Audit Trails
                    </h3>

                    <div className="d-flex align-tems-center position-relative my-1">
                        Export data
                    </div>
                </div>

                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className="time w-50">
                        <label htmlFor="">From Date</label>
                        <input  type="date" name="" id="" />
                        <label htmlFor="">To date</label>
                        <input  type="date" name="" id="" />
                    </div>
                    <div className='d-flex justify-content-between w-50'>
                        <div className="d-flex">
                            <input type="text"
                                data-kt-user-table-filter="search"
                                className="form-control form-control-solid w-250px ps-6"
                                placeholder="search actions" />
                            <img src={searchlogo} alt="search" className="svg-icon-1 position-relative" width="20px" style={{ right: '30px' }} />
                        </div>
                        {/* <div className="d-flex">
                            <div className="h-38px border-0 rounded">
                                <a href=""
                                className='btn btn-light btn-sm bg-secondary d-flex align-items-center justify-content-between'
                                data-kt-menu-trigger></a>
                            </div>
                            
                        </div> */}
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
                                <tr className='bg-secondary' >
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="symbol symbol-50px me-5">
                                            </div>
                                            <div className="d-flex text-dark justify-content-start flex-column">
                                                9:30
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="text-dark  d-block mb-1 fs-6">
                                            Updated
                                        </span>

                                    </td>
                                    <td>
                                        <span className="text-muted d-block fs-6">
                                            <span className="text-dark">Production</span>
                                        </span>
                                    </td>
                                </tr>

                            </tbody>
                            {/* end::Table body */}
                        </table>
                        {/* end::Table */}
                    </div>
                    {/* end::Table container */}
                </div>

            </div>

            {/* <UserTable users={search(usersall)} callUser={callUser} activeRow={activeRow} /> */}
        </div>

    </>;
};

export default AuditTrial;
