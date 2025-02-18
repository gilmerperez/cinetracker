import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <h2 className="text-center mb-3">Contact Us</h2>
        <div className="mb-3 text-center resize mx-auto">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 text-center resize mx-auto">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message to Developers
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded shadow">
          <div className="my-3 p-3">
            <h2 className="display-5">Adi</h2>
          </div>
          <div
            className="bg-dark text-white shadow-sm mx-auto d-flex flex-column justify-content-center align-items-center p-4"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <p>user@emaildomain.com</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
            <a
              href="https://github.com/AdiPatel095"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://stackoverflow.com/questions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <i
                className="bi bi-stack-overflow"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded shadow">
          <div className="my-3 p-3">
            <h2 className="display-5">Gilmer</h2>
          </div>
          <div
            className="bg-dark text-white shadow-sm mx-auto d-flex flex-column justify-content-center align-items-center p-4"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <p>user@emaildomain.com</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
            <a
              href="https://github.com/gilmerperez"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://stackoverflow.com/questions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <i
                className="bi bi-stack-overflow"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded shadow">
          <div className="my-3 p-3">
            <h2 className="display-5">Freddy</h2>
          </div>
          <div
            className="bg-dark text-white shadow-sm mx-auto d-flex flex-column justify-content-center align-items-center p-4"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <p>user@emaildomain.com</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
            <a
              href="https://github.com/Fredbo561"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://stackoverflow.com/questions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <i
                className="bi bi-stack-overflow"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden rounded shadow">
          <div className="my-3 p-3">
            <h2 className="display-5">Stanley</h2>
          </div>
          <div
            className="bg-dark text-white shadow-sm mx-auto d-flex flex-column justify-content-center align-items-center p-4"
            style={{
              width: "80%",
              height: "300px",
              borderRadius: "21px 21px 0 0",
            }}
          >
            <p>user@emaildomain.com</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>
          </div>
          <div className="d-flex justify-content-center gap-3 mt-3 mb-3">
            <a
              href="https://github.com/bertrandstanley"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://stackoverflow.com/questions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning"
            >
              <i
                className="bi bi-stack-overflow"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
