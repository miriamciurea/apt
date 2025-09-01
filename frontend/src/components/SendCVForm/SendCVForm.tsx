import { useState } from "react";
import { TextField, Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import styles from "./SendCVForm.module.css";
import { Player } from '@lottiefiles/react-lottie-player';
// import { Player } from '@lottie-react';
import animation from './Animation - 1727174952021.json'; // Adjust the path


const SendCVForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState<File | null>(null);

  // notification state
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async () => {
    if (!cv || !name || !email) {
      setNotification({
        open: true,
        message: "Please fill in all fields and upload your CV.",
        severity: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("cv", cv);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sendcv`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setNotification({
          open: true,
          message: "CV sent successfully!",
          severity: "success",
        });
        setName("");
        setEmail("");
        setCv(null);
      } else {
        setNotification({
          open: true,
          message: "Failed to send CV. Please try again.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting CV:", error);
      setNotification({
        open: true,
        message: "Error sending CV.",
        severity: "error",
      });
    }
  };

  const handleNotificationClose = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <div className={styles.formContainer}>
      <div>
        <h1 className={styles.title}>
          <span className={styles.underlined}>Convinced?</span> Send us your{" "}
          <span className={styles.highlight}>CV</span> so we can talk!
        </h1>

        <div>
          <Player
            autoplay
            loop
            src={animation}
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
        <label htmlFor="cv-upload" style={{ width: '100%', maxWidth: '400px' }}>
          <Button
            variant="contained"
            component="span"
            startIcon={<UploadFileIcon />}
            color="primary"
            sx={{
              width: "100%",
              color: 'black',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: '1px solid grey'
            }}
          >
            Upload CV
          </Button>
        </label>

        <div style={{ width: '100%', maxWidth: '400px' }}>
          <button
            type="submit"
            className={styles.button}
            onClick={handleSubmit}
            style={{ width: '100%' }}
          >
            SEND
          </button>
        </div>
      </div>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
      >
        <Alert onClose={handleNotificationClose} severity={notification.severity}>
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SendCVForm;
