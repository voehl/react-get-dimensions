const ReactDOM = require('react-dom');

export default (element, callback) => {
    const hostElement = document.createElement('div');
    ReactDOM.render(element, hostElement, () => {
        document.body.appendChild(hostElement);
        const renderedElement = hostElement.childNodes[0];
        const dimensions = {width: renderedElement.scrollWidth, height: renderedElement.scrollHeight};
        document.body.removeChild(hostElement);
        callback(dimensions);
    });
};