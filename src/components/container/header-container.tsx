import { SocialData, USER } from 'constants/user';
import { ImageContainer } from './image-container';
import { mergeStyles } from 'utils/mergeStyles';

export function HeaderContainer() {
  return (
    <header className="flex gap-5 pt-3 max-sm:justify-center max-sm:pb-6.5 sm:w-2/5 sm:flex-col sm:items-center sm:gap-3 sm:pt-4">
      <ImageContainer
        className="ring-light/25 size-26 overflow-hidden rounded-2xl ring-2 sm:size-30 md:size-40 xl:size-48"
        src="/avatar.jpg"
        alt={USER.fullName}
        sizes={{
          definitions: [
            { threshold: 'SM', value: '6.5rem' },
            { threshold: 'MD', value: '7.5rem' },
            { threshold: 'XL', value: '10rem' },
          ],
          defaultValue: '12rem',
        }}
        priority
      />

      <div className="flex flex-col py-1 max-sm:justify-between sm:gap-3">
        <section className="flex flex-col sm:items-center">
          <h1 className="text-lg leading-none font-bold md:text-2xl">
            {USER.fullName}
          </h1>
          <h2 className="font-secondary text-lg font-semibold md:text-[22px]">
            Full Stack Developer
          </h2>
        </section>

        <section className="flex flex-wrap max-md:justify-between md:max-w-[264px] md:justify-center md:gap-6">
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
        'border-light/50 group flex size-9 flex-col items-center justify-center gap-2 rounded-md border-2 p-1 transition duration-400 hover:border-1 active:border-1 xl:size-30 xl:shadow-md',
        colorStyles,
      ])}
    >
      <Icon className="size-full" />
      <span className="text-sm font-semibold max-md:hidden">{name}</span>
    </a>
  );
}
