class NegociacoesView extends View {

  template(model) {

    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
        <!-- prettier-ignore-start -->
          ${model.negociacoes.map(negociacao => `

            <tr>
              <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td >
              <td>${negociacao.volume}</td>
            </tr>

          `).join('')}
        <!-- prettier-ignore-end -->
        </tbody>

        <tfoot>
          <td colspan="3"></td>
        <!-- prettier-ignore-start -->
          <td>${model.negociacoes.reduce(
            (total, negociacao) => total + negociacao.volume, 0.0
          )
          // (function() {
          //   let total = 0;
          //   model.negociacoes.forEach(negociacao => total += negociacao.volume);
          //   return total;
          // })()
          }</td>
        <!-- prettier-ignore-end -->
        </tfoot>
      </table>
    `;
  }
}