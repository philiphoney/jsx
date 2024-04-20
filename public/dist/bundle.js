'use strict';

function createElement(tagName, attributes, children) {
    const element = document.createElement(tagName);

    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }
  
    if (children) {
      if (typeof children === 'string') {
        element.textContent = children;
      } else if (Array.isArray(children)) {
        children.forEach(child => {
          if (child instanceof Node) {
            element.appendChild(child);
          } else {
            element.appendChild(document.createTextNode(child));
          }
        });
      } else {
        if (children instanceof Node) {
          element.appendChild(children);
        } else {
          element.appendChild(document.createTextNode(children));
        }
      }
    }
  
    return element;
  }
  
  function jsx(tagName, attributes, ...children) {
    return createElement(tagName, attributes, children);
  }
  
  class Jsx {
    append(tagName, attributes, children) {
      const element = document.createElement(tagName);
      if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
          element.setAttribute(key, value);
        }
      }
      if (children) {
        children.forEach(child => {
          if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
          } else {
            element.appendChild(child);
          }
        });
      }
      return element;
    }
    dataMap(data) {
      data.then((element) => {
        return element;
      });
    }
  }

function main() {
  const items = ["Item 1", "Item 2", "Item 3"];
  
  const elements = items.map((item) =>
    jsx("div", { className: "main-span" }, item)
  );
  
  const main = jsx('h1', {class: "text-center"}, "This is JSX");

  elements.unshift(jsx("h2", null, "this is a list with map"));
  elements.unshift(main);

  var divElement = new Jsx().append("div", {class: "container"}, elements);
    return divElement;
}

function App() {
  return [
    main() 
  ];
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const elementsFromApp = App();
    elementsFromApp.forEach(element => {
        rootElement.appendChild(element);
    });
} else {
    console.error('Root element with id "root" not found.');
}
