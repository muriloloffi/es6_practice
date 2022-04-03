class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes(this, function (model) {
      //O this do JS utiliza o contexto em que é executado, ou seja, precisamos passar para o construtor
      //o contexto que a gente quer passar (o primeiro this), pois queremos o contexto desta classe
      //(NegociacaoController); (... explicação continua na classe ListaNegociações)

      this._negociacoesView.update(model);
    });
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));

    //a view vai refletir os dados da listaNegociacoes quando o controller é carregado
    this._negociacoesView.update(this._listaNegociacoes);
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
  }

  adiciona(event) {

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = 'Adicionado com sucesso!';
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
  }

  apaga() {

    this._listaNegociacoes.esvazia();

    this._mensagem.texto = 'Negociações apagadas com sucesso';
    this._mensagemView.update(this._mensagem);
  }

  _criaNegociacao() {

    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value);
  }

  _limpaFormulario() {

    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  //Por que let logger = console.log.bind(console); não faz diferença?
}