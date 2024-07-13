import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firrebase/firebase.confige";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";   //on
import { FaEyeSlash } from "react-icons/fa";   //off

const Login = () => {
     const [loginError, setLoginError] = useState('');
     const [loginSuccess, setLoginSuccess] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const handelLogin = (e) => {

          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password)
          setLoginError('');
          setLoginSuccess('');



          signInWithEmailAndPassword(auth, email, password)
               .then(result => {
                    const user = result.user;
                    setLoginSuccess('Login Successfully')
                    console.log(user)
               })
               .catch(error => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    setLoginError(errorMessage)
               })

     }

     return (
          <div className="hero bg-base-200 min-h-screen">
               <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className=" lg:text-left ml-4  h-72">
                         <h1 className="text-5xl font-bold mb-16 ">Login now!</h1>

                         {
                              loginError && <p className="py-6 text-red-500 text-lg ">{loginError}</p>
                         }
                         {
                              loginSuccess && <p className="py-6 text-green-400 text-xl "> {loginSuccess}</p>
                         }

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelLogin} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" placeholder="email" required name="email" className="input input-bordered" />
                              </div>
                              <div className="form-control relative ">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type={showPassword ? "text" : "password"} placeholder="password" required name="password" className="input input-bordered" />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>

                                   <span className="absolute right-2 top-1/2 " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <IoEyeSharp />}</span>

                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-primary">Login</button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Login;