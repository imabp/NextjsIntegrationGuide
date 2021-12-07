
import ProjectCard from "./projectcard";
import Page from "./Page"
import { sbEditable } from "@storyblok/storyblok-editable";
 
// resolve Storyblok components to Next.js components
const Components = {
  projectcard: ProjectCard,
  page:Page,
};
 
const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    console.log(blok, blok.component)
    return <Component blok={blok} key={blok._uid} />;
  }
 
  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};
 
export default DynamicComponent;
