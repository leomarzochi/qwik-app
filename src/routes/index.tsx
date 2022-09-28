import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Formulario from '~/components/formulario/Formulario';
import { Participantes } from '~/components/participantes/Participantes';

export default component$(() => {
  return (
    <section>
      <Formulario />
      <Participantes />
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Sorteador de amigo secreto',
};
