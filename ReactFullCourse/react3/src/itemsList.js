import React from "react";
import Item from "./item";

const technologies = [
  {
    id: "1",
    title: "React",
    url: "https://repository-images.githubusercontent.com/37153337/90da6780-394a-11eb-9fd1-629b648db12f",
    description:
      "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
  },
  {
    id: "2",
    title: "HTML",
    url: "https://www.oxfordwebstudio.com/user/pages/06.da-li-nate/sta-je-html/sta-je-html.jpg",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web pages.",
  },
  {
    id: "3",
    title: "CSS",
    url: "https://www.oxfordwebstudio.com/user/pages/06.da-li-nate/sta-je-css/sta-je-css.png",
    description:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is used to control the layout and look of web pages.",
  },
];
/*
function ItemList() {
  return (
    <div>
      {technologies.map(tech => (
        <Item/>
    ))}
    </div>
  );
}
  */
function ItemList() {
  return (
    <div>
      <Item title="hey" description="test" />
      <Item title="hola" description="test1" />
      <Item title="hello" description="test2" />
    </div>
  );
}

export default ItemList;
