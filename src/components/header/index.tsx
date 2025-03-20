import { GITHUB_URLS } from 'constants/requests';
import { USER } from 'constants/user';
import { SocialLink } from './SocialLink';
import { ImageContainer } from 'components/ImageContainer';

export function Header() {
  return (
    <header className="flex justify-center gap-4 pt-7 pb-8">
      <ImageContainer
        className="rounded-2xl overflow-hidden w-[6.4rem] h-[6.4rem] sm:w-40 sm:h-40"
        src={`${GITHUB_URLS.AVATAR}/${USER.ID}?v=4`}
        alt={USER.FULL_NAME}
        sizes={{
          definitions: [{ threshold: 'SM', value: '6.4rem' }],
          defaultValue: '10rem',
        }}
        priority
      />

      <div className="text-light py-0.5 flex flex-col justify-between">
        <section className="flex flex-col">
          <h1 className="font-bold text-lg -mb-1">{USER.FULL_NAME}</h1>
          <h2 className="font-secondary font-semibold text-lg">Full Stack Developer</h2>
        </section>

        <section className="flex justify-between">{USER.SOCIALS.map(SocialLink)}</section>
      </div>
    </header>
  );
}
