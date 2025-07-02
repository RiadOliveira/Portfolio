import { generateDisplayDataURL } from 'utils/generateDisplayDataURL';
import { fetchRepositories } from './fetchRepositories';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';
import { APIRepository } from 'types/repository/APIRepository';
import { USER_DATA } from 'constants/userData';
import { DisplayData, RepositoryData } from 'types/repository/RepositoryData';

const EXAMPLE_REPOSITORY: RepositoryData = {
  id: 0,
  name: 'Tradelous-Desktop',
  description:
    'An app developed in order to provide an easy way to manage stocks and sales of varied companies.',
  displayData: {
    coverImage: '147826010-25e9ef50-474a-49a8-b486-3ead4bed8105.png',
    technologies: ['NodeJs', 'React', 'Ubuntu'],
    highlightColor: 'emerald',
  },
} as const;

export async function getRepositoriesData() {
  return [EXAMPLE_REPOSITORY];

  const repositories = await fetchRepositories();
  const repositoriesDataPromises = repositories.map(
    generateRepositoryDataPromise,
  );
  const promisesData = await Promise.all(repositoriesDataPromises);

  return promisesData.filter((data) => data !== undefined);
}

function generateRepositoryDataPromise({
  id,
  name,
  description,
  owner: { id: ownerId },
}: APIRepository) {
  if (ownerId !== USER_DATA.id || name === USER_DATA.login) return undefined;

  return cachedJSONFetch<DisplayData>(generateDisplayDataURL(name))
    .then(
      (displayData) =>
        ({ id, name, description, displayData }) as RepositoryData,
    )
    .catch(() => undefined);
}
