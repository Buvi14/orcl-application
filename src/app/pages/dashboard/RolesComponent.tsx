import React, { useState } from "react";
import searchlogo from './images/gen021.svg'

const RolesComponent = ({ userData, roles, online }: any) => {
    const [searchRole, setSearchRoles] = useState<any>('');
    console.log(roles);


    const search = (data: any) => {

        return data && data.filter((item: any) => item.displayName?.includes(searchRole));
    }

    return (
        <>
            {
                userData &&
                <div className={`card card-xl-stretch mb-xl-8`}>
                    <div className='card-header border-0 pt-5 d-flex align-items-center justify-content-between'>
                        <div className="d-flex">
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bold fs-3 mb-1'>Roles</span>
                                <span className='text-muted mt-1 fw-semibold fs-7'></span>
                            </h3>

                            <div className="d-flex align-tems-center position-relative my-1">
                                <input type="text"
                                    data-kt-user-table-filter="search"
                                    className="form-control form-control-solid w-250px ps-6"
                                    placeholder="search user"
                                    value={searchRole}
                                    onChange={(e) => { setSearchRoles(e.target.value) }}
                                />
                                <img src={searchlogo} alt="search" className="svg-icon-1 position-relative" width="20px" style={{ right: '30px' }} />
                            </div>
                        </div>
                        {online && <div className="d-flex  w-200px justify-content-between">
                            <button className="btn btn-primary">Save</button>
                            <button className="btn btn-secondary ms-4">Cancel</button>
                        </div>}

                    </div>
                    <div className='table-wrapper-scroll-y my-custom-scrollbar card-body py-3'>
                        {/* begin::Table container */}
                        <div className='table-responsive'>
                            {/* begin::Table */}
                            <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                                {/* begin::Table head */}
                                <thead>
                                    <tr className='fw-bold text-muted'>
                                        <th className='w-140px fs-4'>Role Id</th>
                                        {/* <th className='w-140px fs-4'>Role Code</th> */}
                                        <th className='w-140px fs-4'>Role Name</th>
                                        <th className='w-140px fs-4'>Add / Remove Roles</th>
                                    </tr>
                                </thead>
                                {/* end::Table head */}
                                {/* begin::Table body */}
                                <tbody>
                                    {
                                        roles && roles.items.map((roles_data: any) => {
                                            return (
                                                <tr key={roles_data.RoleId}>
                                                    <td style={{ width: '120px' }}>
                                                        <span className="text-dark fw-bolder fs-6">
                                                            {roles_data.RoleId}
                                                        </span>

                                                    </td>
                                                    {/* <td style={{ width: '180px' }}>
                                                        <span className="text-dark fw-bolder fs-6">
                                                            {roles_data.RoleCode}
                                                        </span>

                                                    </td> */}
                                                    <td style={{ width: '200px' }}>
                                                        <span className="text-dark fw-bolder fs-6">
                                                            {roles_data.RoleName}
                                                        </span>

                                                    </td>
                                                    <td>
                                                        {roles_data.Assigned === 1 ?
                                                            <input type="checkbox" className="form-check-input fw-bolder" defaultChecked={true} /> : <input className="form-check-input" type="checkbox" />}
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

            }
        </>
    )
}


export default RolesComponent;