import React from "react";
import SermonAudioSeries from "./SermonAudioSeries";

const SermonseriesPage = (props) => {
  const title = decodeURIComponent(props.match.params.title);
  return (
    <div className="Sermons-page">
      <h1>{title}</h1>
      <hr />
      <div>
        <SermonAudioSeries title={title} showHeader={false} />
      </div>
    </div>
  );
};

export default SermonseriesPage;
