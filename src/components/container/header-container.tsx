import { SocialData, USER } from 'constants/user';
import { ImageContainer } from './image-container';
import { mergeStyles } from 'utils/mergeStyles';

export function HeaderContainer() {
  return (
    <header className="flex justify-center gap-5 pb-6.5 max-lg:pt-3 lg:flex-col lg:items-center lg:pr-26 lg:pl-[84px]">
      <ImageContainer
        className="ring-light/25 size-26 overflow-hidden rounded-2xl ring-2 lg:size-48"
        src="/avatar.jpg"
        alt={USER.fullName}
        sizes={{
          definitions: [{ threshold: 'LG', value: '6.5rem' }],
          defaultValue: '12rem',
        }}
        priority
      />

      <div className="flex flex-col py-1 max-lg:justify-between lg:gap-10">
        <section className="flex flex-col lg:items-center">
          <h1 className="text-lg leading-none font-bold lg:text-2xl">
            {USER.fullName}
          </h1>
          <h2 className="font-secondary text-lg font-semibold lg:text-[22px]">
            Full Stack Developer
          </h2>
        </section>

        <section className="flex flex-wrap justify-between lg:max-w-[264px] lg:justify-center lg:gap-6">
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
        'border-light/50 group flex size-9 flex-col items-center justify-center gap-2 rounded-md border-2 p-1 transition duration-400 hover:border-1 active:border-1 lg:size-30 lg:shadow-md',
        colorStyles,
      ])}
    >
      <Icon className="size-full lg:size-12 lg:group-hover:size-13" />
      <span className="text-lg font-semibold max-lg:hidden">{name}</span>
    </a>
  );
}
