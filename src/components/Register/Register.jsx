import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import auth from "../../firrebase/firebase.confige";


const Register = () => {
     const handelRegister = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value
          console.log(email, password);

          const auth2 = auth;
          createUserWithEmailAndPassword(auth2, email, password)
               .then(result => {
                    const newUser = result.user;
                    console.log(newUser)
               })
               .catch(error => {
                    console.error(error)
               })
     }


     return (
          <div className="">
               <h2 className="text-3xl text-center m-10">Please Register Now</h2>
               <div className="flex justify-center ">
                    <form onSubmit={handelRegister}>
                         <input className="mb-4 w-96 px-4 py-2 rounded" type="email" name="email" placeholder="Email Address" /><br />
                         <input className="mb-4 w-96 px-4 py-2 rounded" type="password" name="password" placeholder="Password" /><br />
                         <input className="mb-4 btn text-lg text-white btn-secondary w-96 px-4 py-2 rounded" type="submit" value="Register" />
                    </form>
               </div>
          </div>
     );
};

export default Register;