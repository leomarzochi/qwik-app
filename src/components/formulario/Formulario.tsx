import {
  component$,
  useContext,
  useRef,
  useStore,
  useStylesScoped$,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { ListagemParticipantesContext } from '~/context/listagem-participantes';
import styles from './Formulario.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const state = useContext(ListagemParticipantesContext);
  const localState = useStore({
    errorMessage: '',
  });

  const inputRef = useRef<HTMLInputElement>(undefined);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (state.participantes.includes(state.participante)) {
      localState.errorMessage = 'Não é permitido nomes repetidos';
      return;
    }
    localState.errorMessage = '';
    state.participantes = [...state.participantes, state.participante];
    state.participante = '';
    inputRef.current?.focus();
  };

  return (
    <form onSubmit$={handleSubmit}>
      <div class="grupo-input-btn">
        <input
          name="participante"
          ref={inputRef}
          value={state.participante}
          onInput$={(e) =>
            (state.participante = (e.target as HTMLInputElement).value)
          }
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button type="submit" disabled={!state.participante}>
          Adicionar
        </button>
      </div>
     
      {localState.errorMessage && (
        <p class="alerta erro" role="alert">
          {localState.errorMessage}
        </p>
      )}
    </form>
  );
});
