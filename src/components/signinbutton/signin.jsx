import React from "react";
import { useState } from "react";
import "./signin.css";
import { firebaseauth } from "../../firebase.js";

export function Signinbutton() {
  const defaultsignupinfo = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const defaultsignininfo = {
    email: "",
    password: "",
  };
  const [showmodal, setshowmodal] = useState(false);
  const [issignin, setissignin] = useState(true);
  const [signupinfo, setsignupinfo] = useState(defaultsignupinfo);
  const [signininfo, setsignininfo] = useState(defaultsignininfo);
  const [errormessage, seterrormessage] = useState("");
  const updatesignupform = (field, newvalue) => {
    setsignupinfo({
      ...signupinfo,
      [field]: newvalue,
    });
  };
  const updatesignininfo = (field, newvalue) => {
    setsignininfo({
      ...signininfo,
      [field]: newvalue,
    });
  };
  const updateuserdisplayname = async () => {
    const user = firebaseauth.currentUser;
    await user.updateProfile({
      displayName: signupinfo.username,
    });
  };
  const turnon = () => {
    setshowmodal(true);
  };
  const turnoff = () => {
    setshowmodal(false);
    seterrormessage("");
  };
  const togglesignin = () => {
    setissignin(!issignin);
  };
  const handleregister = async () => {
    try {
      const response = await firebaseauth.createUserWithEmailAndPassword(
        signupinfo.email,
        signupinfo.password
      );
      updateuserdisplayname();
      setissignin(true);
      setsignupinfo(defaultsignupinfo);
    } catch (error) {
      seterrormessage(error.message);
    }
  };
  const handlesignin = async () => {
    try {
      const response = await firebaseauth.signInWithEmailAndPassword(
        signininfo.email,
        signininfo.password
      );
      turnoff();
      localStorage.setItem("userinfo", JSON.stringify(response.user));
      window.location.reload();
      // localStorage.setItem("signouttime"= )
      console.log(response);
    } catch (error) {
      seterrormessage(error.message);
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();
    if (!issignin) {
      if (signupinfo.password !== signupinfo.confirmpassword) {
        seterrormessage("Your passwords do not match.");
      } else {
        seterrormessage("");
        handleregister();
      }
    } else {
      handlesignin();
    }
  };

  return (
    <div>
      <button className="signing" onClick={turnon}>
        <span>Sign In </span>
      </button>
      {showmodal && (
        <div className="modalcontainer">
          <div className="darkoverlay"></div>

          <div className="signinbox">
            <div className="header">
              <div className="close" onClick={turnoff}>
                <i class="fas fa-times"></i>
              </div>
            </div>

            <form className="fillin">
              <div className="daicons">
                <span className="damilk">🥛</span>
                <span className="dacow">🐄</span>
              </div>
              {issignin ? (
                <>
                  <div className="inputitem">
                    <span className="label">
                      {" "}
                      <i class="fas fa-user"></i>{" "}
                    </span>
                    <input
                      onChange={(e) => {
                        updatesignininfo("email", e.target.value);
                      }}
                      placeholder="Email"
                    />
                  </div>
                  <div className="inputitem">
                    <span className="label">
                      {" "}
                      <i class="fas fa-lock"></i>{" "}
                    </span>
                    <input
                      onChange={(e) => {
                        updatesignininfo("password", e.target.value);
                      }}
                      placeholder="Password"
                      type="password"
                    />
                  </div>{" "}
                </>
              ) : (
                <>
                  <>
                    <div className="inputitem">
                      <span className="label">
                        {" "}
                        <i class="fas fa-user"></i>{" "}
                      </span>
                      <input
                        onChange={(e) => {
                          updatesignupform("username", e.target.value);
                        }}
                        placeholder="Username"
                      />
                    </div>
                    <div className="inputitem">
                      <span className="label">
                        {" "}
                        <i class="fas fa-envelope"></i>
                      </span>
                      <input
                        onChange={(e) => {
                          updatesignupform("email", e.target.value);
                        }}
                        placeholder="Email"
                      />
                    </div>
                    <div className="inputitem">
                      <span className="label">
                        {" "}
                        <i class="fas fa-lock"></i>{" "}
                      </span>
                      <input
                        onChange={(e) => {
                          updatesignupform("password", e.target.value);
                        }}
                        placeholder="Password"
                        type="password"
                      />
                    </div>{" "}
                    <div className="inputitem">
                      <span className="label">
                        {" "}
                        <i class="fas fa-redo-alt"></i>{" "}
                      </span>
                      <input
                        onChange={(e) => {
                          updatesignupform("confirmpassword", e.target.value);
                        }}
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </div>
                  </>
                </>
              )}
              {errormessage && (
                <div className="errormessage">{errormessage}</div>
              )}

              <button onClick={onsubmit} className="submitbutton">
                {issignin ? "Sign In" : "Sign Up"}{" "}
              </button>

              <div className="signup">
                {" "}
                {issignin ? "Not a member?" : "Already a member?"}
                <span className="signupbutton" onClick={togglesignin}>
                  {" "}
                  {issignin ? "Sign up now" : "Sign in now"}{" "}
                </span>{" "}
                <i class="fas fa-arrow-right"></i>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
