import { DefaultProps } from 'types/DefaultProps';

interface RepositoryLayoutParams extends DefaultProps {
  modal: React.ReactNode;
}

export default async function RepositoryLayout({
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
