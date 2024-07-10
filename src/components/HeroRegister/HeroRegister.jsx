import { useState } from "react";
import auth from "../../firrebase/firebase.confige";
import { createUserWithEmailAndPassword } from "firebase/auth";


const HeroRegister = () => {
     const handelRegisterFrom = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log("Email: ", email, "Password: ", password)

          e.target.email.value = ''
          e.target.password.value = ''

          const auth3 = auth;
          createUserWithEmailAndPassword(auth3, email, password)
               .then(result => {
                    const newUser = result.user;
                    console.log(newUser)
               })
               .catch(error => {
                    console.error(error)
               })



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
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="password" className="input input-bordered" name="password" required />
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