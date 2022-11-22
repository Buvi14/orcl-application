import React,{useState} from "react";
import searchlogo from './images/gen021.svg'

const RolesComponent = ({userData, roles}:any) =>{
    const[searchRole, setSearchRoles]=useState<any>('');


    const search = (data:any) =>{
        
        return data && data.filter((item:any) => item.displayName?.includes(searchRole));
    }

    return(
        <>
        {
                userData &&
                <div className={`card card-xl-stretch mb-xl-8`}>
                    <div className='card-header border-0 pt-5 d-flex align-items-center justify-content-start'>
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
                <div className='table-wrapper-scroll-y my-custom-scrollbar card-body py-3'>
                    {/* begin::Table container */}
                    <div className='table-responsive'>
                        {/* begin::Table */}
                        <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                            {/* begin::Table head */}
                            <thead>
                                <tr className='fw-bold text-muted'>
                                    <th className='min-w-150px'>ROLE CODE</th>
                                    <th className='min-w-140px'>ROLE NAME</th>
                                    <th className='min-w-140px'>INHERITED BY ROLE NAME</th>
                                </tr>
                            </thead>
                            {/* end::Table head */}
                            {/* begin::Table body */}
                            <tbody>
                                {
                                    roles && search(roles).map((roles_data: any) => {
                                        return (
                                            <tr key={roles_data.id}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="symbol symbol-50px me-5">
                                                        </div>
                                                        <div className="d-flex justify-content-start flex-column">
                                                            {roles_data.id}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-dark fw-bolder d-block mb-1 fs-6">
                                                        {roles_data.displayName}
                                                    </span>
                                                    <span className="text-muted fw-bold text-muted d-block fs-6">
                                                        {roles_data.value}
                                                    </span>
                                                </td>
                                                <td>
                                                    {roles_data.available ?
                                                    <input type="checkbox" className="form-check-input" defaultChecked={roles_data.available }/> : <input className="form-check-input"  type="checkbox" /> }
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