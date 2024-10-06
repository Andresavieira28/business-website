function createTemplate() {
    return `
    <div class='container' id='home'>
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

        <section id="servir">
            <div class="container">
                <h2>Nossos Serviços</h2>
                <div class="service">
                    <h3>Elétrica em geral</h3>
                    <p>Configuração de fiações elétricas, instalação de painéis elétricos, interruptores, tomadas e elétricas e etc.</p>
                </div>
                <div class="service">
                    <h3>Marido de aluguel</h3>
                    <p>Conserto de torneiras vazando, troca de lâmpadas, reparo de móveis, etc.</p>
                </div>
                <div class="service">
                    <h3>Instalação e conversão de gás</h3>
                    <p>**Instalação de Equipamentos a Gás**: - Instalação de fogões, aquecedores, lareiras, churrasqueiras e outros aparelhos que utilizam gás como fonte de energia. - Montagem de tubulações para condução de gás, garantindo que todas as normas de segurança e regulamentações locais sejam seguidas.</p>
                </div>
            </div>
        </section>

        <section id="team">
            <div class="container">
                <h2>Nossa Equipe</h2>
                <div class="team-member">
                    <img src="img/perfil.png" alt="perfil" width="5%" height="5%">
                    <h3>João vieira</h3>
                    <h4>CREA 1234567890</h4>
                    <p>CEO e Empresário</p>
                </div>
            </div>
        </section>

        <footer>
            <div class="container">
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