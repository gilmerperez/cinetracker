// import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "text") {
      setText(value);
    }

    setErrorMessage("");
  };

  // Function to validate email
  function validateEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Please fill out the name field");
      return;
    } else if (!email) {
      setErrorMessage("Please fill out the email address field");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    } else if (!text) {
      setErrorMessage("Please fill out the message field");
      return;
    }

    alert("Thank you for filling out the form! We'll be in touch soon.");

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <>
      {/* Contact Form */}
      <div className="container py-5">
        <h1 className="text-center mb-1">Contact Us!</h1>

        <form className="form" onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              value={text}
              name="text"
              onChange={handleInputChange}
              className="form-control"
              id="message"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
          </div>
          
          {/* Error message for validation */}
          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      {/* Developers Section */}
      <div className="container py-5">
        <div className="row justify-content-center shadow-lg p-4 rounded-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="col-12 col-md-3">
              <Link to={`/card${index + 1}`} className="text-decoration-none">
                <div
                  className="card contact-card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                  // style={{ backgroundImage: "url('../../scarface.jpg')" }} // Replace with your image URL or placeholder
                >
                  <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <ul className="d-flex list-unstyled mt-auto">
                      <li className="me-auto"></li>
                    </ul>
                    <div className="d-flex justify-content-between mt-3">
                      {/* Action 1 button */}
                      <button className="card-button card-btn btn text-white svg-button btn-sm border-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-plus-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </button>
                      {/* Action 2 button */}
                      <button className="card-button card-btn btn text-white svg-button btn-sm border-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      </button>
                      {/* Action 3 button */}
                      <button className="card-button card-btn btn text-white svg-button btn-sm border-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
