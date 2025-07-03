import Link from 'next/link';

import { MdArrowBackIosNew } from 'react-icons/md';
import {
  FaBarcode,
  FaBoxOpen,
  FaBuilding,
  FaChartLine,
  FaGithub,
  FaSearch,
  FaUsers,
} from 'react-icons/fa';
import { IoReader } from 'react-icons/io5';
import { ImageContainer } from 'components/container/image-container';
import { ToggleModalButton } from 'components/client/toggle-modal-button';
import { MainTitle } from 'components/main-title';
import { USER_DATA } from 'constants/userData';
import { mergeStyles } from 'utils/mergeStyles';
import { COLORS_DATA } from 'constants/colorsData';
import { getRepositoriesData } from 'services/getRepositoriesData';
import { redirect } from 'next/navigation';
import { GITHUB_URLS } from 'constants/requests';
import { getRepositoryImageUrl } from 'utils/getRepositoryImageUrl';
import { TechnologyBadges } from 'components/repository/technology-badges';

type Props = {
  params: Promise<{ repositoryName: string }>;
};

const features = [
  {
    icon: FaUsers,
    title: 'Gestão de Usuários',
    description:
      'Registro, atualização e exclusão de usuários com perfis admin e func',
  },
  {
    icon: FaBuilding,
    title: 'Gestão Empresarial',
    description:
      'CRUD completo de empresas com sistema de contratação e demissão',
  },
  {
    icon: FaBoxOpen,
    title: 'Controle de Produtos',
    description: 'Cadastro e gestão de produtos com sistema de categorização',
  },
];

export default async function RepositoryView({ params }: Props) {
  const { repositoryName } = await params;
  const repositories = await getRepositoriesData();

  const repository = repositories.find(({ name }) => name === repositoryName);
  if (!repository) return redirect('/');

  const { name, description, displayData } = repository;
  const { title, technologies, highlightColor } = displayData;
  const { container } = COLORS_DATA[highlightColor];

  return (
    <>
      <MainTitle>{title}</MainTitle>

      <section className="no-scrollbar scroll-fade relative flex flex-1 flex-col items-center justify-between overflow-y-scroll pt-3">
        <div className="flex flex-col items-center sm:max-w-[96%] lg:max-w-[98.5%]">
          <p className="mb-4.5 text-justify text-base lg:mb-6 lg:text-lg xl:mb-3.5 2xl:mb-7">
            {description}
          </p>

          <div className="flex items-center gap-4 max-xl:flex-col">
            <div
              className={mergeStyles(
                container,
                'border-light/40 w-full rounded-md border-1 shadow-md lg:max-w-[540px] lg:border-2 xl:max-w-[550px] 2xl:max-w-[570px]',
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

            <div className="flex flex-1 flex-col max-xl:gap-3 xl:h-full xl:justify-between xl:py-0.5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group border-light/20 hover:border-light/40 flex items-start gap-4 rounded-lg border bg-white/5 p-3 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
                >
                  <div className="bg-primary/20 group-hover:bg-primary/30 rounded-lg p-2 transition-colors duration-300">
                    <feature.icon className="text-primary size-5" />
                  </div>

                  <div>
                    <span className="mb-1 text-base font-semibold text-gray-100 transition-colors duration-300 group-hover:text-white lg:text-base">
                      {feature.title}
                    </span>
                    <p className="text-xs leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200 lg:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between pt-6.5 pr-1 pb-6 pl-2 xl:pt-10">
          <Link
            href="/"
            className="hover:bg-light/30 active:bg-light/30 size-10.5 rounded-md p-2 transition-normal duration-200 hover:scale-106 active:scale-106 xl:size-12"
          >
            <MdArrowBackIosNew className="size-6 max-xl:-ml-0.5 xl:mt-0.5 xl:size-7.5" />
          </Link>

          <div className="flex gap-5">
            <ToggleModalButton
              action="show"
              className="bg-primary/90 flex h-10.5 items-center justify-center gap-2 rounded-md px-3 shadow transition-normal duration-200 hover:scale-106 active:scale-106 xl:h-12 xl:px-4"
            >
              <IoReader className="size-6 xl:size-7" />
              <span className="text-base font-semibold xl:-mt-0.5 xl:text-lg">
                Preview
              </span>
            </ToggleModalButton>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${GITHUB_URLS.default}/${USER_DATA.login}/${name}`}
              className="flex h-10.5 items-center justify-center gap-2 rounded-md bg-gray-800/90 px-3 shadow transition-normal duration-200 hover:scale-106 active:scale-106 xl:h-12 xl:px-4"
            >
              <FaGithub className="size-6 xl:size-7.5" />
              <span className="text-base font-semibold xl:text-lg">Github</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
