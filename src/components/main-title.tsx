import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return <h1 className="py-[3px] mb-2.5 text-lg font-semibold">{children}</h1>;
}
