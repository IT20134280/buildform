import React, { useRef } from "react";
import Page1 from "./Forms/QuesForm01";
import Navbar from "./Navbar";

const FormSection = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);

  const scrollTo = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-h-screen  overflow-hidden">
      <Navbar className="fixed" />

      <div className="min-h-screen" ref={section1}>
        <Page1 scrollTo={scrollTo} goToSectionRef={section2} />
      </div>
    </section>
  );
};

export default FormSection;
