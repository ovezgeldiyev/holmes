import React from "react";
import Slider from "react-slick/lib/slider";
const blogsList = [
  {
    id: "1",
    image: "/images/blogs/1.jpg",
    title: "Tendências do Mercado Imobiliário",
  },
  {
    id: "2",
    image: "/images/blogs/2.jpg",
    title: "Dicas para Comprar sua Primeira Casa",
  },
  {
    id: "3",
    image: "/images/blogs/3.jpg",
    title: "Destinos de Férias: Aluguel de Temporada",
  },
  {
    id: "4",
    image: "/images/blogs/4.jpg",
    title: "Investimento em Imóveis: Apartamentos Modernos",
  },
  {
    id: "5",
    image: "/images/blogs/5.jpg",
    title: "Vida Urbana vs. Subúrbio: Qual é a Melhor Opção?",
  },
  {
    id: "6",
    image: "/images/blogs/4.jpg",
    title: "Investimento em Imóveis: Apartamentos Modernos",
  },
];
const newsList = [
  {
    id: "1",
    image: "/images/news/1.jpg",
    title: "The top 10 cities for millennial homebuyers",
    date: "June 15, 2022",
  },
  {
    id: "2",
    image: "/images/news/2.jpg",
    title: "What the latest interest rate hike means for mortgages",
    date: "June 3, 2022",
  },
  {
    id: "3",
    image: "/images/news/3.jpg",
    title: "Home price trends in popular vacation destinations",
    date: "May 20, 2022",
  },
  {
    id: "4",
    image: "/images/news/4.jpg",
    title: "Tips for staging your home to sell",
    date: "May 10, 2022",
  },
  {
    id: "5",
    image: "/images/news/5.jpg",
    title: "The pros and cons of buying a fixer-upper",
    date: "April 28, 2022",
  },
  {
    id: "6",
    image: "/images/news/6.jpg",
    title: "How to navigate a competitive rental market",
    date: "April 15, 2022",
  },
  {
    id: "7",
    image: "/images/news/2.jpg",
    title: "What the latest interest rate hike means for mortgages",
    date: "June 3, 2022",
  },
  {
    id: "8",
    image: "/images/news/4.jpg",
    title: "Tips for staging your home to sell",
    date: "May 10, 2022",
  },
  {
    id: "9",
    image: "/images/news/5.jpg",
    title: "The pros and cons of buying a fixer-upper",
    date: "April 28, 2022",
  },
];
export default function Blog() {
  const settings = {
    infinite: false,
    slidesToShow: 4.9,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="property">
      <div className="auto__container">
        <div className="property__inner">
          <div className="property__inner-content">
            <div className="property__inner-title">
              <h3>Blog & Notícias</h3>
            </div>
            <Slider className="property__inner-slider" {...settings}>
              {blogsList.map((item, index) => {
                return <BlogItem {...item} key={index} />;
              })}
            </Slider>
          </div>
          <div className="property__inner-content">
            <div className="property__inner-title">
              <h3>Market insights and news</h3>
            </div>
            <Slider className="property__inner-slider sm" {...settings2}>
              {newsList.map((item, index) => {
                return <NewsItem {...item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
const BlogItem = (props) => {
  return (
    <a href="#" className="propertyItem big">
      <div className="propertyItem__image">
        <img src={props.image} alt="" />
      </div>
      <h6>{props.title}</h6>
    </a>
  );
};
const NewsItem = (props) => {
  return (
    <a href="#" className="propertyItem ex">
      <div className="propertyItem__image">
        <img src={props.image} alt="" />
      </div>
      <h6>{props.title}</h6>
      <p className="sm">{props.date}</p>
    </a>
  );
};
