export function createElement(tagName, attributes, children) {
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
  
  export function jsx(tagName, attributes, ...children) {
    return createElement(tagName, attributes, children);
  }
  
  export class Jsx {
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
  