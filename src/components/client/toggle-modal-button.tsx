'use client';

import { useEffect } from 'react';
import { DefaultProps } from 'types/DefaultProps';
import {
  addModalListeners,
  closeModal,
  removeModalListeners,
  showModal,
} from 'utils/modal';

export interface ModalButtonProps extends DefaultProps {
  action: 'show' | 'close';
  className?: string;
}

export function ToggleModalButton({ action, ...props }: ModalButtonProps) {
  useEffect(() => {
    addModalListeners();
    return () => removeModalListeners();
  }, []);

  function handleClick() {
    (action === 'show' ? showModal : closeModal)();
  }

  return <button type="button" onClick={handleClick} {...props} />;
}
