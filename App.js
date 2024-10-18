const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React padh rele apun neele mein!"
);

/**
 * Lets try to render a nested element
 * <div id="parent">
 *    <div id="child">
 *       <h1>Main to tag hu bro!</h1>
 *     </div>
 * </div>
 *
 *
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "main to bas ek tag hu bro!")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
