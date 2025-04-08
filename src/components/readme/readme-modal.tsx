import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';

import { fetchReadme } from 'services/fetchReadme';

type Props = {
  repositoryName: string;
};

export async function ReadmeModal({ repositoryName }: Props) {
  const readmeContent = await fetchReadme(repositoryName);

  return (
    <div className="prose dark:prose-invert bg-light dark:bg-dark text-dark dark:text-light">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji]} rehypePlugins={[rehypeRaw]}>
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
}
