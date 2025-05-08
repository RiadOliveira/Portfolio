import Image, { ImageProps } from 'next/image';
import { mergeStyles } from 'utils/mergeStyles';

const THRESHHOLDS_VALUES = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
} as const;

type Threshhold = keyof typeof THRESHHOLDS_VALUES;
type SizeDefinition = {
  defaultSize: string;
  widthThreshholds: {
    [key in Threshhold]?: string;
  };
};

interface ImageContainerProps extends Omit<ImageProps, 'fill' | 'sizes'> {
  imageStyles?: string;
  sizes: SizeDefinition;
}

export function ImageContainer({
  alt,
  children,
  className,
  imageStyles,
  sizes: { defaultSize, widthThreshholds },
  ...props
}: ImageContainerProps) {
  const sizesDefinition = Object.entries(widthThreshholds).reduce(
    (prev, [key, value]) =>
      prev + `(max-width: ${THRESHHOLDS_VALUES[key as Threshhold]}) ${value}, `,
    '',
  );

  return (
    <div className={mergeStyles(['relative', className])}>
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
