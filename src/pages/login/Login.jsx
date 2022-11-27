import './login.css'
 import Topbar from "../../components/topbar/Topbar";

export default function Login() {
  return (
    <>
     <Topbar/>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">HiBuddys</h3>
          <span className="loginDesc">
            Connect with your Friends Nand World around you only on{" "}
            <b>HiBuddys</b>
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password"  className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegister">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
