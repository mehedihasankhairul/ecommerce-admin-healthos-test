import React from "react";

const LoginForm = () => {


  const formFields = [
    {
      label: "Mobile",
      name: "mobile",
      required: true,
      type: "number",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full bg-white rounded-md p-4 flex flex-col gap-4 max-w-lg">
        {formFields.map((field) => (
          {console.log(filed)}
        ))}
        <button type="submit" className="w-full btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
