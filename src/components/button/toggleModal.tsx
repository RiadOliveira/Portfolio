'use client';

import type { DefaultProps } from '@/types/defaultProps';

import { MODAL_ACTIONS } from '@/utils/modal/actions';

type Props = DefaultProps & {
  action: keyof typeof MODAL_ACTIONS;
  className?: string;
};

export default function ToggleModalButton({ action, ...props }: Props) {
  return (
    <button {...props} type="button" onClick={() => MODAL_ACTIONS[action]()} />
  );
}
