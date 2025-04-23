import { SocialData, USER } from 'constants/user';
import { ImageContainer } from './image-container';
import { mergeStyles } from 'utils/mergeStyles';

export function HeaderContainer() {
  return (
    <header className="flex justify-center gap-5 pt-3 pb-6.5">
      <ImageContainer
        className="size-26 overflow-hidden rounded-2xl sm:size-40"
        src="/avatar.jpg"
        alt={USER.fullName}
        sizes={{
          definitions: [{ threshold: 'SM', value: '6.5rem' }],
          defaultValue: '10rem',
        }}
        priority
      />

      <div className="flex flex-col justify-between py-1">
        <section>
          <h1 className="text-lg leading-none font-bold">{USER.fullName}</h1>
          <h2 className="font-secondary text-lg font-semibold">Full Stack Developer</h2>
        </section>

        <section className="flex justify-between">{USER.socials.map(SocialLink)}</section>
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
        'border-light/50 size-9 rounded-md border-2 p-1 transition duration-400 hover:border-1 active:border-1',
        colorStyles,
      ])}
    >
      <Icon className="size-full" />
    </a>
  );
}
