import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import axios from 'axios'
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`

const Register = () => {
  const {user,createUser,googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
    .then((result) => {
      if (result.user) {
        toast.success("You have logged in succesfully!", {
          position: "top-right"
        });
      }
      navigate(location?.state || "/",{replace:true});
    });
  };
  
  useEffect(() => {
    if (user) navigate(location?.state);
  },[]);

  const onSubmit =(data) => {
   const {email,password,image} = data
   const imageFile = {image: data.image[0]}
    if (password < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password Should have at least one Uppercase character"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your Password Should have at least one Lowercase character"
      );
      return;
    }
    setRegisterError("");

    createUser(email, password, image)
      .then(() => {
        axios.post(imageHostingAPI, imageFile, {
          headers:{
            'content-type': 'multipart/form-data',
          }     
        })
        .then(res=>{
          console.log(res.data)
        })
        
        Swal.fire({
          title: "You have register successfully!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state || "/", { replace: true });
      })
      .catch((error) => {
        setRegisterError(toast.error(`You credentials is not correct ${error.message}`));
        setRegisterError('')
      });
      reset()
  };
  return (
    <div className="min-h-screen my-10">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 border rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-3xl font-bold text-center">Register Now!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {registerError && <p className="text-red-500">{registerError}</p>}
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="account" className="block dark:text-gray-600">
              Bank Account No
            </label>
            <input
              type="text"
              name="account"
              id="account"
              placeholder="Account Number"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("account", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="salary" className="block dark:text-gray-600">
              Monthly Salary
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              placeholder="Monthly Salary"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("salary", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="designation" className="block dark:text-gray-600">
            Designation
            </label>
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="Designation"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("designation", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
            
            <label htmlFor="role" className="block">
              Role
            </label>
            <select {...register("role")} className="select select-bordered w-full max-w-md mt-2 mb-2">
              <option disabled selected>
                Select Role
              </option>
              <option>HR</option>
              <option>Employee</option>
            </select>
            {errors.username && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
            <label htmlFor="image" className="block dark:text-gray-600">
              PhotoURL
            </label>
            <input {...register("image", { required: true })}
            type="file" className="file-input file-input-bordered file-input-md w-full max-w-md" />

            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="flex justify-center items-center">
                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  className="w-full px-6 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <span
                  className=""
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 bg-[#27b6de] text-white">
            Create Account
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={() => handleSocialLogin(googleLogin)} aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-sm text-center dark:text-gray-600">
          Already Registerd?
          <Link
            to="/login"
            href="#"
            className="focus:underline hover:underline text-blue-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
