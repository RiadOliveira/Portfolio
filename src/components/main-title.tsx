import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return (
    <h1 className="font-secondary py-3.5 text-[19px] font-semibold sm:py-2.5 md:py-4 md:text-[23px] lg:py-5 lg:text-[28px]">
      {children}
    </h1>
  );
}
