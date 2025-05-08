import { SocialData, USER } from 'constants/user';
import { ImageContainer } from './image-container';
import { mergeStyles } from 'utils/mergeStyles';

export function HeaderContainer() {
  return (
    <header className="flex justify-center gap-5 max-sm:pt-3 max-sm:pb-6.5 sm:w-2/5 sm:flex-col sm:items-center sm:gap-3">
      <ImageContainer
        className="ring-light/25 size-26 overflow-hidden rounded-2xl ring-2 sm:size-30 md:size-[8.5rem] lg:size-44 xl:size-48"
        src="/avatar.jpg"
        alt={USER.fullName}
        sizes={{
          defaultSize: '12rem',
          widthThreshholds: {
            sm: '6.5rem',
            md: '7.5rem',
            lg: '8.5rem',
            xl: '11rem',
          },
        }}
        priority
      />

      <div className="flex flex-col py-1 max-sm:justify-between sm:gap-3 sm:py-2 lg:w-full lg:items-center lg:gap-10 lg:pt-3">
        <section className="flex flex-col sm:items-center lg:gap-1">
          <h1 className="m-0 text-lg leading-none font-bold md:text-xl lg:text-[22]">
            {USER.fullName}
          </h1>
          <h2 className="font-secondary text-lg font-semibold md:text-xl lg:text-[22]">
            Full Stack Developer
          </h2>
        </section>

        <section className="flex flex-wrap max-sm:justify-between sm:w-full sm:gap-2.5 md:gap-3 lg:w-[304] lg:justify-center lg:gap-5">
          {USER.socials.map(SocialLink)}
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
        'group border-light/50 group flex size-[37] flex-col items-center justify-center gap-2 rounded-md border-2 p-1 transition duration-400 hover:border-1 active:border-1 sm:size-9.5 md:size-11.5 lg:size-22 lg:shadow-md',
        colorStyles,
      ])}
    >
      <Icon className="size-full group-hover:scale-105 group-active:scale-105 lg:size-9.5" />
      <span className="text-sm font-semibold max-lg:hidden">{name}</span>
    </a>
  );
}
