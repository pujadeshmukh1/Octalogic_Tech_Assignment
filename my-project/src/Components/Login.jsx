import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordPopup(true);
  };

  const closeForgotPasswordPopup = () => {
    setShowForgotPasswordPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setError1('');

    if (!form.email) {
      setError('Please Enter Email ID.');
      return;
    }
    if (!form.password) {
      setError1('Please Enter Password.');
      return;
    }
    localStorage.setItem('email', form.email);
    localStorage.setItem('password', form.password);
    navigate('/home');
    console.log('Form submitted:', form);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-cover bg-center' style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?size=626&ext=jpg&ga=GA1.1.808827659.1713612951&semt=ais")' }}>
      <div className='w-full max-w-lg px-6'>
        <div className='bg-white pb-8 pt-10 mt-16 shadow-md p-6 rounded-md'>
        <div className='flex justify-center'>
        <img src="https://s3-alpha-sig.figma.com/img/b77e/850f/66a2299ddad75dbfff48fcc92195ba0a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nuTsHxoH3bgwQ4YKcgOufUSIHZAKtr2br0r719PBAjZP67iyiIIq8Nn11i5oc~NFyiiPcqCCArbpmvFhkJdWHsiLe6NUtnRYzmV2U6Ja9tvsTSL2J8UqcDMUFNXJE192P-2E0VQIQ6SuebUNmG6wQdv-r5A~KGaUxL9Vw7GRcnNmRciuPUexQxmd0mpLI0X7L0ltmYVzswTNUcKRqLgJ2npZk6PHCBvUa84phjps03Xeqcd~WpLohky8Cnd1y2-K9n1Zz9gWyPIquYYnyBUL8KOGvfs7lCwbCzobJ8PzZIRsbxvBg2yj47DeYfJsZeU3WdmIdtUk9WUCg-nAOe8Dcg__" 
            alt="" />
        </div>
        
          <p className="text-[#717070] text-center mb-6 text-2xl">Welcome to Octalogic Tech</p>
          <form onSubmit={handleSubmit}>
            <div className='mx-5'>
              <div className="mb-4">
                <label htmlFor='formBasicEmail' className='block text-lg font-medium text-gray-700'>
                  Email address
                </label>
                <input
                  type="email"
                  className='mt-2 p-2 w-full border rounded-md'
                  id="formBasicEmail"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <div className="mb-4">
                <label htmlFor='formBasicPassword' className='block text-lg font-medium text-gray-700 mt-6'>
                  Password
                </label>
                <input
                  type="password"
                  className='mt-2 p-2 w-full border rounded-md'
                  id="formBasicPassword"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
              {error1 && <p className="text-red-500">{error1}</p>}
              <div className='flex justify-end'>
                <p className='text-[#5C218B] cursor-pointer' onClick={handleForgotPasswordClick}>
                  Forgot Password?
                </p>
              </div>
              
              <button type="submit" className='bg-[#FEDFE1] mt-8 shadow-md text-black w-full py-2 rounded-md'>
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
      {showForgotPasswordPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white px-10 py-5 rounded-md max-w-md">
            <div className=''>
              <p className='text-[#662671] text-center text-xl font-semibold leading-normal'>Did you forget your password?</p>
              <p className='text-center font-semibold leading-normal text-[#655A5A]'>Enter your email address and we'll send you a link to restore password</p>
            </div>
            <div className='mx-10 mt-4'>
              <p className='leading-normal text-[17px] text-[#676767]'>Email Address</p>
              <input type="text" className='border p-2 w-full rounded-md' />
            </div>
            <div className='w-full px-10 mt-5'>
              <button className='w-full py-2 rounded bg-[#5C218B]'>
                Request reset link
              </button>
            </div>
            <div className='flex justify-center mt-4'>
              <button className="text-[#5C218B] underline cursor-pointer" onClick={closeForgotPasswordPopup}>
                Back to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
