import CalendarApp from "@/Components/CalendarApp"
import FlatpickrInput from "@/Components/FlatpickrInput"
import Select2Input from "@/Components/Select2Input"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link } from "@inertiajs/react"
export default function Upcoming({ auth }) {
  return (
    <AuthenticatedLayout user={auth} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Calendar</h2>}>
      <Head title="Calendar" />
      <>
        {/* begin::Main */}
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          {/* begin::Content wrapper */}
          <div className="d-flex flex-column flex-column-fluid">
            {/* begin::Toolbar */}
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
              {/* begin::Toolbar container */}
              <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                {/* begin::Page title */}
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                  {/* begin::Title */}
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                    Calendar</h1>
                  {/* end::Title */}
                  {/* begin::Breadcrumb */}
                  <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    {/* begin::Item */}
                    <li className="breadcrumb-item text-muted">
                      <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                    </li>
                    {/* end::Item */}
                    {/* begin::Item */}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px"></span>
                    </li>
                    {/* end::Item */}
                    {/* begin::Item */}
                    <li className="breadcrumb-item text-muted">Calendar</li>
                    {/* end::Item */}
                  </ul>
                  {/* end::Breadcrumb */}
                </div>
                {/* end::Page title */}
                {/* begin::Actions */}
                <div className="d-flex align-items-center gap-2 gap-lg-3">


                  {/* end::Primary button */}
                </div>
                {/* end::Actions */}
              </div>
              {/* end::Toolbar container */}
            </div>
            {/* end::Toolbar */}
            {/* begin::Content */}
            <div id="kt_app_content" className="app-content flex-column-fluid">
              {/* begin::Content container */}
              <div id="kt_app_content_container" className="app-container container-fluid">
                {/* begin::Card */}
                <div className="card">
                  {/* begin::Card header */}
                  <div className="card-header">
                    <h2 className="card-title fw-bold">Calendar</h2>
                  </div>
                  {/* end::Card header */}
                  {/* begin::Card body */}
                  <div className="card-body">
                    {/* begin::Calendar */}
                    <CalendarApp></CalendarApp>
                    {/* end::Calendar */}
                  </div>
                  {/* end::Card body */}
                </div>
                {/* end::Card */}
              </div>
              {/* end::Content container */}
            </div>
            {/*  end::Content  */}
          </div>
          {/*  end::Content wrapper  */}

          {/* begin::Modals */}

          {/* begin::Modal - New Product */}
          <div className="modal fade" id="kt_modal_view_event" tabIndex="-1" aria-hidden="true">
            {/* begin::Modal dialog */}
            <div className="modal-dialog modal-dialog-centered mw-650px">
              {/* begin::Modal content */}
              <div className="modal-content">
                {/* begin::Modal header */}
                <div className="modal-header border-0 justify-content-end">

                  {/* begin::Close */}
                  <div className="btn btn-icon btn-sm btn-color-gray-500 btn-active-icon-primary" data-bs-toggle="tooltip" title="Hide Event" data-bs-dismiss="modal">
                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
                    <span className="svg-icon svg-icon-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
                      </svg>
                    </span>
                    {/* end::Svg Icon */}
                  </div>
                  {/* end::Close */}
                </div>
                {/* end::Modal header */}
                {/* begin::Modal body */}
                <div className="modal-body pt-0 pb-20 px-lg-17">
                  {/* begin::Row */}
                  <div className="d-flex">
                    {/* begin::Icon */}
                    {/* begin::Svg Icon | path: icons/duotune/general/gen014.svg */}
                    <span className="svg-icon svg-icon-1 svg-icon-muted me-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                        <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                        <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                      </svg>
                    </span>
                    {/* end::Svg Icon */}
                    {/* end::Icon */}
                    <div className="mb-9">
                      {/* begin::Event name */}
                      <div className="d-flex align-items-center mb-2">
                        <span className="fs-3 fw-bold me-3" data-kt-calendar="event_name"></span>
                        <span className="badge badge-light-success" data-kt-calendar="all_day"></span>
                      </div>
                      {/* end::Event name */}
                      {/* begin::Event description */}
                      <div className="fs-6" data-kt-calendar="event_description"></div>
                      {/* end::Event description */}
                    </div>
                  </div>
                  {/* end::Row */}
                  {/* begin::Row */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Icon */}
                    {/* begin::Svg Icon | path: icons/duotune/abstract/abs050.svg */}
                    <span className="svg-icon svg-icon-1 svg-icon-success me-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <circle fill="currentColor" cx="12" cy="12" r="8" />
                      </svg>
                    </span>
                    {/* end::Svg Icon */}
                    {/* end::Icon */}
                    {/* begin::Event start date/time */}
                    <div className="fs-6">
                      <span className="fw-bold">Starts</span>
                      <span data-kt-calendar="event_start_date"></span>
                    </div>
                    {/* end::Event start date/time */}
                  </div>
                  {/* end::Row */}
                  {/* begin::Row */}
                  <div className="d-flex align-items-center mb-9">
                    {/* begin::Icon */}
                    {/* begin::Svg Icon | path: icons/duotune/abstract/abs050.svg */}
                    <span className="svg-icon svg-icon-1 svg-icon-danger me-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <circle fill="currentColor" cx="12" cy="12" r="8" />
                      </svg>
                    </span>
                    {/* end::Svg Icon */}
                    {/* end::Icon */}
                    {/* begin::Event end date/time */}
                    <div className="fs-6">
                      <span className="fw-bold">Ends</span>
                      <span data-kt-calendar="event_end_date"></span>
                    </div>
                    {/* end::Event end date/time */}
                  </div>
                  {/* end::Row */}
                  {/* begin::Row */}
                  <div className="d-flex align-items-center">
                    {/* begin::Icon */}
                    {/* begin::Svg Icon | path: icons/duotune/general/gen018.svg */}
                    <span className="svg-icon svg-icon-1 svg-icon-muted me-5">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                        <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                      </svg>
                    </span>
                    {/* end::Svg Icon */}
                    {/* end::Icon */}
                    {/* begin::Event location */}
                    <div className="fs-6" data-kt-calendar="event_location"></div>
                    {/* end::Event location */}
                  </div>
                  {/* end::Row */}
                </div>
                {/* end::Modal body */}
              </div>
            </div>
          </div>
          {/* end::Modal - New Product */}
        </div>
        {/* end:::Main */}
      </>
    </AuthenticatedLayout>
  )
}