import { createContext } from '@builder.io/qwik';
import { FormularioState } from '~/types';

export const ListagemParticipantesContext = createContext<FormularioState>(
  'listagem-participantes'
);
