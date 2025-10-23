    const produtos = {
      "kit-teclado-mouse": {
        nome: "KIT TECLADO+MOUSE",
        desc: "Transforme sua experiência no computador com nosso Kit Teclado + Mouse, projetado para oferecer máxima eficiência, conforto e estilo. Ideal para trabalho, estudos ou lazer, este combo une design ergonômico com tecnologia de resposta rápida, garantindo produtividade sem esforço.",
        preco: "R$ 299,99",
        img: "https://img.terabyteshop.com.br/produto/g/combo-gamer-teclado-emouse-cooler-master-ms-111-semi-mecanico-rgb-ms-111-kkmf1-br_86267.jpg"
      },
      "monitor": {
        nome: "MONITOR",
        desc: "Domine cada partida com um monitor feito para performance. Com 144Hz de taxa de atualização e resolução Full HD, você terá imagens fluidas, nítidas e sem atrasos — perfeitas para jogos de ação e eSports.",
        preco: "R$ 1.199,99",
        img: "https://images-cdn.ubuy.co.in/64e86a8c5f2aaf2ffc53287d-lg-27-ultragear-qhd-1ms-240hz-gaming.jpg"
      },
      "placa-mae": {
        nome: "PLACA MÃE",
        desc: "Monte seu PC com uma base sólida e eficiente. Compatível com processadores AMD Ryzen, essa placa mãe oferece recursos essenciais para quem busca confiabilidade, desempenho e ótimo custo-benefício. Perfeita para quem está montando um setup gamer, profissional ou para uso diário com alto desempenho e confiabilidade.",
        preco: "R$ 899,99",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_956369-MLA95351287545_102025-F.webp"
      },
      "adaptador-wireless": {
        nome: "ADAPTADOR WIRELESS",
        desc: "Atualize sua rede com o poder do Wi-Fi 6. Este adaptador wireless oferece velocidade superior, menor latência e maior estabilidade de sinal — ideal para streaming, jogos online e videoconferências sem interrupções. Com tecnologia Wi-Fi 6, você garante uma conexão mais rápida, eficiente e segura, além de alta estabilidade para navegar, jogar e trabalhar sem quedas de sinal. A instalação é simples, com ampla compatibilidade e design compacto que permite levar para qualquer lugar. Seja para turbinar seu desktop ou melhorar a conexão do notebook, este adaptador é a escolha certa para quem busca desempenho sem fio de última geração.",
        preco: "R$ 149,99",
        img: "https://coopera.vtexassets.com/arquivos/ids/56846097-800-auto?v=638869827597170000&width=800&height=auto&aspect=true"
      },
      "mousepad": {
        nome: "MOUSEPAD",
        desc: "Garanta controle total com o Mousepad grande RGB, ideal para movimentos precisos. Com superfície otimizada para sensores de alta performance, ele oferece deslizamento suave e resposta rápida, perfeito para jogos competitivos ou produtividade intensa. Seu design amplo acomoda teclado e mouse com folga, enquanto a iluminação RGB personalizável adiciona estilo ao seu setup. Uma escolha essencial para quem busca conforto, precisão e visual impressionante na mesa.",
        preco: "R$ 79,99",
        img: "https://i5.walmartimages.com/asr/12d65dac-8414-4af1-a2d1-db72916c568b.6252241516ce598f7c7e7e5403bbe569.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
      },
      "headset": {
        nome: "HEADSET",
        desc: "Mergulhe no jogo com o Headset gamer com som surround e microfone ajustável. Projetado para oferecer imersão total, ele entrega áudio de alta qualidade com efeitos tridimensionais que ajudam a identificar cada movimento no ambiente virtual. O microfone ajustável garante comunicação clara com sua equipe, enquanto o design confortável permite longas sessões de jogo sem incômodo. Ideal para quem busca desempenho, estilo e precisão sonora em cada partida.",
        preco: "R$ 249,99",
        img: "https://static.mundomax.com.br/produtos/70530/550/1.webp"
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