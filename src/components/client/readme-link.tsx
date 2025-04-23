'use client';

import { AnchorHTMLAttributes, MouseEventHandler } from 'react';

export function ReadmeLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const internalLink = props.href?.startsWith('#');

  if (internalLink) return <a onClick={handleInternalLink} {...props} />;
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const handleInternalLink: MouseEventHandler<HTMLAnchorElement> = (event) => {
  event.preventDefault();

  const elementSelector = event.currentTarget.getAttribute('href')!;
  const selectedElement = document.querySelector(elementSelector)!;

  selectedElement.scrollIntoView({ behavior: 'smooth' });
};
