import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login w-60 mx-auto mt-9 flex flex-col justify-center items-center">
      <Link to="/">
        <img src="Images\login-logo.png" alt="" className=" w-32" />
      </Link>
      <form action="" className="mt-11 p-5 w-80">
        <h1 className="mb-5 text-3xl font-medium">Sign In</h1>
        <div className="flex flex-col mb-3">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button-sign" onClick={signIn}>
          Sign In
        </button>
        <p className="info text-xs mt-4">
          By continuing, you agree to Amazon's Fake Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button className="button-create" onClick={register}>
          Create your Amazone Account
        </button>
      </form>
    </div>
  );
}
export default Login;
