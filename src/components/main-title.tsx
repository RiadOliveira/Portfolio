import { DefaultProps } from 'types/DefaultProps';

export function MainTitle({ children }: DefaultProps) {
  return <h1 className="py-[3px] mb-8.5 text-lg text-light font-semibold">{children}</h1>;
}
