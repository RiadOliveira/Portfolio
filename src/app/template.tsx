'use client';

import type { DefaultProps } from '@/types/defaultProps';

import { motion } from 'framer-motion';

export default function RootTemplate({ children }: DefaultProps) {
  return (
    <motion.div
      initial={{ y: 4, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.4 }}
      className="flex size-full flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
