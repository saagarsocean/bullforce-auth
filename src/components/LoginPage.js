import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import cardLogo from '../images/card-logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email) {
      Swal.fire('Error', 'Please enter your email to login', 'error')
      return
    }

    const emailRegex = /^[^\s@]+@gmail\.com$/

    if (email && emailRegex.test(email)) {
      const otp = Math.floor(1000 + Math.random() * 9000).toString()
      sessionStorage.setItem('email', email)
      sessionStorage.setItem('otp', otp)
      navigate('/enter-otp');
      Swal.fire(`OTP sent to ${email}: ${otp}`)
    } else {
      Swal.fire('Error', 'Please enter a valid email', 'error')
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(path-to-your-background-image.jpg)'
      }}
    >
      <div className="bg-gradient-to-b from-gray-800 to-transparent p-8 rounded-lg shadow-md w-96 text-center relative border border-yellow-500">
        <img
          src={cardLogo}
          alt="BullForce Logo"
          className="mx-auto h-40 mb-4 "
        />
        <h2 className="text-white font-bold mb-2 text-xl">Login</h2>
        <p className="text-white mb-6 mt-8 text-2xl">Login with Email ID</p>
        
        <input
          type="email"
          className="w-full p-3 border border-gray-300 rounded mb-4 bg-white text-gray-800"
          placeholder='Enter your Email Id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <button
          onClick={handleLogin}
          className="w-full bg-yellow-500 text-black p-3 rounded font-bold hover:bg-yellow-600 text-2xl"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
