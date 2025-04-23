'use client';

import { DefaultProps } from 'types/DefaultProps';
import { closeModal, showModal } from 'utils/modal';

export interface ModalButtonProps extends DefaultProps {
  action: 'show' | 'close';
  className?: string;
}

export function ToggleModalButton({ action, ...props }: ModalButtonProps) {
  function handleClick() {
    return (action === 'show' ? showModal : closeModal)();
  }

  return <button type="button" onClick={handleClick} {...props} />;
}
