import { ColorStyles } from 'types/repository/ColorStyles';
import { HighlightColor } from 'types/repository/HighlightColor';

type ColorsData = { [key in HighlightColor]: ColorStyles<key> };

export const COLORS_DATA: ColorsData = {
  emerald: {
    container: 'bg-emerald-500/45',
    card: 'from-emerald-600/60 hover:from-emerald-600/80 active:from-emerald-600/80',
    modal: 'from-emerald-600 to-emerald-400 shadow-emerald-600/80',
  },
} as const;
