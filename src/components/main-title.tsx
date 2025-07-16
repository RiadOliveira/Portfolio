import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return (
    <h1 className="font-secondary my-3.5 text-[19px] font-semibold sm:my-2.5 md:my-3 md:text-[21px] lg:my-3.5 lg:text-2xl">
      {children}
    </h1>
  );
}
