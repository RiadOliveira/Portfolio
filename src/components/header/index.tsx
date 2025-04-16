import { USER } from 'constants/user';
import { SocialLink } from './social-link';
import { ImageContainer } from '../utilities/image-container';

export function Header() {
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
