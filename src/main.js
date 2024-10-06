import home from './pages/home/home.js';
import services from './pages/servico/services.js';  // Importação da página Serviços
import about from './pages/about/about.js';          // Importação da página Sobre
import contact from './pages/contact/contact.js';    // Importação da página Contato

const main = document.querySelector('#root');

const routes = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '#home':
        main.appendChild(home()); // Rota para Inicio
        break;
      case '#services':
        main.appendChild(services());  // Rota para Serviços
        break;
      case '#about':
        main.appendChild(about());  // Rota para Sobre
        break;
      case '#contact':
        main.appendChild(contact());     // Rota para Contato
        break;
    }
  });
};

window.addEventListener('load', () => {
  window.location.hash = '#home'; // Definir a rota inicial
  main.appendChild(home());
  routes();
});

