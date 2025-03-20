import { SocialData } from 'constants/user';
import { mergeStyles } from 'utils/mergeStyles';

export function SocialLink({ Icon, href, alt, colorStyles }: SocialData) {
  return (
    <a
      key={alt}
      href={href}
      target="_blank"
      className={mergeStyles([
        'border-2 w-9 h-9 p-1 border-light/50 rounded-md hover:border-1 active:border-1 transition duration-400',
        colorStyles,
      ])}
    >
      <Icon className="w-full h-full" />
    </a>
  );
}
