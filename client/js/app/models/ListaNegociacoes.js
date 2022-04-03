class ListaNegociacoes {

  constructor(contexto, armadilha) {

    this._negociacoes = [];
    this._armadilha = armadilha;
    this._contexto = contexto;
  }

  adiciona(negociacao) {

    this._negociacoes.push(negociacao);
    //utilizando o reflection api, introduzido no ES2015, podemos pegar o contexto da classe
    //NegociacaoController
    Reflect.apply(this._armadilha, this._contexto, [this]);
  }

  get negociacoes() {

    return [].concat(this._negociacoes);
  }

  esvazia() {

    this._negociacoes = [];
    //utilizando o reflection api, introduzido no ES2015, podemos pegar o contexto da classe 
    //NegociacaoController
    Reflect.apply(this._armadilha, this._contexto, [this]);
  }
}