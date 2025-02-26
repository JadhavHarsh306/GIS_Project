import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-light mt-5 pt-5">
      {/* About Us Section */}
      <section className="text-center py-5 bg-light">
        <h1 className="text-primary fw-bold mb-4" data-aos="fade-up">About Us</h1>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4" data-aos="fade-right">
              <img
                alt="Person giving a presentation"
                className="img-fluid rounded"
                src="/images/group.jpg"
              />
            </div>
            <div className="col-md-6 text-start" data-aos="fade-left">
              <h2 className="text-dark fw-bold mb-3">Who We Are</h2>
              <p className="text-secondary">
                We are a team of four MSc Geoinformatics students—Vinod, Pratyush, Tina, and Bhavya—from Department Of Geography Savitribai Phule Pune University. Passionate about spatial science and  AI technology, we  worked on this innovative project for Science Day, showcasing the power of geoinformatics in solving real-world challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            {/* Mission */}
            <div className="col-md-4 mb-4" data-aos="flip-left">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-white rounded-circle p-3"></div>
              </div>
              <h2 className="fw-bold">Mission</h2>
              <p>
                Our mission is to democratize AI development so that anyone, anywhere, can help
                solve pressing social, environmental, and economic challenges.
              </p>
            </div>

            {/* Vision */}
            <div className="col-md-4 mb-4" data-aos="flip-up">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-secondary rounded-circle p-3"></div>
              </div>
              <h2 className="fw-bold">Vision</h2>
              <p>
                We envision a future where AI is ethically employed and accessible to all,
                solving real-world challenges in sustainable ways.
              </p>
            </div>

            {/* Values */}
            <div className="col-md-4 mb-4" data-aos="flip-right">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-info rounded-circle p-3"></div>
              </div>
              <h2 className="fw-bold">Values</h2>
              <ul className="list-unstyled">
                <li>✅ Collaboration: Diverse perspectives for impact.</li>
                <li>✅ People-centric: Centering people in AI.</li>
                <li>✅ Inclusivity: Equal access for all.</li>
                <li>✅ Innovation: Pushing responsible AI.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
