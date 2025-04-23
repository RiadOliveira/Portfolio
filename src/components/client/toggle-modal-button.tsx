'use client';

import { DefaultProps } from 'types/DefaultProps';
import { closeModal, showModal } from 'utils/modal';

export interface ModalButtonProps extends DefaultProps {
  kind: 'show' | 'close';
  className?: string;
}

export function ToggleModalButton({ kind, ...props }: ModalButtonProps) {
  return <button type="button" onClick={kind === 'show' ? showModal : closeModal} {...props} />;
}
