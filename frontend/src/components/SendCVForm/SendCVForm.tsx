import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styles from "./SendCVForm.module.css";

const SendCVForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState<File | null>(null);

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
        body: formData,  // Pass the form data directly
      });

      if (response.ok) {
        alert("CV sent successfully!");
      } else {
        alert("Failed to send CV. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting CV:", error);
      alert("Error sending CV.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>
        <span className={styles.underlined}>Convinced?</span> Send us your{" "}
        <span className={styles.highlight}>CV</span> so we can talk!
      </h1>
      <div className={styles.form}>
        <TextField
          key="name-field"
          label="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "400px", margin: "20px 50px" }}
        />
        <TextField
          key="email-field"
          label="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "400px", margin: "20px 50px" }}
        />

        <input
          key="cv-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)}
          style={{ margin: "20px 50px" }}
        />

        <Button
          key="button"
          variant="contained"
          sx={{ alignSelf: "center", width: "200px", margin: "50px 0" }}
          onClick={handleSubmit}
        >
          SEND
        </Button>
      </div>
    </div>
  );
};

export default SendCVForm;



// import { useState } from "react";
// import { TextField } from "@mui/material";
// import Button from "@mui/material/Button";
// import styles from "./SendCVForm.module.css";

// const SendCVForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [cv, setCv] = useState<File | null>(null);

//   const handleSubmit = async () => {
//     if (!cv || !name || !email) {
//       alert("Please fill in all fields and upload your CV.");
//       return;
//     }

//     // Create form data to send to the backend
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("cv", cv);

//     try {
//       const response = await fetch("http://localhost:5001/api/sendcv", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("CV sent successfully!");
//       } else {
//         alert("Failed to send CV. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting CV:", error);
//       alert("Error sending CV.");
//     }
//   };

//   return (
//     <div className={styles.formContainer}>
//       <h1 className={styles.title}>
//         <span className={styles.underlined}>Convinced?</span> Send us your{" "}
//         <span className={styles.highlight}>CV</span> so we can talk!
//       </h1>
//       <div className={styles.form}>
//         <TextField
//           label="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           sx={{ width: "400px", margin: "20px 50px" }}
//         />
//         <TextField
//           label="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{ width: "400px", margin: "20px 50px" }}
//         />

//         <input
//           type="file"
//           accept=".pdf,.doc,.docx"
//           onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)}
//           style={{ margin: "20px 50px" }}
//         />

//         <Button
//           variant="contained"
//           sx={{ alignSelf: "center", width: "200px", margin: "50px 0" }}
//           onClick={handleSubmit}
//         >
//           SEND
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SendCVForm;
