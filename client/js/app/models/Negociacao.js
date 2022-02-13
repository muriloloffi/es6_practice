//Nome de classe no ES6 (ES2015+) segue a convenção "Pascal case" (primeira letra maiúscula)
class Negociacao {

  //declaração dos atributos da classe com a função constructor, aqui pode receber parâmetros
  constructor(data, quantidade, valor) {

    //define-se valores padrão aqui
    this._data = new Date(data.getTime()); //"_" convenção para que o programador não acesse diretamente 
    this._quantidade = quantidade;         //esta propriedade. Sinaliza p/ deixar a classe lidar com isso.
    this._valor = valor;

    //Object.freeze bloqueia extensibilidade do objeto, configurabilidade das propriedades e torna os dados não gravavéis.
    //Obs.: Object.freeze é "shallow", é raso. Ou seja, o Object.freeze não congela os métodos de uma propriedade objeto, por exemplo Date(), por é boa prática que uma propriedade do tipo date possua um new Date()
    Object.freeze(this);
  }

  //declaração de métodos
  //o "get variavel()" permite ter um método que pode ser acessado como se fosse uma propriedade, i.e. negociacao.volume;
  get volume() {
    return this._quantidade * this._valor;
  }

  //retorna-se a data com um objeto "espelho" para impedir que os métodos do objeto Data alterem as propriedades desta classe
  //i.e. utilizar negociacao.data.setDate(11) não causa surte efeito na classe negociacao.
  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
