"use client";
import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Header from "../Base/Header";
import Property from "./components/Property";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Footer from "../Base/Footer";
import Highlights from "./components/Highlights";
import Agents from "./components/Agents";

export default function page() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, []);
  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <main className="main">
        <Hero />
        <Property />
        <Reviews />
        <Blog />
        <Highlights />
        <Agents />
      </main>
      <Footer />
    </>
  );
}
