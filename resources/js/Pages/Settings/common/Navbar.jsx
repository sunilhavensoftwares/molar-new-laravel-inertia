import { Link } from "@inertiajs/react";
import SidebarFunctions from '@/Components/Common/SidebarFunctions';
import React from "react";
export default function Navbar() {

    function getClasses(href) {
        return SidebarFunctions.checkActive(href) ? 'nav-link text-active-primary pb-5 active' : 'nav-link text-active-primary pb-5';
    }

    const Menu = [
        {
            title: 'General',
            href: '/settings/general'
        },
        {
            title: 'Reminder',
            href: '/settings/reminder'

        },
        {
            title: 'Password Backup Page',
            href: '/settings/password-backup-page'

        },
        {
            title: 'Notification',
            href: '/settings/notification'

        },
        {
            title: 'Email',
            href: '/settings/email'

        }
        ,
        {
            title: 'Payment Gateways',
            href: '/settings/payment-gateways'

        }

    ];
    return (
        <>
            <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-transparent fs-4 fw-semibold mb-2">
                {Menu && Menu.map((item, idx) => (
                    <React.Fragment key={idx}>
                        {/*begin::Nav item*/}
                        <li className="nav-item mt-2">
                            <Link className={getClasses(item.href)} href={item.href}>{item.title}</Link>
                        </li>
                        {/*end::Nav item*/}
                    </React.Fragment>
                ))}

            </ul>
        </>
    )
}