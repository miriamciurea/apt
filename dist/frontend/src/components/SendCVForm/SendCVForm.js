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
const react_1 = require("react");
const material_1 = require("@mui/material");
const Button_1 = __importDefault(require("@mui/material/Button"));
const UploadFile_1 = __importDefault(require("@mui/icons-material/UploadFile"));
const SendCVForm_module_css_1 = __importDefault(require("./SendCVForm.module.css"));
const react_lottie_player_1 = require("@lottiefiles/react-lottie-player");
// import { Player } from '@lottie-react';
const Animation___1727174952021_json_1 = __importDefault(require("./Animation - 1727174952021.json")); // Adjust the path
const SendCVForm = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [cv, setCv] = (0, react_1.useState)(null);
    const handleSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
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
            const response = yield fetch('http://localhost:5001/api/sendcv', {
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
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: SendCVForm_module_css_1.default.formContainer, children: [(0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsxs)("h1", { className: SendCVForm_module_css_1.default.title, children: [(0, jsx_runtime_1.jsx)("span", { className: SendCVForm_module_css_1.default.underlined, children: "Convinced?" }), " Send us your", " ", (0, jsx_runtime_1.jsx)("span", { className: SendCVForm_module_css_1.default.highlight, children: "CV" }), " so we can talk!"] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_lottie_player_1.Player, { autoplay: true, loop: true, src: Animation___1727174952021_json_1.default, style: { height: '300px', width: '300px' } }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: SendCVForm_module_css_1.default.form, children: [(0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Your Name", value: name, onChange: (e) => setName(e.target.value), sx: {
                            width: { xs: '100%', sm: '100%', md: '400px' },
                            maxWidth: '400px',
                        } }, "name-field"), (0, jsx_runtime_1.jsx)(material_1.TextField, { label: "Your Email", value: email, onChange: (e) => setEmail(e.target.value), sx: {
                            width: { xs: '100%', sm: '100%', md: '400px' },
                            maxWidth: '400px',
                        } }, "email-field"), (0, jsx_runtime_1.jsx)("input", { type: "file", accept: ".pdf,.doc,.docx", onChange: (e) => setCv(e.target.files ? e.target.files[0] : null), id: "cv-upload", style: { display: "none" } }, "cv-upload"), (0, jsx_runtime_1.jsx)("label", { htmlFor: "cv-upload", style: { width: '100%', maxWidth: '400px' }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", component: "span", startIcon: (0, jsx_runtime_1.jsx)(UploadFile_1.default, {}), color: "primary", sx: { width: "100%", color: 'black', backgroundColor: 'transparent', boxShadow: 'none', border: '1px solid grey' }, children: "Upload CV" }) }), (0, jsx_runtime_1.jsx)("div", { className: SendCVForm_module_css_1.default.formGroup, style: { width: '100%', maxWidth: '400px' }, children: (0, jsx_runtime_1.jsx)("button", { type: "submit", className: SendCVForm_module_css_1.default.button, onClick: handleSubmit, style: { width: '100%' }, children: "SEND" }) })] })] }));
};
exports.default = SendCVForm;
//# sourceMappingURL=SendCVForm.js.map