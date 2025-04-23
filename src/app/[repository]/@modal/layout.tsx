import { ModalContainer } from 'components/container/modal-container';
import { DefaultProps } from 'types/DefaultProps';

export default function RepositoryModalLayout({ children }: DefaultProps) {
  return <ModalContainer>{children}</ModalContainer>;
}
