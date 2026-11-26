import type { RepositoryPageParams } from '@/types/repository/pageParams';

import { fetchReadme } from '@/services/fetchReadme';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkEmoji from 'remark-emoji';
import ReadmeLink from './_readmeLink';
import ReactMarkdown from 'react-markdown';

type ReadmeImageProps = React.ComponentProps<'img'> & { node?: unknown };

export default async function Page({ params }: RepositoryPageParams) {
  const { repositoryName } = await params;
  const readmeContent = await fetchReadme(repositoryName);

  return (
    <div className="prose prose-sm scroll-fade dark:prose-invert text-dark dark:text-light no-scroll-bg min-w-full overflow-y-scroll p-5 transition-colors duration-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkEmoji]}
        rehypePlugins={[rehypeRaw]}
        components={{ a: ReadmeLink, img: ReadmeImage }}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
}

function ReadmeImage({ node: _, ...props }: ReadmeImageProps) {
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} fetchPriority="low" decoding="async" />;
}
