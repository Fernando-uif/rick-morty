import {useState} from "react";
import { CardEpisodes } from "./episodes/CardEpisodes";
import HomeLayout from "../sass/layout/Inicio.module.scss";

import "../sass/components/arrowButton.scss";

export const Episodes = () => {
  const [move, setMove] = useState(0);
  const handleMove = (e) => {
    const clase = e.target.classList[0];
    if (clase === "container__button-left") {
      setMove(move + 33.1);
    } else {
      setMove(move - 33.1);
    }
  };
  console.log(move,'Move');
  
  return (
    <>
      <div
        className={`${HomeLayout.container__locations} ${HomeLayout.container__episodes}`}
      >
        <div className={`${HomeLayout.container__flex}`}>
          <div className={`${HomeLayout.container__flex__title}`}>
            Episodes
            <hr />
          </div>
          <div className="container__arrow container__arrow-left">
            <svg
              onClick={(e) => handleMove(e)}
              className="container__button-left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t="angle-left-svg"
              aria-labelledby="angle-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="angle-svg">Before</title>
              <path
                className="container__button-left"
                d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
              ></path>
            </svg>
          </div>
          <CardEpisodes url={"episode"} move={move}/>
          <div className="container__arrow container__arrow-right">
            <svg
              onClick={(e) => handleMove(e)}
              className="container__button-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t="angle-left-svg"
              aria-labelledby="angle-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="angle-svg">Next</title>
              <path
                className="container__button-right"
                d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
