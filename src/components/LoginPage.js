import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { ClipLoader } from 'react-spinners'
import cardLogo from '../images/card-logo.png'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email) {
      setError('Please enter your email to login')
      Swal.fire('Error', 'Please enter your email to login', 'error')
      return
    }

    const emailRegex = /^[^\s@]+@gmail\.com$/

    if (email && emailRegex.test(email)) {
      setError('')
      setLoading(true)
      const otp = Math.floor(1000 + Math.random() * 9000).toString()
      sessionStorage.setItem('email', email)
      sessionStorage.setItem('otp', otp)

      Swal.fire({
        title: 'OTP Sent!',
        text: `OTP sent to ${email}: ${otp}`,
        icon: 'success',
        background: '#f6f8fb',
        color: '#333',
        confirmButtonColor: '#f59e0b',
        confirmButtonText: 'Proceed to OTP Verification',
        timer: 3000,
        timerProgressBar: true,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading()
        },
      }).then(() => {
        navigate('/enter-otp')
        setLoading(false)
      });
    } else {
      setError('Please enter a valid email')
      Swal.fire('Error', 'Please enter a valid email', 'error')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
    >
      <div
        className="p-8 pb-20 rounded-lg shadow-md w-[450px] h-[550px] text-center relative border border-yellow-500"
        style={{
          background: `linear-gradient(to bottom, rgb(29, 38, 53) 0%, transparent 95%), 
                      linear-gradient(to top, rgb(152, 108, 53) 0%, transparent 85%)`,
        }}
      >
        <motion.img
          src={cardLogo}
          alt="BullForce Logo"
          className="mx-auto h-40 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <h2 className="text-white font-bold mt-8 mb-2 text-2xl">Login</h2>
        <p className="text-white mb-10 mt-8 text-2xl">Login with Email ID</p>

        <motion.input
          type="email"
          className={`w-full p-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded mb-4 bg-white text-gray-800`}
          placeholder="Enter your Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {loading ? (
          <div className="flex justify-center mb-4">
            <ClipLoader color="#f59e0b" loading={loading} size={50} />
          </div>
        ) : (
          <motion.button
            onClick={handleLogin}
            className="w-full bg-yellow-500 text-black p-3 rounded font-bold hover:bg-yellow-600 text-2xl mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log in
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default LoginPage
