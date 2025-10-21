import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading/Loading";

const SignupForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState("finished");

  const [signupForm, setSignupForm] = useState({
    email: "newbanco@gmail.com",
    password: "bancobanco",
  });

  const handleChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = "";
    try {
      setLoading("loading");
      response = await axios.post("./api/auth/signup", {
        email: signupForm.email,
        password: signupForm.password,
      });
    } catch (e) {
      setLoading("error");
    } finally {
      if (response.status === 201) {
        navigate("/login");
      } else setLoading("error");
    }
  };

  return (
    <>
      {loading === "loading" ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <h5 className='h5 center-text login-head'>
            {loading === "error" ? "Try Again" : "Sign Up"}
          </h5>
          <div className='input'>
            <label htmlFor='email' className='input-label'>
              Email address
            </label>
            <input
              name='email'
              type='email'
              className='input-data'
              placeholder='example@gmail.com'
              value={signupForm.email}
              onChange={(e) => {
                handleChange(e);
              }}
              required></input>
          </div>
          <div className='input'>
            <label htmlFor='password' className='input-label'>
              Password
            </label>
            <input
              name='password'
              type='password'
              id='password'
              className='input-data'
              placeholder='********'
              value={signupForm.password}
              onChange={(e) => {
                handleChange(e);
              }}
              required></input>
          </div>
          <div className='options'>
            <div className='input terms'>
              <input
                name='accept_t_and_c'
                type='checkbox'
                className='input-data'
                id='terms'
                required></input>
              <label htmlFor='terms'>I accept all Terms & Conditions</label>
            </div>
          </div>
          <input
            type='submit'
            value='register'
            className='btn btn-login center-text'></input>
          <Link to='/login'>
            <div className='paragraph1 center-text'>
              Already have an account{" "}
              <i className='fa-solid fa-chevron-right'></i>
            </div>
          </Link>
        </form>
      )}
    </>
  );
};

export default SignupForm;
