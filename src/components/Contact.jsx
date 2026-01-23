import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, feel free to drop a message!
          </p>

          {/* 1. Added your unique Formspree URL to 'action' */}
          {/* 2. Set 'method' to POST */}
          <form
            className="contact-form"
            action="https://formspree.io/f/xeeaevog"
            method="POST"
          >
            <div className="form-group">
              {/* 3. Added name="name" */}
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              {/* 4. Added name="email" */}
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              {/* 5. Added name="message" */}
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;