"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// <<<<<<< HEAD
// import { useState } from "react";
// import styles from "./ContactUsForm.module.css";
const react_1 = require("react");
const ContactUsForm_module_css_1 = __importDefault(require("./ContactUsForm.module.css"));
const material_1 = require("@mui/material");
const LottieAnimation_1 = __importDefault(require("../dotie/LottieAnimation"));
const team_json_1 = __importDefault(require("../../lotties/team.json"));
const ContactForm = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        name: "",
        email: "",
        phone: "",
        interest: "",
        moreInfo: "",
    });
    const [errors, setErrors] = (0, react_1.useState)({
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
            setFormData(prevData => (Object.assign(Object.assign({}, prevData), { [name]: value })));
        }
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
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
                const response = yield fetch("http://localhost:5001/api/getintouch", {
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
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: ContactUsForm_module_css_1.default.container, children: [(0, jsx_runtime_1.jsxs)("div", { className: ContactUsForm_module_css_1.default.sectionsContainer, children: [(0, jsx_runtime_1.jsx)("h2", { className: ContactUsForm_module_css_1.default.title, children: "Let's get started." }), (0, jsx_runtime_1.jsx)("form", { onSubmit: handleSubmit, children: (0, jsx_runtime_1.jsxs)("div", { className: ContactUsForm_module_css_1.default.formContainer, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Name", name: "name", value: formData.name, onChange: handleInputChange, error: Boolean(errors.name), helperText: errors.name, classes: { root: ContactUsForm_module_css_1.default.textFieldRoot } }, "name-field"), (0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Email", name: "email", value: formData.email, onChange: handleInputChange, error: Boolean(errors.email), helperText: errors.email, className: ContactUsForm_module_css_1.default.textField, classes: { root: ContactUsForm_module_css_1.default.textFieldRoot } }, "email-field"), (0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Phone", name: "phone", value: formData.phone, onChange: handleInputChange, error: Boolean(errors.phone), helperText: errors.phone, className: ContactUsForm_module_css_1.default.textField, classes: { root: ContactUsForm_module_css_1.default.textFieldRoot } }, "phone-field"), (0, jsx_runtime_1.jsxs)(material_1.FormControl, { fullWidth: true, classes: { root: ContactUsForm_module_css_1.default.selectRoot }, children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, { id: "simple-select", children: "I'm Interested In ..." }), (0, jsx_runtime_1.jsxs)(material_1.Select, { labelId: "simple-select-label", id: "simple-select", label: "I'm Interested In ...", value: formData.interest, onChange: handleInputChange, name: "interest", children: [(0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "rail", children: "Rail" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "construction", children: "Construction" }), (0, jsx_runtime_1.jsx)(material_1.MenuItem, { value: "optic-fibre", children: "Optic Fibre" })] })] }), (0, jsx_runtime_1.jsx)(material_1.TextField, { label: "More information", name: "moreInfo", value: formData.moreInfo, onChange: handleInputChange, multiline: true, rows: 4, className: ContactUsForm_module_css_1.default.textField, classes: { root: ContactUsForm_module_css_1.default.textFieldRoot } }, "more-info-field"), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: ContactUsForm_module_css_1.default.button, children: "SEND" })] }) })] }), (0, jsx_runtime_1.jsx)(LottieAnimation_1.default, { animation: team_json_1.default, width: 500, height: 500, margin: "0" })] }));
};
exports.default = ContactForm;
//# sourceMappingURL=ContactUsForm.js.map