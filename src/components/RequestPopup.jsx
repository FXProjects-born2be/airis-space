"use client";
import React from "react";
import "@/styles/request-popup.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import usePopupStore from "@/stores/popupStore";
import ButtonArrow from "@/icons/ButtonArrow";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Select from "react-select";

function RequestPopup() {
  const { requestPopupDisplay, setRequestPopupDisplay, plansValue } =
    usePopupStore();
  const countryCode = useCountryCode();

  const jobs = [
    { value: "AI Developer", label: "AI Developer" },
    { value: "Marketing Expert", label: "Marketing Expert" },
    { value: "Concept Developer", label: "Concept Developer" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#ffffff",
      height: "36px",
      borderRadius: "0",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #ffffff",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 16px",
      boxShadow: "unset",
      "&:hover": {
        borderColor: "#ffffff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "36px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "36px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#0d0d0d",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#ffffff",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      "> span": {
        display: "none",
      },
      "> div": {
        padding: "0",
        width: "24px",
        height: "24px",
        backgroundImage: "url(/images/selectArrow.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      "> div > svg": {
        display: "none",
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#ffffff0d",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#fff" : "#fff",
      color: "#0d0d0d",
      "&:hover": {
        background: "#121321",
        color: "#ffffff",
      },
    }),
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    agree: Yup.boolean()
      .oneOf([true], "This field is required")
      .required("This field is required"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplay(false);
    resetForm();
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {

      const formData = {
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        plan: plansValue,
        message: values.message,
      };

      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      //console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`request-popup-wrap ${requestPopupDisplay ? "opened" : ""}`}
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
          values,
        }) => {
          return (
            <div>
              <div
                className="overlay"
                onClick={() => closePopup(resetForm)}
              ></div>
              <div className="popup-inner">
                <span
                  src="/images/close.svg"
                  className="popup-close"
                  alt="popup-close"
                  onClick={() => closePopup(resetForm)}
                >
                  Back
                </span>
                <div className="request-form">
                  {status && status.success ? (
                    <div className="success">
                      <h2>Success!</h2>
                      <p>
                        Your plan request has been submitted successfully. Our
                        team will review it and contact you shortly. Thank you
                        for choosing Airis! 
                      </p>
                    </div>
                  ) : (
                    <div className="form-wrap">
                      <h2>{plansValue} Plan Request</h2>
                      <Form>
                        {isSubmitting && (
                          <div className="loading">
                            <img src="/images/loading.svg" />
                          </div>
                        )}
                        {/* Full Name Field */}
                        <div className="input-wrap">
                          <Field
                            name="fullName"
                            type="text"
                            placeholder="Your Name:"
                            className={
                              touched.fullName && errors.fullName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="error"
                          />
                        </div>

                        {/* Phone Number Field */}
                        <div className="input-wrap">
                          <PhoneInput
                            country={countryCode}
                            value={values.phone || ""}
                            onChange={(value) => setFieldValue("phone", value)}
                            placeholder="Your Phone"
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="input-wrap">
                          <Field
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="message"
                            type="text"
                            placeholder="Your Message"
                          />
                        </div>

                        <div className="checkbox">
                          <label>
                            <Field
                              name="agree"
                              type="checkbox"
                              className="checkbox"
                            />
                            <CheckboxIcon />
                            <span>
                              I agree to the processing of my personal data in
                              accordance with the Privacy Policy.
                            </span>
                          </label>
                          <ErrorMessage
                            name="agree"
                            component="div"
                            className="error"
                          />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" disabled={isSubmitting}>
                          Submit
                          <ButtonArrow />
                        </button>
                      </Form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default RequestPopup;
