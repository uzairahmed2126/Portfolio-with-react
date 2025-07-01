import "./style.css";
function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Get In Touch</h2>
      <p className="contact-subtext">
        Have a question, project idea, or just want to say hello? Feel free to
        reach out!
      </p>

      <form
        className="contact-form"
        action="#"
        // method="POST"
        // encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message..."
          rows="6"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
