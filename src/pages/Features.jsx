import "../styles/Features.css";

function Features() {
  return (
    <section className="features">
      <h2 className="title">ALEX EAGLES</h2>

      <p className="subtitle">
        We are a passionate team of drone enthusiasts dedicated to capturing the
        world from new heights.
      </p>

      <div className="features-content">
        <div className="features-image">
          <img src="/team.jpg" alt="team" />
        </div>

        <div className="features-text">
          <h3>Our Mission</h3>
          <p>
            Founded in 2020, our team has grown from a small group of hobbyists
            into a professional drone cinematography company. We specialize in
            capturing breathtaking aerial footage for events, real estate, and
            creative projects.
          </p>

          <p>
            Our goal is to push the boundaries of drone technology and visual
            storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;