import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return <h1 className="mb-2.5 py-[3px] text-lg font-semibold">{children}</h1>;
}
