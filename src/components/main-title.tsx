import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return (
    <h1 className="font-secondary py-3.5 text-[19px] font-semibold sm:py-2.5 md:py-3 md:text-[21px] lg:text-[27px]">
      {children}
    </h1>
  );
}
