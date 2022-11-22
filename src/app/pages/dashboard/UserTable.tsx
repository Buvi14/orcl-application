
import './Usercomponent.scss';



const UserTable = ({ users,callUser}:any) => {

    return (
        <>
            <div className='table-wrapper-scroll-y my-custom-scrollbar card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                        {/* begin::Table head */}
                        <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-150px'>Display Name</th>
                                <th className='min-w-140px'>User</th>
                            </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                            {
                                users && users.map((user_data: any) => {
                                    return (
                                        <tr key={user_data.id} onClick={() => { callUser(user_data.id) }}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="symbol symbol-50px me-5">
                                                    </div>
                                                    <div className="d-flex text-dark fw-bolder justify-content-start flex-column">
                                                        {user_data.displayName}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-dark fw-bolder d-block mb-1 fs-6">
                                                    User Name : <strong className="text-primary">{user_data.name.familyName}</strong>
                                                </span>
                                                <span className="text-muted fw-bold text-muted d-block fs-6">
                                                    <span className="text-dark fw-bolder">Email: </span>
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
            {/* begin::Body */}
            {/* show the user clicked */}
            {/* begin::Body */}
        </>
    )
   
}

export default UserTable;