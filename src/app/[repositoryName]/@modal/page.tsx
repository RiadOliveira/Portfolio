import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';

import { fetchReadme } from 'services/fetchReadme';
import { ReadmeLink } from 'components/client/readme-link';

type Props = {
  params: Promise<{ repositoryName: string }>;
};

export default async function RepositoryModal({ params }: Props) {
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
