import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from '../styles/Home.module.css'

const ProjectCard = ({ blok }) => {
  return <div {...sbEditable(blok)} >
    <a href={blok.link.url} >
      <h2 >{blok.title} &rarr;</h2>
      <p>{blok.description}</p>
    </a>
  </div>
    ;
};

export default ProjectCard;