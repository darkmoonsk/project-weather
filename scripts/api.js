function obterDadosClima(cidade, idioma) {
    const apiKey = "cba97dfcd3855f5d4abe4ee1027cc09f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=${idioma}&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(dados => {
        if (dados.cod === 200) {
          atualizarInformacoesClima(dados);
        } else {
          console.log('Erro ao obter os dados do clima:', dados.message);
        }
      })
      .catch(erro => {
        console.log('Erro ao obter os dados do clima:', erro);
      });
  
    // Função para atualizar as informações do clima
    function atualizarInformacoesClima(dados) {

      return dados;
    }
  }
  