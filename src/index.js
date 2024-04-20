import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
    const elementsFromApp = App();
    elementsFromApp.forEach(element => {
        rootElement.appendChild(element);
    });
} else {
    console.error('Root element with id "root" not found.');
}