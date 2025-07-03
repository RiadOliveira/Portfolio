import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { getRepositoriesData } from 'services/getRepositoriesData';
import { DefaultProps } from 'types/DefaultProps';

type Props = DefaultProps & {
  modal: React.ReactNode;
};

type MetadataParams = {
  params: Promise<{ repositoryName: string }>;
};

export async function generateMetadata(
  { params }: MetadataParams,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { repositoryName } = await params;
  const repositories = await getRepositoriesData();

  const repository = repositories.find(({ name }) => name === repositoryName);
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
