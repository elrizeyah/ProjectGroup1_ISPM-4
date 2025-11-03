import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  const getBackgroundColor = (value) => (value ? '#f5e0c3' : '#ffffff');

  const createInputHandlers = (field) => ({
    onFocus: (e) => {
      e.target.style.borderColor = '#563d28';
      e.target.style.backgroundColor = '#f5e0c3';
    },
    onBlur: (e) => {
      e.target.style.backgroundColor = getBackgroundColor(data[field]);
      e.target.style.borderColor = '#D1D5DB';
    },
    onMouseEnter: (e) => {
      if (document.activeElement !== e.target) {
        e.target.style.borderColor = '#563d28';
        e.target.style.backgroundColor = '#f5e0c3';
      }
    },
    onMouseLeave: (e) => {
      if (document.activeElement !== e.target) {
        e.target.style.backgroundColor = getBackgroundColor(data[field]);
        e.target.style.borderColor = '#D1D5DB';
      }
    },
  });

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
        }
      `}</style>

      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/images/1.png")' }}
      >
        <Head title="Register" />

        {/* Logo */}
        <div className="absolute top-6 left-8">
          <img
            src="/images/2.png"
            alt="888 Chocolates & More Logo"
            className="drop-shadow-lg"
            style={{ width: '200px' }}
          />
        </div>

        {/* Form Card */}
        <div
          className="bg-white bg-opacity-95 p-8 rounded-2xl shadow-lg w-full max-w-md text-center"
          style={{ marginTop: '3rem' }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">SIGN UP</h2>

          <form onSubmit={submit}>
            {/* Name */}
            <div className="text-left">
              <InputLabel htmlFor="name" value="Username" />
              <TextInput
                id="name"
                name="name"
                value={data.name}
                className="mt-1 block w-full rounded-md border border-gray-300 transition-colors"
                autoComplete="name"
                isFocused={true}
                onChange={(e) => setData('name', e.target.value)}
                required
                {...createInputHandlers('name')}
                style={{
                  backgroundColor: getBackgroundColor(data.name),
                }}
              />
              <InputError message={errors.name} className="mt-2" />
            </div>

            {/* Email */}
            <div className="mt-4 text-left">
              <InputLabel htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full rounded-md border border-gray-300 transition-colors"
                autoComplete="username"
                onChange={(e) => setData('email', e.target.value)}
                required
                {...createInputHandlers('email')}
                style={{
                  backgroundColor: getBackgroundColor(data.email),
                }}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4 text-left">
              <InputLabel htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full rounded-md border border-gray-300 transition-colors"
                autoComplete="new-password"
                onChange={(e) => setData('password', e.target.value)}
                required
                {...createInputHandlers('password')}
                style={{
                  backgroundColor: getBackgroundColor(data.password),
                }}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>

            {/* Confirm Password */}
            <div className="mt-4 text-left">
              <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full rounded-md border border-gray-300 transition-colors"
                autoComplete="new-password"
                onChange={(e) => setData('password_confirmation', e.target.value)}
                required
                {...createInputHandlers('password_confirmation')}
                style={{
                  backgroundColor: getBackgroundColor(data.password_confirmation),
                }}
              />
              <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <PrimaryButton
                className="py-2 rounded-md flex justify-center items-center text-white font-semibold text-base"
                disabled={processing}
                style={{
                  fontSize: '15px',
                  width: '120px',
                  backgroundColor: '#422912ff',
                  transition: 'background 0.3s',
                  cursor: processing ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!processing) e.currentTarget.style.backgroundColor = '#2e1e0fff';
                }}
                onMouseLeave={(e) => {
                  if (!processing) e.currentTarget.style.backgroundColor = '#422912ff';
                }}
              >
                SIGN UP
              </PrimaryButton>
            </div>

            {/* Sign In Link */}
            <p className="text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <Link
                href={route('login')}
                className="text-blue-600 font-medium hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
