import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import cardLogo from '../images/card-logo.png';

const OTPVerification = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', ''])
  const navigate = useNavigate()
  const storedOtp = sessionStorage.getItem('otp')
  const email = sessionStorage.getItem('email')

  const handleOtpChange = (e, index) => {
    let value = e.target.value;
    if (/[^0-9]/.test(value)) 
    
    return

    const updatedOtpValues = [...otpValues]
    updatedOtpValues[index] = value
    setOtpValues(updatedOtpValues)

    if (value && index < otpValues.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus()
    }
  };

  const handleVerifyOtp = () => {
    const otpEntered = otpValues.join('')
    if (otpEntered === storedOtp) {
      Swal.fire('Success!', 'OTP verified successfully.', 'success').then(() => {
        sessionStorage.clear()
        setOtpValues(['', '', '', ''])
        navigate('/')
      })
    } else {
      Swal.fire('Failed!', 'Incorrect OTP. Please try again.', 'error')
      setOtpValues(['', '', '', ''])
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(path-to-your-background-image.jpg)' }}>
      <div className="bg-gradient-to-b from-gray-800 to-transparent p-8 rounded-lg shadow-md w-96 text-center relative border border-yellow-500">
        
        <img src={cardLogo} alt="BullForce Logo" className="mx-auto h-40 mb-4" />
        
        <h1 className="text-white font-bold mb-2 text-2xl">OTP</h1>
        <p className=" text-gray-400 mb-4">Please enter OTP sent to {email}</p>
        
        <div className="flex justify-between mb-4">
          {otpValues.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg bg-white text-gray-800"
            />
          ))}
        </div>

        <button
          onClick={handleVerifyOtp}
          className="w-full bg-yellow-500 text-black p-3 rounded font-bold hover:bg-yellow-600"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
