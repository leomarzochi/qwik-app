import { useStylesScoped$, component$ } from '@builder.io/qwik';
import styles from './Cabecalho.css?inline';

export const Cabecalho = component$(() => {
  useStylesScoped$(styles);
  return (
    <header class="cabecalho">
      <div class="imagem-logo"></div>
      <img
        class="participante"
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
});
