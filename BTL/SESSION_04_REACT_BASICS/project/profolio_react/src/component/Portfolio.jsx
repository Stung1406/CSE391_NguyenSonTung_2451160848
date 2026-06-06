import { useState } from "react";
import { portfolioItems } from "../data/portfolio";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "mobile", "design"];

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);
// [FEATURE] Render project list from state    
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>

        <div className="filters" style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? "btn-primary" : "btn-outline"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
