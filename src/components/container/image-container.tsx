import Image, { ImageProps } from 'next/image';
import { mergeStyles } from 'utils/mergeStyles';

const THRESHHOLDS = {
  SM: '40rem',
  MD: '48rem',
  LG: '64rem',
  XL: '80rem',
} as const;

type SizeDefinition = {
  threshold: keyof typeof THRESHHOLDS;
  value: string;
};

interface ImageContainerProps extends Omit<ImageProps, 'fill' | 'sizes'> {
  imageStyles?: string;
  sizes: {
    definitions: SizeDefinition[];
    defaultValue: string;
  };
}

export function ImageContainer({
  alt,
  children,
  className,
  imageStyles,
  sizes: { definitions, defaultValue },
  ...props
}: ImageContainerProps) {
  const sizes = definitions.reduce(
    (prev, { threshold, value }) =>
      prev + `(min-width: ${THRESHHOLDS[threshold]}) ${value}, `,
    '',
  );

  return (
    <div className={mergeStyles(['relative', className])}>
      <Image
        alt={alt}
        className={imageStyles}
        fill
        sizes={`${sizes}${defaultValue}`}
        {...props}
      />
      {children}
    </div>
  );
}
