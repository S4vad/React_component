import React from "react";
import concepts from "../content";


function CreateArea(){
    return (
        <ul id="concepts">
        {concepts.map((content, index) => (
          <li className="concept" key={index}>
            <img src={content.image} alt={`Illustration of ${content.title}`} />
            <h2>{content.title}</h2>
            <p>{content.description}</p>
          </li>
        ))}
      </ul>


    )
}

export default CreateArea;