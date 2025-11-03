import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <>
            {/* Autofill override styles */}
            <style>{`
              input:-webkit-autofill {
                -webkit-box-shadow: 0 0 0px 1000px #fff4e5ff inset !important;
                -webkit-text-fill-color: #000 !important;
                transition: background-color 5000s ease-in-out 0s;
              }
              input:-webkit-autofill:focus {
                -webkit-box-shadow: 0 0 0px 1000px #fff4e5ff inset !important;
                -webkit-text-fill-color: #000 !important;
              }
              input:-webkit-autofill:hover {
                -webkit-box-shadow: 0 0 0px 1000px #fff4e5ff inset !important;
                -webkit-text-fill-color: #000 !important;
              }
            `}</style>

            <div
                style={{
                    backgroundImage: "url('/images/1.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    flexDirection: 'column',
                    padding: '2rem',
                }}
            >
                <Head title="Log in" />

                {/* Container for logo + box */}
                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '400px',
                    }}
                >
                    {/* Logo */}
                    <img
                        src="/images/2.png"
                        alt="Logo"
                        style={{
                            width: '50rem',
                            height: '12rem',
                            objectFit: 'contain',
                            zIndex: 2,
                            marginBottom: '-90px', // pulls logo up over box
                        }}
                    />

                    {/* Login Box */}
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.98)',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                            padding: '3rem 2rem 2rem 2rem',
                            width: '100%',
                            zIndex: 1,
                            textAlign: 'left',
                        }}
                    >
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}

                        <h2
                            style={{
                                fontWeight: '700',
                                color: '#000',
                                fontSize: '1.4rem',
                                letterSpacing: '0.5px',
                                marginBottom: '2rem',
                                marginTop:'3rem',
                                textAlign: 'center',
                            }}
                        >
                            LOG IN
                        </h2>

                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="email" value="Username" />

                                <TextInput
    id="email"
    type="email"
    name="email"
    value={data.email}
    className="mt-1 block w-full rounded-md border transition-colors"
    style={{
        backgroundColor: data.email.trim() ? '#fff4e5ff' : '#ffffff',
    }}
    autoComplete="username"
    isFocused={true}
    onChange={(e) => setData('email', e.target.value)}
    onFocus={(e) => {
        e.target.style.borderColor = '#563d28';
        e.target.style.backgroundColor = '#fff4e5ff';
    }}
    onBlur={(e) => {
        e.target.style.backgroundColor = data.email.trim() ? '#fff4e5ff' : '#ffffff';
        e.target.style.borderColor = '#D1D5DB';
    }}
    onMouseEnter={(e) => {
        if (document.activeElement !== e.target) {
            e.target.style.borderColor = '#563d28';
            e.target.style.backgroundColor = '#fff4e5ff';
        }
    }}
    onMouseLeave={(e) => {
        if (document.activeElement !== e.target) {
            e.target.style.backgroundColor = data.email.trim() ? '#fff4e5ff' : '#ffffff';
            e.target.style.borderColor = '#D1D5DB';
        }
    }}
/>


                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
    id="password"
    type="password"
    name="password"
    value={data.password}
    className="mt-1 block w-full rounded-md border transition-colors"
    style={{
        backgroundColor: data.password.trim() ? '#fff4e5ff' : '#ffffff',
    }}
    autoComplete="current-password"
    onChange={(e) => setData('password', e.target.value)}
    onFocus={(e) => {
        e.target.style.borderColor = '#563d28';
        e.target.style.backgroundColor = '#fff4e5ff';
    }}
    onBlur={(e) => {
        e.target.style.backgroundColor = data.password.trim() ? '##fff4e5ff' : '#ffffff';
        e.target.style.borderColor = '#D1D5DB';
    }}
    onMouseEnter={(e) => {
        if (document.activeElement !== e.target) {
            e.target.style.borderColor = '#563d28';
            e.target.style.backgroundColor = '#fff4e5ff';
        }
    }}
    onMouseLeave={(e) => {
        if (document.activeElement !== e.target) {
            e.target.style.backgroundColor = data.password.trim() ? '#fff4e5ff' : '#ffffff';
            e.target.style.borderColor = '#D1D5DB';
        }
    }}
/>

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                                <label className="flex items-center">
                                    <Checkbox
                                        style={{ color: '#563d28' }}
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData('remember', e.target.checked)
                                        }
                                    />
                                    <span className="ml-2">Remember Me</span>
                                </label>

                                {/* Forgot Password */}
                               {canResetPassword && (
  <Link
    href={route('password.request')}
    className="text-sm text-blue-600 hover:underline"
  >
    Forgot Password?
  </Link>
                                )}
                            </div>

                            <div className="mt-6 flex justify-center">
                                <PrimaryButton
                                    className="w-full max-w-xs py-2 rounded-md flex justify-center items-center"
                                    disabled={processing}
                                    style={{
                                        width: '120px',
                                        backgroundColor: '#563d28',
                                        color: '#fff',
                                        fontWeight: '600',
                                        fontSize: '1rem',
                                        borderRadius: '6px',
                                        padding: '0.6rem',
                                        transition: 'background 0.3s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#3e2c1a'; // darker brown
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#563d28'; // original brown
                                    }}
                                >
                                    LOG IN
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
