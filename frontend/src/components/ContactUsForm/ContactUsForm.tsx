// import React, { useState } from "react";
// import styles from "./ContactUsForm.module.css";
// import { SelectChangeEvent } from '@mui/material/Select';

// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import LottieAnimation from "../dotie/LottieAnimation";
// import team from "../../lotties/team.json"

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   interest: string;
//   moreInfo: string;
// }

// interface FormDataErrors {
//   name: string;
//   email: string;
//   phone: string;
// }

// const ContactForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "",
//     moreInfo: "",
//   });

//   const [errors, setErrors] = useState<FormDataErrors>({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   // const handleInputChange = (e: SelectChangeEvent<string>) => {
//   //   const { name, value } = e.target;
//   //   // setFormData({ ...formData, [name]: value });
//   //   setFormData(prevData => ({ ...prevData, [name]: value }));
//   // };


//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
//   ) => {
//     // Type guard to check if event is a SelectChangeEvent
//     if ('target' in event && 'name' in event.target) {
//       const { name, value } = event.target;

//       // Update your form data
//       setFormData(prevData => ({ ...prevData, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submission triggered");

//     const formErrors = {
//       name: "",
//       email: "",
//       phone: "",
//     };

//     if (!formData.name) {
//       formErrors.name = "Name is required";
//     }

//     if (!formData.email) {
//       formErrors.email = "Email is required";
//     }

//     if (!formData.phone) {
//       formErrors.phone = "Phone is required";
//     }

//     setErrors(formErrors);

//     if (!formErrors.name && !formErrors.email && !formErrors.phone) {
//       try {
//         const response = await fetch("http://localhost:5001/api/getintouch", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           console.log("Form submitted successfully");
//         } else {
//           console.error("Form submission failed");
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       }
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.sectionsContainer}>
//         <h2 className={styles.title}>Let's get started.</h2>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.formContainer}>
//             <TextField
//               key="name-field"
//               label="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               error={Boolean(errors.name)}
//               helperText={errors.name}
//               classes={{ root: styles.textFieldRoot }}
//             />

//             <TextField
//               key="email-field"
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               error={Boolean(errors.email)}
//               helperText={errors.email}
//               // className={styles.textField}
//               classes={{ root: styles.textFieldRoot }}
//             />

//             <TextField
//               key="phone-field"
//               label="Phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               error={Boolean(errors.phone)}
//               helperText={errors.phone}
//               // className={styles.textField}
//               classes={{ root: styles.textFieldRoot }}
//             />

//             <FormControl fullWidth classes={{ root: styles.selectRoot }}>
//               <InputLabel id="simple-select">I'm Interested In ...</InputLabel>
//               <Select
//                 labelId="simple-select-label"
//                 id="simple-select"
//                 label="I'm Interested In ..."
//                 value={formData.interest}
//                 onChange={handleInputChange}
//                 name="interest"
//               >
//                 <MenuItem value={"rail"}>Rail</MenuItem>
//                 <MenuItem value={"construction"}>Construction</MenuItem>
//                 <MenuItem value={"optic-fibre"}>Optic Fibre</MenuItem>
//               </Select>
//             </FormControl>

//             <TextField
//               key="more-info-field"
//               label="More information"
//               name="moreInfo"
//               value={formData.moreInfo}
//               onChange={handleInputChange}
//               multiline
//               rows={4}
//               // className={styles.textField}
//               classes={{ root: styles.textFieldRoot }}
//             />

//             <button
//               type="submit"
//               className={styles.button}
//               // onClick={handleSubmit}
//             >
//               SEND
//             </button>
//           </div>
//         </form>
//       </div>
//       <LottieAnimation animation={team} width={500} height={500} margin="0" />
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import styles from "./ContactUsForm.module.css";
import { SelectChangeEvent } from '@mui/material/Select';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import LottieAnimation from "../dotie/LottieAnimation";
import team from "../../lotties/team.json";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  moreInfo: string;
}

interface FormDataErrors {
  name: string;
  email: string;
  phone: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interest: "", // Ensure interest is initialized as an empty string
    moreInfo: "",
  });

  const [errors, setErrors] = useState<FormDataErrors>({
    name: "",
    email: "",
    phone: "",
  });

  // State to manage notification visibility
  const [notificationOpen, setNotificationOpen] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    // Check if the event is a SelectChangeEvent (specific to Select component)
    const { name, value } = 'target' in event ? event.target : event;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        const response = await fetch(`${process.env.FRONTEND_URL}/api/getintouch`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully");

          // Clear the form fields
          setFormData({
            name: "",
            email: "",
            phone: "",
            interest: "", // Reset interest value
            moreInfo: "",
          });

          // Show success notification
          setNotificationOpen(true);
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleNotificationClose = () => {
    setNotificationOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionsContainer}>
        <h2 className={styles.title}>Let's get started.</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <TextField
              key="name-field"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              classes={{ root: styles.textFieldRoot }}
            />

            <TextField
              key="email-field"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              classes={{ root: styles.textFieldRoot }}
            />

            <TextField
              key="phone-field"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              classes={{ root: styles.textFieldRoot }}
            />

            <FormControl fullWidth classes={{ root: styles.selectRoot }}>
              <InputLabel id="simple-select">I'm Interested In ...</InputLabel>
              <Select
                labelId="simple-select-label"
                id="simple-select"
                label="I'm Interested In ..."
                value={formData.interest || ""} // Ensure interest has a fallback empty value
                onChange={handleInputChange}
                name="interest"
              >
                <MenuItem value="">Select an Option</MenuItem>
                <MenuItem value="rail">Rail</MenuItem>
                <MenuItem value="construction">Construction</MenuItem>
                <MenuItem value="optic-fibre">Optic Fibre</MenuItem>
              </Select>
            </FormControl>

            <TextField
              key="more-info-field"
              label="More information"
              name="moreInfo"
              value={formData.moreInfo}
              onChange={handleInputChange}
              multiline
              rows={4}
              classes={{ root: styles.textFieldRoot }}
            />

            <button type="submit" className={styles.button}>
              SEND
            </button>
          </div>
        </form>
      </div>
      <LottieAnimation animation={team} width={500} height={undefined} margin="0" />

      {/* Notification Snackbar */}
      <Snackbar
        open={notificationOpen}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
      >
        <Alert onClose={handleNotificationClose} severity="success">
          Email submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
