import React from "react";

const Login = () => {
  return (
    <div className="w-full page-normal h-screen items-center">
      <div className="mb-8 w-full flex flex-col justify-center items-center">
        <h3 className="text-3xl text-gray-800 mb-1">HealthOS Test</h3>
        <span className="text-gray-500">
          Author
          <span className="text-blue-500 font-bold"> Md Sifatul Islam Rabbi</span>
        </span>
      </div>
      {/* <LoginForm /> */}
      <div className="mt-10 text-base text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
