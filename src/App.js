import { useState } from "react";
import "./index.css"; // Import the updated CSS file

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  function handleClickLoginHere() {
    setIsLogin(false);
  }
  function handleClickRegisterHere() {
    setIsLogin(true);
  }

  return (
    <div className="credentials-container">
      {isLogin ? (
        <LoginPage handleClickRegisterHere={handleClickLoginHere} />
      ) : (
        <RegisterPage handleClickLoginHere={handleClickRegisterHere} />
      )}
    </div>
  );
}

function LoginPage({ handleClickRegisterHere }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Successfully logged in, logic will be defined later");
  }

  function PasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <form onSubmit={handleSubmit} className="credentials-form">
      <p className="credentials-title">Login</p>
      <InputField
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPassword={showPassword}
        PasswordVisibility={PasswordVisibility}
      />
      <div className="forgot-password-container">
        {/* So in case if user forgot password, redirect it to another page for recovery, 
        have to be implmented later */}
        <a href="" className="forgot-password">
          Forgot password?
        </a>
      </div>
      {/* Created a reusable comp here, ctrl+click on Closing comp tag to find its loc */}
      <Button type="submit" className="credentials-button">
        Login
      </Button>
      <p className="credentials-in-toggle">
        Don't have an account?
        <span onClick={handleClickRegisterHere}> Register here!</span>
      </p>
    </form>
  );
}
// Register Page is Different Comp, will put that later in another file
function RegisterPage({ handleClickLoginHere }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Successfully registered, logic will be defined later");
  }

  function PasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <form onSubmit={handleSubmit} className="credentials-form">
      <p className="credentials-title">Register</p>
      <InputField
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
      />
      <InputField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <InputField
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showPassword={showPassword}
        PasswordVisibility={PasswordVisibility}
        placeholder="Password"
      />
      <PasswordInput
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        showPassword={showPassword}
        PasswordVisibility={PasswordVisibility}
        placeholder="Confirm Password"
      />
      <Button type="submit" className="credentials-button">
        Register
      </Button>
      <p className="credentials-in-toggle">
        Already have an account?{" "}
        <span onClick={handleClickLoginHere}>Sign in here!</span>
      </p>
    </form>
  );
}
// Resuable Component  1
// After you get a better understanding, would put these in general components file
function InputField({ type, value, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input-field"
      required
    />
  );
}
// Resuable Component  2

function PasswordInput({
  value,
  onChange,
  showPassword,
  PasswordVisibility,
  placeholder = "Password",
}) {
  return (
    <div className="password-container">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
        required
      />
      <span className="password-toggle" onClick={PasswordVisibility}>
        {showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye-slash"
            viewBox="0 0 16 16"
          >
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
          </svg>
        )}
      </span>
    </div>
  );
}
// Resuable Component  2

function Button({ type = "button", onClick, children, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
