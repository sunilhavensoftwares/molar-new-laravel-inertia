import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
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
                                            <div className="tab-pane show active" id="kt_ecommerce_settings_products" role="tabpanel">
                                                {/*begin::Form*/}
                                                <form id="kt_ecommerce_settings_general_products" className="form" action="#">
                                                    {/*begin::Heading*/}
                                                    <div className="row mb-7">
                                                        <div className="col-md-9 offset-md-3">
                                                            <h2>Cateogries Settings</h2>
                                                        </div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Category Product Count</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Show the number of products inside the subcategories in the storefront header category menu. Be warned, this will cause an extreme performance hit for stores with a lot of subcategories!" data-bs-original-title="Show the number of products inside the subcategories in the storefront header category menu. Be warned, this will cause an extreme performance hit for stores with a lot of subcategories!" data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="d-flex mt-3">
                                                                {/*begin::Radio*/}
                                                                <div className="form-check form-check-custom form-check-solid me-5">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="category_product_count" id="category_product_count_yes" defaultChecked="checked" />
                                                                    <label className="form-check-label" htmlFor="category_product_count_yes">Yes</label>
                                                                </div>
                                                                <div className="form-check form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="category_product_count" id="category_product_count_no" />
                                                                    <label className="form-check-label" htmlFor="category_product_count_no">No</label>
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-16">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span className="required">Default Items Per Page</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Determines how many items are shown per page" data-bs-original-title="Determines how many items are shown per page" data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="products_items_per_page" defaultValue="10" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Heading*/}
                                                    <div className="row mb-7">
                                                        <div className="col-md-9 offset-md-3">
                                                            <h2>Reviews Settings</h2>
                                                        </div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Allow Reviews</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Enable/disable review entries for registered customers" data-bs-original-title="Enable/disable review entries for registered customers" data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="d-flex mt-3">
                                                                {/*begin::Radio*/}
                                                                <div className="form-check form-check-custom form-check-solid me-5">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="allow_reviews" id="allow_reviews_yes" defaultChecked="checked" />
                                                                    <label className="form-check-label" htmlFor="allow_reviews_yes">Yes</label>
                                                                </div>
                                                                <div className="form-check form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="allow_reviews" id="allow_reviews_no" />
                                                                    <label className="form-check-label" htmlFor="allow_reviews_no">No</label>
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-16">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Allow Guest Reviews</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Enable/disable review entries for public guest customers" data-bs-original-title="Enable/disable review entries for public guest customers" data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="d-flex mt-3">
                                                                {/*begin::Radio*/}
                                                                <div className="form-check form-check-custom form-check-solid me-5">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="allow_guest_reviews" id="allow_guest_reviews_yes" />
                                                                    <label className="form-check-label" htmlFor="allow_guest_reviews_yes">Yes</label>
                                                                </div>
                                                                <div className="form-check form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="allow_guest_reviews" id="allow_guest_reviews_no" defaultChecked="checked" />
                                                                    <label className="form-check-label" htmlFor="allow_guest_reviews_no">No</label>
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Heading*/}
                                                    <div className="row mb-7">
                                                        <div className="col-md-9 offset-md-3">
                                                            <h2>Vouchers Settings</h2>
                                                        </div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span className="required">Minimum Vouchers</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Minimum number of vouchers customers can attach to an order" data-bs-original-title="Minimum number of vouchers customers can attach to an order" data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="products_min_voucher" defaultValue="1" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-16">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span className="required">Maximum Vouchers</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Maximum number of vouchers customers can attach to an order" data-bs-original-title="Maximum number of vouchers customers can attach to an order" data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="products_max_voucher" defaultValue="10" />
                                                            {/*end::Input*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Heading*/}
                                                    <div className="row mb-7">
                                                        <div className="col-md-9 offset-md-3">
                                                            <h2>Tax Settings</h2>
                                                        </div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span>Display Prices with Tax</span>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            <div className="d-flex mt-3">
                                                                {/*begin::Radio*/}
                                                                <div className="form-check form-check-custom form-check-solid me-5">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="product_tax" id="product_tax_yes" defaultChecked="checked" />
                                                                    <label className="form-check-label" htmlFor="product_tax_yes">Yes</label>
                                                                </div>
                                                                <div className="form-check form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="radio" defaultValue="" name="product_tax" id="product_tax_no" />
                                                                    <label className="form-check-label" htmlFor="product_tax_no">No</label>
                                                                </div>
                                                                {/*end::Radio*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="row fv-row mb-7">
                                                        <div className="col-md-3 text-md-end">
                                                            {/*begin::Label*/}
                                                            <label className="fs-6 fw-semibold form-label mt-3">
                                                                <span className="required">Default Tax Rate</span>
                                                                <i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" aria-label="Determines the tax percentage (%) applied to orders" data-bs-original-title="Determines the tax percentage (%) applied to orders" data-kt-initialized="1"></i>
                                                            </label>
                                                            {/*end::Label*/}
                                                        </div>
                                                        <div className="col-md-9">
                                                            {/*begin::Input*/}
                                                            <input type="text" className="form-control form-control-solid" name="products_tax_rate" defaultValue="15%" />
                                                            {/*end::Input*/}
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