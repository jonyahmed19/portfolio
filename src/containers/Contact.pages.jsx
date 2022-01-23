import React from "react";
import Header from "../components/Header.component";
import Title from "../components/Title.component";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send(
        "service_6e93k72",
        "template_mxeywmw",
        data,
        "user_pr2ku1hwE27YPJsKgIQII"
      )
      .then(
        (response) => {
          console.log("Success", response.status, response.text);
        },
        (err) => {
          console.log("Failed", err);
        }
      );
  };

  return (
    <div className="contactpage">
      <Header />
      <div className="container">
        <Title />
        <div className="container">
          <div className="form-area">
            {
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                  Full Name:<span>*</span>
                </label>
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  id="name"
                  name="name"
                  type="text"
                  className={errors.name && "error"}
                />
                <label htmlFor="mail">
                  Email:<span>*</span>
                </label>
                <input
                  {...register("mail", { required: true })}
                  id="mail"
                  name="mail"
                  type="mail"
                  className={errors.mail && "error"}
                />
                <label htmlFor="message">
                  Message:<span>*</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  id="message"
                  name="message"
                  className={errors.message && "error"}
                />
                <input type="submit" value="Send" />
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
