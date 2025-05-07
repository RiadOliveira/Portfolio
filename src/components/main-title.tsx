import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return (
    <h1 className="font-secondary py-3.5 text-[19px] font-semibold md:py-4 md:text-[23px] lg:text-[32px]">
      {children}
    </h1>
  );
}
