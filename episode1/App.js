const heading = React.createElement("h1", {}, "hello world"); //returns object

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1")
  )
);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(parent);
