import { ColorStyles } from 'types/repository/ColorStyles';
import { HighlightColor } from 'types/repository/HighlightColor';

type ColorsData = { [key in HighlightColor]: ColorStyles<key> };

export const COLORS_DATA: ColorsData = {
  red: {
    card: 'from-red-600/60 hover:from-red-600/80 active:from-red-600/80',
    container: 'bg-red-500/45',
    modal: 'from-red-600 to-red-400 shadow-red-600/80',
  },
  orange: {
    card: 'from-orange-600/60 hover:from-orange-600/80 active:from-orange-600/80',
    container: 'bg-orange-500/45',
    modal: 'from-orange-600 to-orange-400 shadow-orange-600/80',
  },
  amber: {
    card: 'from-amber-600/60 hover:from-amber-600/80 active:from-amber-600/80',
    container: 'bg-amber-500/45',
    modal: 'from-amber-600 to-amber-400 shadow-amber-600/80',
  },
  yellow: {
    card: 'from-yellow-600/60 hover:from-yellow-600/80 active:from-yellow-600/80',
    container: 'bg-yellow-500/45',
    modal: 'from-yellow-600 to-yellow-400 shadow-yellow-600/80',
  },
  lime: {
    card: 'from-lime-600/60 hover:from-lime-600/80 active:from-lime-600/80',
    container: 'bg-lime-500/45',
    modal: 'from-lime-600 to-lime-400 shadow-lime-600/80',
  },
  green: {
    card: 'from-green-600/60 hover:from-green-600/80 active:from-green-600/80',
    container: 'bg-green-500/45',
    modal: 'from-green-600 to-green-400 shadow-green-600/80',
  },
  emerald: {
    card: 'from-emerald-600/60 hover:from-emerald-600/80 active:from-emerald-600/80',
    container: 'bg-emerald-500/45',
    modal: 'from-emerald-600 to-emerald-400 shadow-emerald-600/80',
  },
  teal: {
    card: 'from-teal-600/60 hover:from-teal-600/80 active:from-teal-600/80',
    container: 'bg-teal-500/45',
    modal: 'from-teal-600 to-teal-400 shadow-teal-600/80',
  },
  cyan: {
    card: 'from-cyan-600/60 hover:from-cyan-600/80 active:from-cyan-600/80',
    container: 'bg-cyan-500/45',
    modal: 'from-cyan-600 to-cyan-400 shadow-cyan-600/80',
  },
  sky: {
    card: 'from-sky-600/60 hover:from-sky-600/80 active:from-sky-600/80',
    container: 'bg-sky-500/45',
    modal: 'from-sky-600 to-sky-400 shadow-sky-600/80',
  },
  blue: {
    card: 'from-blue-600/60 hover:from-blue-600/80 active:from-blue-600/80',
    container: 'bg-blue-500/45',
    modal: 'from-blue-600 to-blue-400 shadow-blue-600/80',
  },
  indigo: {
    card: 'from-indigo-600/60 hover:from-indigo-600/80 active:from-indigo-600/80',
    container: 'bg-indigo-500/45',
    modal: 'from-indigo-600 to-indigo-400 shadow-indigo-600/80',
  },
  violet: {
    card: 'from-violet-600/60 hover:from-violet-600/80 active:from-violet-600/80',
    container: 'bg-violet-500/45',
    modal: 'from-violet-600 to-violet-400 shadow-violet-600/80',
  },
  purple: {
    card: 'from-purple-600/60 hover:from-purple-600/80 active:from-purple-600/80',
    container: 'bg-purple-500/45',
    modal: 'from-purple-600 to-purple-400 shadow-purple-600/80',
  },
  fuchsia: {
    card: 'from-fuchsia-600/60 hover:from-fuchsia-600/80 active:from-fuchsia-600/80',
    container: 'bg-fuchsia-500/45',
    modal: 'from-fuchsia-600 to-fuchsia-400 shadow-fuchsia-600/80',
  },
  pink: {
    card: 'from-pink-600/60 hover:from-pink-600/80 active:from-pink-600/80',
    container: 'bg-pink-500/45',
    modal: 'from-pink-600 to-pink-400 shadow-pink-600/80',
  },
  rose: {
    card: 'from-rose-600/60 hover:from-rose-600/80 active:from-rose-600/80',
    container: 'bg-rose-500/45',
    modal: 'from-rose-600 to-rose-400 shadow-rose-600/80',
  },
} as const;
