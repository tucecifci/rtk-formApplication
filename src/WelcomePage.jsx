import React from "react";
import { useSelector } from "react-redux";

function WelcomePage() {
  const name = useSelector((state) => state.form.name);
  console.log(name);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gradient-to-r from-blue-500 to-purple-500">
    <h1 className="text-7xl text-center font-medium text-white ">👋 Welcome {name}! </h1>
    <p className="text-white">Discover seamless solutions designed to make your life smarter, faster, and better.</p>
    </div>
    
    </>
  );
}

export default WelcomePage;
