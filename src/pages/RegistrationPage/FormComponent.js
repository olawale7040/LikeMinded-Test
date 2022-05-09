import { useState } from "react";
import { userRoles } from "src/constants";
import eyeOpen from "src/assets/img/eye_open.svg";
import eyeClose from "src/assets/img/eye_close.svg";
const FormComponent = ({ formik }) => {
  const [ispwdVisible, setIsPwdVisible] = useState(false);
  return (
    <div className="textbox-wrapper" data-testid="textbox-wrapper">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            id="email"
            autocomplete="off"
            data-testid="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <div>
            {formik.touched.email && formik.errors.email ? (
              <div className="form-error">{formik.errors.email}</div>
            ) : null}
          </div>
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
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <img
              src={ispwdVisible ? eyeOpen : eyeClose}
              alt="eye"
              onClick={() => setIsPwdVisible(!ispwdVisible)}
            />
          </div>
          <div>
            {formik.touched.password && formik.errors.password ? (
              <div className="form-error">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <label for="userRole">User Role</label>
          <select
            name="userRole"
            id="userRole"
            className="select-cont"
            value={formik.values.userRole}
            onChange={formik.handleChange}
          >
            <option value="">-Select-</option>
            {userRoles.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <div>
            {formik.touched.userRole && formik.errors.userRole ? (
              <div className="form-error">{formik.errors.userRole}</div>
            ) : null}
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-primary" type="submit">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
