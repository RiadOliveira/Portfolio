import { ICONS_DATA } from 'constants/iconsData';
import { ColorStyles } from 'types/repository/ColorStyles';
import { Feature } from 'types/repository/Feature';
import { HighlightColor } from 'types/repository/HighlightColor';
import { mergeStyles } from 'utils/mergeStyles';

type Props<T extends HighlightColor> = {
  features: Feature[];
  iconStyles: ColorStyles<T>['icon'];
};

export function Features<T extends HighlightColor>({
  features,
  iconStyles: { background, color },
}: Props<T>) {
  return features.map(({ name, description, icon }) => {
    const Icon = ICONS_DATA[icon];

    return (
      <div
        key={name}
        className="group border-light/20 hover:border-light/40 bg-light/8 flex items-start gap-4 rounded-lg border p-3 shadow transition-all duration-300 hover:scale-102 hover:bg-white/13"
      >
        <div
          className={mergeStyles(
            background,
            'rounded-lg p-2 transition-colors duration-300',
          )}
        >
          <Icon className={mergeStyles(color, 'size-5')} />
        </div>

        <div>
          <span className="mb-1 text-base font-semibold">{name}</span>
          <p className="text-xs leading-relaxed lg:text-sm">{description}</p>
        </div>
      </div>
    );
  });
}
