import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import styles from "./SendCVForm.module.css";
import { Player } from '@lottiefiles/react-lottie-player';
// import { Player } from '@lottie-react';
import animation from './Animation - 1727174952021.json'; // Adjust the path
const SendCVForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cv, setCv] = useState(null);
    const handleSubmit = async () => {
        if (!cv || !name || !email) {
            alert("Please fill in all fields and upload your CV.");
            return;
        }
        // Create form data to send to the backend
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("cv", cv);
        try {
            const response = await fetch('http://localhost:5001/api/sendcv', {
                method: 'POST',
                body: formData, // Pass the form data directly
            });
            if (response.ok) {
                alert("CV sent successfully!");
            }
            else {
                alert("Failed to send CV. Please try again.");
            }
        }
        catch (error) {
            console.error("Error submitting CV:", error);
            alert("Error sending CV.");
        }
    };
    return (_jsxs("div", { className: styles.formContainer, children: [_jsxs("div", { className: "", children: [_jsxs("h1", { className: styles.title, children: [_jsx("span", { className: styles.underlined, children: "Convinced?" }), " Send us your", " ", _jsx("span", { className: styles.highlight, children: "CV" }), " so we can talk!"] }), _jsx("div", { children: _jsx(Player, { autoplay: true, loop: true, src: animation, style: { height: '300px', width: '300px' } }) })] }), _jsxs("div", { className: styles.form, children: [_jsx(TextField, { label: "Your Name", value: name, onChange: (e) => setName(e.target.value), sx: {
                            width: { xs: '100%', sm: '100%', md: '400px' },
                            maxWidth: '400px',
                        } }, "name-field"), _jsx(TextField, { label: "Your Email", value: email, onChange: (e) => setEmail(e.target.value), sx: {
                            width: { xs: '100%', sm: '100%', md: '400px' },
                            maxWidth: '400px',
                        } }, "email-field"), _jsx("input", { type: "file", accept: ".pdf,.doc,.docx", onChange: (e) => setCv(e.target.files ? e.target.files[0] : null), id: "cv-upload", style: { display: "none" } }, "cv-upload"), _jsx("label", { htmlFor: "cv-upload", style: { width: '100%', maxWidth: '400px' }, children: _jsx(Button, { variant: "contained", component: "span", startIcon: _jsx(UploadFileIcon, {}), color: "primary", sx: { width: "100%", color: 'black', backgroundColor: 'transparent', boxShadow: 'none', border: '1px solid grey' }, children: "Upload CV" }) }), _jsx("div", { style: { width: '100%', maxWidth: '400px' }, children: _jsx("button", { type: "submit", className: styles.button, onClick: handleSubmit, style: { width: '100%' }, children: "SEND" }) })] })] }));
};
export default SendCVForm;
