'use client';

import { MODAL_LISTENERS } from '@/utils/modal/listeners';
import { useEffect } from 'react';

export default function ModalListeners() {
  useEffect(() => {
    MODAL_LISTENERS.add();
    return MODAL_LISTENERS.remove;
  }, []);

  return null;
}
