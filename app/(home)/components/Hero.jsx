import Search from "@/app/components/Search";
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="auto__container">
        <div className="hero__inner">
            <div className="hero__inner-bg">
                <img src="/images/hero.jpg" alt="" />
            </div>
          <div className="hero__inner-content">
            <h1>Find your dream home easily</h1>
            <p className="ex">
              Discover the best properties to buy and rent in Brazil
            </p>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
}
