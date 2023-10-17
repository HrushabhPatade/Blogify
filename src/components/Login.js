import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/blogifylogo.png";
import "../style/login.css";
import db from "./FbConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");

  const hEmail = (event) => {
    setEmail(event.target.value);
  };
  const hPwd = (event) => {
    setPwd(event.target.value);
  };

  const nav = useNavigate();

  const login = (event) => {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pwd)
      .then((res) => {
        // alert("Login Successful");
        nav("/blogs", {state:{loginSucess: true}});
        let n = res.user.uid;
        console.log(n);
        setUid(n);
      })
      .catch((err) => alert("Invalid Credentials"));
  };

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleSignin = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      console.log(response.user);
      nav("/blogs");
      let n = response.user.uid;
      let email = response.user.email;
      let r = ref(db, "registrations/" + n);
      set(r, email);
      console.log(n);
      setUid(n);
    });
  };

  const githubProvider = new GithubAuthProvider();

  const githubSignin = () => {
    signInWithPopup(auth, githubProvider).then((response) => {
      console.log(response.user);
      nav("/blogs");
      let n = response.user.uid;
      let email = response.user.email;
      let r = ref(db, "registrations/" + n);
      set(r, email);
      console.log(n);
      setUid(n);
    });
  };

  return (
    <div className="login-bg">
    <div className="login-design">
      <div className="text-center">
        <br/>
        <img className="login-logo"
          src={logo}
          alt="..."
          style={{ height: "60px" }}
        />
      </div>
      <form id="login">
        <h1>Login</h1>
        <br />
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            placeholder="EmailID"
            onChange={hEmail}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            placeholder="Password"
            onChange={hPwd}
          />
        </div>

        <div className="row mb-4">
          <div className="col">
            <Link to={"/fp" }  className="link-class">Forgot password?</Link>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          value="Login"
          onClick={login}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to={"/reg"}  className="link-class">Register</Link>
          </p>
          <p>or sign up with:</p>

          <button
            type="button"
            className="btn btn-link btn-floating mx-1 btn-lg"
            onClick={googleSignin}
          >
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button
            type="button"
            className="btn btn-link btn-floating mx-1 btn-lg"
            onClick={githubSignin}
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>< br/>
      </form>
    </div>
    </div>
  );
};

export default Login;