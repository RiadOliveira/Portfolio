import type { ColorStyles } from '@/types/repository/colorStyles';
import type { HighlightColor } from '@/types/repository/highlightColor';

type ColorsData = { [key in HighlightColor]: ColorStyles<key> };

export const COLORS_DATA: ColorsData = {
  red: {
    card: 'from-red-600/60 hover:from-red-600/80 active:from-red-600/80',
    container: 'bg-red-500/45',
    modal: 'from-red-600 to-red-500 shadow-red-700/40',
    icon: {
      background: 'bg-red-500/60 group-hover:bg-red-500/80',
      color: 'text-red-300',
    },
  },
  orange: {
    card: 'from-orange-600/60 hover:from-orange-600/80 active:from-orange-600/80',
    container: 'bg-orange-500/45',
    modal: 'from-orange-600 to-orange-500 shadow-orange-700/40',
    icon: {
      background: 'bg-orange-500/60 group-hover:bg-orange-500/80',
      color: 'text-orange-300',
    },
  },
  amber: {
    card: 'from-amber-600/60 hover:from-amber-600/80 active:from-amber-600/80',
    container: 'bg-amber-500/45',
    modal: 'from-amber-600 to-amber-500 shadow-amber-700/40',
    icon: {
      background: 'bg-amber-500/60 group-hover:bg-amber-500/80',
      color: 'text-amber-300',
    },
  },
  yellow: {
    card: 'from-yellow-600/60 hover:from-yellow-600/80 active:from-yellow-600/80',
    container: 'bg-yellow-500/45',
    modal: 'from-yellow-600 to-yellow-500 shadow-yellow-700/40',
    icon: {
      background: 'bg-yellow-500/60 group-hover:bg-yellow-500/80',
      color: 'text-yellow-300',
    },
  },
  lime: {
    card: 'from-lime-600/60 hover:from-lime-600/80 active:from-lime-600/80',
    container: 'bg-lime-500/45',
    modal: 'from-lime-600 to-lime-500 shadow-lime-700/40',
    icon: {
      background: 'bg-lime-500/60 group-hover:bg-lime-500/80',
      color: 'text-lime-300',
    },
  },
  green: {
    card: 'from-green-600/60 hover:from-green-600/80 active:from-green-600/80',
    container: 'bg-green-500/45',
    modal: 'from-green-600 to-green-500 shadow-green-700/40',
    icon: {
      background: 'bg-green-500/60 group-hover:bg-green-500/80',
      color: 'text-green-300',
    },
  },
  emerald: {
    card: 'from-emerald-600/60 hover:from-emerald-600/80 active:from-emerald-600/80',
    container: 'bg-emerald-500/45',
    modal: 'from-emerald-600 to-emerald-500 shadow-emerald-700/40',
    icon: {
      background: 'bg-emerald-500/60 group-hover:bg-emerald-500/80',
      color: 'text-emerald-300',
    },
  },
  teal: {
    card: 'from-teal-600/60 hover:from-teal-600/80 active:from-teal-600/80',
    container: 'bg-teal-500/45',
    modal: 'from-teal-600 to-teal-500 shadow-teal-700/40',
    icon: {
      background: 'bg-teal-500/60 group-hover:bg-teal-500/80',
      color: 'text-teal-300',
    },
  },
  cyan: {
    card: 'from-cyan-600/60 hover:from-cyan-600/80 active:from-cyan-600/80',
    container: 'bg-cyan-500/45',
    modal: 'from-cyan-600 to-cyan-500 shadow-cyan-700/40',
    icon: {
      background: 'bg-cyan-500/60 group-hover:bg-cyan-500/80',
      color: 'text-cyan-300',
    },
  },
  sky: {
    card: 'from-sky-600/60 hover:from-sky-600/80 active:from-sky-600/80',
    container: 'bg-sky-500/45',
    modal: 'from-sky-600 to-sky-500 shadow-sky-700/40',
    icon: {
      background: 'bg-sky-500/60 group-hover:bg-sky-500/80',
      color: 'text-sky-300',
    },
  },
  blue: {
    card: 'from-blue-600/60 hover:from-blue-600/80 active:from-blue-600/80',
    container: 'bg-blue-500/45',
    modal: 'from-blue-600 to-blue-500 shadow-blue-700/40',
    icon: {
      background: 'bg-blue-500/60 group-hover:bg-blue-500/80',
      color: 'text-blue-300',
    },
  },
  indigo: {
    card: 'from-indigo-600/60 hover:from-indigo-600/80 active:from-indigo-600/80',
    container: 'bg-indigo-500/45',
    modal: 'from-indigo-600 to-indigo-500 shadow-indigo-700/40',
    icon: {
      background: 'bg-indigo-500/60 group-hover:bg-indigo-500/80',
      color: 'text-indigo-300',
    },
  },
  violet: {
    card: 'from-violet-600/60 hover:from-violet-600/80 active:from-violet-600/80',
    container: 'bg-violet-500/45',
    modal: 'from-violet-600 to-violet-500 shadow-violet-700/40',
    icon: {
      background: 'bg-violet-500/60 group-hover:bg-violet-500/80',
      color: 'text-violet-300',
    },
  },
  purple: {
    card: 'from-purple-600/60 hover:from-purple-600/80 active:from-purple-600/80',
    container: 'bg-purple-500/45',
    modal: 'from-purple-600 to-purple-500 shadow-purple-700/40',
    icon: {
      background: 'bg-purple-500/60 group-hover:bg-purple-500/80',
      color: 'text-purple-300',
    },
  },
  fuchsia: {
    card: 'from-fuchsia-600/60 hover:from-fuchsia-600/80 active:from-fuchsia-600/80',
    container: 'bg-fuchsia-500/45',
    modal: 'from-fuchsia-600 to-fuchsia-500 shadow-fuchsia-700/40',
    icon: {
      background: 'bg-fuchsia-500/60 group-hover:bg-fuchsia-500/80',
      color: 'text-fuchsia-300',
    },
  },
  pink: {
    card: 'from-pink-600/60 hover:from-pink-600/80 active:from-pink-600/80',
    container: 'bg-pink-500/45',
    modal: 'from-pink-600 to-pink-500 shadow-pink-700/40',
    icon: {
      background: 'bg-pink-500/60 group-hover:bg-pink-500/80',
      color: 'text-pink-300',
    },
  },
  rose: {
    card: 'from-rose-600/60 hover:from-rose-600/80 active:from-rose-600/80',
    container: 'bg-rose-500/45',
    modal: 'from-rose-600 to-rose-500 shadow-rose-700/40',
    icon: {
      background: 'bg-rose-500/60 group-hover:bg-rose-500/80',
      color: 'text-rose-300',
    },
  },
} as const;
