import routes from './pages';
import textField from './modules/TextField/textField.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';

Handlebars.registerPartial('textField', textField);

const app = document.querySelector('#app');

const renderPage = (page) => {
  const { html, render } = page;
  app.innerHTML = html();
  render();
};

window.goToPage = (name) => {
  renderPage(routes[name]);
};

window.addEventListener('DOMContentLoaded', () => {
  console.log(routes.login)
  renderPage(routes.login);
});
