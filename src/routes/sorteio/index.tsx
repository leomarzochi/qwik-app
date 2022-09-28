import { component$, useContext } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import {ListagemParticipantesContext} from '~/context/listagem-participantes';

export default component$(() => {
  const state = useContext(ListagemParticipantesContext);
  return (
    <div>{state.participantes}</div>
  )
});

export const head: DocumentHead = {
  title: 'Sorteio',
};
