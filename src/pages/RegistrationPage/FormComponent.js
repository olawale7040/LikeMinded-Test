import { useState } from "react";
import { userRoles } from "src/constants";
import eyeOpen from "src/assets/img/eye_open.svg";
import eyeClose from "src/assets/img/eye_close.svg";
const FormComponent = ({ form, handleChange }) => {
  const [ispwdVisible, setIsPwdVisible] = useState(false);
  return (
    <div className="textbox-wrapper" data-testid="textbox-wrapper">
      <div className="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          id="email"
          data-testid="email"
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <div className="password-field">
          <input
            className="form-control"
            placeholder="password"
            name="password"
            type={!ispwdVisible ? "password" : "text"}
            data-testid="password"
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
          <img
            src={ispwdVisible ? eyeOpen : eyeClose}
            alt="eye"
            onClick={() => setIsPwdVisible(!ispwdVisible)}
          />
        </div>
      </div>
      <div className="form-group">
        <label for="userRole">User Role</label>
        <select
          name="userRole"
          id="userRole"
          className="select-cont"
          value={form.userRole}
          onChange={(e) => handleChange(e)}
        >
          {userRoles.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="btn-container">
        <button className="btn-primary">Create account</button>
      </div>
    </div>
  );
};

export default FormComponent;
