import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return <h1 className="mb-2.5 pt-[3px] pb-1.5 text-lg font-semibold">{children}</h1>;
}
