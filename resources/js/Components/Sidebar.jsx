import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from "react";

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { route } = usePage().props;
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
    const checkActive = (search) => {
        let segments = route.url;
        return search.some(str => segments.includes(str)) ? true : false;
    }
     const exactMatchUrl = (link) => {
        const { url } = usePage();
        const currentPath = url.split('?')[0];
        //console.log(currentPath ,link);
        
        return currentPath === link;
    }
    const getMenuClass = (keys, type) => {
        let className ='';
        switch (type) {
            case 'main':
                className = `menu-item menu-sub-indention menu-accordion ${checkActive(keys) ? 'show' : ''}`;
                break;
            case 'sub':
                className = `menu-sub menu-sub-accordion  menu-active-bg px-lg-2 py-lg-4 w-lg-225px ${checkActive(keys) ? 'show' : ''}`;
                break;
            case 'item':
                className = `menu-item menu-accordion ${checkActive(keys) ? 'show' : ''}`;
                break;
            case 'link':
                className = `menu-link ${exactMatchUrl(keys) ? 'active' : ''}`;
                break;
                
            default:
                break;
        }
        return className;

    }
    return (
        <>
            <div className="menu menu-column menu-rounded menu-sub-indention px-3" id="#kt_app_sidebar_menu"
                data-kt-menu="true" data-kt-menu-expand="false">

                <div className="menu-item">

                    <Link className={getMenuClass('/dashboard', 'link')} href="/dashboard">
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


                <div data-kt-menu-trigger="click" className={getMenuClass(['users','roles'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">

                            <i className="fa-solid fs-3 fa-user-gear"></i>
                        </span>
                        <span className="menu-title">User Management</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['users','roles'], 'sub')}>

                        <div data-kt-menu-trigger="click" className={getMenuClass(['users'], 'item')}>

                            <span className="menu-link ">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Users</span>
                                <span className="menu-arrow"></span>
                            </span>


                            <div className={getMenuClass(['users'], 'sub')}>

                                <div className="menu-item ">

                                    <Link className={getMenuClass('/users', 'link')} href="/users">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Users List</span>
                                    </Link>

                                </div>

                            </div>

                        </div>


                        <div data-kt-menu-trigger="click" className={getMenuClass(['roles'], 'item')}>

                            <span className="menu-link">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Roles</span>
                                <span className="menu-arrow"></span>
                            </span>


                            <div className={getMenuClass(['roles'], 'sub')}>

                                <div className="menu-item">

                                    <Link className={getMenuClass('/roles', 'link')} href="/roles">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Roles List</span>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div data-kt-menu-trigger="click" className={getMenuClass(['doctors'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-user-doctor fs-3"></i>
                        </span>
                        <span className="menu-title">Doctors</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['doctors'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass('/doctors', 'link')} href="/doctors">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Doctors List</span>
                            </Link>

                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className={getMenuClass(['patients'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-hospital-user fs-3"></i>
                        </span>
                        <span className="menu-title">Patients</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['patients'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass('/patients', 'link')} href="/patients">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Patient List</span>
                            </Link>


                            <Link className={getMenuClass('/patients/temporary-patients', 'link')} href="/patients/temporary-patients">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Temporary Patient</span>
                            </Link>


                            <Link className={getMenuClass('/patients/case-list', 'link')} href="/patients/case-list">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Manager</span>
                            </Link>



                            <Link className={getMenuClass('/patients/case-category', 'link')} href="/patients/case-category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Category</span>
                            </Link>


                            <Link className={getMenuClass('/patients/tooth', 'link')} href="/patients/tooth">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Tooth</span>
                            </Link>


                            <Link className={getMenuClass('/patients/case-status', 'link')} href="/patients/case-status">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Status</span>
                            </Link>



                            <Link className={getMenuClass('/patients/case-refer', 'link')} href="/patients/case-refer">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Refer</span>
                            </Link>


                            <Link className={getMenuClass('/patients/case-material', 'link')} href="/patients/case-material">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Case Material</span>
                            </Link>


                            <Link className={getMenuClass('/patients/pdocuments', 'link')} href="/patients/pdocuments">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Documents</span>
                            </Link>


                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className={getMenuClass(['schedule'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">

                            <i className="fa-solid fa-clock fs-3"></i>
                        </span>
                        <span className="menu-title">Schedule</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['schedule'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass('/schedule', 'link')} href="schedule">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All Schedules</span>
                            </Link>


                            <Link className={getMenuClass('schedule/holidays', 'link')} href="schedule/holidays">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Holidays</span>
                            </Link>

                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className={getMenuClass(['appointments'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-regular fa-calendar-check fs-3"></i>
                        </span>
                        <span className="menu-title">Appointment</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['appointments'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass('/appointments', 'link')} href="/appointments">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </Link>


                            <Link className={getMenuClass('/appointments/today', 'link')} href="/appointments/today">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Todays</span>
                            </Link>


                            <Link className={getMenuClass('/appointments/upcoming', 'link')} href="/appointments/upcoming">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Upcoming</span>
                            </Link>


                            <Link className={getMenuClass('/appointments/calendar', 'link')} href="/appointments/calendar">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Calendar</span>
                            </Link>


                            <Link className={getMenuClass('/appointments/request', 'link')} href="/appointments/request">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Request</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['human-resources'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa fa-users fs-3"></i>
                        </span>
                        <span className="menu-title">Human Resources</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['human-resources'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass('/human-resources/index', 'link')}
                                href="/human-resources/index?tab=nurse">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </Link>

                        </div>


                    </div>

                </div>



                <div data-kt-menu-trigger="click" className={getMenuClass(['finance'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-hand-holding-dollar fs-3"></i>
                        </span>
                        <span className="menu-title">Financial Activities</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['finance'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['/finance'], 'link')} href="/finance">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Payments</span>
                            </Link>


                            <Link className={getMenuClass('/finance/payment-category', 'link')} href="/finance/payment-category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Payment Category</span>
                            </Link>


                            <Link className={getMenuClass('/finance/expense', 'link')} href="/finance/expense">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Expense</span>
                            </Link>


                            <Link className={getMenuClass('/finance/expense-category', 'link')} href="/finance/expense-category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Expense Categories</span>
                            </Link>


                            <Link className={getMenuClass('/finance/diagnostic-type', 'link')} href="/finance/diagnostic-type">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Diagnostic Type</span>
                            </Link>

                        </div>


                    </div>

                </div>



                <div className="menu-item">

                    <Link className={getMenuClass(['prescription'], 'link')} href="prescription/index">
                        <span className="menu-icon">

                            <i className="fa-solid fa-stethoscope"></i>

                        </span>
                        <span className="menu-title">Prescription</span>
                    </Link>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['lab'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-flask fs-3"></i>
                        </span>
                        <span className="menu-title">Lab</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['lab'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['lab'], 'link')} href="lab/index?tab=reports">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['medicine'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-medkit fs-3"></i>
                        </span>
                        <span className="menu-title">Medicine</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['medicine'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['medicine'], 'sub')} href="medicine/index">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Medicine List</span>
                            </Link>


                            <Link className={getMenuClass(['medicine-category'], 'link')} href="medicine/medicine-category">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Medicine Category</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['pharmacy'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-dollar fs-3"></i>
                        </span>
                        <span className="menu-title">Pharmacy</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['pharmacy'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['pharmacy'], 'link')} href="pharmacy/index?tab=dashboard">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['report'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-file fs-3"></i>
                        </span>
                        <span className="menu-title">Report</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['report'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['report'], 'link')} href="report/index?tab=financial-report">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['email'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-envelope fs-3"></i>
                        </span>
                        <span className="menu-title">Email</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['email'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['email'], 'link')} href="email/index">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Email List</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['sms'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-message fs-3"></i>
                        </span>
                        <span className="menu-title">SMS</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['report'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['new-sms'], 'link')} href="sms/new-sms">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Write Message</span>
                            </Link>


                            <Link className={getMenuClass(['sms-settings'], 'link')} href="sms/sms-settings">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">SMS Settings</span>
                            </Link>


                            <Link className={getMenuClass(['sms-templates'], 'link')} href="sms/sms-templates">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">SMS Templates</span>
                            </Link>


                            <Link className={getMenuClass(['whatsapp'], 'link')} href="sms/whatsapp">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Whatsapp Reply</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['website'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-cogs fs-3"></i>
                        </span>
                        <span className="menu-title">Website</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['website'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['website'], 'link')} href="website/index?tab=slides">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">All</span>
                            </Link>

                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={getMenuClass(['settings'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-cogs fs-3"></i>
                        </span>
                        <span className="menu-title">Settings</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={getMenuClass(['settings'], 'sub')}>


                        <div className="menu-item">

                            <Link className={getMenuClass(['settings'], 'link')} href="settings/index">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">System Settings</span>
                            </Link>

                        </div>


                    </div>

                </div>


            </div>
        </>
    );
}