import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firrebase/firebase.confige";

import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";   //on
import { FaEyeSlash } from "react-icons/fa";   //off
import { Link } from "react-router-dom";


const Register = () => {
     const [registerError, setRegisterError] = useState('');
     const [registerSuccess, setRegisterSuccess] = useState('');
     const [showPassword, setShowPassword] = useState(false);

     const handelRegister = e => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const password = e.target.password.value;
          const terms = e.target.terms.checked;

          setRegisterError('');
          setRegisterSuccess('');

          if (password.length < 6) {
               setRegisterError('Password should be at least 6 characters longer')
               return;
          }
          else if (! /[A-Z]/.test(password)) {
               setRegisterError('Your Password Should have be at least one Upper case characters ');
               return;

          }
          else if (!/[0-9]/.test(password)) {
               setRegisterError('Your Password Should have be at least  one number');
               return;
          }
          else if (!terms) {
               setRegisterError('Plz Checked Terms And Conditions');
               return
          }



          createUserWithEmailAndPassword(auth, email, password)
               .then(result => {
                    const user = result.user

                    setRegisterSuccess('User Created Successfully');

                    // update profile

                    updateProfile(user, {
                         displayName: name
                    })
                         .then()
                         .catch()

                    // email verification

                    sendEmailVerification(user)
                         .then(() => {
                              alert("Please check your email and verify your account ")
                         });
                    e.target.email.value = '';
                    e.target.password.value = '';
                    e.target.name.value = '';
               })
               .catch(error => {
                    const errorMessage = error.message;

                    setRegisterError(errorMessage)


               })
     }


     return (
          <div className="">
               <h2 className="text-3xl text-center m-10">Please Register Now</h2>
               <div className="flex justify-center ">
                    <form className="" onSubmit={handelRegister}>
                         <input className="mb-4 w-96 px-4 py-2 rounded"
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              required
                         />
                         <br />
                         <input className="mb-4 w-96 px-4 py-2 rounded"
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              required
                         />
                         <br />
                         <div className="relative  mb-4">
                              <input className=" w-96 px-4 py-2 rounded  "
                                   type={showPassword ? 'text' : 'password'}

                                   name="password"
                                   placeholder="Password"
                                   required />
                              <span className="absolute top-3 right-2  " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <IoEyeSharp />}</span>

                         </div>
                         <div>
                              <p className="text-sm">Already havre a an account?</p>
                              <Link className="text-xl text-red-400 hover:underline " to={"/login"}> Login</Link>
                         </div>
                         <br />
                         <div className="">
                              <input className="mr-3" type="checkbox" name="terms" id="" />
                              <label htmlFor="terms" >Accept Our Terms And Conditions</label>
                         </div>
                         <br />
                         <input className="mb-4 btn text-lg text-white btn-secondary w-96 px-4 py-2 rounded" type="submit" value="Register" />

                         {
                              registerError && <p className="text-lg text-red-600">{registerError}</p>
                         }
                         {
                              registerSuccess && <p className="text-lg text-green-500">{registerSuccess}</p>
                         }
                    </form>

               </div>
          </div>
     );
};

export default Register;