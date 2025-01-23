import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm, resetForm, setLoggedIn } from "./redux/FormSlice";

function FormComponent() {
  const form = useSelector((state) => state.form); //redux storedaki form stateine erişir
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.form.isLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetForm());
    dispatch(setLoggedIn(true));
    console.log("submit edildi kıızzz korkmaa");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormComponent;
