import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styles from "./ContactUsForm.module.css";
import { FormControl, InputLabel, MenuItem, Select, TextField, } from "@mui/material";
import LottieAnimation from "../dotie/LottieAnimation";
import team from "../../lotties/team.json";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        moreInfo: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });
    // const handleInputChange = (e: SelectChangeEvent<string>) => {
    //   const { name, value } = e.target;
    //   // setFormData({ ...formData, [name]: value });
    //   setFormData(prevData => ({ ...prevData, [name]: value }));
    // };
    const handleInputChange = (event) => {
        // Type guard to check if event is a SelectChangeEvent
        if ('target' in event && 'name' in event.target) {
            const { name, value } = event.target;
            // Update your form data
            setFormData(prevData => ({ ...prevData, [name]: value }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submission triggered");
        const formErrors = {
            name: "",
            email: "",
            phone: "",
        };
        if (!formData.name) {
            formErrors.name = "Name is required";
        }
        if (!formData.email) {
            formErrors.email = "Email is required";
        }
        if (!formData.phone) {
            formErrors.phone = "Phone is required";
        }
        setErrors(formErrors);
        if (!formErrors.name && !formErrors.email && !formErrors.phone) {
            try {
                const response = await fetch("http://localhost:5001/api/getintouch", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    console.log("Form submitted successfully");
                }
                else {
                    console.error("Form submission failed");
                }
            }
            catch (error) {
                console.error("Error submitting form:", error);
            }
        }
    };
    return (_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.sectionsContainer, children: [_jsx("h2", { className: styles.title, children: "Let's get started." }), _jsx("form", { onSubmit: handleSubmit, children: _jsxs("div", { className: styles.formContainer, children: [_jsx(TextField, { label: "Name", name: "name", value: formData.name, onChange: handleInputChange, error: Boolean(errors.name), helperText: errors.name, classes: { root: styles.textFieldRoot } }, "name-field"), _jsx(TextField, { label: "Email", name: "email", value: formData.email, onChange: handleInputChange, error: Boolean(errors.email), helperText: errors.email, 
                                    // className={styles.textField}
                                    classes: { root: styles.textFieldRoot } }, "email-field"), _jsx(TextField, { label: "Phone", name: "phone", value: formData.phone, onChange: handleInputChange, error: Boolean(errors.phone), helperText: errors.phone, 
                                    // className={styles.textField}
                                    classes: { root: styles.textFieldRoot } }, "phone-field"), _jsxs(FormControl, { fullWidth: true, classes: { root: styles.selectRoot }, children: [_jsx(InputLabel, { id: "simple-select", children: "I'm Interested In ..." }), _jsxs(Select, { labelId: "simple-select-label", id: "simple-select", label: "I'm Interested In ...", value: formData.interest, onChange: handleInputChange, name: "interest", children: [_jsx(MenuItem, { value: "rail", children: "Rail" }), _jsx(MenuItem, { value: "construction", children: "Construction" }), _jsx(MenuItem, { value: "optic-fibre", children: "Optic Fibre" })] })] }), _jsx(TextField, { label: "More information", name: "moreInfo", value: formData.moreInfo, onChange: handleInputChange, multiline: true, rows: 4, 
                                    // className={styles.textField}
                                    classes: { root: styles.textFieldRoot } }, "more-info-field"), _jsx("button", { type: "submit", className: styles.button, children: "SEND" })] }) })] }), _jsx(LottieAnimation, { animation: team, width: 500, height: 500, margin: "0" })] }));
};
export default ContactForm;
