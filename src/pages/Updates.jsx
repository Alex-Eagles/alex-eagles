import "../styles/Updates.css";

export default function Updates() {
  return (
    <section className="updates">
      <h2 className="updates-title">Latest Updates</h2>

      <div className="updates-list">
        <div className="update-item">
          <h4>March 10, 2025</h4>
          <p>🏆5th Place - Overall UAVC</p>
        </div>

        <div className="update-item">
          <h4>March 5, 2025</h4>
          <p>🏆Best Technical Design Report UAVC</p>
        </div>

        <div className="update-item">
          <h4>February 28, 2025</h4>
          <p>🏆Best Technical Design Report SUAS</p>
        </div>
      </div>
    </section>
  );
}