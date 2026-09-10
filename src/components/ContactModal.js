import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

const ContactModal = ({ property, onClose }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateName = () => {
    const name = formData.name.trim();

    if (!name) {
      return "Name is required.";
    }

    if (name.length < 4) {
      return "Name must be at least 4 characters.";
    }

    return "";
  };

  const validateEmail = () => {
    const email = formData.email.trim();

    if (!email) {
      return "Email is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const validatePhone = () => {
    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (!phoneDigits) {
      return "Phone number is required.";
    }

    if (phoneDigits.length < 10 || phoneDigits.length > 12) {
      return "Phone number must contain 10 to 12 digits.";
    }

    return "";
  };

  const handleNext = () => {
    const nameError = validateName();

    if (nameError) {
      setErrors({ name: nameError });
      return;
    }

    setErrors({});
    setStep(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailError = validateEmail();
    const phoneError = validatePhone();

    if (emailError || phoneError) {
      setErrors({
        email: emailError,
        phone: phoneError,
      });

      return;
    }

    setErrors({});
    setStep(3);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      phone,
    });

    setErrors({
      ...errors,
      phone: "",
    });
  };

  const handleClose = () => {
    setStep(1);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setErrors({});
    onClose();
  };

  return (
  <div className="contact-overlay">
    <div className="contact-modal">

      <button
        type="button"
        className="modal-close"
        onClick={handleClose}
      >
        ×
      </button>

      {step === 1 && (
        <div>
          <p className="step-text">
            CONTACT US
          </p>

          <h2>Get In Touch With Us</h2>

          <p className="contact-description">
            Get free consultation with a professional real
            estate consultant.
          </p>

          <div className="mb-3">
            <label className="form-label">
              Name
            </label>

            <input
              type="text"
              name="name"
              className={`form-control ${
                errors.name ? "is-invalid" : ""
              }`}
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <div className="invalid-feedback">
                {errors.name}
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn btn-dark w-100"
            disabled={!formData.name.trim()}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="step-text">
            CONTACT US
          </p>

          <h2>Get In Touch With Us</h2>

          <p className="contact-description">
            Get free consultation with a professional real
            estate consultant.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                name="email"
                className={`form-control ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Enter your email id"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <div className="invalid-feedback">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">
                Phone Number
              </label>

              <PhoneInput
                country="in"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
              />

              {errors.phone && (
                <div className="text-danger small mt-1">
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="d-flex gap-2">

              <button
                type="button"
                className="btn btn-outline-secondary w-50"
                onClick={handleBack}
              >
                Back
              </button>

              <button
                type="submit"
                className="btn btn-dark w-50"
              >
                Submit
              </button>

            </div>

          </form>
        </div>
      )}

      {step === 3 && (
        <div className="thank-you">

          <p className="step-text">
            THANK YOU FOR CONNECTING!
          </p>

          <h2>
            We appreciate your interest
            <br />
            and will be in touch soon
          </h2>

          <p className="contact-description">
            In the meantime, feel free to browse our website
            <br />
            to learn more about our offerings.
          </p>

          <button
            type="button"
            className="explore-button"
          >
            Explore more
            <span>›</span>
          </button>

        </div>
      )}

    </div>
  </div>
);
};

export default ContactModal;