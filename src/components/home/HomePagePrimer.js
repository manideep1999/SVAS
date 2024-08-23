import React from "react";
import "./HomePagePrimer.css";
import FlipCircle from "../common/flipElement/FlipCircle";
import FlipElement from "../common/flipElement/FlipElement";
import SVASSlider from "../common/carousel-slider/SVASSlider";
function HomePagePrimer() {
  const primerInfo = [
    {
      imageUrl: "./img/flipcard/lotus2.jpg",
      heading:"Spirituality",
      desc: "Spirituality is brilliance. Spirituality is jnana. Spirituality is a path of light that guides you. It is an illusion that you and spirituality are both separate. When you are born on this earth you are born along with prana, living with breath. In the same prana a divine form- the divinity, also comes along with you. For you, under the illusion that you are the jeevatma in the external world, that divine consciousness gives a form - “I”. The path to the divine consciousness from the “I” which is formed from the same divine consciousness- is spirituality. That is YOU.",
    },
    {
      imageUrl: "./img/flipcard/sunrise.jpg",
      heading:"Meditation",
      desc: "Meditation gives you peace. It gives you tranquility, gives you energy, gives you happiness, enhances your thinking, gives clarity to your thoughts. Brings integrity into your life",
    },
    {
      imageUrl: "./img/flipcard/mountain.jpg",
      heading:"Life",
      desc: " Life is wholeness, integrity . Life is  supreme. Life is a great opportunity that God has bestowed you with.Strangely enough, you are looking at the life happening outside while life is happening inside of you.",
    },
    {
      imageUrl: "./img/flipcard/tree.jpg",
      heading:"Sadana",
      desc: "To attain the ultimate state in the journey of spiritual life one must do Sadhana. Sadhana means to conquer your mind and win over yourself. The first Sadhana you need to do is to coordinate your Manas(mind), Buddhi(intellect) Indriyas and Gnanendriyas(5 senses of perception). When your sadana takes you from this state of harmony between Manas, Buddhi, Indriyas and Gnanendriyas to the state of oneness , from the state of oneness to the state of divinity and then it becomes complete. To achieve that state, one has to work hard with self discipline (internal & external) in their spiritual practice.",
    },
  ];
  return (
    <>
      <article className="container-fluid article-container">
        <div class="row no-gutters">
          {primerInfo.map((info) => (
            <div class="col-12 col-md-6 col-lg-3 px-5 ">
              <FlipCircle {...info}></FlipCircle>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
export default HomePagePrimer;
