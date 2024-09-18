import { TextField } from "@mui/material";
import styles from "./SendCVForm.module.css";
import Button from "@mui/material/Button";

const SendCVForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>
        <span className={styles.underlined}>Convinced?</span> Sent us your{" "}
        <span className={styles.highlight}>CV</span> so we can talk!
      </h1>
      <div className={styles.form}>
        <TextField
          label="Your Name"
          sx={{ width: "400px", margin: "20px 50px" }}
        />
        <TextField
          label="Your Email"
          sx={{ width: "400px", margin: "20px 50px" }}
        />
        <Button
          variant="contained"
          sx={{ alignSelf: "center", width: "200px", margin: "50px 0" }}
          onClick={() =>
            alert("WAITING FOR MIRI TO FINISH BACKEND IMPLEMENTATION!")
          }
        >
          SEND
        </Button>
      </div>
    </div>
  );
};

export default SendCVForm;
