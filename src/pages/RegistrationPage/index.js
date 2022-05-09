import { useState } from "react";
import FormComponent from "./FormComponent";
const RegistrationPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    userRole: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <main className="main-content">
      <section className="main-section">
        <FormComponent form={form} handleChange={handleChange} />
      </section>
    </main>
  );
};
export default RegistrationPage;
