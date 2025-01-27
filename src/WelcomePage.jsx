import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "./redux/FormSlice";

function WelcomePage() {
  const name = useSelector((state) => state.form.name);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-medium mt-4 mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Welcome {name}! </h1>
    
    <p className="max-w-xs md:max-w-md lg:max-w-2xl text-lg mb-8 text-gray-600">Good to see you here</p>
  
    <button 
    onClick={handleLogOut}
    className="w-36 shadow-gray-500 shadow-md cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl py-3 mt-8 hover:bg-blue-600 transition tracking-wider"
    >LOGOUT</button>

    </div>
    </>
  );
}

export default WelcomePage;
