import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function useSetUserForm() {
  const formRef = useRef();
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  const showAlert = (text, type) =>
    setAlert({ show: true, text: text, type: type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "" });

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const defaultFormFields = {
    name: "",
    email: "",
    message: "",
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // VITE_EMAILJS_SERVICE_ID
    // VITE_EMAILJS_TEMPLATE_ID
    // VITE_EMAILJS_PUBLIC_KEY

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formFields.name,
          from_email: formFields.email,
          message: formFields.message,
          to_name: "Youcef Bnm",
          to_email: "ssefbnm@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert("Thank you, I will get back to you soon.", "success");
          setTimeout(() => {
            hideAlert(false);
            setFormFields(defaultFormFields);
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          showAlert("Something went wrong, Try again", "danger");
        }
      );
  };

  return {
    formRef,
    formFields,
    loading,
    alert,

    showAlert,
    hideAlert,

    handleFormFieldChange,
    handleFormSubmit,
  };
}
