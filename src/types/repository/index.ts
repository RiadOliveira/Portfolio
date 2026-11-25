import type { Feature } from './feature';
import type { Technology } from './technology';
import type { HighlightColor } from './highlightColor';

export type RepositoryShowcase = {
  title: string;
  imageId: string;
  extendedDescription: string;
  features: Feature[];
  technologies: Technology[];
  highlightColor: HighlightColor;
  attachmentsUrl?: true;
};

export type Repository = {
  id: number;
  name: string;
  description: string;
  showcase: RepositoryShowcase;
};

export type APIRepository = Omit<Repository, 'showcase'> & {
  owner: { id: number };
};
