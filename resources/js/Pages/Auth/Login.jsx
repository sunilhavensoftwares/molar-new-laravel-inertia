import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo_white_image from '@assets/media/logos/logo-white.png';
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    const handleTogglePassword = (e) => {
        const container = e.target.closest('.position-relative');
        const input = container?.querySelector('input');
        const eyeSlash = container?.querySelector('.bi-eye-slash');
        const eye = container?.querySelector('.bi-eye');

        if (input) {
            const currentType = input.getAttribute('type');
            const isPassword = currentType === 'password';

            // Toggle input type
            input.setAttribute('type', isPassword ? 'text' : 'password');

            // Toggle visibility icons
            if (isPassword) {
                eyeSlash?.classList.add('d-none');
                eye?.classList.remove('d-none');
            } else {
                eye?.classList.add('d-none');
                eyeSlash?.classList.remove('d-none');
            }
        }
    };

    return (
        <GuestLayout>
            <Head title="Log in" />


            <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">

                <div className="d-flex flex-center flex-lg-start flex-column">

                    <a href="#" className="mb-7">
                        <img alt="Logo" src={logo_white_image} className="h-150px h-md-100 " />
                    </a>

                </div>

            </div>


            <div className="d-flex flex-center w-lg-50 p-10">

                <div className="card rounded-3 w-md-550px">

                    <div className="card-body p-10 p-lg-20">

                        <form onSubmit={submit} className="form w-100" noValidate="noValidate">

                            <div className="text-center mb-11">

                                <h1 className="text-dark fw-bolder mb-3">Sign In</h1>


                                <div className="text-gray-500 fw-semibold fs-6">Please enter your detail!</div>

                            </div>


                            <div className="fv-row mb-8">

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control bg-transparent"
                                    autoComplete="username"
                                    isFocused={true}
                                    placeholder="Email"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && <InputError message={errors.email} className="mt-2 text-danger" />}
                            </div>

                            <div className="fv-row mb-3" data-kt-password-meter="true">

                                <div className="position-relative mb-3">
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="form-control bg-transparent"
                                        autoComplete="current-password"
                                        placeholder="Password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />


                                    <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility" onClick={handleTogglePassword}>
                                        <i className="bi bi-eye-slash fs-2"></i>
                                        <i className="bi bi-eye fs-2 d-none"></i>
                                    </span>
                                </div>
                                {errors.password && <InputError message={errors.password} className="mt-2 text-danger" />}

                            </div>


                            <div className="d-grid mb-10">
                              

                                <PrimaryButton className="btn btn-primary me-4" disabled={processing}>
                                    <span className="indicator-label">Sign In</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </PrimaryButton>
                            </div>


                            <div className="text-gray-500 text-center fw-semibold fs-6">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="link-primary"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>

                        </form>

                    </div>

                </div>

            </div>



        </GuestLayout>
    );
}
