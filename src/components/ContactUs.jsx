"use client";
import React from "react";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import useCountryCode from "@/utils/useCountryCode";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonArrow from "@/icons/ButtonArrow";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import CheckboxIcon from "@/icons/CheckboxIcon";

const ContactUs = () => {
  const countryCode = useCountryCode();
  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please provide a valid email address")
      .required("This field is required"),
    phone: Yup.string().required("This field is required"),
    agree: Yup.boolean()
      .oneOf([true], "This field is required")
      .required("This field is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setStatus({ success: true });
    }, 400);
    /*
    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
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
    }*/
  };

  return (
    <section className="contact-us">
      <div className="_container">
        <div className="contact-us__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-01"
          >
            <Image
              alt="contact"
              src="/images/home/contact.png"
              width={530}
              height={415}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-02"
          >
            <h2>Contact Us for More Information</h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                isSubmitting,
                status,
                resetForm,
                setFieldValue,
                touched,
                errors,
              }) => (
                <div className="form-wrap">
                  <Form>
                    <div className="form-inner">
                      <div>
                        <Field
                          name="name"
                          type="text"
                          placeholder="Your Name"
                          className={
                            touched.name && errors.name ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <PhoneInput
                          country={countryCode}
                          placeholder="Phone"
                          onChange={(phone) => setFieldValue("phone", phone)}
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

                      <div>
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
                            I have read the Privacy Policy and agree to the
                            terms and conditions
                          </span>
                        </label>
                        <ErrorMessage
                          name="agree"
                          component="div"
                          className="error"
                        />
                      </div>

                      <button
                        type="submit"
                        className="order-button"
                        disabled={isSubmitting}
                      >
                        <span>Submit</span>
                        <ButtonArrow />
                      </button>
                    </div>
                    {status && status.success && (
                      <div className="success">
                        <h3>Submission successful!</h3>
                      </div>
                    )}
                  </Form>
                </div>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
