import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { DefaultProps } from 'types/DefaultProps';
import { RepositoryPageParams } from 'types/repository/RepositoryPageParams';
import { findRepositoryFromParams } from 'utils/findRepositoryFromParams';

type Props = DefaultProps & {
  modal: React.ReactNode;
};

export async function generateMetadata(
  params: RepositoryPageParams,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const repository = await findRepositoryFromParams(params);
  if (!repository) return redirect('/');

  const {
    description,
    displayData: { title },
  } = repository;
  return { title: `Project | ${title}`, description };
}

export default function RepositoryViewLayout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
