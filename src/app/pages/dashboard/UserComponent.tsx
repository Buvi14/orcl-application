import axios from "axios";
import React, { useEffect, useState } from "react";
import users1 from './data/userResponse.json';
import roles1 from './data/rolesResponse.json';
import './Usercomponent.scss';
import searchlogo from './images/gen021.svg'
import RolesComponent from "./RolesComponent";
import UserTable from "./UserTable";
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import { Modal, Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";



const UserComponent = () => {

    const [usersall, setUserAll] = useState<any>();
    const [users, setUser] = useState<any>();
    const [roles, setRoles] = useState<any>();
    const [searchUser, setSearchUser] = useState<string>('');
    const [userData, setUserData] = useState<any>();
    const [rolesfound, setRolesFound] = useState<any>();
    const [rolesJson, setRolesJson] = useState<any>();
    const [showModal, setShowModal] = useState<any>(false);
    const [fileName, setFileName] = useState<any>('');
    const [activeRow,setActiveRow] = useState<any>();



    useEffect(() => {
        // axios.get('./data/userResponse.json').then((data)=>{
        setUserAll(users1.Resources);
        setRoles(roles1.Resources);
        setUser(users1.Resources);
    })


    const chooseFileName = (e:any) => {
        setFileName(e.target.value);
    }


    const downloadToExcel = async () => {
        setShowModal(!showModal);
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtenion = ".xlsx";
        let json_data: any = [];
        for (let i = 0; i < usersall.length; i++) {
            let tb_data: any = {};
            tb_data.UserName = usersall[i].displayName;
            for (let j = 0; j < roles.length; j++) {
                tb_data[roles[j].displayName] = checkRoles(usersall[i], roles[j].id)
            }
            json_data.push(tb_data);
        }
        // const fileName:any = 'roles'
        const ws = XLSX.utils.json_to_sheet(json_data);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: 'array' })
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtenion)
        // await setRolesJson(json_data);
        // fetchData();
    }

    const checkRoles = (role_id: any, user_roles: any) => {
        let flag: any = 0;
        for (let i = 0; i < user_roles.roles?.length; i++) {
            if (role_id === user_roles.roles[i].id) {
                return "Yes"
                flag = 1;
            }
        }
        if (flag === 0) {
            return "No";
        }
    }


    const callUser = async (data: any) => {
        var roles_found:any;
        roles_found= roles;
        setActiveRow(data);
        let find_user: any;
        console.log(roles_found);
        for (let i = 0; i < users.length; i++) {
            if (data === users[i].id) {
                find_user = users[i];
            }
        }
        if (find_user) {
            for (let j = 0; j < roles_found.length; j++) {
                for (let i = 0; i < find_user.roles.length; i++) {

                    if (roles_found[j].id == find_user.roles[i].id) {
                        roles_found[j].available = true;
                    }
                    
                }
            }
            setUserData(find_user);
            setRolesFound(roles_found);
        }

    }
    const showUser = () => {
        for (let i = 0; i < users.length; i++) {
            if (searchUser === usersall[i]) {
                setUser(usersall[i])
            }
        }
    }

    const showmodal = () => {
        setShowModal(!showModal);
    }

    const search = (data: any) => {

        return data && data.filter((item: any) => item.displayName?.includes(searchUser));
    }


    return (
        <>
            <div className={`card card-xl-stretch mb-xl-8`}>
                {/* begin::Header */}
                <div className='card-header border-0 pt-5 d-flex align-items-center justify-content-between'>
                    <div className="d-flex align-items-center justify-content-start">
                        <h3 className='card-title align-items-start flex-column'>
                            <span className='card-label fw-bold fs-3 mb-1'>Users</span>
                            <span className='text-muted mt-1 fw-semibold fs-7'></span>
                        </h3>

                        <div className="d-flex align-tems-center position-relative my-1">
                            <input type="text"
                                data-kt-user-table-filter="search"
                                className="form-control form-control-solid w-250px ps-6"
                                placeholder="search user"
                                value={searchUser}
                                onChange={(e) => { setSearchUser(e.target.value) }} />
                            <img src={searchlogo} alt="search" className="svg-icon-1 position-relative" onClick={showUser} width="20px" style={{ right: '30px' }} />
                        </div>
                    </div>

                    <div>
                    <button className="btn btn-primary align-items-end" onClick={showmodal} >Download to Excel</button>
                    </div>

                </div>
                {/* end::Header */}

                <UserTable users={search(usersall)} callUser={callUser} activeRow={activeRow} />
            </div>

            {rolesfound && <RolesComponent userData={userData} roles={rolesfound} online={true}/>}

            {/* modal code */}

            <ModalComponent showModal={showModal} showmodal={showmodal} downloadToExcel={downloadToExcel} chooseFileName={chooseFileName} />

            

        </>
    )
}

export default UserComponent;