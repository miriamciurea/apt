import { useState } from "react";
import styles from "./ContcactUsForm.module.css"; // Importing CSS Module

interface FormData {
  name: string;
  company: string;
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
    company: "",
    email: "",
    phone: "",
    interest: "",
    moreInfo: "",
  });

  const [errors, setErrors] = useState<FormDataErrors>({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
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

    if (!formData.interest) {
      formErrors.phone = "Phone is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Perform form submission logic here (e.g., send data to the server)
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Let's get started.</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name<span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`${styles.input} ${
              errors.name ? styles.inputError : ""
            }`}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company" className={styles.label}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`${styles.input} ${
              errors.email ? styles.inputError : ""
            }`}
          />
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone<span>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`${styles.input} ${
              errors.phone ? styles.inputError : ""
            }`}
          />
          {errors.phone && (
            <p className={styles.errorMessage}>{errors.phone}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="interest" className={styles.label}>
            I'm Interested In ...
          </label>
          <input
            type="text"
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="moreInfo" className={styles.label}>
            More information
          </label>
          <textarea
            id="moreInfo"
            name="moreInfo"
            value={formData.moreInfo}
            onChange={handleInputChange}
            className={styles.textarea}
          />
        </div>

        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;