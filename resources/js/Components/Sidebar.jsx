import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const sidebarEl = document.getElementById('kt_app_sidebar_menu');
        if (!sidebarEl) return;

        // Defensive: check if KTAppSidebar exists
        if (window.KTAppSidebar && typeof window.KTAppSidebar.getInstance === 'function') {
            let sidebar = window.KTAppSidebar.getInstance(sidebarEl);

            // If instance does not exist yet, create it
            if (!sidebar) {
                sidebar = new window.KTAppSidebar(sidebarEl);
            }

            if (sidebarOpen) {
                sidebar.show();
            } else {
                sidebar.hide();
            }
        }
    }, [sidebarOpen]);
    return (
        <>
            <div className="menu menu-column menu-rounded menu-sub-indention px-3" id="#kt_app_sidebar_menu"
                data-kt-menu="true" data-kt-menu-expand="false">

                <div className="menu-item">

                    <Link className="menu-link" href="/dashboard">
                        <span className="menu-icon">

                            <span className="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2"
                                        fill="currentColor" />
                                    <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2"
                                        fill="currentColor" />
                                    <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2"
                                        fill="currentColor" />
                                </svg>
                            </span>

                        </span>
                        <span className="menu-title">Dashboard</span>
                    </Link>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">

                            <i className="fa-solid fs-3 fa-user-gear"></i>
                        </span>
                        <span className="menu-title">User Management</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion  ">

                            <span className="menu-link ">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Users</span>
                                <span className="menu-arrow"></span>
                            </span>


                            <div
                                className="menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

                                <div className="menu-item ">

                                    <Link className="menu-link" href="/users">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Users List</span>
                                    </Link>

                                </div>


                                <div className="menu-item">

                                    <a className="menu-link " href="users/user-detail">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">View User</span>
                                    </a>

                                </div>

                            </div>

                        </div>


                        <div data-kt-menu-trigger="click" className="menu-item menu-accordion ">

                            <span className="menu-link">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Roles</span>
                                <span className="menu-arrow"></span>
                            </span>


                            <div
                                className="menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px">

                                <div className="menu-item">

                                    <a className="menu-link  " href="roles/roles">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Roles List</span>
                                    </a>

                                </div>


                                <div className="menu-item">

                                    <a className="menu-link  " href="roles/role-detail">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">View Roles</span>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>




                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-user-doctor fs-3"></i>
                        </span>
                        <span className="menu-title">Doctors</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="doctors">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Doctors List</span>
                            </a>

                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-hospital-user fs-3"></i>
                        </span>
                        <span className="menu-title">Patient</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="patient">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Patient List</span>
                            </a>


                            <a className="menu-link " href="patient/temporary-patient">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Temporary Patient</span>
                            </a>


                            <a className="menu-link " href="patient/case_list">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Manager</span>
                            </a>



                            <a className="menu-link " href="patient/case-category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Category</span>
                            </a>


                            <a className="menu-link " href="patient/tooth">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Tooth</span>
                            </a>


                            <a className="menu-link " href="patient/case-status">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Status</span>
                            </a>



                            <a className="menu-link " href="patient/case-refer">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Refer</span>
                            </a>


                            <a className="menu-link " href="patient/case-material">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Material</span>
                            </a>


                            <a className="menu-link " href="patient/pdocuments">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Documents</span>
                            </a>


                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">

                            <i className="fa-solid fa-clock fs-3"></i>
                        </span>
                        <span className="menu-title">Schedule</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="schedule">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All Schedules</span>
                            </a>


                            <a className="menu-link " href="schedule/holidays">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Holidays</span>
                            </a>

                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-regular fa-calendar-check fs-3"></i>
                        </span>
                        <span className="menu-title">Appointment</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="appointment">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </a>


                            <a className="menu-link " href="appointment/today">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Todays</span>
                            </a>


                            <a className="menu-link " href="appointment/upcoming">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Upcoming</span>
                            </a>


                            <a className="menu-link " href="appointment/calendar">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Calendar</span>
                            </a>


                            <a className="menu-link " href="appointment/request">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Request</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa fa-users fs-3"></i>
                        </span>
                        <span className="menu-title">Human Resources</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link /dashboard/ "
                                href="human-resources/index?tab=nurse">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </a>

                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-hand-holding-dollar fs-3"></i>
                        </span>
                        <span className="menu-title">Financial Activities</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="finance">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Payments</span>
                            </a>


                            <a className="menu-link " href="finance/payment-category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Payment Category</span>
                            </a>


                            <a className="menu-link " href="finance/expense">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Expense</span>
                            </a>


                            <a className="menu-link " href="finance/expense-category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Expense Categories</span>
                            </a>


                            <a className="menu-link " href="finance/diagnostic-type">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Diagnostic Type</span>
                            </a>

                        </div>


                    </div>

                </div>



                <div className="menu-item">

                    <a className="menu-link " href="prescription/index">
                        <span className="menu-icon">

                            <i className="fa-solid fa-stethoscope"></i>

                        </span>
                        <span className="menu-title">Prescription</span>
                    </a>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-flask fs-3"></i>
                        </span>
                        <span className="menu-title">Lab</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link /dashboard/ " href="lab/index?tab=reports">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-medkit fs-3"></i>
                        </span>
                        <span className="menu-title">Medicine</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="medicine/index">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Medicine List</span>
                            </a>


                            <a className="menu-link " href="medicine/category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Medicine Category</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-dollar fs-3"></i>
                        </span>
                        <span className="menu-title">Pharmacy</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link /dashboard/ " href="pharmacy/index?tab=dashboard">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-file fs-3"></i>
                        </span>
                        <span className="menu-title">Report</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link /dashboard/ "
                                href="report/index?tab=financial-report">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-envelope fs-3"></i>
                        </span>
                        <span className="menu-title">Email</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="email/index">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Email List</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-message fs-3"></i>
                        </span>
                        <span className="menu-title">SMS</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="sms/new">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Write Message</span>
                            </a>


                            <a className="menu-link " href="sms/settings">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">SMS Settings</span>
                            </a>


                            <a className="menu-link " href="sms/templates">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">SMS Templates</span>
                            </a>


                            <a className="menu-link " href="sms/whatsapp">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Whatsapp Reply</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-cogs fs-3"></i>
                        </span>
                        <span className="menu-title">Website</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link /dashboard/ " href="website/index?tab=slides">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </a>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className="menu-item menu-sub-indention menu-accordion ">

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-cogs fs-3"></i>
                        </span>
                        <span className="menu-title">Settings</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className="menu-sub menu-sub-accordion menu-active-bg px-lg-2 py-lg-4 w-lg-225px">


                        <div className="menu-item">

                            <a className="menu-link " href="settings/index">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">System Settings</span>
                            </a>

                        </div>


                    </div>

                </div>


            </div>
        </>
    );
}