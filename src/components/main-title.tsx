import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return (
    <h1 className="font-secondary my-3.5 font-semibold text-[19] sm:my-2.5 md:my-3 md:text-[21] lg:my-3.5 lg:text-[22]">
      {children}
    </h1>
  );
}
