import "./register.css";
import Topbar from "../../components/topbar/Topbar";

export default function Register() {
  return (<>
    <Topbar/>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">HiBuddys</h3>
          <span className="loginDesc">
            Connect with your Friends and World around you only on{" "}
            <b>HiBuddys</b>
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox1">
            <input placeholder="Username" className="loginInput1" />
            <input placeholder="Email" className="loginInput1" />

            <input placeholder="Password" className="loginInput1" />
            <input placeholder="Confirm Password" className="loginInput1" />
            <button className="loginButton">SignUp</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegister">Log into Your Account</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
