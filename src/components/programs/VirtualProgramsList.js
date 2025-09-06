import React from "react";
import "./Programs.css";
import Section from "../common/section/Section";

function VirtualProgramsList() {
  const articles = [
    {
      id: 3,
      fallbackSrc: "./img/programs/butterfly.jpg",
      sectionHeading: "Thursday Satsang",
      desc:
        "Earlier every thursday the disciples would gather at gurusthan to" +
        " listen to the divine discourses of Our Gurudev. But in the" +
        " pandemic this is turned into a virtual program to connect the" +
        " people all over India. In this e-satsang the satsangis share their" +
        " experiences, their understanding, listen to the recorded" +
        " discourses of the master and meditate. On every full moon a" +
        " separate meditation session is conducted virtually for group" +
        " meditation. This is a blessing for all those who live far away and" +
        " wish to connect in group.",
      timingInfo: "Timings: Every Thursday @ 7 PM IST on google meet",
      btnInfo: "To participate :",
      btnText: " Register",
      btnLink: "https://forms.gle/UfvqyXE1v8XpituC7",
    },
    {
      id: 4,
      fallbackSrc: "./img/programs/me-into-me-default.jpg",
      sectionHeading: "Me into Me",
      desc:
        " Me into Me is one of the blessings from Amma- Sadguru Sri vani" +
        "  Matha. Me into Me is designed to reach all people and bring forth" +
        " spirituality in them by following the path that our master laid" +
        " out. It is a journey from outer me - which is indulged in all" +
        " worldly things- to inner me - which is the embodiment of eternal" +
        " bliss. In this program we bring you the divine discourses of Amma" +
        " translated in english. Also, we share our experiences, interact" +
        " helping each other to move forward in our spiritual life. This" +
        " program occurs once a week and will give us the strength and" +
        " energy to face the life situations and challenges ahead for the" +
        " whole week. Take part in this program to kick off your week in a" +
        " positive way.",
      timingInfo: "Timings: Every Sunday @ 10 AM CST on Zoom",
      btnInfo: "To participate :",
      btnText: " Register",
      btnLink: "https://SVASSundays.eventbrite.sg",
      backgroundCol: "blue-gradient",
    },
  ];

  const sections = articles.map((article) => {
    console.log(article.btnText);
    return (
      <>
        <Section key={article.id} {...article}></Section>
      </>
    );
  });
  return sections;
}
export default VirtualProgramsList;
