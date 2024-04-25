import React from "react";

function ProjectItem({ name, about, technologies,id }) {
  console.log({id})
  const spanList = technologies.map((tech,index)=> 
  (<span key={index}>{tech}</span>))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spanList}
      </div>
    </div>
  );
}

export default ProjectItem;
