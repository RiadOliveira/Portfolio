import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';

import { fetchReadme } from 'services/fetchReadme';
import { ReadmeLink } from './readme-link';

type Props = {
  repositoryName: string;
};

export async function ReadmeModal({ repositoryName }: Props) {
  const readmeContent = await fetchReadme(repositoryName);

  return (
    <div className="prose prose-sm dark:prose-invert bg-light dark:bg-dark text-dark dark:text-light">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkEmoji]}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ReadmeLink,
        }}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
}
