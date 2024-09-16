import {
  CondominiumIcon,
  apartmentIcon,
  dollarIcon,
  houseIcon,
  landIcon,
  locationIcon,
  studioIcon,
} from "@/app/Base/SVG";
import React from "react";
import Slider from "react-slick/lib/slider";

const featuredProperties = [
  {
    id: "1",
    image: "/images/property/1.jpg",
    title: <>Luxury apartment in S\u00e3o Paulo</>,
    price: "$2,500,000",
  },
  {
    id: "2",
    image: "/images/property/2.jpg",
    title: "Beach house in Rio de Janeiro",
    price: "$1,800,000",
  },
  {
    id: "3",
    image: "/images/property/3.jpg",
    title: "Penthouse in Salvador",
    price: "$3,200,000",
  },
  {
    id: "4",
    image: "/images/property/4.jpg",
    title: "Beach house in Rio de Janeiro",
    price: "$1,800,000",
  },
  {
    id: "5",
    image: "/images/property/5.jpg",
    title: <>Villa in Florian\u00f3polis</>,
    price: "$2,700,000",
  },
  {
    id: "6",
    image: "/images/property/6.jpg",
    title: <>Villa in Florian\u00f3polis</>,
    price: "$2,700,000",
  },
  {
    id: "7",
    image: "/images/property/4.jpg",
    title: "Beach house in Rio de Janeiro",
    price: "$1,800,000",
  },
];
const newListings = [
  {
    id: "1",
    image: "/images/property/7.jpg",
    title: "Modern apartment in Curitiba",
    price: "$600,000",
  },
  {
    id: "2",
    image: "/images/property/8.jpg",
    title: "Countryside retreat in Gramado",
    price: "$900,000",
  },
  {
    id: "3",
    image: "/images/property/9.jpg",
    title: <>Surfer's paradise in Itacar\u00e9</>,
    price: "$300,000",
  },
  {
    id: "4",
    image: "/images/property/10.jpg",
    title: "Historic mansion in Ouro Preto",
    price: "$1,200,000",
  },
  {
    id: "5",
    image: "/images/property/11.jpg",
    title: "Modern apartment in Curitiba",
    price: "$600,000",
  },
  {
    id: "6",
    image: "/images/property/12.jpg",
    title: "Countryside retreat in Gramado",
    price: "$900,000",
  },
  {
    id: "7",
    image: "/images/property/10.jpg",
    title: "Historic mansion in Ouro Preto",
    price: "$1,200,000",
  },
];
const propertyTypes = [
  {
    id: "1",
    image: "/images/property/types/1.jpg",
    title: "Houses",
  },
  {
    id: "2",
    image: "/images/property/types/2.jpg",
    title: "Apartments",
  },
  {
    id: "3",
    image: "/images/property/types/3.jpg",
    title: "Condos",
  },
  {
    id: "4",
    image: "/images/property/types/4.jpg",
    title: "Townhouses",
  },
  {
    id: "5",
    image: "/images/property/types/5.jpg",
    title: "Coberturas",
  },
  {
    id: "6",
    image: "/images/property/types/6.jpg",
    title: "Casa de Campo",
  },
  {
    id: "7",
    image: "/images/property/types/7.jpg",
    title: "Casa na Praia",
  },
  {
    id: "8",
    image: "/images/property/types/8.jpg",
    title: "Terreno",
  },
];
export default function Property() {
  const settings = {
    infinite: false,
    slidesToShow: 5.6,
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
  return (
    <section className="property">
      <div className="auto__container">
        <div className="property__inner">
          <div className="property__inner-tags">
            <div className="propertyTag">
              {apartmentIcon}
              Apartments
            </div>
            <div className="propertyTag">
              {houseIcon}
              Houses
            </div>
            <div className="propertyTag">
              {CondominiumIcon}
              Condominiums
            </div>
            <div className="propertyTag">
              {studioIcon}
              Studios
            </div>
            <div className="propertyTag">
              {apartmentIcon}
              Commercial Properties
            </div>
            <div className="propertyTag">
              {landIcon}
              Land
            </div>
          </div>
          <div className="property__inner-content">
            <div className="property__inner-title">
              <h3>Featured Properties</h3>
            </div>
            <Slider className="property__inner-slider" {...settings}>
              {featuredProperties.map((item, index) => {
                return <PropertyItem {...item} key={index} />;
              })}
            </Slider>
          </div>
          <div className="property__inner-content">
            <div className="property__inner-title">
              <h3>New Listings</h3>
            </div>
            <Slider className="property__inner-slider" {...settings}>
              {newListings.map((item, index) => {
                return <PropertyItem {...item} key={index} />;
              })}
            </Slider>
          </div>
          <div className="property__inner-content">
            <div className="property__inner-title last">
              <h3>Property types</h3>
            </div>
            <div className="property__inner-row">
              {propertyTypes.map((item, index) => {
                return <PropertyCard {...item} key={index} />;
              })}
            </div>
          </div>
          <div className="property__inner-title sm">
            <h3>Popular Searches</h3>
          </div>
          <div className="property__inner-tags">
            <div className="propertyTag">
              {dollarIcon}
              $100,000 - $200,000
            </div>
            <div className="propertyTag">
              {dollarIcon}
              $200,000 - $300,000
            </div>
            <div className="propertyTag">
              {dollarIcon}
              $300,000 - $400,000
            </div>
            <div className="propertyTag">
              {locationIcon}
              S\u00e3o Paulo
            </div>
            <div className="propertyTag">
              {locationIcon}
              Rio de Janeiro
            </div>
            <div className="propertyTag">
              {locationIcon}
              Bras\u00edlia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const PropertyItem = (props) => {
  return (
    <a href="#" className="propertyItem">
      <div className="propertyItem__image">
        <img src={props.image} alt="" />
      </div>
      <h6>{props.title}</h6>
      <p className="sm">{props.price}</p>
    </a>
  );
};
const PropertyCard = (props) => {
  return (
    <a href="#" className="propertyCard">
      <div className="propertyCard__image">
        <img src={props.image} alt="" />
      </div>
      <h5>{props.title}</h5>
    </a>
  );
};
