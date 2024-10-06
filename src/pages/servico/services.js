function createTemplate() {
    return `
    <div class='container' id='service'>
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
        <section>
            <div class="container">
                <h2>Nossos Serviços</h2>
                <ul>
                    <li><strong>Instalação Elétrica Residencial</strong><br>Projetos e instalações elétricas completas para residências, garantindo segurança e eficiência.</li>
                    <li><strong>Instalação Elétrica Comercial</strong><br>Serviços para estabelecimentos comerciais, com soluções adequadas às normas técnicas.</li>
                    <li><strong>Manutenção Preventiva e Corretiva</strong><br>Verificação e reparo de instalações elétricas para evitar falhas e garantir o bom funcionamento.</li>
                    <li><strong>Instalação de Iluminação</strong><br>Instalação de sistemas de iluminação interna e externa, LED, luminárias e spots.</li>
                    <li><strong>Quadro de Distribuição de Energia</strong><br>Montagem e manutenção de quadros de distribuição elétrica.</li>
                    <li><strong>Automação Residencial</strong><br>Soluções de automação para controle de iluminação, som e outros dispositivos.</li>
                    <li><strong>Instalação de Sistemas Fotovoltaicos</strong><br>Instalação de painéis solares para geração de energia limpa e sustentável.</li>
                    <li><strong>Troca e Dimensionamento de Fiação</strong><br>Substituição de cabos antigos e dimensionamento correto para maior segurança.</li>
                    <li><strong>Laudos e Vistorias Elétricas</strong><br>Emissão de laudos técnicos e vistorias para regularização de imóveis.</li>
                    <li><strong>Instalação de Dispositivos de Proteção</strong><br>Instalação de disjuntores, DPS, DRs e outros dispositivos para proteção elétrica.</li>
                </ul>
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