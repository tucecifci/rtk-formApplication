import React from "react";
import { useSelector } from "react-redux";

function WelcomePage() {
  const name = useSelector((state) => state.form.name);
  console.log(name);

  return (
    <>
      <h1>Hoşgeldin {name} ! </h1>
    </>
  );
}

export default WelcomePage;
