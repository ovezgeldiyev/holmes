import { dislikeIcon, likeIcon } from "@/app/Base/SVG";
import React, { useState } from "react";
const reviewsList = [
  {
    id: "1",
    avatar: "/images/reviews/1.png",
    name: <>Maur\u00edcio</>,
    time: "1 day ago",
    rate: 4,
    text: "I was blown away by the selection of properties on Brazuca Real Estate. The search interface is super intuitive and I was able to find my perfect home in no time.",
    likes: 10,
    dislikes: null,
  },
  {
    id: "2",
    avatar: "/images/reviews/2.png",
    name: "Ana",
    time: "2 days ago",
    rate: 5,
    text: "Brazuca Real Estate has everything you need to find your dream home. The listings are always up to date and the platform is easy to use. I highly recommend it to anyone looking for a property in Brazil.",
    likes: 15,
    dislikes: null,
  },
  {
    id: "3",
    avatar: "/images/reviews/1.png",
    name: <>Maur\u00edcio</>,
    time: "1 day ago",
    rate: 4,
    text: "I was blown away by the selection of properties on Brazuca Real Estate. The search interface is super intuitive and I was able to find my perfect home in no time.",
    likes: 10,
    dislikes: null,
  },
  {
    id: "4",
    avatar: "/images/reviews/2.png",
    name: "Ana",
    time: "2 days ago",
    rate: 5,
    text: "Brazuca Real Estate has everything you need to find your dream home. The listings are always up to date and the platform is easy to use. I highly recommend it to anyone looking for a property in Brazil.",
    likes: 15,
    dislikes: null,
  },
];
export default function Reviews() {
  const [type, setType] = useState("list");

  return (
    <section className="reviews">
      <div className="auto__container">
        <div className="reviews__inner">
          <div className="reviews__inner-title">
            <h2>Quer vender ou alugar seu imóvel?</h2>
            <div className="reviews__inner-tabs">
              <button
                type="button"
                className={type === "list" ? "reviewsTab active" : "reviewsTab"}
                onClick={() => setType("list")}
              >
                List Your Property
              </button>
              <button
                type="button"
                className={
                  type === "schedule" ? "reviewsTab active" : "reviewsTab"
                }
                onClick={() => setType("schedule")}
              >
                Schedule a Visit
              </button>
            </div>
          </div>
          <div className="reviews__inner-content">
            <h3>Testimonials</h3>
            <div className="reviews__inner-row">
              {reviewsList.map((item, index) => {
                return <ReviewsItem {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const ReviewsItem = (props) => {
  return (
    <div className="reviewsItem">
      <div className="reviewsItem__row">
        <div className="reviewsItem__avatar">
          <img src={props.avatar} alt="" />
        </div>
        <div className="reviewsItem__name">
          <h6>{props.name}</h6>
          <p className="sm">{props.time}</p>
        </div>
      </div>
      <div className="rate">
        <div className="rate__range">
          <img src="/images/icons/starsBg.png" alt="" />
          <div
            className="rate__range-progress"
            style={{ width: `${props.rate * 20}%` }}
          >
            <img src="/images/icons/stars.png" alt="" />
          </div>
        </div>
      </div>
      <div className="reviewsItem__text">
        <p>{props.text}</p>
      </div>
      <div className="reviewsItem__foot">
        <div className="reviewsItem__foot-item">
          {likeIcon}
          <p>{props.likes}</p>
        </div>
        <div className="reviewsItem__foot-item">
          {dislikeIcon}
          <p>{props.dislikes}</p>
        </div>
      </div>
    </div>
  );
};
