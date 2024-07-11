import { useState } from "react";
import auth from "../../firrebase/firebase.confige";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeSharp } from "react-icons/io5";   //on
import { FaEyeSlash } from "react-icons/fa";   //off


const HeroRegister = () => {
     const [registerError, setRegisterError] = useState('');
     const [registerSuccess, setRegisterSuccess] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const handelRegisterFrom = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          // console.log("Email: ", email, "Password: ", password)
          setRegisterError('');
          setRegisterSuccess('')


          if (password.length < 6) {
               setRegisterError('Password should be at least 6 characters longer')
               return;
          }
          else if (!/[A-Z][0-9]/.test(password)) {
               setRegisterError('Your Password Should have be at least one Upper case characters nor one number at least');
               return;
          }

          const auth3 = auth;
          createUserWithEmailAndPassword(auth3, email, password)
               .then(result => {

                    setRegisterSuccess('User Register Successfully');

                    e.target.email.value = ''
                    e.target.password.value = '';
                    console.log(result.user)
               })
               .catch(error => {
                    const errorMessage = error.message;
                    setRegisterError(errorMessage);
                    // console.error(error)
               });
     }
     return (
          <div className="hero bg-base-200 min-h-screen">

               <div className="hero-content flex-col lg:flex-row-reverse justify-center bg-slate-900">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Hero Register now!</h1>
                         <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat fugiat <br />ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id nisi.
                         </p>
                         {
                              registerError && <p className="text-xl text-red-600">{registerError}</p>
                         }
                         {
                              registerSuccess && <p className="text-lg text-green-700">{registerSuccess}</p>
                         }
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                         <form onSubmit={handelRegisterFrom} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email"
                                        placeholder="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control relative">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered " name="password" required />
                                   <span className="absolute bottom-11 right-2" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                             showPassword ? <FaEyeSlash /> : <IoEyeSharp />
                                        }
                                   </span>
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <input type="submit" value="Register" className="btn btn-success" />
                              </div>
                         </form>

                    </div>
               </div>
          </div>
     );
};

export default HeroRegister;