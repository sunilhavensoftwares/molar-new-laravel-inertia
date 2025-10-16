import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import FlatpickrInput from '@/Components/FlatpickrInput';
import DataTable from '@/Components/DataTable';
import { useEffect, useRef, useState } from 'react';
import { showSuccessToast, showErrorToast } from '@/Misc/loadToastr';
import images from '@/Misc/image_map';
import AddDoctor from "@/Modals/AddDoctor"
import api from "@/Lib/axios";
import { Modal } from 'bootstrap';
import AddEditPermissions from "@/Modals/AddEditPermissions"
import Swal from 'sweetalert2';
export default function Index({ auth }) {
    const { permissions, query, modules } = usePage().props;
    const filtersFormRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});
    const [editPermission, setEditPermission] = useState({});

    // Initialize checked state when permissions load/change
    //console.log(permissions);

    const searchTimeout = useRef(null);

    useEffect(() => {
        if (searchTimeout.current) clearTimeout(searchTimeout.current);

        // Skip firing on empty input if it's the same as what's already in the query
        if (searchQuery === '' && !query?.name) return;

        searchTimeout.current = setTimeout(() => {
            router.get(route(route().current()), {
                ...appliedFilters,
                page: 1,
                perPage: permissions.meta.per_page,
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


    const handleFilterChange = (key) => (event) => {

        setFilters((prev) => ({
            ...prev,
            [key]: event.target.value,
        }));

    };

    const handleFilterReset = () => {
        setFilters({});
        setAppliedFilters({});
        filtersFormRef.current.reset();
        $(filtersFormRef.current).find('input').val(null).trigger('change');

        router.get(route(route().current()), {
            page: 1,
            perPage: permissions.meta.per_page,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const applyFilters = (e) => {
        e.preventDefault();
        setAppliedFilters(filters);

        router.get(route(route().current()), {
            ...filters,
            sort: query?.sort,
            order: query?.order,
            page: 1,
            perPage: permissions.meta.per_page,
        }, {
            preserveScroll: true,
            preserveState: true,
        });
    };
    const showPermission = (permission_id) => {
        api.get(route('permissions.edit', permission_id)).then((response) => {
            if (response.status === 200) {
                setEditPermission(response.data.permission);
                //console.log(response.data.permission);
                const modalEl = document.getElementById('kt_modal_add_permission');
                const modal = new Modal(modalEl);
                modal.show();

            } else {
                showErrorToast(response.data.message);
            }

        })
    };
    const deletePermission = (permission_id) => {
        Swal.fire({
            text: "Are you sure you would like to delete this permission?",
            icon: "warning",
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, return",
            customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-active-light"
            },
        }).then(function (result) {
            if (result.value) {
                api.delete(route('permissions.destroy', permission_id)).then((response) => {
                    if (response.status === 200) {
                        showSuccessToast(response.data.message);
                        // 🔥 Re-fetch the current permissions table
                        router.reload({ only: ['permissions'] });
                    } else {
                        showErrorToast(response.data.message);
                    }
                })
            }
        })
    };
    const columns = [
        { label: 'ID', key: 'id', thProps: { className: 'min-w-125px' }, 'sort_key': 'permissions.id', 'sortable': 1 },
        { label: 'Permission Name', key: 'permission_name', thProps: { className: 'min-w-125px' }, 'sort_key': 'permissions.name', 'sortable': 1 },
        { label: 'Permission Label', key: 'permisison_label', thProps: { className: 'min-w-125px' }, 'sort_key': 'permissions.label', 'sortable': 1 },
        { label: 'Module Name', key: 'module_name', thProps: { className: 'min-w-125px' }, 'sort_key': 'modules.name', 'sortable': 1 },
        { label: 'Actions', key: 'actions', thProps: { className: 'text-end min-w-100px' } },
    ];
    const data = permissions.data.map((permission, index) => (
        {
            id: permission.id,
            permission_name: permission.name,
            permisison_label: permission.label,
            module_name: permission.module.name,
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
                            <a href="#" onClick={(e) => { e.preventDefault(); showPermission(permission.id); }} className="menu-link px-3"
                            //data-bs-target="#kt_modal_add_permission"
                            //</div>data-bs-toggle="modal"
                            >Edit</a>
                        </div>

                        <div className="menu-item px-3">
                            <a href="#" onClick={() => deletePermission(permission.id)} className="menu-link px-3">Delete</a>
                        </div>
                    </div>
                </div>
            )
        }));

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Permissions</h2>}
        >
            <Head title="Permissions" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Permissions List</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>


                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>


                                        <li className="breadcrumb-item text-muted">Permissions</li>

                                    </ul>

                                </div>


                                <div className="d-flex align-items-center gap-2 gap-lg-3">



                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#kt_modal_add_permission">

                                        <span className="svg-icon svg-icon-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1"
                                                    transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                            </svg>
                                        </span>
                                        Add Permission
                                    </button>

                                </div>

                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="card">

                                    <div className="card-header border-0 pt-6">

                                        <div className="card-title">

                                            <div className="d-flex align-items-center position-relative my-1">

                                                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                                            transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                        <path
                                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </span>

                                                <input type="text" data-kt-user-table-filter="search"
                                                    className="form-control form-control-solid w-250px ps-14"
                                                    placeholder="Search Permissions" onChange={(e) => setSearchQuery(e.target.value)} />
                                            </div>

                                        </div>


                                        <div className="card-toolbar">

                                            <div className="w-150px me-3">
                                                <button type="button" className="btn btn-light-primary me-3 w-150px"
                                                    data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">

                                                    <span className="svg-icon svg-icon-2">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    Filter</button>

                                                <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">

                                                    <div className="px-7 py-5">
                                                        <div className="fs-5 text-dark fw-bold">Select Filter</div>
                                                    </div>


                                                    <div className="separator border-gray-200"></div>


                                                    <div className="px-7 py-5" data-kt-user-table-filter="form">
                                                        <form onSubmit={applyFilters} ref={filtersFormRef} >
                                                            <div className="mb-10">
                                                                <label className="form-label fs-6 fw-semibold">Module Name:</label>
                                                                <input type="text" className="form-control form-control-solid text-center"
                                                                    name="module" value={filters.module || ''} onChange={(value) => handleFilterChange('module')(value)} />
                                                            </div>


                                                            <div className="d-flex justify-content-end">
                                                                <button type="reset"
                                                                    className="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="reset" onClick={handleFilterReset}>Reset</button>
                                                                <button type="submit" className="btn btn-primary fw-semibold px-6"
                                                                    data-kt-menu-dismiss="true"
                                                                    data-kt-user-table-filter="filter">Apply</button>
                                                            </div>
                                                        </form>

                                                    </div>

                                                </div>

                                            </div>


                                            <div className="d-flex justify-content-end" data-kt-user-table-toolbar="base">


                                                <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal"
                                                    data-bs-target="#kt_modal_export_permissions">

                                                    <span className="svg-icon svg-icon-2">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1"
                                                                transform="rotate(90 12.75 4.25)" fill="currentColor" />
                                                            <path
                                                                d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                                                fill="currentColor" />
                                                            <path opacity="0.3"
                                                                d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    Export
                                                </button>

                                            </div>


                                            <div className="d-flex justify-content-end align-items-center d-none"
                                                data-kt-user-table-toolbar="selected">
                                                <div className="fw-bold me-5">
                                                    <span className="me-2" data-kt-user-table-select="selected_count"></span>Selected
                                                </div>
                                                <button type="button" className="btn btn-danger"
                                                    data-kt-user-table-select="delete_selected">Delete Selected</button>
                                            </div>


                                            <div className="modal fade" id="kt_modal_export_permissions" tabIndex="-1" aria-hidden="true">

                                                <div className="modal-dialog modal-dialog-centered mw-650px">

                                                    <div className="modal-content">

                                                        <div className="modal-header">

                                                            <h2 className="fw-bold">Export Permissions</h2>


                                                            <div className="btn btn-icon btn-sm btn-active-icon-primary"
                                                                data-bs-dismiss="modal">

                                                                <span className="svg-icon svg-icon-1">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                                                                            rx="1" transform="rotate(-45 6 17.3137)"
                                                                            fill="currentColor" />
                                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                            transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </div>

                                                        </div>


                                                        <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                                            <form id="kt_modal_export_permissions_form" className="form" action="#">


                                                                <div className="fv-row mb-10">

                                                                    <label className="required fs-6 fw-semibold form-label mb-2">Select
                                                                        Export Format:</label>


                                                                    <select name="format" data-control="select2"
                                                                        data-placeholder="Select a format" data-hide-search="true"
                                                                        className="form-select form-select-solid fw-bold">
                                                                        <option></option>
                                                                        <option value="excel">Excel</option>
                                                                        <option value="pdf">PDF</option>
                                                                        <option value="cvs">CVS</option>
                                                                        <option value="zip">ZIP</option>
                                                                    </select>

                                                                </div>


                                                                <div className="text-center">
                                                                    <button type="reset" className="btn btn-light me-3"
                                                                        data-bs-dismiss="modal">Discard</button>
                                                                    <button type="submit" className="btn btn-primary"
                                                                        data-kt-permissions-modal-action="submit">
                                                                        <span className="indicator-label">Submit</span>
                                                                        <span className="indicator-progress">Please wait...
                                                                            <span
                                                                                className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                    </button>
                                                                </div>

                                                            </form>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>


                                            <AddDoctor />

                                        </div>

                                    </div>


                                    <div className="card-body py-4">

                                        <DataTable
                                            columns={columns}
                                            data={data}
                                            tableProps={{ className: 'table align-middle table-row-dashed fs-6 gy-5' }}
                                            currentPage={permissions.meta.current_page}
                                            perPage={permissions.meta.per_page}
                                            total={permissions.meta.total}
                                            sortKey={query?.sort}
                                            sortOrder={query?.order}
                                            searchQuery={filters.name}
                                            appliedFilters={appliedFilters}
                                        />


                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                    <AddEditPermissions editPermission={editPermission} modules={modules} onClose={() => setEditPermission({})} />

                </div>
            </>
        </AuthenticatedLayout >
    );
}
