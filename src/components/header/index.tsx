import { USER } from 'constants/user';
import { SocialLink } from './social-link';
import { ImageContainer } from '../image-container';

export function Header() {
  return (
    <header className="flex justify-center gap-5 pt-3 pb-6.5">
      <ImageContainer
        className="rounded-2xl overflow-hidden size-26 sm:size-40"
        src="/avatar.jpg"
        alt={USER.fullName}
        sizes={{
          definitions: [{ threshold: 'SM', value: '6.5rem' }],
          defaultValue: '10rem',
        }}
        priority
      />

      <div className="py-1 flex flex-col justify-between">
        <section>
          <h1 className="font-bold text-lg leading-none">{USER.fullName}</h1>
          <h2 className="font-secondary font-semibold text-lg">Full Stack Developer</h2>
        </section>

        <section className="flex justify-between">{USER.socials.map(SocialLink)}</section>
      </div>
    </header>
  );
}
