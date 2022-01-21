import React from "react";
import Header from "../components/Header.component";
import Title from "../components/Title.component";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (d) => console.log(JSON.stringify(d));

  return (
    <div className="contactpage">
      <Header />
      <div className="container">
        <Title />
        <div className="container">
          <div className="form-area">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
