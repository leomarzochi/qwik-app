import { component$, Slot, useContextProvider, useStore } from '@builder.io/qwik';
import { Cabecalho } from '~/components/cabecalho/Cabecalho';
import { Card } from '~/components/card/Card';
import {RouterHead} from '~/components/router-head/router-head';
import {ListagemParticipantesContext} from '~/context/listagem-participantes';
import {FormularioState} from '~/types';

export default component$(() => {
  const state = useStore<FormularioState>({
    participantes: [],
    participante: '',
  });

  useContextProvider(ListagemParticipantesContext, state);
  
  return (
    <>
      <RouterHead/>
      <Cabecalho />
      <Card>
        <Slot />
      </Card>
    </>
  );
});
