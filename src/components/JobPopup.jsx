"use client";
import React from "react";
import "@/styles/job-popup.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import useCountryCode from "@/utils/useCountryCode";
import usePopupStore from "@/stores/popupStore";
import ButtonArrow from "@/icons/ButtonArrow";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Select from "react-select";

function JobPopup() {
  const { jobsPopupDisplay, setJobsPopupDisplay, jobValue } = usePopupStore();
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
    position: Yup.string().required("This field is required."),
    cv: Yup.mixed()
      .required("A file is required!")
      .test(
        "fileSize",
        "File size must be less than 10MB",
        (value) => !value || (value && value.size <= 10 * 1024 * 1024)
      )
      .test(
        "fileType",
        "Unsupported file format. Allowed formats: PDF, DOC, DOCX",
        (value) =>
          !value ||
          (value &&
            [
              "application/pdf",
              "application/msword",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ].includes(value.type))
      ),
    agree: Yup.boolean()
      .oneOf([true], "This field is required")
      .required("This field is required"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    position: jobValue || "",
    cv: null,
    link: "",
    agree: false,
  };

  const closePopup = (resetForm) => {
    setJobsPopupDisplay(false);
    resetForm();
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    resetForm();
    setStatus({ success: true });
    /*try {
      // Prepare form data with Base64 file attachments
      const prepareFile = async (file) => {
        if (!file) return null;
        const data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(",")[1]); // Exclude data prefix
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
        return { filename: file.name, mimeType: file.type, data };
      };

      const cv = await prepareFile(values.cv);
      const portfolio = await prepareFile(values.portfolio);

      const formData = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        position: values.position,
        cv,
        portfolio,
        comments: values.comments,
      };

      // Send form data to the server
      const response = await fetch("/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application.");
      }

      // Reset form and show success message
      resetForm();
      setStatus({ success: true });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus({ success: false });
    } finally {
      setSubmitting(false);
    }*/
  };

  return (
    <div className={`job-popup-wrap ${jobsPopupDisplay ? "opened" : ""}`}>
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
                      <h2>Thank you for applying!</h2>
                      <p>
                        Your application has been received. Our HR team will
                        review it and get in touch with you shortly.
                      </p>
                    </div>
                  ) : (
                    <div className="form-wrap">
                      <h2>Work at Airis</h2>
                      <Form>
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

                        <div className="input-wrap">
                          <Field
                            name="link"
                            type="text"
                            placeholder="Link to Portfolio or LinkedIn"
                            className={
                              touched.link && errors.link ? "invalid" : ""
                            }
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

                        {/* Position Field */}
                        <div className="input-wrap">
                          <Select
                            name="position"
                            options={jobs}
                            styles={customStyles}
                            className={`form-field ${
                              touched.position && errors.position
                                ? "invalid"
                                : ""
                            }`}
                            onChange={(option) =>
                              setFieldValue(
                                "position",
                                option ? option.value : ""
                              )
                            }
                            placeholder="Position"
                            instanceId="position-select"
                            value={
                              jobs.find(
                                (job) => job.value === values.position
                              ) || null
                            }
                          />
                        </div>

                        {/* cv Upload */}
                        <div className="file-wrap">
                          <div
                            className="upload-custom"
                            onClick={() =>
                              document.getElementById("cv").click()
                            }
                          >
                            <span>
                              {values.cv ? values.cv.name : "Your CV"}
                            </span>
                            <img src="/images/upload.svg" alt="upload" />
                            <input
                              type="file"
                              id="cv"
                              style={{ display: "none" }}
                              onChange={(event) => {
                                const cv = event.target.files[0];
                                setFieldValue("cv", cv || null);
                              }}
                            />
                            <ErrorMessage
                              name="cv"
                              component="div"
                              className="error"
                            />
                          </div>
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

export default JobPopup;
