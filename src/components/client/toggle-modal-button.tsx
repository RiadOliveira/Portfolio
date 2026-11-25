'use client';

import { DefaultProps } from '@/types/DefaultProps';
import { useEffect } from 'react';
import {
  addModalListeners,
  closeModal,
  removeModalListeners,
  showModal,
} from '@/utils/modal';

type Props = DefaultProps & {
  action: 'show' | 'close';
  className?: string;
};

export function ToggleModalButton({ action, ...props }: Props) {
  useEffect(() => {
    addModalListeners();
    return () => removeModalListeners();
  }, []);

  function handleClick() {
    (action === 'show' ? showModal : closeModal)();
  }

  return <button type="button" onClick={handleClick} {...props} />;
}
