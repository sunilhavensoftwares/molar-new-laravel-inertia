import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
export default function Index({ auth }) {
    const { role, modules } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Role</h2>}
        >
            <Head title="Edit Role" />
            <>

                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Edit Role</h1>


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


                                        <li className="breadcrumb-item text-muted">Edit Role</li>

                                    </ul>

                                </div>

                            </div>

                        </div>



                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="card card-dashed shadow-sm pt-3 mb-5 mb-lg-10">
                                    <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form">

                                        <div className="card-header">

                                            <div className="card-title">
                                                <h2 className="fw-bold">Edit Role</h2>
                                            </div>

                                        </div>


                                        <div className="card-body ">
                                            <div className="mb-10 fv-row">

                                                <label className="required form-label">Role Name</label>


                                                <input type="text" name="product_name" className="form-control mb-2" placeholder="Role name" defaultValue={role.name}
                                                />

                                            </div>
                                            <div className="card bg-light card-dashed mb-10">

                                                <div className="card-header">

                                                    <div className="card-title">
                                                        <h2 className="fw-bold">Permissions</h2>


                                                    </div>
                                                    <div className="card-toolbar">
                                                        <a href="#" className="btn btn-icon select_all btn-sm btn-info me-2"><i
                                                            className="fas fa-check-square fs-4"></i></a>
                                                        <a href="#" className="btn btn-icon deselect_all btn-sm btn-danger"><i
                                                            className="fas fa-times-circle fs-4"></i></a>
                                                    </div>

                                                </div>
                                                <div className="card-body px-lg-5 py-lg-5">

                                                    <div className="row g-6 g-xl-9">
                                                        {modules && modules.map((module, index) => (
                                                            <div className="col-sm-6 col-xl-4" key={index}>
                                                                <div className="card card-bordered">

                                                                    <div className="card-header">

                                                                        <h5 className="card-title">{module.name}</h5>
                                                                        <div className="card-toolbar">
                                                                            <a href="#"
                                                                                className="btn btn-icon btn-sm btn-info me-2 select_module"><i
                                                                                    className="fas fa-check-square fs-4"></i></a>
                                                                            <a href="#"
                                                                                className="btn btn-icon btn-sm btn-danger deselect_module"><i
                                                                                    className="fas fa-times-circle fs-4"></i></a>
                                                                        </div>

                                                                    </div>

                                                                    <div className="card-body">



                                                                        {module.permissions && module.permissions.map((permission, idx) => (
                                                                            <div className="d-flex align-items-center mb-2" key={idx} >
                                                                                <div className="">
                                                                                    <a href="#"
                                                                                        className="text-dark text-hover-primary fs-6 fw-bold">{permission.name}</a>
                                                                                </div>


                                                                                <div className="ms-auto">
                                                                                    <div
                                                                                        className="form-check form-switch form-check-default form-check-custom form-check-success">
                                                                                        <input className="form-check-input h-20px w-40px"
                                                                                            type="checkbox" id="flexSwitchDefault1" />
                                                                                        <label className="form-check-label"
                                                                                            htmlFor="flexSwitchDefault1"></label>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        ))}




                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}


                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer d-flex justify-content-end py-6 px-9">
                                            <button type="reset" className="btn btn-light btn-active-light-primary me-2">Discard</button>
                                            <button type="submit" className="btn btn-primary" id="kt_account_profile_details_submit">Save
                                                Changes</button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>



                    </div>



                </div>

            </>
        </AuthenticatedLayout>
    )
}