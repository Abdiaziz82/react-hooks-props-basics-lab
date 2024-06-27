import React from "react";
import Links from "./Links";

function About(props) {
  // Opening curly brace for function body

  return (
    <div id="about">
      <h2>About Me</h2>

      {props.bio ? (
        <p>{props.bio}</p>
      ) : (
        null
      )}
      
      {/* Image element */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* Links component */}
      <Links
        github="https://github.com/liza"
        linkedin="https://www.linkedin.com/in/liza/"
      />
    </div>
  );
 
}

export default About;

