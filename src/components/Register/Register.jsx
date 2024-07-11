import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import auth from "../../firrebase/firebase.confige";

import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";   //on
import { FaEyeSlash } from "react-icons/fa";   //off


const Register = () => {
     const [registerError, setRegisterError] = useState('');
     const [registerSuccess, setRegisterSuccess] = useState('');
     const [showPassword, setShowPassword] = useState(false);
     const handelRegister = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value
          console.log(email, password);

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

          const auth2 = auth;
          createUserWithEmailAndPassword(auth2, email, password)
               .then(result => {

                    console.log(result.user);
                    setRegisterSuccess('User Created Successfully')
               })
               .catch(error => {
                    const errorMessage = error.message;
                    console.error(errorMessage)
                    setRegisterError(errorMessage)


               })
     }


     return (
          <div className="">
               <h2 className="text-3xl text-center m-10">Please Register Now</h2>
               <div className="flex justify-center ">
                    <form className="" onSubmit={handelRegister}>
                         <input className="mb-4 w-96 px-4 py-2 rounded" type="email" name="email" placeholder="Email Address" required /><br />
                         <div className="relative">
                              <input className="mb-4 w-96 px-4 py-2 rounded  "
                                   type={showPassword ? 'text' : 'password'}

                                   name="password"
                                   placeholder="Password"
                                   required />
                              <span className="absolute top-3 right-2  " onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <IoEyeSharp />}</span>
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