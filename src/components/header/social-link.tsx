import { SocialData } from 'constants/user';
import { mergeStyles } from 'utils/mergeStyles';

export function SocialLink({ Icon, name, href, colorStyles }: SocialData) {
  return (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={mergeStyles([
        'border-2 size-9 p-1 border-light/50 rounded-md hover:border-1 active:border-1 transition duration-400',
        colorStyles,
      ])}
    >
      <Icon className="size-full" />
    </a>
  );
}
