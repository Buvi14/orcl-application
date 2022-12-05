import { disconnect } from 'process';
import React, { useContext, useEffect, useState } from 'react';

import { Modal, Button } from "react-bootstrap";
import edit from './images/art005.svg';
import { Connectionserver } from '../../Context';



export default function ConfigComponent() {
    const {setConnection} = useContext(Connectionserver);
    const [showModal, setShowModal] = useState<any>(false);
    const [serverName, setServerName] = useState<any>('');
    const [userId, setUserId] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [enable, setEnable] = useState<any>(true);
    const [jsondata, setJsonData] = useState<any>([]);
    const [serverURl, setServerURL] = useState<any>('');
    const [connection, setConnect] = useState<any>('Connect');

    const showmodal = () => {
        setShowModal(!showModal);
    }


    // const setData = (e: any, name: any) => {
    //     switch (name) {
    //         case 'servername':
    //             setServerName(e.target.value)
    //             break;
    //         case 'UserId':
    //             setUserId(e.target.value)
    //             break;
    //         case 'password':
    //             setPassword(e.target.value)
    //             break;
    //         case 'serverURl':
    //             setServerURL(e.target.value)
    //             break;

    //         default:
    //             break;
    //     }
    //     if (serverName && userId && password) {
    //         setEnable(!enable);
    //     }
    // }
    useEffect(() => {
        if (serverName && userId && password) {
            setEnable(false);
        }

    }, [serverName, serverURl, userId, password])

    function saveData() {
        let data_json: any = {};
        data_json.serverName = serverName;
        data_json.userId = userId;
        data_json.password = password;
        data_json.serverURL = serverURl;
        let data1: any = [];
        // data1.push(data_json);
        setJsonData([...jsondata,data_json]);
        setServerName('');
        setServerURL('');
        setUserId('');
        setPassword('');
        setEnable(true);
        console.log(jsondata);
    }

    const openModal = (data:any) =>{
        console.log(data);
        setServerName(data.serverName);
        setServerURL(data.ServerURL);
        setUserId(data.userId);
        setPassword(data.password);
        setShowModal(!showModal);
    }

    const selectConnect = (servername:any) =>{
        if(connection === 'Connect'){
            setConnection(`Server is Connected to ${servername}`)
            setConnect('Disconnect');
        }
        else{
            setConnect('Connect');
        }
    }



    return (
        <>
            <div>
                <div className={`card card-xl-stretch mb-xl-8`}>
                    <div className='card-header border-0 pt-5 d-flex align-items-center justify-content-start'>
                        <h3 className='card-title align-items-start flex-column'>
                            <button type='button' className='btn btn-outline-primary' onClick={showmodal}><span className='fw-bold'>+</span> New Connection</button>
                        </h3>

                        <div className="d-flex align-tems-center position-relative my-1">
                        </div>

                    </div>
                    <div className='table-wrapper-scroll-y my-custom-scrollbar card-body py-3'>
                        {/* begin::Table container */}
                        <div className='table-responsive'>
                            {/* begin::Table */}
                            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                                {/* begin::Table head */}
                                <thead>
                                    <tr className='fw-bold text-muted'>
                                        <th className='w-140px'>Server Name</th>
                                        <th className='min-w-140px'>Value</th>
                                        <th className='w-100px'></th>
                                        <th className='w-100px'></th>
                                    </tr>
                                </thead>
                                {/* end::Table head */}
                                
                                {/* begin::Table body */}
                                <tbody>
                                {jsondata && jsondata.map((data: any) => {
                                       return (<tr key={data.userId}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    {data.serverName}
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-dark d-block mb-1 fs-6">
                                                    {data.serverURL}
                                                </span>
                                            </td>
                                            <td>
                                                <button className='btn' onClick={()=>{openModal(data)}}>
                                                    <img src={edit} className="svg-icon svg-icon-primary" alt="" />
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary' onClick={()=>{selectConnect(data.serverName)}}>{connection}</button>
                                            </td>
                                        </tr>)
                                    })}
                                </tbody>
                                {/* end::Table body */}
                            </table>
                            {/* end::Table */}
                        </div>
                        {/* end::Table container */}
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={showmodal} style={{}}>
                <div className="modal-content" style={{ minWidth: '45vw' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter Server Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <input type="text" className="form-control" value={serverName} onChange={e => { setServerName(e.target.value) }} placeholder="Enter File Name..." /> */}
                        <form className='d-flex'>
                            <div className="form-group h-80px">
                                <label className='h-28px text-dark fs-26px fw-bold'>Enter Server Name</label>
                                <input type="text" required className="form-control" value={serverName} onChange={e => { setServerName(e.target.value) }} placeholder="Enter Server Name..." />
                            </div>
                            <div className="form-group h-80px">
                                <label className='h-28px text-dark fs-26px fw-bold'>Server URL </label>
                                <input type="text" required className="form-control" value={serverURl} onChange={e => { setServerURL(e.target.value) }} placeholder="Server Url..." />
                            </div>
                            <div className="form-group h-80px">
                                <label className='h-28px text-dark fs-26px fw-bold'>Enter UserId</label>
                                <input type="url" required className="form-control" value={userId} onChange={e => { setUserId(e.target.value) }} placeholder="Enter UserId..." />
                            </div>
                            <div className="form-group h-80px">
                                <label htmlFor="password" className='h-28px text-dark fs-26px fw-bold'>Enter Password</label>
                                <input type="password" required className="form-control" value={password} onChange={e => { setPassword(e.target.value) }} placeholder="Enter Password..." />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" disabled={enable} onClick={saveData} >
                            Save
                        </Button>
                        <Button variant="secondary" onClick={showmodal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}
