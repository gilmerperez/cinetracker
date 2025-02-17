import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <h2 className="text-center mb-3">Contact Us</h2>
        <div className="mb-3 text-center resize mx-auto">
          <label htmlFor="exampleFormControlInput1" className="form-label">Your Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3 text-center resize mx-auto">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message to Developers</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
        </div>
      </div>

      <div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
          <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
