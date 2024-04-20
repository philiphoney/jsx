import { jsx, Jsx } from "./jsx";
function main() {
  const items = ["Item 1", "Item 2", "Item 3"];
  
  const elements = items.map((item) =>
    jsx("div", { className: "main-span" }, item)
  );
  
  const main = jsx('h1', {class: "text-center"}, "This is JSX");

  elements.unshift(jsx("h2", null, "this is a list with map"))
  elements.unshift(main)

  var divElement = new Jsx().append("div", {class: "container"}, elements);
    return divElement;
}

export { main };
