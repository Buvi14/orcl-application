import { disconnect } from 'process';
import React, { useContext, useEffect, useState } from 'react';

import { Modal, Button } from "react-bootstrap";
import edit from './images/art005.svg';
import { Connectionserver } from '../../Context';



export default function ConfigComponent() {
    const { setConnection } = useContext(Connectionserver);
    const [showModal, setShowModal] = useState<any>(false);
    const [serverName, setServerName] = useState<any>('');
    const [userId, setUserId] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [enable, setEnable] = useState<any>(true);
    const [jsondata, setJsonData] = useState<any>([]);
    const [serverURL, setServerURL] = useState<any>('');
    const [connection, setConnect] = useState<any>(false);

    const showmodal = () => {
        setShowModal(!showModal);
    }

    const json_data = [{
        'serverName': 'server1',
        'serverURL': 'http://server1.connect.xyz/',
        'userId': 'User12',
        'password': 'abc@123',
        'connection': false
    },
    {
        'serverName': 'server2',
        'serverURL': 'http://server2.connect.xyz/',
        'userId': 'User13',
        'password': 'abc@123',
        'connection': false
    }
    ]


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
        setJsonData(json_data);
        if (serverName && serverURL && userId && password) {
            setEnable(false);
        }
        else {
            setEnable(true);
        }

    }, [serverName, serverURL, userId, password])

    function saveData() {
        let data_json: any = {};
        data_json.serverName = serverName;
        data_json.userId = userId;
        data_json.password = password;
        data_json.serverURL = serverURL;
        let data1: any = jsondata;
        data1.push(data_json);
        setJsonData(data1);
        console.log(jsondata);
        setServerName('');
        setServerURL('');
        setUserId('');
        setPassword('');
        setEnable(true);
        setShowModal(!showModal);

    }

    const openModal = (data: any) => {
        console.log(data);
        setServerName(data.serverName);
        setServerURL(data.ServerURL);
        setUserId(data.userId);
        setPassword(data.password);
        setShowModal(!showModal);
    }

    const selectConnect = (servername: any) => {
        console.log(servername);
        const updated_list = jsondata.map((data: any) => {
            if (data.serverName === servername) {
                setConnection('')
                if (data.connection) {
                    setConnection('No Server Connected');
                    setConnect(false);
                }
                else {
                    setConnection(`Server Connected to ${data.serverName}`);
                    setConnect(true);
                }
                return { ...data, connection: !data.connection }
            }
            else if (data.connection) {
                return { ...data, connection: !data.connection }
            }
            return data;
        })
        console.log(updated_list);
        setJsonData(updated_list);
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
                                        <th className='w-140px fs-4'>Server Name</th>
                                        <th className='min-w-140px fs-4'>Value</th>
                                        <th className='w-100px fs-4'> Edit</th>
                                        <th className='w-100px fs-4'>Connection</th>
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
                                                <button className='btn' onClick={() => { openModal(data) }}>
                                                    <img src={edit} className="svg-icon svg-icon-primary" alt="" />
                                                </button>
                                            </td>
                                            <td>
                                                {data.connection ?
                                                    <button className='btn btn-success' onClick={() => { selectConnect(data.serverName) }}>Disconnect</button> :
                                                    <button className='btn btn-primary' onClick={() => { selectConnect(data.serverName) }}>Connect</button>}

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
                                <input type="text" required className="form-control" value={serverURL} onChange={e => { setServerURL(e.target.value) }} placeholder="Server Url..." />
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
