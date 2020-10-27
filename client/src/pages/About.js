import React from "react";
import "./Spotify.css";

function About() {
  const floatL = {
    float: "left",
  };

  return (
    <div>
      <p class="lightgreen" class="aboutTitle">
        GEOJAMMER
      </p>

      <p class="aboutDiv">
        {" "}
        GeoJammer is an app that is intended to connect people through the
        dynamic and subjective experience of music in specific settings. Imagine
        you’re driving down the Blue Ridge Parkway and you pull off at a
        magnificent vista, and put Fleet Foxes’ “Blue Ridge Mountains” on the
        stereo. As you enjoy this song while soaking up the beautiful views, you
        think to yourself “I wish I could share this experience with other
        people”. GeoJammer will allow you to add that song to a playlist that is
        tied to geo-coordinates of that specific location. Next time someone
        pulls off there, they can use GeoJammer to to see if there is a playlist
        for that location. They pull it up in the Spotify web player and hear
        the Fleet Foxes song, and then are able to add a song of their own
        choosing to the established playlist. Whether it’s a hiking trailhead, a
        running path, or your favorite park bench, GeoJammer connects people
        through the shared experience of music.
      </p>
    </div>
  );
}

export default About;
