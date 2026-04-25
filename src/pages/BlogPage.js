import AnimatedPage from "./AnimatedPage";
import background from "../assets/images/bgnd-logo.png";
import { Box, Container } from "@mui/material";
import Footer from "../components/Footer/Footer";
import { BlogHeader } from "../components/BlogPage/BlogHeader";
import { BlogFilters } from "../components/BlogPage/BlogFilters";
import { BlogCard } from "../components/BlogPage/BlogCard";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Building Our First Autonomous Drone",
    excerpt: "Deep dive into the hardware and software architecture that powers our autonomous flight systems.",
    image: "/images/drone.jpg",
    category: "hardware",
    date: "Mar 10, 2026",
    author: "Sarah Chen",
    readTime: "8 min read",
  },
];

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? posts
    : posts.filter((p) => p.category === activeFilter);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <AnimatedPage>
        <Box sx={{ position: "relative", px: 4, py: 8, color: "#FFFFFF" }}>
          <Container maxWidth="lg">
            <BlogHeader />
            <BlogFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
              {filtered.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </Box>
          </Container>
        </Box>
        <Footer />
      </AnimatedPage>
    </>
  );
};

export default BlogPage;