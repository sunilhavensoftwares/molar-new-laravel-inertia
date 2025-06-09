import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
export default function Index({ auth }) {
    const { roles } = usePage().props;
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Roles</h2>}
        >
            <Head title="Roles" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Roles List</h1>


                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">

                                        <li className="breadcrumb-item text-muted">
                                            <a href="dashboard/index" className="text-muted text-hover-primary">Home</a>
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


                                <div className="d-flex align-items-center gap-2 gap-lg-3">



                                    <a href="users/add-role" type="button" className="btn btn-primary"><i className="fa-solid fa-plus"></i> Add Role
                                    </a>

                                </div>

                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">
                                    {roles.data.map((role,index) => (
                                        <div className="col-md-4" key={index}>

                                            <div className="card card-flush h-md-100">

                                                <div className="card-header">

                                                    <div className="card-title">
                                                        <h2>{role.name}</h2>
                                                    </div>

                                                </div>


                                                <div className="card-body pt-1">

                                                    <div className="fw-bold text-gray-600 mb-5">Total users with this role: {role.users_count}</div>

                                                </div>


                                                <div className="card-footer flex-wrap pt-0">
                                                    <a href="roles/role-detail" className="btn btn-light my-1 me-2"> <i className="fa-regular text-info fa-eye fs-2x"></i></a>
                                                    <a href="users/add-role" type="button" className="btn btn-light btn-active-light-primary me-2"><i className="fa-regular  text-warning fa-pen-to-square fs-2x"></i></a>
                                                    <button type="button" className="btn btn-light btn-active-light-primary me-2"> <i className="fa-regular text-danger fa-trash-can fs-2x"></i></button>
                                                </div>

                                            </div>

                                        </div>
                                    ))}
                                    

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </>
        </AuthenticatedLayout>
    )
}