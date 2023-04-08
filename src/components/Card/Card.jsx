import React from "react";

const Card = ({ ...props }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={props.image} alt="img" />
      </figure>
      <div className="card-body flex items-center">
        <h2 className="card-title ">{props.heading}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={props.image}>
            {props.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
