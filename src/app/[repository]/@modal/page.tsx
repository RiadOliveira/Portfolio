import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';

import { fetchReadme } from 'services/fetchReadme';
import { ReadmeLink } from 'components/client/readme-link';

interface RepositoryModalProps {
  params: Promise<{ repository: string }>;
}

export default async function RepositoryModal({
  params,
}: RepositoryModalProps) {
  const { repository } = await params;
  const readmeContent = await fetchReadme(repository);

  return (
    <div className="prose prose-sm dark:prose-invert text-dark dark:text-light min-w-full overflow-y-scroll p-5">
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
