import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import images from '@/Misc/image_map';
export default function Detail ({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />
            <>
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">

                    <div className="d-flex flex-column flex-column-fluid">

                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">

                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">

                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">

                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        View User Details</h1>


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


                                        <li className="breadcrumb-item text-muted">Users</li>

                                    </ul>

                                </div>

                            </div>

                        </div>


                        <div id="kt_app_content" className="app-content flex-column-fluid">

                            <div id="kt_app_content_container" className="app-container container-fluid">

                                <div className="d-flex flex-column flex-lg-row">

                                    <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">

                                        <div className="card mb-5 mb-xl-8">

                                            <div className="card-body">


                                                <div className="d-flex flex-center flex-column py-5">

                                                    <div className="symbol symbol-100px symbol-circle mb-7">
                                                        <img src={images.avatar_300_6} alt="image" />
                                                    </div>


                                                    <a href="#"
                                                        className="fs-3 text-gray-800 text-hover-primary fw-bold mb-3">Emma
                                                        Smith</a>


                                                    <div className="mb-9">

                                                        <div className="badge badge-lg badge-light-primary d-inline">Administrator</div>

                                                    </div>



                                                </div>



                                                <div className="d-flex flex-stack fs-4 py-3">
                                                    <div className="fw-bold rotate collapsible" data-bs-toggle="collapse"
                                                        href="#kt_user_view_details" role="button" aria-expanded="false"
                                                        aria-controls="kt_user_view_details">Details
                                                        <span className="ms-2 rotate-180">

                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                        fill="currentColor" />
                                                                </svg>
                                                            </span>

                                                        </span>
                                                    </div>
                                                    <span data-bs-toggle="tooltip" data-bs-trigger="hover"
                                                        title="Edit customer details">
                                                        <a href="#" className="btn btn-sm btn-light-primary"
                                                            data-bs-toggle="modal" data-bs-target="#kt_modal_update_details">Edit</a>
                                                    </span>
                                                </div>

                                                <div className="separator"></div>

                                                <div id="kt_user_view_details" className="collapse show">
                                                    <div className="pb-5 fs-6">

                                                        <div className="fw-bold mt-5">Account ID</div>
                                                        <div className="text-gray-600">ID-45453423</div>


                                                        <div className="fw-bold mt-5">Email</div>
                                                        <div className="text-gray-600">
                                                            <a href="#"
                                                                className="text-gray-600 text-hover-primary">info@keenthemes.com</a>
                                                        </div>


                                                        <div className="fw-bold mt-5">Address</div>
                                                        <div className="text-gray-600">101 Collin Street,
                                                            <br />Melbourne 3000 VIC
                                                            <br />Australia
                                                        </div>


                                                        <div className="fw-bold mt-5">Phone</div>
                                                        <div className="text-gray-600">8559072770</div>


                                                        <div className="fw-bold mt-5">Language</div>
                                                        <div className="text-gray-600">English</div>


                                                        <div className="fw-bold mt-5">Last Login</div>
                                                        <div className="text-gray-600">19 Aug 2022, 5:20 pm</div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="flex-lg-row-fluid ms-lg-15">

                                        <ul
                                            className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8">

                                            <li className="nav-item">
                                                <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab"
                                                    href="#kt_user_view_overview_tab">Overview</a>
                                            </li>


                                            <li className="nav-item">
                                                <a className="nav-link text-active-primary pb-4" data-kt-countup-tabs="true"
                                                    data-bs-toggle="tab" href="#kt_user_view_overview_security">Security</a>
                                            </li>

                                        </ul>


                                        <div className="tab-content" id="myTabContent">

                                            <div className="tab-pane fade show active" id="kt_user_view_overview_tab" role="tabpanel">

                                                <div className="card card-flush mb-6 mb-xl-9">

                                                    <div className="card-header mt-6">

                                                        <div className="card-title flex-column">
                                                            <h2 className="mb-1">User's Schedule</h2>
                                                            <div className="fs-6 fw-semibold text-muted">2 upcoming meetings</div>
                                                        </div>

                                                    </div>


                                                    <div className="card-body p-9 pt-4">

                                                        <ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">

                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_0">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Su</span>
                                                                    <span className="fs-6 fw-bolder">21</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary active"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_1">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Mo</span>
                                                                    <span className="fs-6 fw-bolder">22</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_2">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Tu</span>
                                                                    <span className="fs-6 fw-bolder">23</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_3">
                                                                    <span className="opacity-50 fs-7 fw-semibold">We</span>
                                                                    <span className="fs-6 fw-bolder">24</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_4">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Th</span>
                                                                    <span className="fs-6 fw-bolder">25</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_5">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Fr</span>
                                                                    <span className="fs-6 fw-bolder">26</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_6">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Sa</span>
                                                                    <span className="fs-6 fw-bolder">27</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_7">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Su</span>
                                                                    <span className="fs-6 fw-bolder">28</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_8">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Mo</span>
                                                                    <span className="fs-6 fw-bolder">29</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_9">
                                                                    <span className="opacity-50 fs-7 fw-semibold">Tu</span>
                                                                    <span className="fs-6 fw-bolder">30</span>
                                                                </a>
                                                            </li>


                                                            <li className="nav-item me-1">
                                                                <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-40px me-2 py-4 btn-active-primary"
                                                                    data-bs-toggle="tab" href="#kt_schedule_day_10">
                                                                    <span className="opacity-50 fs-7 fw-semibold">We</span>
                                                                    <span className="fs-6 fw-bolder">31</span>
                                                                </a>
                                                            </li>

                                                        </ul>


                                                        <div className="tab-content">

                                                            <div id="kt_schedule_day_0" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">14:30 - 15:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Weekly
                                                                            Team Stand-Up</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Terry Robins</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">9:00 - 10:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Dashboard
                                                                            UI/UX Design Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Walter White</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Mark Randall</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Karina Clarke</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_1" className="tab-pane fade show active">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Kendell Trevor</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">16:30 - 17:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Marketing
                                                                            Campaign Discussion</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> David Stevenson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">9
                                                                            Degree Project Estimation Meeting</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Mark Randall</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_2" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Dashboard
                                                                            UI/UX Design Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Peter Marcus</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">14:30 - 15:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Marketing
                                                                            Campaign Discussion</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Karina Clarke</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">10:00 - 11:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Team
                                                                            Backlog Grooming Session</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> David Stevenson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">10:00 - 11:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">9
                                                                            Degree Project Estimation Meeting</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Yannis Gloverson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">9
                                                                            Degree Project Estimation Meeting</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Sean Bean</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_3" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Team
                                                                            Backlog Grooming Session</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Yannis Gloverson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Team
                                                                            Backlog Grooming Session</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Bob Harris</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Project
                                                                            Review & Testing</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Terry Robins</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">16:30 - 17:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Lunch
                                                                            & Learn Catch Up</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Bob Harris</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Team
                                                                            Backlog Grooming Session</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Caleb Donaldson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_4" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">16:30 - 17:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Dashboard
                                                                            UI/UX Design Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Michael Walters</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">9:00 - 10:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Marketing
                                                                            Campaign Discussion</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Caleb Donaldson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">11:00 - 11:45
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Marketing
                                                                            Campaign Discussion</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Karina Clarke</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_5" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">16:30 - 17:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Lunch
                                                                            & Learn Catch Up</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Naomi Hayabusa</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">9:00 - 10:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Creative
                                                                            Content Initiative</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Walter White</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">14:30 - 15:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Yannis Gloverson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">9
                                                                            Degree Project Estimation Meeting</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Terry Robins</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_6" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Sales
                                                                            Pitch Proposal</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Yannis Gloverson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">14:30 - 15:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Lunch
                                                                            & Learn Catch Up</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> David Stevenson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">10:00 - 11:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Naomi Hayabusa</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">11:00 - 11:45
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Sales
                                                                            Pitch Proposal</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Naomi Hayabusa</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_7" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">11:00 - 11:45
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Committee
                                                                            Review Approvals</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> David Stevenson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">11:00 - 11:45
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Lunch
                                                                            & Learn Catch Up</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Yannis Gloverson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">14:30 - 15:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Team
                                                                            Backlog Grooming Session</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Michael Walters</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">10:00 - 11:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Marketing
                                                                            Campaign Discussion</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Bob Harris</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Kendell Trevor</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_8" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Bob Harris</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">12:00 - 13:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Sales
                                                                            Pitch Proposal</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Peter Marcus</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">14:30 - 15:30
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Project
                                                                            Review & Testing</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Naomi Hayabusa</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_9" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">9:00 - 10:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Creative
                                                                            Content Initiative</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> David Stevenson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">9:00 - 10:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Committee
                                                                            Review Approvals</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Caleb Donaldson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Creative
                                                                            Content Initiative</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Yannis Gloverson</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Kendell Trevor</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>


                                                            <div id="kt_schedule_day_10" className="tab-pane fade show">

                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">13:00 - 14:00
                                                                            <span className="fs-7 text-muted text-uppercase"> pm</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Development
                                                                            Team Capacity Review</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Terry Robins</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">9:00 - 10:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Creative
                                                                            Content Initiative</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Sean Bean</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>


                                                                <div className="d-flex flex-stack position-relative mt-6">

                                                                    <div
                                                                        className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0">
                                                                    </div>


                                                                    <div className="fw-semibold ms-5">

                                                                        <div className="fs-7 mb-1">9:00 - 10:00
                                                                            <span className="fs-7 text-muted text-uppercase">am</span>
                                                                        </div>


                                                                        <a href="#"
                                                                            className="fs-5 fw-bold text-dark text-hover-primary mb-2">Creative
                                                                            Content Initiative</a>


                                                                        <div className="fs-7 text-muted">Lead by
                                                                            <a href="#"> Sean Bean</a>
                                                                        </div>

                                                                    </div>


                                                                    <a href="#"
                                                                        className="btn btn-light bnt-active-light-primary btn-sm">View</a>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>


                                            <div className="tab-pane fade" id="kt_user_view_overview_security" role="tabpanel">

                                                <div className="card pt-4 mb-6 mb-xl-9">

                                                    <div className="card-header border-0">

                                                        <div className="card-title">
                                                            <h2>Profile</h2>
                                                        </div>

                                                    </div>


                                                    <div className="card-body pt-0 pb-5">

                                                        <div className="table-responsive">

                                                            <table className="table align-middle table-row-dashed gy-5" id="kt_table_users">

                                                                <tbody className="fs-6 fw-semibold text-gray-600">
                                                                    <tr>
                                                                        <td>Email</td>
                                                                        <td>smith@kpmg.com</td>
                                                                        <td className="text-end">
                                                                            <button type="button"
                                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#kt_modal_update_email">

                                                                                <span className="svg-icon svg-icon-3">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3"
                                                                                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                            fill="currentColor" />
                                                                                        <path
                                                                                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>

                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Password</td>
                                                                        <td>******</td>
                                                                        <td className="text-end">
                                                                            <button type="button"
                                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#kt_modal_update_password">

                                                                                <span className="svg-icon svg-icon-3">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3"
                                                                                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                            fill="currentColor" />
                                                                                        <path
                                                                                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>

                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Role</td>
                                                                        <td>Administrator</td>
                                                                        <td className="text-end">
                                                                            <button type="button"
                                                                                className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#kt_modal_update_role">

                                                                                <span className="svg-icon svg-icon-3">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3"
                                                                                            d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                            fill="currentColor" />
                                                                                        <path
                                                                                            d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                            fill="currentColor" />
                                                                                    </svg>
                                                                                </span>

                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>

                                                            </table>

                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="card pt-4 mb-6 mb-xl-9">

                                                    <div className="card-header border-0">

                                                        <div className="card-title flex-column">
                                                            <h2 className="mb-1">Two Step Authentication</h2>
                                                            <div className="fs-6 fw-semibold text-muted">Keep your account extra secure
                                                                with a second authentication step.</div>
                                                        </div>


                                                    </div>


                                                    <div className="card-body pb-5">

                                                        <div className="d-flex flex-stack">

                                                            <div className="d-flex flex-column">
                                                                <span>SMS</span>
                                                                <span className="text-muted fs-6">+61 412 345 678</span>
                                                            </div>


                                                            <div className="d-flex justify-content-end align-items-center">

                                                                <button type="button"
                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto me-5"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#kt_modal_add_one_time_password">

                                                                    <span className="svg-icon svg-icon-3">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path opacity="0.3"
                                                                                d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                                                                fill="currentColor" />
                                                                            <path
                                                                                d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                                                                fill="currentColor" />
                                                                        </svg>
                                                                    </span>

                                                                </button>


                                                                <button type="button"
                                                                    className="btn btn-icon btn-active-light-primary w-30px h-30px ms-auto"
                                                                    id="kt_users_delete_two_step">

                                                                    <span className="svg-icon svg-icon-3">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                                                fill="currentColor" />
                                                                            <path opacity="0.5"
                                                                                d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                                                fill="currentColor" />
                                                                            <path opacity="0.5"
                                                                                d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                                                fill="currentColor" />
                                                                        </svg>
                                                                    </span>

                                                                </button>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="card pt-4 mb-6 mb-xl-9">

                                                    <div className="card-header border-0">

                                                        <div className="card-title flex-column">
                                                            <h2>Notifications</h2>
                                                            <div className="fs-6 fw-semibold text-muted">Choose what messages you’d like
                                                                to receive for each of your accounts.</div>
                                                        </div>

                                                    </div>


                                                    <div className="card-body">

                                                        <form className="form" id="kt_users_email_notification_form" >

                                                            <div className="d-flex">

                                                                <div className="form-check form-check-custom form-check-solid">

                                                                    <input className="form-check-input me-3" name="email_notification_0"
                                                                        type="checkbox" defaultValue="0"
                                                                        id="kt_modal_update_email_notification_0" defaultChecked='checked' />


                                                                    <label className="form-check-label"
                                                                        htmlFor="kt_modal_update_email_notification_0">
                                                                        <div className="fw-bold">Whatsapp Notification</div>
                                                                        <div className="text-gray-600">Receive a notification.</div>
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className='separator separator-dashed my-5'></div>

                                                            <div className="d-flex">

                                                                <div className="form-check form-check-custom form-check-solid">

                                                                    <input className="form-check-input me-3" name="email_notification_1"
                                                                        type="checkbox" defaultValue="1"
                                                                        id="kt_modal_update_email_notification_1" />


                                                                    <label className="form-check-label"
                                                                        htmlFor="kt_modal_update_email_notification_1">
                                                                        <div className="fw-bold">SMS Notification</div>
                                                                        <div className="text-gray-600">Receive a notification .</div>
                                                                    </label>

                                                                </div>

                                                            </div>

                                                            <div className='separator separator-dashed my-5'></div>

                                                            <div className="d-flex">

                                                                <div className="form-check form-check-custom form-check-solid">

                                                                    <input className="form-check-input me-3" name="email_notification_2"
                                                                        type="checkbox" defaultValue="2"
                                                                        id="kt_modal_update_email_notification_2" />


                                                                    <label className="form-check-label"
                                                                        htmlFor="kt_modal_update_email_notification_2">
                                                                        <div className="fw-bold">Web notifications</div>
                                                                        <div className="text-gray-600"></div>
                                                                    </label>

                                                                </div>

                                                            </div>


                                                            <div className="d-flex justify-content-end align-items-center mt-12">

                                                                <button type="button" className="btn btn-light me-5"
                                                                    id="kt_users_email_notification_cancel">Cancel</button>


                                                                <button type="button" className="btn btn-primary"
                                                                    id="kt_users_email_notification_submit">
                                                                    <span className="indicator-label">Save</span>
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

                                    </div>

                                </div>



                                <div className="modal fade" id="kt_modal_update_details" tabIndex="-1" aria-hidden="true">

                                    <div className="modal-dialog modal-dialog-centered mw-650px">

                                        <div className="modal-content">

                                            <form className="form"  id="kt_modal_update_user_form">

                                                <div className="modal-header" id="kt_modal_update_user_header">

                                                    <h2 className="fw-bold">Update User Details</h2>


                                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                                        <span className="svg-icon svg-icon-1">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                    transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                                <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                    transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                            </svg>
                                                        </span>

                                                    </div>

                                                </div>


                                                <div className="modal-body py-10 px-lg-17">

                                                    <div className="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_user_scroll"
                                                        data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}"
                                                        data-kt-scroll-max-height="auto"
                                                        data-kt-scroll-dependencies="#kt_modal_update_user_header"
                                                        data-kt-scroll-wrappers="#kt_modal_update_user_scroll"
                                                        data-kt-scroll-offset="300px">

                                                        <div className="fw-bolder fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"
                                                            href="#kt_modal_update_user_user_info" role="button" aria-expanded="false"
                                                            aria-controls="kt_modal_update_user_user_info">User Information
                                                            <span className="ms-2 rotate-180">

                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div id="kt_modal_update_user_user_info" className="collapse show">

                                                            <div className="mb-7">

                                                                <label className="fs-6 fw-semibold mb-2">
                                                                    <span>Update Avatar</span>
                                                                    <i className="fas fa-exclamation-circle ms-1 fs-7"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Allowed file types: png, jpg, jpeg."></i>
                                                                </label>


                                                                <div className="mt-1">
                                                                    <div className="image-input image-input-outline image-input-placeholder"
                                                                        data-kt-image-input="true">

                                                                        <div className="image-input-wrapper w-125px h-125px"
                                                                            style={{backgroundImage: "url('../../../assets/media/avatars/300-6.jpg')"}} >
                                                                        </div>


                                                                        <label
                                                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                            data-kt-image-input-action="change" data-bs-toggle="tooltip"
                                                                            title="Change avatar">
                                                                            <i className="bi bi-pencil-fill fs-7"></i>

                                                                            <input type="file" name="avatar"
                                                                                accept=".png, .jpg, .jpeg" />
                                                                            <input type="hidden" name="avatar_remove" />

                                                                        </label>


                                                                        <span
                                                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                            data-kt-image-input-action="cancel" data-bs-toggle="tooltip"
                                                                            title="Cancel avatar">
                                                                            <i className="bi bi-x fs-2"></i>
                                                                        </span>


                                                                        <span
                                                                            className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                                            data-kt-image-input-action="remove" data-bs-toggle="tooltip"
                                                                            title="Remove avatar">
                                                                            <i className="bi bi-x fs-2"></i>
                                                                        </span>

                                                                    </div>

                                                                </div>

                                                            </div>


                                                            <div className="fv-row mb-7">

                                                                <label className="fs-6 fw-semibold mb-2">Name</label>


                                                                <input type="text" className="form-control form-control-solid"
                                                                    placeholder="" name="name" defaultValue="Emma Smith" />

                                                            </div>


                                                            <div className="fv-row mb-7">

                                                                <label className="fs-6 fw-semibold mb-2">
                                                                    <span>Email</span>
                                                                    <i className="fas fa-exclamation-circle ms-1 fs-7"
                                                                        data-bs-toggle="tooltip"
                                                                        title="Email address must be active"></i>
                                                                </label>


                                                                <input type="email" className="form-control form-control-solid"
                                                                    placeholder="" name="email" defaultValue="smith@kpmg.com" />

                                                            </div>


                                                            <div className="fv-row mb-7">

                                                                <label className="fs-6 fw-semibold mb-2">Description</label>


                                                                <input type="text" className="form-control form-control-solid"
                                                                    placeholder="" name="description" />

                                                            </div>

                                                        </div>


                                                        <div className="fw-bolder fs-3 rotate collapsible mb-7" data-bs-toggle="collapse"
                                                            href="#kt_modal_update_user_address" role="button" aria-expanded="false"
                                                            aria-controls="kt_modal_update_user_address">Address Details
                                                            <span className="ms-2 rotate-180">

                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                                                            fill="currentColor" />
                                                                    </svg>
                                                                </span>

                                                            </span>
                                                        </div>


                                                        <div id="kt_modal_update_user_address" className="collapse show">

                                                            <div className="d-flex flex-column mb-7 fv-row">

                                                                <label className="fs-6 fw-semibold mb-2">Address Line 1</label>


                                                                <input className="form-control form-control-solid" placeholder=""
                                                                    name="address1" defaultValue="101, Collins Street" />

                                                            </div>


                                                            <div className="d-flex flex-column mb-7 fv-row">

                                                                <label className="fs-6 fw-semibold mb-2">Address Line 2</label>


                                                                <input className="form-control form-control-solid" placeholder=""
                                                                    name="address2" />

                                                            </div>


                                                            <div className="d-flex flex-column mb-7 fv-row">

                                                                <label className="fs-6 fw-semibold mb-2">Town</label>


                                                                <input className="form-control form-control-solid" placeholder=""
                                                                    name="city" defaultValue="Melbourne" />

                                                            </div>


                                                            <div className="row g-9 mb-7">

                                                                <div className="col-md-6 fv-row">

                                                                    <label className="fs-6 fw-semibold mb-2">State / Province</label>


                                                                    <input className="form-control form-control-solid" placeholder=""
                                                                        name="state" defaultValue="Victoria" />

                                                                </div>


                                                                <div className="col-md-6 fv-row">

                                                                    <label className="fs-6 fw-semibold mb-2">Post Code</label>


                                                                    <input className="form-control form-control-solid" placeholder=""
                                                                        name="postcode" defaultValue="3000" />

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>


                                                <div className="modal-footer flex-center">

                                                    <button type="reset" className="btn btn-light me-3"
                                                        data-bs-dismiss="modal">Discard</button>


                                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
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



                                <div className="modal fade" id="kt_modal_update_email" tabIndex="-1" aria-hidden="true">

                                    <div className="modal-dialog modal-dialog-centered mw-650px">

                                        <div className="modal-content">

                                            <div className="modal-header">

                                                <h2 className="fw-bold">Update Email Address</h2>


                                                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                                    <span className="svg-icon svg-icon-1">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                            <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                </div>

                                            </div>


                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                                <form id="kt_modal_update_email_form" className="form" >


                                                    <div
                                                        className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">


                                                        <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10"
                                                                    fill="currentColor" />
                                                                <rect x="11" y="14" width="7" height="2" rx="1"
                                                                    transform="rotate(-90 11 14)" fill="currentColor" />
                                                                <rect x="11" y="17" width="2" height="2" rx="1"
                                                                    transform="rotate(-90 11 17)" fill="currentColor" />
                                                            </svg>
                                                        </span>



                                                        <div className="d-flex flex-stack flex-grow-1">

                                                            <div className="fw-semibold">
                                                                <div className="fs-6 text-gray-700">Please note that a valid email
                                                                    address is required to complete the email verification.</div>
                                                            </div>

                                                        </div>

                                                    </div>



                                                    <div className="fv-row mb-7">

                                                        <label className="fs-6 fw-semibold form-label mb-2">
                                                            <span className="required">Email Address</span>
                                                        </label>


                                                        <input className="form-control form-control-solid" placeholder=""
                                                            name="profile_email" defaultValue="smith@kpmg.com" />

                                                    </div>


                                                    <div className="text-center pt-15">
                                                        <button type="reset" className="btn btn-light me-3"
                                                            data-bs-dismiss="modal">Discard</button>
                                                        <button type="submit" className="btn btn-primary"
                                                            data-kt-users-modal-action="submit">
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


                                <div className="modal fade" id="kt_modal_update_password" tabIndex="-1" aria-hidden="true">

                                    <div className="modal-dialog modal-dialog-centered mw-650px">

                                        <div className="modal-content">

                                            <div className="modal-header">

                                                <h2 className="fw-bold">Update Password</h2>


                                                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                                    <span className="svg-icon svg-icon-1">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                            <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                </div>

                                            </div>


                                             <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                <form id="kt_modal_update_password_form" className="form" >

                                    <div className="mb-10 fv-row" data-kt-password-meter="true">

                                        <div className="mb-1">

                                            <label className="form-label fw-semibold fs-6 mb-2">New Password</label>


                                            <div className="position-relative mb-3">
                                                <input className="form-control form-control-lg form-control-solid"
                                                    type="password" placeholder="" name="new_password"
                                                    autoComplete="off" />
                                                <span
                                                    className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                                                    data-kt-password-meter-control="visibility">
                                                    <i className="bi bi-eye-slash fs-2"></i>
                                                    <i className="bi bi-eye fs-2 d-none"></i>
                                                </span>
                                            </div>


                                            <div className="d-flex align-items-center mb-3"
                                                data-kt-password-meter-control="highlight">
                                                <div
                                                    className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2">
                                                </div>
                                                <div
                                                    className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2">
                                                </div>
                                                <div
                                                    className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2">
                                                </div>
                                                <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px">
                                                </div>
                                            </div>

                                        </div>


                                        <div className="text-muted">Use 8 or more characters with a mix of letters,
                                            numbers & symbols.</div>

                                    </div>


                                    <div className="fv-row mb-10">
                                        <label className="form-label fw-semibold fs-6 mb-2">Confirm New Password</label>
                                        <input className="form-control form-control-lg form-control-solid" type="password"
                                            placeholder="" name="confirm_password" autoComplete="off" />
                                    </div>


                                    <div className="text-center pt-15">
                                        <button type="reset" className="btn btn-light me-3"
                                            data-bs-dismiss="modal">Discard</button>
                                        <button type="submit" className="btn btn-primary"
                                            data-kt-users-modal-action="submit">
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


                                <div className="modal fade" id="kt_modal_update_role" tabIndex="-1" aria-hidden="true">

                                    <div className="modal-dialog modal-dialog-centered mw-650px">

                                        <div className="modal-content">

                                            <div className="modal-header">

                                                <h2 className="fw-bold">Update User Role</h2>


                                                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                                    <span className="svg-icon svg-icon-1">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                            <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                </div>

                                            </div>


                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                                <form id="kt_modal_update_role_form" className="form" >


                                                    <div
                                                        className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">


                                                        <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10"
                                                                    fill="currentColor" />
                                                                <rect x="11" y="14" width="7" height="2" rx="1"
                                                                    transform="rotate(-90 11 14)" fill="currentColor" />
                                                                <rect x="11" y="17" width="2" height="2" rx="1"
                                                                    transform="rotate(-90 11 17)" fill="currentColor" />
                                                            </svg>
                                                        </span>



                                                        <div className="d-flex flex-stack flex-grow-1">

                                                            <div className="fw-semibold">
                                                                <div className="fs-6 text-gray-700">Please note that reducing a user
                                                                    role rank, that user will lose all priviledges that was assigned
                                                                    to the previous role.</div>
                                                            </div>

                                                        </div>

                                                    </div>



                                                    <div className="fv-row mb-7">

                                                        <label className="fs-6 fw-semibold form-label mb-5">
                                                            <span className="required">Select a user role</span>
                                                        </label>


                                                        <div className="d-flex">

                                                            <div className="form-check form-check-custom form-check-solid">

                                                                <input className="form-check-input me-3" name="user_role" type="radio"
                                                                    defaultValue="0" id="kt_modal_update_role_option_0" defaultChecked='checked' />


                                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_0">
                                                                    <div className="fw-bold text-gray-800">Administrator</div>
                                                                    <div className="text-gray-600">Best for business owners and company
                                                                        administrators</div>
                                                                </label>

                                                            </div>

                                                        </div>

                                                        <div className='separator separator-dashed my-5'></div>

                                                        <div className="d-flex">

                                                            <div className="form-check form-check-custom form-check-solid">

                                                                <input className="form-check-input me-3" name="user_role" type="radio"
                                                                    defaultValue="1" id="kt_modal_update_role_option_1" />


                                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_1">
                                                                    <div className="fw-bold text-gray-800">Developer</div>
                                                                    <div className="text-gray-600">Best for developers or people
                                                                        primarily using the API</div>
                                                                </label>

                                                            </div>

                                                        </div>

                                                        <div className='separator separator-dashed my-5'></div>

                                                        <div className="d-flex">

                                                            <div className="form-check form-check-custom form-check-solid">

                                                                <input className="form-check-input me-3" name="user_role" type="radio"
                                                                    defaultValue="2" id="kt_modal_update_role_option_2" />


                                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_2">
                                                                    <div className="fw-bold text-gray-800">Analyst</div>
                                                                    <div className="text-gray-600">Best for people who need full access
                                                                        to analytics data, but don't need to update business
                                                                        settings</div>
                                                                </label>

                                                            </div>

                                                        </div>

                                                        <div className='separator separator-dashed my-5'></div>

                                                        <div className="d-flex">

                                                            <div className="form-check form-check-custom form-check-solid">

                                                                <input className="form-check-input me-3" name="user_role" type="radio"
                                                                    defaultValue="3" id="kt_modal_update_role_option_3" />


                                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_3">
                                                                    <div className="fw-bold text-gray-800">Support</div>
                                                                    <div className="text-gray-600">Best for employees who regularly
                                                                        refund payments and respond to disputes</div>
                                                                </label>

                                                            </div>

                                                        </div>

                                                        <div className='separator separator-dashed my-5'></div>

                                                        <div className="d-flex">

                                                            <div className="form-check form-check-custom form-check-solid">

                                                                <input className="form-check-input me-3" name="user_role" type="radio"
                                                                    defaultValue="4" id="kt_modal_update_role_option_4" />


                                                                <label className="form-check-label" htmlFor="kt_modal_update_role_option_4">
                                                                    <div className="fw-bold text-gray-800">Trial</div>
                                                                    <div className="text-gray-600">Best for people who need to preview
                                                                        content data, but don't need to make any updates</div>
                                                                </label>

                                                            </div>

                                                        </div>

                                                    </div>


                                                    <div className="text-center pt-15">
                                                        <button type="reset" className="btn btn-light me-3"
                                                            data-bs-dismiss="modal">Discard</button>
                                                        <button type="submit" className="btn btn-primary"
                                                            data-kt-users-modal-action="submit">
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


                                <div className="modal fade" id="kt_modal_add_one_time_password" tabIndex="-1" aria-hidden="true">

                                    <div className="modal-dialog modal-dialog-centered mw-650px">

                                        <div className="modal-content">

                                            <div className="modal-header">

                                                <h2 className="fw-bold">Enable One Time Password</h2>


                                                <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                                    <span className="svg-icon svg-icon-1">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                                                transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                                            <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                                transform="rotate(45 7.41422 6)" fill="currentColor" />
                                                        </svg>
                                                    </span>

                                                </div>

                                            </div>


                                            <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">

                                                <form className="form"  id="kt_modal_add_one_time_password_form">

                                                    <div className="fw-bold mb-9">Enter the new phone number to receive an SMS to when
                                                        you log in.</div>


                                                    <div className="fv-row mb-7">

                                                        <label className="fs-6 fw-semibold form-label mb-2">
                                                            <span className="required">Mobile number</span>
                                                            <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                                                title="A valid mobile number is required to receive the one-time password to validate your account login."></i>
                                                        </label>


                                                        <input type="text" className="form-control form-control-solid"
                                                            name="otp_mobile_number" placeholder="+6123 456 789" defaultValue="" />

                                                    </div>


                                                    <div className="separator saperator-dashed my-5"></div>


                                                    <div className="fv-row mb-7">

                                                        <label className="fs-6 fw-semibold form-label mb-2">
                                                            <span className="required">Email</span>
                                                        </label>


                                                        <input type="email" className="form-control form-control-solid" name="otp_email"
                                                            defaultValue="smith@kpmg.com" readOnly="readonly" />

                                                    </div>


                                                    <div className="fv-row mb-7">

                                                        <label className="fs-6 fw-semibold form-label mb-2">
                                                            <span className="required">Confirm password</span>
                                                        </label>


                                                        <input type="password" className="form-control form-control-solid"
                                                            name="otp_confirm_password" defaultValue="" />

                                                    </div>


                                                    <div className="text-center pt-15">
                                                        <button type="reset" className="btn btn-light me-3"
                                                            data-bs-dismiss="modal">Cancel</button>
                                                        <button type="submit" className="btn btn-primary"
                                                            data-kt-users-modal-action="submit">
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


                            </div>

                        </div>

                    </div>
                </div>
            </>
        </AuthenticatedLayout>
    )
}