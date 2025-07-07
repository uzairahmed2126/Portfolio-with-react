import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import "./style.css";
function Contact({ contactSection, contactSubText }) {
  const conactRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: conactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl.from(conactRef.current, {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      const elements = conactRef.current.querySelectorAll(
        ".contact-form, .submit-btn"
      );

      tl.from(
        elements,
        {
          x: -100,
          opacity: 0,
          stagger: 0.15,
          ease: "power2.out",
          duration: 0.8,
        },
        "-=0.5"
      );
    },
    { scope: conactRef }
  );

  return (
    <section className={`contact-section ${contactSection}`} ref={conactRef}>
      <h2 className="contact-heading">Get In Touch</h2>
      <p className={`contact-subtext ${contactSubText}`}>
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
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
