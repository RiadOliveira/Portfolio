import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return (
    <h1 className="font-secondary py-3.5 text-[19px] font-semibold lg:py-5 lg:text-3xl">
      {children}
    </h1>
  );
}
