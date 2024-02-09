import { useState } from "react";

export default function Login() {
  const [formVals, setFormVals] = useState({
    email: "",
    password: "",
  });

  const handleChange = (key, val) => {
    setFormVals((prev) => {
      return { ...prev, [key]: val };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formVals", formVals);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
