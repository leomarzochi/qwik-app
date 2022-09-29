import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Formulario from '~/components/formulario/Formulario';
import { Participantes } from '~/components/participantes/Participantes';
import {Rodape} from '~/components/rodape/Rodape';

export default component$(() => {
  return (
    <section>
      <Formulario />
      <Participantes />
      <Rodape />
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Sorteador de amigo secreto',
};
