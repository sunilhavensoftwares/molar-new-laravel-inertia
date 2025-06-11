import DataTable from '@/Components/DataTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
export default function Index({ auth }) {
    const { role, users, query } = usePage().props;
    const [searchQuery, setSearchQuery] = useState('');

    const searchTimeout = useRef(null);

    useEffect(() => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current);

        // Skip firing on empty input if it's the same as what's already in the query
        if (searchQuery === '' && !query?.name) return;

        searchTimeout.current = setTimeout(() => {
            router.get(route(route().current(), { 'id': role.id }), {
                page: 1,
                perPage: users.meta.per_page,
                sort: query?.sort,
                order: query?.order,
                name: searchQuery || undefined, // don't include empty string in URL
            }, {
                preserveScroll: true,
                preserveState: true,
            });
        }, 400);

        return () => clearTimeout(searchTimeout.current);
    }, [searchQuery]);

    const columns = [
        { label: 'ID', key: 'id', thProps: { className: 'min-w-125px' }, 'sortable': 1, 'sort_key': 'users.id' },
        { label: 'User', key: 'user', thProps: { className: 'min-w-125px' }, 'sortable': 1, 'sort_key': 'users.name' },
        { label: 'Joined Date', key: 'joinedDate', thProps: { className: 'min-w-125px' }, 'sortable': 1, 'sort_key': 'users.created_at' },
        { label: 'Actions', key: 'actions', thProps: { className: 'text-end min-w-100px' } },
    ];
    const data = users.data.map((user, index) => (
        {
            id: user.id,
            user: {
                sortValue: user.name.toLowerCase(),
                content: (
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                            <div className="symbol-label">
                                <img src={user.avatar_url || 'assets/media/avatars/blank.png'} alt={user.name} className="w-100" />
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <Link href={`/users/user-detail/${user.id}`} className="text-gray-800 text-hover-primary mb-1">{user.name}</Link>
                            <span>{user.email}</span>
                        </div>
                    </div>
                )
            },
            joinedDate: user.created_at,
            actions: (
                <div className="text-end">
                    <a className="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                        Actions
                        <span className="svg-icon svg-icon-5 m-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                    </a>
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                        data-kt-menu="true">
                        <div className="menu-item px-3">
                            <Link href="users/user-detail" className="menu-link px-3">View</Link>
                        </div>
                        <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                    </div>
                </div>
            )
        }));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Role Detail</h2>}
        >
            <Head title="Role Details" />
            <>

                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        View Role Details</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">User Management</li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Roles</li>

                                    </ul>

                                </div>

                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="d-flex flex-column flex-lg-row">

                                    <div className="flex-column flex-lg-row-auto w-100 w-lg-200px w-xl-300px mb-10">

                                        <div className="card card-flush">

                                            <div className="card-header">

                                                <div className="card-title">
                                                    <h2 className="mb-0">{role.name}</h2>
                                                </div>

                                            </div>


                                            <div className="card-body pt-0">

                                                <div className="d-flex flex-column text-gray-600">
                                                    <div className="d-flex align-items-center py-2">
                                                        <span className="bullet bg-primary me-3"></span>Some Admin Controls
                                                    </div>
                                                    <div className="d-flex align-items-center py-2">
                                                        <span className="bullet bg-primary me-3"></span>View Financial Summaries only
                                                    </div>
                                                    <div className="d-flex align-items-center py-2">
                                                        <span className="bullet bg-primary me-3"></span>View and Edit API Controls
                                                    </div>
                                                    <div className="d-flex align-items-center py-2">
                                                        <span className="bullet bg-primary me-3"></span>View Payouts only
                                                    </div>
                                                    <div className="d-flex align-items-center py-2">
                                                        <span className="bullet bg-primary me-3"></span>View and Edit Disputes
                                                    </div>
                                                    <div className="d-flex align-items-center py-2">
                                                        <span className='bullet bg-primary me-3'></span>
                                                        <em>and 3 more...</em>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="card-footer pt-0">
                                                <Link type="button" className="btn btn-light btn-active-primary"
                                                    href={`/roles/edit-role/${role.id}`}>Edit Role</Link>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="flex-lg-row-fluid ms-lg-10">

                                        <div className="card card-flush mb-6 mb-xl-9">

                                            <div className="card-header pt-5">

                                                <div className="card-title">
                                                    <h2 className="d-flex align-items-center">Users Assigned
                                                        <span className="text-gray-600 fs-6 ms-1">(14)</span>
                                                    </h2>
                                                </div>


                                                <div className="card-toolbar">

                                                    <div className="d-flex align-items-center position-relative my-1"
                                                        data-kt-view-roles-table-toolbar="base">

                                                        <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546"
                                                                    height="2" rx="1" transform="rotate(45 17.0365 15.1223)"
                                                                    fill="currentColor" />
                                                                <path
                                                                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                                    fill="currentColor" />
                                                            </svg>
                                                        </span>

                                                        <input type="text" data-kt-roles-table-filter="search"
                                                            className="form-control form-control-solid w-250px ps-15"
                                                            placeholder="Search Users" onChange={(e) => setSearchQuery(e.target.value)} />
                                                    </div>


                                                    <div className="d-flex justify-content-end align-items-center d-none"
                                                        data-kt-view-roles-table-toolbar="selected">
                                                        <div className="fw-bold me-5">
                                                            <span className="me-2"
                                                                data-kt-view-roles-table-select="selected_count"></span>Selected
                                                        </div>
                                                        <button type="button" className="btn btn-danger"
                                                            data-kt-view-roles-table-select="delete_selected">Delete
                                                            Selected</button>
                                                    </div>

                                                </div>

                                            </div>


                                            <div className="card-body pt-0">
                                                <DataTable
                                                    columns={columns}
                                                    data={data}
                                                    tableProps={{ className: 'table align-middle table-row-dashed fs-6 gy-5' }}
                                                    currentPage={users.meta.current_page}
                                                    perPage={users.meta.per_page}
                                                    total={users.meta.total}
                                                    sortKey={query?.sort}
                                                    sortOrder={query?.order}
                                                />

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </>
        </AuthenticatedLayout>
    )
}