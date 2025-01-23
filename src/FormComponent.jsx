import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, setLoggedIn } from "./redux/FormSlice";

function FormComponent() {
  const form = useSelector((state) => state.form); //redux storedaki form stateine erişir
  const dispatch = useDispatch();
//   const loggedIn = useSelector((state) => state.form.isLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ field:name, value }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoggedIn(true));
    // dispatch(resetForm());

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label>Message:</label>
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div> */}
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default FormComponent;
