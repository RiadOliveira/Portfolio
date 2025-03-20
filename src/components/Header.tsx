import Image from 'next/image';

import { GITHUB_URLS } from 'constants/requests';
import { USER } from 'constants/user';
import SocialLink from './SocialLink';

export function Header() {
  return (
    <header className="flex justify-center gap-4 pt-7 pb-8">
      <div className="relative w-[6.4rem] h-[6.4rem] sm:w-40 sm:h-40">
        <Image
          src={`${GITHUB_URLS.AVATAR}/${USER.ID}?v=4`}
          alt={USER.FULL_NAME}
          sizes="(max-width: 40rem) 6.4rem, 10rem"
          className="rounded-2xl"
          quality={100}
          priority
          fill
        />
      </div>

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
