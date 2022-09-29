import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { ListagemParticipantesContext } from '~/context/listagem-participantes';
import styles from './Rodape.css?inline';

export const Rodape = component$(() => {
  useStylesScoped$(styles)
  const state = useContext(ListagemParticipantesContext);

  const iniciarSorteio = () => {};
  return (
    <footer class="rodape-configuracoes">
      <button
        class="botao"
        onClick$={iniciarSorteio}
        disabled={state.participantes.length < 3}
      >
        Iniciar
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
});
