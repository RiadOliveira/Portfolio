import { MainTitle } from 'components/main-title';

type Params = {
  params: Promise<{ repository: string }>;
};

export default async function RepositoryView({ params }: Params) {
  const { repository } = await params;

  return (
    <>
      <MainTitle>{repository}</MainTitle>
    </>
  );
}
