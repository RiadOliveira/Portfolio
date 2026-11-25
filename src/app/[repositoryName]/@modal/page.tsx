import { ReadmeLink } from './_readmeLink';
import { fetchReadme } from '@/services/fetchReadme';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkEmoji from 'remark-emoji';

type Props = { params: Promise<{ repositoryName: string }> };

export default async function Page({ params }: Props) {
  const { repositoryName } = await params;
  const readmeContent = await fetchReadme(repositoryName);

  return (
    <div className="prose prose-sm scroll-fade dark:prose-invert text-dark dark:text-light no-scroll-bg min-w-full overflow-y-scroll p-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkEmoji]}
        rehypePlugins={[rehypeRaw]}
        components={{ a: ReadmeLink }}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
}
