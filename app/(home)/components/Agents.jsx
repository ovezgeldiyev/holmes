import React from "react";
import Slider from "react-slick/lib/slider";
const agentsList = [
  {
    id: "1",
    image: "/images/agents/1.jpg",
    name: "Mariana Alves",
    info: "5 avaliações · 4,9 estrelas",
  },
  {
    id: "2",
    image: "/images/agents/2.jpg",
    name: "Ricardo Santos",
    info: "7 avaliações · 4,8 estrelas",
  },
  {
    id: "3",
    image: "/images/agents/3.jpg",
    name: "Camila Oliveira",
    info: "6 avaliações · 4,7 estrelas",
  },
  {
    id: "4",
    image: "/images/agents/4.jpg",
    name: "Lucas Costa",
    info: "4 avaliações · 4,9 estrelas",
  },
  {
    id: "5",
    image: "/images/agents/2.jpg",
    name: "Ricardo Santos",
    info: "7 avaliações · 4,8 estrelas",
  },
];
const agentsList2 = [
  {
    id: "1",
    image: "/images/agents/avatars/1.jpg",
    name: "Jenna Parker",
    info: "Real estate agent at Luxe Realty",
  },
  {
    id: "2",
    image: "/images/agents/avatars/2.jpg",
    name: "Marcus Liu",
    info: "Real estate agent at Horizon Homes",
  },
  {
    id: "3",
    image: "/images/agents/avatars/3.jpg",
    name: "Olivia Chen",
    info: "Real estate agent at Prestige Properties",
  },
  {
    id: "4",
    image: "/images/agents/avatars/4.jpg",
    name: "Nathan Thompson",
    info: "Real estate agent at Skyline Realty",
  },
];
export default function Agents() {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.4,
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
    <section className="agents">
      <div className="auto__container">
        <div className="agents__inner">
          <div className="agents__inner-title">
            <h3>Estate Agent Spotlight</h3>
          </div>
          <Slider className="agents__inner-slider" {...settings}>
            {agentsList.map((item, index) => {
              return <AgentsItem {...item} key={index} />;
            })}
          </Slider>
          <div className="agentsList">
            {agentsList2.map((item, index) => {
              return <AgentsProfile {...item} key={index} />;
            })}
          </div>
          <div className="agentsCount">
            <div className="agentsCount__item">
              <h4>4.9</h4>
              <p className="sm">Average rating</p>
            </div>
            <div className="agentsCount__item">
              <h4>500</h4>
              <p className="sm">Properties sold</p>
            </div>
            <div className="agentsCount__item">
              <h4>$1B</h4>
              <p className="sm">Sales volume</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const AgentsItem = (props) => {
  return (
    <div className="agentsItem">
      <div className="agentsItem__image">
        <img src={props.image} alt="" />
      </div>
      <div className="agentsItem__content">
        <h6>{props.name}</h6>
        <p className="sm">{props.info}</p>
      </div>
    </div>
  );
};
const AgentsProfile = (props) => {
  return (
    <div className="agentsProfile">
      <div className="agentsProfile__image">
        <img src={props.image} alt="" />
      </div>
      <div className="agentsProfile__content">
        <h6>{props.name}</h6>
        <p className="sm">{props.info}</p>
      </div>
    </div>
  );
};
