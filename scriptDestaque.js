    const produtos = {
      "teclado-mecanico-gamer": {
        nome: "Teclado Mecânico Gaming K-Strike",
        desc: "Desempenho e durabilidade para gamers exigentes. Com switches mecânicos de alta resposta, iluminação RGB personalizável e estrutura reforçada, o K-Strike oferece precisão e estilo para elevar sua jogabilidade a outro nível.",
        preco: "R$ 349,90",
        img: "https://images9.kabum.com.br/produtos/fotos/706639/teclado-mecanico-gamer-msi-strike-600-rgb-switch-silencioso-usb-2-0-us-preto-strike600_1747051181_gg.jpg"
      },
      "mouse-gamer": {
        nome: "Mouse Gamer RazerX Pro",
        desc: "Controle absoluto em cada movimento. Com sensor de alta precisão, botões programáveis e design ergonômico, o RazerX Pro garante agilidade e conforto para longas sessões de jogo com desempenho profissional.",
        preco: "R$ 199,90",
        img: "https://razerstore.my/cdn/shop/files/my-11134207-7r98w-lv8edbqtlbg8b9_1024x1024.jpg?v=1751510405"
      },
      "processado-ryzen-5500": {
        nome: "Processador Ryzen 5 5600G",
        desc: "Potência e versatilidade em um só chip. Com 6 núcleos, 12 threads e gráficos integrados Radeon, o Ryzen 5 5600G é ideal para quem busca alto desempenho em jogos, multitarefas e produtividade sem necessidade de placa de vídeo dedicada.",
        preco: "R$ 500,00",
        img: "https://m.media-amazon.com/images/I/51So7GoGvxL.jpg"
      },
      "placa-de-video": {
        nome: "Placa de Vídeo AMD Radeon RX580",
        desc: "Gráficos impressionantes e performance sólida. Com 8GB de memória GDDR5, a RX580 entrega excelente qualidade visual e fluidez em jogos AAA, sendo uma ótima opção para setups gamers com ótimo custo-benefício.",
        preco: "R$ 819,90",
        img: "https://m.media-amazon.com/images/I/81OjMNoG9FL._AC_SX679_.jpg"
      },
      "monitor-27": {
        nome: "Monitor 27 QHD 144Hz",
        desc: "Imersão e nitidez em cada frame. Com resolução Quad HD e taxa de atualização de 144Hz, este monitor oferece imagens cristalinas e fluidez extrema, ideal para quem busca vantagem competitiva e qualidade visual superior.",
        preco: "R$ 1.899,00",
        img: "https://m.media-amazon.com/images/I/71ZhNV7OJ1L.jpg"
      }
    };

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const produto = produtos[id];

    if (produto) {
      document.getElementById('produto-img').src = produto.img;
      document.getElementById('produto-nome').textContent = produto.nome;
      document.getElementById('produto-desc').textContent = produto.desc;
      document.getElementById('produto-preco').textContent = produto.preco;
    } else {
      document.getElementById('produto-nome').textContent = "Produto não encontrado";
      document.getElementById('produto-desc').textContent = "";
      document.getElementById('produto-preco').textContent = "";
      document.getElementById('produto-img').style.display = "none";
    }