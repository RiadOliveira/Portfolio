import type { ImageProps } from 'next/image';

import { cn } from 'cn';

import Image from 'next/image';

const THRESHHOLDS_VALUES = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  '2xl': '96rem',
} as const;

type Threshhold = keyof typeof THRESHHOLDS_VALUES;
type SizeDefinition = {
  defaultSize: string;
  widthThreshholds?: { [key in Threshhold]?: string };
};

type Props = Omit<ImageProps, 'fill' | 'sizes'> & {
  imageStyles?: string;
  sizes: SizeDefinition;
};

export default function ImageContainer({
  alt,
  children,
  className,
  imageStyles,
  sizes: { defaultSize, widthThreshholds = {} },
  ...props
}: Props) {
  const sizesDefinition = Object.entries(widthThreshholds).reduce(
    (prev, [key, value]) =>
      prev + `(max-width: ${THRESHHOLDS_VALUES[key as Threshhold]}) ${value}, `,
    '',
  );

  return (
    <div className={cn('relative', className)}>
      <Image
        alt={alt}
        className={imageStyles}
        fill
        sizes={`${sizesDefinition}${defaultSize}`}
        {...props}
      />
      {children}
    </div>
  );
}
