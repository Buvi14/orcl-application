
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Usercomponent.scss';



const UserTable = ({ users, callUser, activeRow }: any) => {
    console.log(users);
    const [items, setCurrentItems] = useState(users);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [count, setCount] = useState(10);
    useEffect(() => {
        const numberCount = itemOffset + count;
        users && setCurrentItems(users.length > 10 ? users.slice(itemOffset, numberCount) : users);
        users && setPageCount(users.length > 10 ? Math.ceil(users.length / count) : count);
    }, [count, users, itemOffset]);

    const handlePageClick = (e: any) => {
        let newCount = ((e.selected + 1) * count) % users.length;
        setItemOffset(newCount);
    }

    console.log(items);
    return (
        <>
            <div className='table-wrapper-scroll-y my-custom-scrollbar card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                        {/* begin::Table head */}
                        <thead>
                            <tr className='fw-bold text-muted '>
                                <th className='min-w-150px fs-4'>Display Name</th>
                                <th className='min-w-140px fs-4'>User</th>
                            </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                            {
                                items && items.map((user_data: any) => {
                                    return (
                                        <tr className={activeRow === user_data.UserId ? 'bg-secondary' : 'bg-white'} key={user_data.UserId} onClick={() => { callUser(user_data.UserId) }}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="symbol symbol-50px me-5">
                                                    </div>
                                                    <div className="d-flex text-dark fw-bolder justify-content-start flex-column">
                                                        {user_data.Username}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-dark fw-bolder d-block mb-1 fs-6">
                                                    User Name : <strong className="text-primary">{user_data.PersonNumber}</strong>
                                                </span>
                                                <span className="text-muted fw-bold text-muted d-block fs-6">
                                                    <span className="text-dark fw-bolder">Email: <strong className="text-primary">{user_data.PersonId}</strong></span>
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
            <div className="card-footer">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    // renderOnZeroPageCount={null}
                    containerClassName={"pagination justify-content-end"}
                    pageClassName={"page-item"}
                    pageLinkClassName="page-link"
                    activeClassName={"active"}
                    activeLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLinkClassName='page-link'
                    breakClassName='page-item'
                />
            </div>
        </>
    )

}

export default UserTable;