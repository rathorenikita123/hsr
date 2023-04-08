import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { data } from "./Data";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="font-alk">
      <Navbar />
      <Hero
        bgimage="http://surl.li/gegvh"
        message="Our mission is to share the joy and beauty of flowers with the world. We believe that flowers have the power to uplift, inspire, and connect us to the natural world, and we're dedicated to showcasing the most vibrant and stunning blooms around. Our goal is to provide a platform where flower enthusiasts can come together to share their knowledge, exchange ideas, and appreciate the wonder of these incredible plants. We strive to be a trusted source of information and inspiration for anyone who loves flowers, and to foster a community of like-minded individuals who share our passion for all things floral."
      />
      <div className="pl-16 py-12">
        <div>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
            <Masonry gutter="1rem">
              {data.map((item) => (
                <Card
                  image={item.image}
                  heading={item.heading}
                  description={item.description}
                  link={item.link}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
