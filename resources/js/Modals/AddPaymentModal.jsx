import { useMemo, useState } from 'react';
import Select2Input from '@/Components/Select2Input';
export default function AddPaymentModal ({options}) {
    // Normalize incoming options to { id, label }
    const normalizedOptions = useMemo(() => {
        if (!Array.isArray(options)) return [];
        return options.map((opt) => {
            
            const id = (opt && (opt.value ?? opt.id ?? opt.key)) ?? String(opt);
            const label = (opt && (opt.label ?? opt.text ?? opt.name)) ?? String(opt);
            const price = (opt && (opt.data.price ?? opt.data.price ?? opt.data.price)) ?? String(opt);
             return { id: String(id), label: String(label), price: String(price)  };
        });        
    }, [options]);

    const labelById = useMemo(() => {        
        const m = {};
        normalizedOptions.forEach(({ id, label, price }) => { m[id] = label+' - SAR '+price; });
        return m;
    }, [normalizedOptions]);

    const [selectedCategoryIds, setSelectedCategoryIds] = useState([]); // array of string ids
    const [qtyById, setQtyById] = useState({}); // { [id]: number }

    const handleCategoriesChange = (values) => {
        const nextIds = Array.isArray(values) ? values.map(String) : [];
        setSelectedCategoryIds(nextIds);
        setQtyById((prev) => {
            const next = { ...prev };
            // Remove quantities for deselected
            Object.keys(next).forEach((k) => { if (!nextIds.includes(k)) delete next[k]; });
            // Ensure defaults for newly selected
            nextIds.forEach((id) => { if (!next[id]) next[id] = 1; });
            return next;
        });
    };

    const handleQtyChange = (id, val) => {
        const n = Math.max(1, parseInt(val || '1', 10));
        setQtyById((prev) => ({ ...prev, [id]: n }));
    };

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
                                            <Select2Input
                                                className="form-select form-select-solid"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_add_payment"
                                                initOn="#kt_modal_add_payment"
                                                aria-label="Select example"
                                                name="patient_id"
                                            >
                                                <option value="">Select Patient</option>
                                                <option value="1">John</option>
                                                <option value="2">Afsal</option>
                                                <option value="3">Ahsan</option>
                                                <option value="4">Kiya</option>
                                            </Select2Input>
                                            {/* end::Input*/}
                                        </div>
                                        <div className="col-md-6">
                                            {/* begin::Label*/}
                                            <label className="required fw-semibold fs-6 mb-2">Doctor</label>
                                            <span className="badge badge-primary badge-lg float-end" data-bs-toggle="modal"
                                                data-bs-target="#kt_modal_add_doctor">Add</span>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <Select2Input
                                                className="form-select form-select-solid"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_add_payment"
                                                initOn="#kt_modal_add_payment"
                                                aria-label="Select doctor"
                                                data-placeholder="Select categories"
                                                name="doctor_id"
                                            >
                                                <option value="">Select Doctor</option>
                                                <option value="1">Faisal</option>
                                                <option value="2">Ahmad</option>
                                                <option value="3">Saud</option>
                                            </Select2Input>
                                            {/* end::Input*/}
                                        </div>

                                    </div>
                                </div>
                                {/* end::Input group*/}
                                <div className="fv-row mb-7">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="required fw-semibold fs-6 mb-2">Select Category</label>
                                            <Select2Input
                                                className="form-select form-select-solid"
                                                data-control="select2"
                                                data-dropdown-parent="#kt_modal_add_payment"
                                                data-placeholder="Select categories"
                                                initOn="#kt_modal_add_payment"
                                                name="category_ids"
                                                multiple
                                                onChange={handleCategoriesChange}
                                            >
                                                {normalizedOptions.map(({ id, label }) => (
                                                    <option key={id} value={id}>{label}</option>
                                                ))}
                                            </Select2Input>
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
                                                                {selectedCategoryIds.length === 0 && (
                                                                    <tr>
                                                                        <td className="text-muted" colSpan={2}>No category selected</td>
                                                                    </tr>
                                                                )}
                                                                {selectedCategoryIds.map((id) => (
                                                                    <tr key={id}>
                                                                        <td className="align-middle">{labelById[id] ?? id}</td>
                                                                        <td className="text-center pe-0" style={{ width: 100 }}>
                                                                            <input
                                                                                type="number"
                                                                                min={1}
                                                                                className="form-control form-control-sm text-center"
                                                                                value={qtyById[id] ?? 1}
                                                                                onChange={(e) => handleQtyChange(id, e.target.value)}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                ))}
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
                                    <Select2Input
                                        className="form-select form-select-solid"
                                        data-control="select2"
                                        data-dropdown-parent="#kt_modal_add_payment"
                                        initOn="#kt_modal_add_payment"
                                        aria-label="Select example"
                                        name="deposit_type"
                                    >
                                        <option value="">Select Type</option>
                                        <option value="1">Test</option>
                                        <option value="2">Test1</option>
                                    </Select2Input>
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