import { useFormik } from "formik";
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormComponent from "src/pages/RegistrationPage/FormComponent";

describe("Header component test", () => {
  afterEach(cleanup);
  const formik = {
    values: {
      email: "",
      password: "",
      userRole: "",
    },
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
    touched: {
      email: "",
      password: "",
      userRole: "",
    },
    errors: {
      email: "",
      password: "",
      userRole: "",
    },
  };
  const renderComponent = (component) => render(component);
  test("should check if form is displayed correctly", async () => {
    const { getByTestId } = renderComponent(<FormComponent formik={formik} />);

    expect(getByTestId("form-wrapper")).toBeInTheDocument();
    const form = getByTestId("form");
    const email = getByTestId("email");
    const password = getByTestId("password");
    const userRole = getByTestId("userRole");

    expect(form).toBeInTheDocument();
    expect(email).toHaveValue("");
    expect(password).toHaveValue("");
  });

  test("should check if form", async () => {
    const { getByTestId } = renderComponent(<FormComponent formik={formik} />);

    const email = getByTestId("email");
    const password = getByTestId("password");
    act(() => {
      fireEvent.change(email, { target: { value: "test@gmail.com" } });
      fireEvent.change(password, { target: { value: "Testing0@23" } });
    });
  });
});
