import { component$, useContext } from '@builder.io/qwik';
import { ListagemParticipantesContext } from '~/context/listagem-participantes';

export const Participantes = component$(() => {
  const state = useContext(ListagemParticipantesContext);
  
  return (
    <ul>
      {state.participantes.map((participante) => (
        <li>{participante}</li>
      ))}
    </ul>
  );
});
