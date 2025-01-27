import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, setLoggedIn } from "./redux/FormSlice";

function FormComponent() {
  const form = useSelector((state) => state.form); //redux storedaki form stateine erişir
  const dispatch = useDispatch();
  //   const loggedIn = useSelector((state) => state.form.isLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoggedIn(true));
    // dispatch(resetForm());
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full h-full max-w-xs"
      >
        <h1 className="text-3xl mb-8 mt-4 font-bold text-center ">Login</h1>
        <div className="mb-4">
          {/* <label className="block text-sm font-medium text-gray-700">
            User Name
          </label> */}
          <input
            type="text"
            name="name"
            placeholder="Username or email"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-400 mt-4 mb-2 rounded-lg w-full p-3 text-sm placeholder-gray-600"
          />
        </div>
        <div className="mb-4">
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-400 rounded-lg w-full p-3 text-sm placeholder-gray-600"
          />
        </div>
        <button className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl py-2 mt-4 mb-44 hover:bg-blue-600 transition" type="submit">LOGIN</button>
        <p className="text-sm text-center text-gray-400 cursor-pointer">Sign Up</p>
      </form>
    </div>
  );
}

export default FormComponent;
