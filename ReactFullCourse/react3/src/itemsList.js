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
      //too long
      <Item
        title={technologies[0].title}
        description={technologies[0].description}
        imgSrc={technologies[0].url}
      />
      <Item
        title={technologies[1].title}
        description={technologies[1].description}
        imgSrc={technologies[1].url}
      />
      <Item
        title={technologies[2].title}
        description={technologies[2].description}
        imgSrc={technologies[2].url}
      />
      //or you can
      <Item
        title="hola"
        description="test1"
        imgSrc="https://hips.hearstapps.com/hmg-prod/images/surprising-flower-meanings-balloon-flowers-1650767465.jpg?crop=1xw:1xh;center,top&resize=980:*"
      />
      <Item
        title="hello"
        description="test2"
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Zx-dv1PyoEbM_9rCmSKk04ugXfEfOyJoMQ&s"
      />
      //so we use MAPPING
      {technologies.map((element) => {
        return (
        <Item
          title={element.title}
          description={element.description}
          imgSrc={element.url}
        />
        )
      })}
    </div>
  );
}

export default ItemList;
