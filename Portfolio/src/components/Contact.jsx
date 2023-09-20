import React from "react";
import styles from "../style";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const options = {
    rootMargin: "250px",
    threshold: 0,
    triggerOnce: true,
  };

  const { ref, inView } = useInView(options);

  return (
    <section
      ref={ref}
      className={`px-3 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[300px]"
      } ease-in-out duration-1000 ${styles.flexCenter} flex-col gap-3`}
      id="contact"
    >
      {/* Primary Heading */}
      <h2 className={`primary__heading text-center md:text-start`}>Contact</h2>
      {/* Horizontal Divier */}
      <div id="horizontal__divider" className="primary__dividerBg" />

      {/* Paragraph */}
      <p className={`${styles.paragraph} max-w-[470px] text-center mb-5`}>
        Thank you for visiting my{" "}
        <strong className="text-indigo-600">portfolio</strong>. I'm excited
        about the prospect of contribution my skills and passion as{" "}
        <strong className="text-indigo-600">a front-end developer</strong>. If
        you have any job opportunities, projects, or collaboration that align
        with my expertise, I'd love to hear from you. Feel free to get in touch
        using the button below. I'm looking forward to the possibility of
        joining your team and making a positive impact.
      </p>

      {/* Reach out button */}
      <a
        href="mailto: chanmyaeaung@my.jcu.edu.au"
        className={`${styles.cursorTransition} primary__button hover:text-[#c86800] hover:bg-white`}
        target="_blank"
      >
        Reach out
      </a>
    </section>
  );
};

export default Contact;
