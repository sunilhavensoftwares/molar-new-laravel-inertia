import "@assets/css/multi-select.min.css";
import JQueryMultiSelect from '@/Components/JQueryMultiSelect';
export const AddPaymentModal = ({options}) => {
    return (
        <div className="modal fade" id="kt_modal_add_payment" tabIndex="-1" aria-hidden="true">

            {/* begin::Modal dialog*/}
            <div className="modal-dialog modal-dialog-centered modal-lg">
                {/* begin::Modal content*/}
                <div className="modal-content">
                    {/* begin::Modal header*/}
                    <div className="modal-header">
                        {/* begin::Modal title*/}
                        <h2 className="fw-bold">Add Payment</h2>
                        {/* end::Modal title*/}
                        {/* begin::Close*/}
                        <div className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                            {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                            <span className="svg-icon svg-icon-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                        transform="rotate(-45 6 17.3137)" fill="currentColor" />
                                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            {/* end::Svg Icon*/}
                        </div>
                        {/* end::Close*/}
                    </div>
                    {/* end::Modal header*/}
                    {/* begin::Modal body*/}
                    <div className="modal-body">
                        {/* begin::Form*/}
                        <form id="kt_modal_add_payment_form" className="form" action="#">
                            {/* begin::Scroll*/}
                            <div className="d-flex flex-column">

                                {/* begin::Input group*/}
                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Patient</label>
                                            <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal"
                                                data-bs-target="#kt_modal_add_patient">Add</span>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <select className="form-select form-select-solid" data-control="select2"
                                                aria-label="Select example" data-dropdown-parent="#kt_modal_add_payment">
                                                <option defaultValue="">Select Patient</option>
                                                <option defaultValue="1">John</option>
                                                <option defaultValue="2">Afsal</option>
                                                <option defaultValue="3">Ahsan</option>
                                                <option defaultValue="3">Kiya</option>
                                            </select>
                                            {/* end::Input*/}
                                        </div>
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Doctor</label>
                                            <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal"
                                                data-bs-target="#kt_modal_add_doctor">Add</span>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <select className="form-select form-select-solid" data-control="select2"
                                                aria-label="Select example" data-dropdown-parent="#kt_modal_add_payment">
                                                <option defaultValue="">Select Doctor</option>
                                                <option defaultValue="1">Faisal</option>
                                                <option defaultValue="2">Ahmad</option>
                                                <option defaultValue="3">Saud</option>
                                            </select>
                                            {/* end::Input*/}
                                        </div>

                                    </div>
                                </div>
                                {/* end::Input group*/}
                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="required fw-semibold fs-6 mb-2">Select Category</label>
                                            <JQueryMultiSelect
                                                id="my-multiselect"
                                                options={options}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card shadow-sm border border-gray-500">
                                                {/* begin::Body*/}
                                                <div className="card-body hover-scroll-y" style={{ height: '320px' }}>
                                                    {/* begin::Heading*/}
                                                    <div className="table-responsive">
                                                        {/* begin::Table*/}
                                                        <table className="table table-row-dashed align-middle gs-0 gy-4">
                                                            {/* begin::Table head*/}
                                                            <thead>
                                                                <tr className="fs-7 fw-bold border-0 text-gray-400">
                                                                    <th className="min-w-200px">Item</th>
                                                                    <th className="min-w-100px text-center pe-0">Qty</th>
                                                                </tr>
                                                            </thead>
                                                            {/* end::Table head*/}
                                                            {/* begin::Table body*/}
                                                            <tbody className="cat_payment_tbody">

                                                            </tbody>
                                                            {/* end::Table body*/}
                                                        </table>
                                                        {/* end::Table*/}
                                                    </div>
                                                    {/* end::Heading*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* begin::Input group*/}
                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Sub Total</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input type="text" className="form-control form-control-solid" name="sub_total" />
                                            {/* end::Input*/}
                                        </div>
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Discount (%)</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input type="text" className="form-control form-control-solid" name="discount" />
                                            {/* end::Input*/}
                                        </div>

                                    </div>
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Input group*/}
                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Flat Discount</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input type="text" className="form-control form-control-solid" name="flat_discount" />
                                            {/* end::Input*/}
                                        </div>
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Gross Total</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input type="text" className="form-control form-control-solid" name="gross_total" />
                                            {/* end::Input*/}
                                        </div>
                                    </div>
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Input group*/}
                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Note</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input type="text" className="form-control form-control-solid" name="note" />
                                            {/* end::Input*/}
                                        </div>
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Deposit Amount</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input type="text" className="form-control form-control-solid" name="deposit_amount" />
                                            {/* end::Input*/}
                                        </div>
                                    </div>
                                </div>
                                {/* end::Input group*/}
                                <div className="fv-row mb-7">
                                    {/* begin::Label*/}
                                    <label className="required fw-semibold fs-6 mb-2">Deposit Type</label>
                                    {/* end::Label*/}
                                    {/* begin::Input*/}
                                    {/*  <input type="text" className="form-control form-control-solid" name="note"> */}
                                    <select className="form-select form-select-solid" data-control="select2"
                                        aria-label="Select example" data-dropdown-parent="#kt_modal_add_payment">
                                        <option defaultValue="">Select Type</option>
                                        <option defaultValue="1">Test</option>
                                        <option defaultValue="2">Test1</option>
                                    </select>
                                    {/* end::Input*/}
                                </div>
                            </div>
                            {/* end::Scroll*/}
                            {/* begin::Actions*/}
                            <div className="text-end pt-15">
                                <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                <button type="submit" className="btn btn-primary" data-kt-users-modal-action="submit">
                                    <span className="indicator-label">Submit</span>
                                </button>
                            </div>
                            {/* end::Actions*/}
                        </form>
                        {/* end::Form*/}
                    </div>
                    {/* end::Modal body*/}
                </div>
                {/* end::Modal content*/}
            </div>
            {/* end::Modal dialog*/}

        </div>
    )
}