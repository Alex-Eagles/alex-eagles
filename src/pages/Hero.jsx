import "../styles/Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/drone.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay">
        <h1>ALEX EAGLES</h1>
        <p>Pushing the boundaries of aerial innovation and expertise</p>

        <button
          onClick={() =>
            document.querySelector(".features").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Discover More
        </button>
      </div>
    </section>
  );
}