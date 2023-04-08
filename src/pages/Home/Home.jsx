import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import { data } from "./Data";

const Home = () => {
  return (
    <div className="font-alk ">
      <Navbar />
      <Hero
        bgimage="http://surl.li/gegcc"
        message="Welcome to our flower website! We're delighted to have you here and can't wait to share our love of beautiful blooms with you. Our site is dedicated to showcasing the most vibrant and stunning flowers around, from delicate roses to exotic orchids and everything in between. Whether you're looking for inspiration for your next floral arrangement or simply want to admire the natural beauty of these incredible plants, you've come to the right place. So sit back, relax, and immerse yourself in the wonderful world of flowers. We hope you enjoy your time here!"
      />
      <div className="pl-16 py-12">
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
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

export default Home;
