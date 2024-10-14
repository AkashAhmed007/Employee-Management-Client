import { Link } from "react-router-dom";
import { useContext,useEffect,useState } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { Helmet } from "react-helmet";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
// import axios from "axios";
const Login = () => {
  const { user, signInUser, googleLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((res) => {
      if (res.user) {
        Swal.fire({
          title: "You have logged in successfully!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
      navigate(location?.state || "/", { replace: true });
      // const user2 = {
      //   username: res._tokenResponse.displayName,
      //   email: res._tokenResponse.email,
      //   image: res._tokenResponse.photoUrl,
      //   role: "Employee",
      //   isVerified: false,
      // };
      // axios.post("https://employee-management-server-five.vercel.app/socialloginuser", user2);
    });
  };

  
  useEffect(() => {
    if (user) navigate(location?.state);
  },[]);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            title: "You have logged in successfully!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        navigate(location?.state || "/",{replace:true});
      })
      .catch((error) => {
        setLoginError(toast.error(`You credentials is not correct ${error.message}`));
        setLoginError('')
      });
      reset()
  };

  return (
    <div className="min-h-screen my-5">
    <ToastContainer></ToastContainer>
      <Helmet>
        <title>People-HR || Login</title>
      </Helmet>
      <div className="container px-6 mx-auto bg-gray-600">
        <div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
             People-HR
            </h2>

            <h3 className="mt-2 text-2xl font-semibold text-gray-100">
              Hello <span className="text-blue-400">Guest</span>
            </h3>
          </div>
          <div className="flex mt-10 lg:w-1/2 lg:justify-end lg:mt-10 ">
            <div className="w-full max-w-md mt-16 rounded-lg dark:bg-gray-800">
              <div className="px-6 py-8 text-center">
                <div className="min-h-screen my-20">
                  <div className="w-full mx-auto max-w-md p-4 rounded-lg border bg-white shadow sm:p-8 dark:bg-gray-500 dark:text-gray-800">
                    <h2 className="mb-3 text-3xl font-bold text-center">
                      Login to your account
                    </h2>
                    <p className="text-sm text-center dark:text-gray-600">
                      Dont have account?
                      <Link
                        to="/register"
                        href="#"
                        className="focus:underline hover:underline text-blue-600 ml-3"
                      >
                        Sign up here
                      </Link>
                    </p>
                    <div className="my-6 space-y-4">
                      <button
                        onClick={() => handleSocialLogin(googleLogin)}
                        aria-label="Login with Google"
                        type="button"
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                      </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                      <hr className="w-full dark:text-gray-600" />
                      <p className="px-3 dark:text-gray-600">OR</p>
                      <hr className="w-full dark:text-gray-600" />
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      id="form"
                      className="space-y-6"
                    >
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="email"
                          className="block dark:text-gray-600"
                        >
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
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="password"
                          className="block dark:text-gray-600"
                        >
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
                            className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                          />
                          <span
                            className=""
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <FaEyeSlash></FaEyeSlash>
                            ) : (
                              <FaEye></FaEye>
                            )}
                          </span>
                        </div>
                        {errors.password && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                        {loginError && (
                          <p className="text-red-500">{loginError}</p>
                        )}
                      </div>
                      <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 bg-[#27b6de] text-white">
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
