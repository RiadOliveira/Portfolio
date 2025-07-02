import { DefaultProps } from 'types/DefaultProps';

interface RepositoryLayoutParams extends DefaultProps {
  modal: React.ReactNode;
}

export default function RepositoryLayout({
  children,
  modal,
}: RepositoryLayoutParams) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
