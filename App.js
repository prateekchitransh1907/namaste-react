import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React padh rele apun neele mein!"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "😀 main to bas ek tag hu bro! 🏷")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
