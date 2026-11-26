import { MODAL_ID } from '@/constants/modal';

export function getModalElement() {
  return document.getElementById(MODAL_ID) as HTMLDialogElement | null;
}
