import { useState } from "react";
import styles from "./ContcactUsForm.module.css";

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
        const response = await fetch('http://localhost:5001/api/getintouch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
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
