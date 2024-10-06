function createTemplate() {
  return `
  <div class='container' id='contact'>
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
      <section class="section-contact">
        <div class="caixa-labels">
          <h2 class="title-contact">Fale Conosco</h2>
          <form class="form-contact" action="#" method="post">
            <label class="label-contact" for="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" required>
                  
            <label class="label-contact" for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Seu e-mail" required>
                  
            <label class="label-contact" for="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" placeholder="Seu telefone" required>
                  
            <label class="label-contact" for="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" placeholder="Solicite seu orçamento!" required></textarea>
                  
            <button class="button-contact" type="submit">Enviar Mensagem</button>
          </form>
              
          <div class="contact-info">
                  <h3>Informações de Contato</h3>
                  <p>Telefone: (XX) XXXX-XXXX</p>
                  <p>Email: contato@empresaeletrica.com.br</p>
                  <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
          </div>
        </div>
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


