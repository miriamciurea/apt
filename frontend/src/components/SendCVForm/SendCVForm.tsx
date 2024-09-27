import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import * as styles from "./SendCVForm.module.css";
import { Player } from '@lottiefiles/react-lottie-player';
// import { Player } from '@lottie-react';
import animation from './Animation - 1727174952021.json'; // Adjust the path


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
      <div className="">
        <h1 className={styles.title}>
          <span className={styles.underlined}>Convinced?</span> Send us your{" "}
          <span className={styles.highlight}>CV</span> so we can talk!
        </h1>

        <div>
        <Player
        autoplay
        loop
        src={animation}  // Local .lottie file
        style={{ height: '300px', width: '300px' }}
      />
    </div>

      </div>
      <div className={styles.form}>
      <TextField
        key="name-field"
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          width: { xs: '100%', sm: '100%', md: '400px' },
          maxWidth: '400px',
        }}
      />
      <TextField
        key="email-field"
        label="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          width: { xs: '100%', sm: '100%', md: '400px' },
          maxWidth: '400px',
        }}
/>


        <input
          key="cv-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)}
          id="cv-upload"
          style={{ display: "none" }}
        />
        <label htmlFor="cv-upload" style={{ width: '100%', maxWidth: '400px'}}>
          <Button
            variant="contained"
            component="span"
            startIcon={<UploadFileIcon />}
            color="primary"
            sx={{ width: "100%", color: 'black', backgroundColor: 'transparent', boxShadow: 'none', border: '1px solid grey' }}
          >
            Upload CV
          </Button>
        </label>


        <div style={{ width: '100%', maxWidth: '400px' }}>
          <button type="submit" className={styles.button} onClick={handleSubmit} style={{ width: '100%' }}>
            SEND
          </button>
        </div>

      </div>
    </div>
  );
};

export default SendCVForm;
