import { ModalContainer } from 'components/modal/modal-container';
import { DefaultProps } from 'types/DefaultProps';

export default function RepositoryModalLayout({ children }: DefaultProps) {
  return <ModalContainer>{children}</ModalContainer>;
}
