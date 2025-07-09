import { HighlightColor } from './HighlightColor';

export type ColorStyles<Color extends HighlightColor> = {
  container: `bg-${Color}-500/45`;
  card: `from-${Color}-600/60 hover:from-${Color}-600/80 active:from-${Color}-600/80`;
  modal: `from-${Color}-600 to-${Color}-400 shadow-${Color}-600/80`;
  icon: {
    background: `bg-${Color}-500/60 group-hover:bg-${Color}-500/80`;
    color: `text-${Color}-300`;
  };
};
