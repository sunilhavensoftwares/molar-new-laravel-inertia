import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from "react";
import SidebarFunctions from './Common/SidebarFunctions'
import { SidebarLink } from './Common/SidebarLink';
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
                    <SidebarLink title='Dashboard' href="/dashboard" faClass="fas fa-chart-line" />
                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['users', 'roles'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">

                            <i className="fa-solid fs-3 fa-user-gear"></i>
                        </span>
                        <span className="menu-title">User Management</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['users', 'roles'], 'sub')}>

                        <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['users'], 'item')}>

                            <span className="menu-link ">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Users</span>
                                <span className="menu-arrow"></span>
                            </span>


                            <div className={SidebarFunctions.getMenuClass(['users'], 'sub')}>

                                <div className="menu-item ">
                                    <SidebarLink title='Users List' href="/users"/>
                                </div>

                            </div>

                        </div>


                        <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['roles'], 'item')}>

                            <span className="menu-link">
                                <span className="menu-bullet">
                                    <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Roles</span>
                                <span className="menu-arrow"></span>
                            </span>


                            <div className={SidebarFunctions.getMenuClass(['roles'], 'sub')}>

                                <div className="menu-item">
                                    <SidebarLink title='Roles List' href="/roles"/>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['doctors'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-user-doctor fs-3"></i>
                        </span>
                        <span className="menu-title">Doctors</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['doctors'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title="Doctors List" href="/doctors" />
                        </div>
                    </div>

                </div>



                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['patients'], 'main')}>
                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-hospital-user fs-3"></i>
                        </span>
                        <span className="menu-title">Patients</span>
                        <span className="menu-arrow"></span>
                    </span>
                    <div className={SidebarFunctions.getMenuClass(['patients'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title="Patients List" href="/patients" />
                            <SidebarLink title="Temporary Patients" href="/patients/temporary-patients" />
                            <SidebarLink title="Case Manager" href="/patients/case-list" />
                            <SidebarLink title="Case Category" href="/patients/case-category" />
                            <SidebarLink title="Tooth" href="/patients/tooth" />
                            <SidebarLink title="Case Status" href="/patients/case-status" />
                            <SidebarLink title='Case Refer' href="/patients/case-refer" />
                            <SidebarLink title='Case Material' href="/patients/case-material" />
                            <SidebarLink title='Documents' href="/patients/pdocuments" />
                        </div>  
                    </div>

                </div>



                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['schedules'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-clock fs-3"></i>
                        </span>
                        <span className="menu-title">Schedule</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['schedules'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='All Schedules' href="/schedules" />
                            <SidebarLink title='Holidays' href="/schedules/holidays" />
                        </div>
                    </div>
                </div>



                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['appointments'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-regular fa-calendar-check fs-3"></i>
                        </span>
                        <span className="menu-title">Appointment</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['appointments'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='All' href="/appointments" />
                            <SidebarLink title='Todays' href="/appointments/today" />
                            <SidebarLink title='Upcoming' href="/appointments/upcoming" />
                            <SidebarLink title='Calendar' href="/appointments/calendar" />
                            <SidebarLink title='Request' href="/appointments/request" />
                        </div>
                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['human-resources'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa fa-users fs-3"></i>
                        </span>
                        <span className="menu-title">Human Resources</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['human-resources'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='All' href="/human-resources/nurse" />
                        </div>
                    </div>

                </div>



                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['finance'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-hand-holding-dollar fs-3"></i>
                        </span>
                        <span className="menu-title">Financial Activities</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['finance'], 'sub')}>


                        <div className="menu-item">
                            <SidebarLink title='Payments' href="/finance" />
                            <SidebarLink title='Payment Category' href="/finance/payment-category" />
                            <SidebarLink title='Expense' href="/finance/expenses" />
                            <SidebarLink title='Expense Categories' href="/finance/expense-category" />
                            <SidebarLink title='Diagnostic Type' href="/finance/diagnostic-type" />
                        </div>


                    </div>

                </div>



                <div className="menu-item">
                    <SidebarLink title='Prescription' href="/prescription/index" faClass="fa-solid fa-stethoscope" />
                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['lab'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-flask fs-3"></i>
                        </span>
                        <span className="menu-title">Lab</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['lab'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='All' href="/lab/index?tab=reports"/>
                        </div>
                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['medicine'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-medkit fs-3"></i>
                        </span>
                        <span className="menu-title">Medicine</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['medicine'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='All' href="/medicine/index"/>
                            <SidebarLink title='Medicine Category' href="/medicine/medicine-category"/>
                        </div>
                    </div>
                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['pharmacy'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-dollar fs-3"></i>
                        </span>
                        <span className="menu-title">Pharmacy</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['pharmacy'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='All' href="/pharmacy/index?tab=dashboard"/>
                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['report'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-file fs-3"></i>
                        </span>
                        <span className="menu-title">Report</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['report'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='All' href="/report/index?tab=financial-report"/>
                        </div>
                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['email'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-envelope fs-3"></i>
                        </span>
                        <span className="menu-title">Email</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['email'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='Email List' href="/email/index"/>
                        </div>
                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['sms'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-message fs-3"></i>
                        </span>
                        <span className="menu-title">SMS</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['report'], 'sub')}>


                        <div className="menu-item">
                            <SidebarLink title='Write Sms' href="/sms/new-sms"/>
                            <SidebarLink title='Sms Settings' href="/sms/sms-settings"/>
                            <SidebarLink title='SMS Template' href="/sms/sms-templates"/>
                            <SidebarLink title='Whatsapp Reply' href="/sms/whatsapp"/>
                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['website'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-cogs fs-3"></i>
                        </span>
                        <span className="menu-title">Website</span>
                        <span className="menu-arrow"></span>
                    </span>


                    <div className={SidebarFunctions.getMenuClass(['website'], 'sub')}>


                        <div className="menu-item">
                            <SidebarLink title='All' href="/website/index?tab=slides"/>
                        </div>


                    </div>

                </div>


                <div data-kt-menu-trigger="click" className={SidebarFunctions.getMenuClass(['settings'], 'main')}>

                    <span className="menu-link">
                        <span className="menu-icon">
                            <i className="fa-solid fa-cogs fs-3"></i>
                        </span>
                        <span className="menu-title">Settings</span>
                        <span className="menu-arrow"></span>
                    </span>
                    <div className={SidebarFunctions.getMenuClass(['settings'], 'sub')}>
                        <div className="menu-item">
                            <SidebarLink title='System Settings' href="/settings/index"/>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}