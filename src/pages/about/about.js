function createTemplate() {
  return `
  <div class='container' id='about'>
      <header>
          <nav>
              <div class="container">
                  <img src="/img/logo.png">
                  <ul>
                    <li><a id="home" href="#home">Início</a></li>
                    <li><a id="service" href="#services">Serviços</a></li>
                    <li><a id="about" href="#about">Sobre</a></li>
                    <li><a id="contact" href="#contact">Contato</a></li>
                  </ul>
              </div>
          </nav>
      </header>
      <section class="section-about">
        <section id="introducao">
          <h2 class="title-about">Bem-vindo à SV Instalação e serviços</h2>
          <p>A SV Instalação e serviços é uma empresa especializada em serviços elétricos, oferecendo soluções seguras e eficientes para residências e empresas.</p>
        </section>

        <section id="missao">
          <h2 class="title-about">Nossa Missão</h2>
          <p>Proporcionar serviços elétricos de alta qualidade, garantindo segurança e satisfação total dos nossos clientes.</p>
        </section>

        <section id="visao">
          <h2 class="title-about">Nossa Visão</h2>
          <p>Ser reconhecida como a melhor empresa de elétrica da região, sempre inovando e buscando a excelência em cada projeto.</p>
        </section>

        <section id="equipe">
          <h2 class="title-about">Nossa Equipe</h2>
          <p>Contamos com uma equipe de profissionais qualificados e experientes, prontos para atender suas necessidades elétricas com eficiência e dedicação.</p>
        </section>
      </section>  

      <footer>
          <div class="teste2">
            <p>&copy; 2024 SV Instalação e serviços. Todos os direitos reservados.</p>
          </div>
      </footer>
  </div> `;
  }
  
  export default () => {
    const container = document.createElement('div');
    const conteudo = createTemplate();
    container.innerHTML = conteudo;
  
    return container;
  };