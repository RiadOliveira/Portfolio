import './globals.css';

import type { SocialData } from '@/types/socialData';
import type { DefaultProps } from '@/types/defaultProps';

export { metadata } from '@/constants/metadata';
import { USER_DATA } from '@/constants/userData';
import { POPPINS, SPACE_GROTESK } from '@/constants/fonts';
import { cn } from 'cn';

import ThemeButton from '@/components/button/theme';
import ImageContainer from '@/components/imageContainer';

export default function RootLayout({ children }: DefaultProps) {
  return (
    <html lang="en">
      <body className={`${POPPINS} ${SPACE_GROTESK} antialiased`}>
        <div className="animated-gradient flex h-dvh p-2.5 max-sm:flex-col sm:items-center sm:justify-center sm:gap-6 md:p-3.5 lg:gap-20 lg:p-6 xl:gap-8 2xl:gap-20">
          <HeaderContainer />

          <main className="bg-light/27 dark:bg-dark/32.5 relative flex flex-1 flex-col overflow-y-hidden rounded-lg px-4 transition-colors duration-300 sm:h-full sm:max-h-100 sm:max-w-[54%] md:max-h-11/12 lg:max-w-122 lg:px-6 xl:max-w-220.5 2xl:max-w-222.5">
            <div className="border-light/60 absolute left-4 flex h-14 w-[calc(100%-2rem)] items-center justify-end border-b-2 pt-0.5 sm:h-12 md:h-14 lg:left-6 lg:h-15.5 lg:w-[calc(100%-3rem)] lg:border-b-[3px]">
              <ThemeButton />
            </div>

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function HeaderContainer() {
  return (
    <header className="flex justify-center gap-5 max-sm:pt-3 max-sm:pb-6.5 sm:w-2/5 sm:flex-col sm:items-center sm:gap-3 lg:w-73 2xl:w-88">
      <ImageContainer
        preload
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
        className="ring-light/25 size-26 overflow-hidden rounded-2xl ring-2 sm:size-30 md:size-34 lg:size-40 2xl:size-48"
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
      className={cn(
        'group border-light/50 group flex size-9.25 flex-col items-center justify-center gap-2 rounded-md border-2 p-1 transition duration-400 hover:border active:border sm:size-9.5 md:size-11.5 lg:size-21 lg:shadow-md 2xl:size-26',
        colorStyles,
      )}
    >
      <Icon className="size-full lg:size-9 lg:group-hover:scale-105 lg:group-active:scale-105 2xl:size-12" />
      <span className="text-sm font-semibold max-lg:hidden">{name}</span>
    </a>
  );
}
