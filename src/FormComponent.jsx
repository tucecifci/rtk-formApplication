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
    <div className="flex items-center justify-center min-h-screen shadow-2xl shadow-black/50 rounded-4xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-xl shadow-gray-400 p-6 w-full h-full max-w-xs"
      >
        <h1 className="text-3xl mb-8 mt-4 font-bold text-center ">Login</h1>
        <div className="mb-4">
          {/* <label className="block text-sm font-medium text-gray-700">
            User Name
          </label> */}
          <input
            type="text"
            name="name"
            required
            placeholder="username"
            value={form.name}
            onChange={handleChange}
            className="inset-shadow-sm inset-shadow-gray-300 mt-4 mb-2 rounded-xl w-full p-3 text-sm placeholder-gray-600"
          />
        </div>
        <div className="mb-4">
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password"
            placeholder="password"
            value={form.password}
            required
            onChange={handleChange}
            className="inset-shadow-sm inset-shadow-gray-300 rounded-xl w-full p-3 text-sm placeholder-gray-600"
          />
        </div>
        <div className="flex justify-center">
        <button className="w-32 shadow-gray-500 shadow-md cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl py-3 mt-6 mb-36 hover:bg-blue-600 transition tracking-wider" 
        type="submit">LOGIN</button>
        </div>
      
        <p className="text-sm text-center text-gray-400 cursor-pointer hover:text-gray-600 transition">Sign Up</p>
      </form>
    </div>
  );
}

export default FormComponent;
