import { USER_DATA } from 'constants/userData';
import { ImageContainer } from './image-container';
import { mergeStyles } from 'utils/mergeStyles';
import { SocialData } from 'types/user/SocialData';

export function HeaderContainer() {
  return (
    <header className="flex justify-center gap-5 max-sm:pt-3 max-sm:pb-6.5 sm:w-2/5 sm:flex-col sm:items-center sm:gap-3 lg:w-[292px] 2xl:w-[352px]">
      <ImageContainer
        className="ring-light/25 size-26 overflow-hidden rounded-2xl ring-2 sm:size-30 md:size-[8.5rem] lg:size-40 2xl:size-48"
        src={USER_DATA.avatar}
        alt={USER_DATA.fullName}
        sizes={{
          defaultSize: '12rem',
          widthThreshholds: {
            sm: '6.5rem',
            md: '7.5rem',
            lg: '8.5rem',
            '2xl': '10rem',
          },
        }}
        loading="eager"
        priority
      />

      <div className="flex flex-col py-1 max-sm:justify-between sm:gap-3 sm:py-2 lg:w-full lg:items-center lg:gap-10 lg:pt-3">
        <section className="flex flex-col sm:items-center lg:gap-1">
          <h1 className="m-0 text-lg leading-none font-bold md:text-xl lg:text-[22px]">
            {USER_DATA.fullName}
          </h1>
          <h2 className="font-secondary text-lg font-semibold md:text-xl lg:text-[22px]">
            Full Stack Developer
          </h2>
        </section>

        <section className="flex flex-wrap max-sm:justify-between sm:w-full sm:gap-2.5 md:gap-3 lg:justify-center lg:gap-4">
          {USER_DATA.socials.map(SocialLink)}
        </section>
      </div>
    </header>
  );
}

function SocialLink({ Icon, name, href, colorStyles }: SocialData) {
  return (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={mergeStyles([
        'group border-light/50 group flex size-[37px] flex-col items-center justify-center gap-2 rounded-md border-2 p-1 transition duration-400 hover:border-1 active:border-1 sm:size-9.5 md:size-11.5 lg:size-21 lg:shadow-md 2xl:size-26',
        colorStyles,
      ])}
    >
      <Icon className="size-full lg:size-9 lg:group-hover:scale-105 lg:group-active:scale-105 2xl:size-12" />
      <span className="text-sm font-semibold max-lg:hidden">{name}</span>
    </a>
  );
}
