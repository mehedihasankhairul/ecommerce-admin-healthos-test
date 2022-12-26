import React from "react";

const LoginForm = () => {
  const { passwordRef, mobileRef, handleSubmit } = useLoginForm();

  const formFields = [
    {
      label: "Mobile",
      name: "mobile",
      required: true,
      objRef: passwordRef,
      type: "number",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      objRef: mobileRef,
      type: "password",
    },
  ];

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full bg-white rounded-md p-4 flex flex-col gap-4 max-w-lg">
        {formFields.map((field) => (
          <FormGroup key={v4()} {...field} />
        ))}
        <button type="submit" className="w-full btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
