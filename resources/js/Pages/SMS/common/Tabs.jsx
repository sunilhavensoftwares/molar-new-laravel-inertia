import { Link, usePage } from '@inertiajs/react'
const Tabs = () => {
    const { url } = usePage();
    const currentPath = url.split('?')[0];
    const getClasses = (link) => {
        return currentPath === link ? "nav-link text-active-primary pb-5 active" : "nav-link text-active-primary pb-5";
    }
    return (
        <>
            <ul
                className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-transparent fs-4 fw-semibold mb-15">
                {/*begin:::Tab item*/}
                <li className="nav-item">
                    <Link className={getClasses("/sms/sms-settings")}
                        href="/sms/sms-settings">
                        {/*begin::Svg Icon | path: icons/duotune/general/gen001.svg*/}
                        <span className="svg-icon svg-icon-2 me-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        {/*end::Svg Icon*/}SMS
                    </Link>
                </li>
                {/*end:::Tab item*/}
                {/*begin:::Tab item*/}
                <li className="nav-item">
                    <Link className={getClasses("/sms/whatsapp-settings")}
                        href="/sms/whatsapp-settings">
                        {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm004.svg*/}
                        <span className="svg-icon svg-icon-2 me-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3"
                                    d="M18 10V20C18 20.6 18.4 21 19 21C19.6 21 20 20.6 20 20V10H18Z"
                                    fill="currentColor" />
                                <path opacity="0.3"
                                    d="M11 10V17H6V10H4V20C4 20.6 4.4 21 5 21H12C12.6 21 13 20.6 13 20V10H11Z"
                                    fill="currentColor" />
                                <path opacity="0.3"
                                    d="M10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10H10Z"
                                    fill="currentColor" />
                                <path opacity="0.3"
                                    d="M18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10H18Z"
                                    fill="currentColor" />
                                <path opacity="0.3" d="M14 4H10V10H14V4Z" fill="currentColor" />
                                <path opacity="0.3" d="M17 4H20L22 10H18L17 4Z"
                                    fill="currentColor" />
                                <path opacity="0.3" d="M7 4H4L2 10H6L7 4Z"
                                    fill="currentColor" />
                                <path
                                    d="M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10H6ZM10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10H10ZM18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10H18ZM19 2H5C4.4 2 4 2.4 4 3V4H20V3C20 2.4 19.6 2 19 2ZM12 17C12 16.4 11.6 16 11 16H6C5.4 16 5 16.4 5 17C5 17.6 5.4 18 6 18H11C11.6 18 12 17.6 12 17Z"
                                    fill="currentColor" />
                            </svg>
                        </span>
                        {/*end::Svg Icon*/}Whatsapp
                    </Link>
                </li>
                {/*end:::Tab item*/}

            </ul>
        </>
    )
}

export default Tabs