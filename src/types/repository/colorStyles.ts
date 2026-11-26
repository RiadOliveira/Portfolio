import type { HighlightColor } from './highlightColor';

export type ColorStyles<Color extends HighlightColor> = {
  container: `bg-${Color}-500/45`;
  card: `from-${Color}-600/60 hover:from-${Color}-600/80 active:from-${Color}-600/80`;
  modal: `from-${Color}-600 to-${Color}-500 shadow-${Color}-700/40`;
  scrollbar: `[--scrollbar-thumb:var(--color-${Color}-600)] dark:[--scrollbar-thumb:var(--color-${Color}-400)]`;
  icon: {
    background: `bg-${Color}-500/60 group-hover:bg-${Color}-500/80`;
    color: `text-${Color}-300`;
  };
};
