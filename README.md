# BULLFORCE Auth App
This project implements a secure OTP-based login and verification system using React. It includes client-side validation, responsive styling, and integration with SweetAlert2 for enhanced user feedback.

## Features
- **OTP Generation and Validation**: Generates a one-time password (OTP) upon email login, which is verified in the next step.
- **Responsive UI**: Built with TailwindCSS for adaptive and accessible styling.
- **Client-Side Validation**: Ensures email format and OTP structure correctness.
- **Session Storage**: Temporarily stores OTP and user email during the verification process.
- **Alert Notifications**: SweetAlert2 alerts for user feedback.

## Screenshots
*Screenshots of Login and OTP Verification pages.*

## Getting Started
### Prerequisites
- Node.js
- NPM or Yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/saagarsocean/bullforce-auth.git
   cd bullforce-auth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

## Folder Structure
├── public ├── src │ ├── components │ │ ├── LoginPage.js │ │ ├── OTPVerification.js │ │ └── Navbar.js │ ├── images │ ├── App.js │ └── index.js ├── package.json └── README.md