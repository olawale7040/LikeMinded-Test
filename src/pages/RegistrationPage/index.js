import { useFormik } from "formik";
import * as Yup from "yup";
import FormComponent from "./FormComponent";
const RegistrationPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userRole: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      userRole: Yup.string().required("Required"),
      password: Yup.string().when("userRole", {
        is: (userRole) => userRole === "mentor",
        then: Yup.string()
          .required("Field is required")
          .required("Required")
          .min(8, "Must be 8 characters or more")
          .matches(/[A-Z]+/, "One uppercase character")
          .matches(/[@$!%*#?&]+/, "One special character")
          .matches(/\d+/, "One number"),
        otherwise: Yup.string()
          .required("Required")
          .min(8, "Must be 8 characters or more")
          .matches(/[A-Z]+/, "One uppercase character")
          .matches(/\d+/, "One number"),
      }),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className="main-content">
      <section className="main-section">
        <FormComponent formik={formik} />
      </section>
    </main>
  );
};
export default RegistrationPage;
