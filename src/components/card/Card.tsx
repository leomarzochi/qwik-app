import styles from './Card.css?inline';
import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';

export const Card = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="card">
      <Slot />
    </div>
  );
});
