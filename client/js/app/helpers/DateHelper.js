class DateHelper {

  constructor() {

    //Error() é função construtora. Não foi migrado para classe.
    throw new Error('Esta classe não pode ser instanciada.')
  }

  //Static: método que pode ser invocado direto da classe, sem  necessidade de instância;
  static dataParaTexto(data) {

    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {


    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('Deve estar no formato \'yyyy-MM-dd\'');

    return new Date(...texto.split('-').map((item, index) => item - index % 2));
  }

}