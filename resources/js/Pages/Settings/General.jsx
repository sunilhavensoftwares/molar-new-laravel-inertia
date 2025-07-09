import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import Select2Input from '@/Components/Select2Input';
import images from '@/Misc/image_map';
import Navbar from './common/Navbar'
function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings - General</h2>}
        >
            <Head title="Settings - General" />
            <>
                {/*begin::Main*/}
                <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {/*begin::Content wrapper*/}
                    <div className="d-flex flex-column flex-column-fluid">
                        {/*begin::Toolbar*/}
                        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                            {/*begin::Toolbar container*/}
                            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                                {/*begin::Page title*/}
                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                    {/*begin::Title*/}
                                    <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Settings List</h1>
                                    {/*end::Title*/}
                                    {/*begin::Breadcrumb*/}
                                    <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item text-muted">
                                            <Link href="/dashboard" className="text-muted text-hover-primary">Home</Link>
                                        </li>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item">
                                            <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        {/*end::Item*/}
                                        {/*begin::Item*/}
                                        <li className="breadcrumb-item text-muted">Settings</li>
                                        {/*end::Item*/}
                                    </ul>
                                    {/*end::Breadcrumb*/}
                                </div>
                                {/*end::Page title*/}
                            </div>
                            {/*end::Toolbar container*/}
                        </div>
                        {/*end::Toolbar*/}
                        {/*begin::Content*/}
                        <div id="kt_app_content" className="app-content flex-column-fluid">
                            {/*begin::Content container*/}
                            <div id="kt_app_content_container" className="app-container container-fluid">
                                {/*begin::Card*/}
                                <div className="card">
                                    {/*begin::Card body*/}
                                    <div className="card-body">
                                        {/*begin:::Tabs*/}
                                        <Navbar />
                                        {/*end:::Tabs*/}
                                        {/*begin:::Tab content*/}
                                        <div className="tab-content" id="myTabContent">
                                            {/*begin:::Tab pane*/}
                                            <div className="tab-pane fade active show" id="kt_ecommerce_settings_general" role="tabpanel">
                                                {/*begin::Form*/}
                                                <form id="kt_ecommerce_settings_general_form" className="form" action="#">
                                                    {/*begin::Heading*/}
                                                    <div className="row mb-7">
                                                        <div className="col-md-9 offset-md-3">
                                                            <h2>General Settings</h2>
                                                        </div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span className="required">System Name</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Set the title of the store for SEO." data-bs-original-title="Set the title of the store for SEO." data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="meta_title" defaultValue="" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Title</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="meta_keywords" defaultValue="Molar Clinic" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Address</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="meta_keywords" defaultValue="" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Two Factor</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <div className="d-flex mt-3">
                                                                {/*begin::Radio*/}
                                                                <div className="form-check form-check-custom form-check-solid me-5">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="customers_online" id="customers_online_yes" defaultChecked="checked" />
                                                                    <label className="form-check-label" htmlFor="customers_online_yes">Enable</label>
                                                                </div>
                                                                <div className="form-check form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="customers_online" id="customers_online_no" />
                                                                    <label className="form-check-label" htmlFor="customers_online_no">Disable</label>
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Phone</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="meta_keywords" defaultValue="+966520520568" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Email</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="meta_keywords" defaultValue="info@molar.clinic" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Currency</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="meta_keywords" defaultValue="SAR" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Logo</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Image input wrapper*/}
                                                            <div className="mt-1">

                                                                {/*begin::Image input*/}
                                                                <div className="image-input image-input-outline image-input-placeholder" data-kt-image-input="true">
                                                                    {/*begin::Preview existing avatar*/}
                                                                    <div className="image-input-wrapper w-125px h-125px" style={{ backgroundImage: `url(${images.avatar_300_6})` }}>
                                                                    </div>
                                                                    {/*end::Preview existing avatar*/}
                                                                    {/*begin::Edit*/}
                                                                    <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" aria-label="Change avatar" data-bs-original-title="Change avatar" data-kt-initialized="1">
                                                                        <i className="bi bi-pencil-fill fs-7"></i>
                                                                        {/*begin::Inputs*/}
                                                                        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                                                        <input type="hidden" name="avatar_remove" />
                                                                        {/*end::Inputs*/}
                                                                    </label>
                                                                    {/*end::Edit*/}
                                                                    {/*begin::Cancel*/}
                                                                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" aria-label="Cancel avatar" data-bs-original-title="Cancel avatar" data-kt-initialized="1">
                                                                        <i className="bi bi-x fs-2"></i>
                                                                    </span>
                                                                    {/*end::Cancel*/}
                                                                    {/*begin::Remove*/}
                                                                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" aria-label="Remove avatar" data-bs-original-title="Remove avatar" data-kt-initialized="1">
                                                                        <i className="bi bi-x fs-2"></i>
                                                                    </span>
                                                                    {/*end::Remove*/}
                                                                </div>
                                                                {/*end::Image input*/}
                                                            </div>
                                                            {/*end::Image input wrapper*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}

                                                    {/*begin::Action buttons*/}
                                                    <div className="row py-5">
                                                        <div className="col-md-9 offset-md-3">
                                                            <div className="d-flex">
                                                                {/*begin::Button*/}
                                                                <button type="reset" data-kt-ecommerce-settings-type="cancel" className="btn btn-light me-3">Cancel</button>
                                                                {/*end::Button*/}
                                                                {/*begin::Button*/}
                                                                <button type="submit" data-kt-ecommerce-settings-type="submit" className="btn btn-primary">
                                                                    <span className="indicator-label">Save</span>
                                                                    <span className="indicator-progress">Please wait...
                                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                                </button>
                                                                {/*end::Button*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*end::Action buttons*/}
                                                </form>
                                                {/*end::Form*/}
                                            </div>
                                            {/*end:::Tab pane*/}                                       
                                        </div>
                                        {/*end:::Tab content*/}
                                    </div>
                                    {/*end::Card body*/}
                                </div>
                                {/*end::Card*/}
                            </div>
                            {/*end::Content container*/}
                        </div>
                        {/* end::Content */}
                    </div>
                    {/* end::Content wrapper */}
                </div>
                {/*end:::Main*/}
            </>
        </AuthenticatedLayout>

    )
}

export default Index