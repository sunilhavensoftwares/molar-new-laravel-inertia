import { Link, usePage } from "@inertiajs/react"

const Nav = () => {
    const { url } = usePage();
    const currentPath = url.split('?')[0];
    const getClasses = (link) => {
        return currentPath === link ? "nav-link text-active-primary ms-0 me-10 py-5 active" : "nav-link text-active-primary ms-0 me-10 py-5";
    }
    return (
        <ul
            className="nav nav-tabs nav-line-tabs nav-line-tabs-2x border-transparent fs-4 fw-semibold mb-15">
            {/*begin::Nav item*/}
            <li className="nav-item mt-2">
                <Link className={getClasses("/website/slides")}
                    href="/website/slides">Slides</Link>
            </li>
            {/*end::Nav item*/}
            {/*begin::Nav item*/}
            <li className="nav-item mt-2">
                <Link className={getClasses("/website/services")}
                    href="/website/services">Services</Link>
            </li>
            {/*end::Nav item*/}
            {/*begin::Nav item*/}
            <li className="nav-item mt-2">
                <Link className={getClasses("/website/featured-doctors")}
                    href="/website/featured-doctors">Featured Doctors</Link>
            </li>
            {/*end::Nav item*/}
        </ul>
    )
}

export default Nav