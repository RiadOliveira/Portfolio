import type { DefaultProps } from '@/types/defaultProps';
import type { RepositoryPageParams } from '@/types/repository/pageParams';
import type { Metadata, ResolvingMetadata } from 'next';

import { redirect } from 'next/navigation';
import { findRepositoryFromParams } from '@/utils/findRepositoryFromParams';

type Props = DefaultProps & { modal: React.ReactNode };

export async function generateMetadata(
  params: RepositoryPageParams,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const repository = await findRepositoryFromParams(params);
  if (!repository) return redirect('/');

  const { description, showcase } = repository;
  return { title: `Project | ${showcase.title}`, description };
}

export default function Layout({ children, modal }: Props) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
