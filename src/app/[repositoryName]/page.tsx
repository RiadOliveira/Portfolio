import { ImageContainer } from 'components/container/image-container';
import { MainTitle } from 'components/main-title';
import { mergeStyles } from 'utils/mergeStyles';
import { COLORS_DATA } from 'constants/colorsData';
import { getRepositoriesData } from 'services/getRepositoriesData';
import { redirect } from 'next/navigation';
import { getRepositoryImageUrl } from 'utils/getRepositoryImageUrl';
import { TechnologyBadges } from 'components/repository/technology-badges';
import { Features } from 'components/repository/features';
import { ActionButtons } from 'components/repository/action-buttons';

type Props = {
  params: Promise<{ repositoryName: string }>;
};

export default async function RepositoryView({ params }: Props) {
  const { repositoryName } = await params;
  const repositories = await getRepositoriesData();

  const repository = repositories.find(({ name }) => name === repositoryName);
  if (!repository) return redirect('/');

  const { name, displayData } = repository;
  const { title, extendedDescription, technologies, highlightColor, features } =
    displayData;
  const { container, icon } = COLORS_DATA[highlightColor];

  return (
    <>
      <MainTitle>{title}</MainTitle>

      <section className="no-scrollbar scroll-fade relative flex flex-1 flex-col items-center justify-between overflow-y-scroll pt-3">
        <div className="flex flex-col items-center sm:max-w-[96%] lg:max-w-[98.5%]">
          <p className="mb-4.5 text-justify text-base lg:mb-6 lg:text-lg xl:mb-3.5 2xl:mb-7">
            {extendedDescription}
          </p>

          <div className="flex items-center gap-4 max-xl:flex-col">
            <div
              className={mergeStyles(
                container,
                'border-light/40 w-full rounded-md border-1 shadow-md lg:max-w-[540px] lg:border-2 xl:max-w-[550px]',
              )}
            >
              <ImageContainer
                className="aspect-video overflow-hidden rounded-t-md shadow-md"
                src={getRepositoryImageUrl(displayData)}
                alt={name}
                quality={100}
                sizes={{ defaultSize: '100%' }}
              />

              <TechnologyBadges technologies={technologies} />
            </div>

            <Features features={features} iconStyles={icon} />
          </div>
        </div>

        <ActionButtons repositoryName={name} />
      </section>
    </>
  );
}
