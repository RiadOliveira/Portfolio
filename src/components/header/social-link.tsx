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
        'border-light/50 size-9 rounded-md border-2 p-1 transition duration-400 hover:border-1 active:border-1',
        colorStyles,
      ])}
    >
      <Icon className="size-full" />
    </a>
  );
}
