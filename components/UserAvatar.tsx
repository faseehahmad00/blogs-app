import c from 'classnames';
import React from 'react';

interface Props {
  alt?: string;
  src: string;
  className?: string;
}

export default function UserAvatar({ alt, src, className = 'h-8 w-8' }: Props) {
  let classes = className;
  if (!classes.includes('h-')) classes = c(classes, 'h-8');
  if (!classes.includes('w-')) classes = c(classes, 'w-8');

  if (!src) {
    if (!classes.includes('bg-')) classes = c(classes, 'bg-gray-200');
    if (!classes.includes('text-')) classes = c(classes, 'text-gray-600');

    return (
      <svg fill="currentColor" viewBox="0 0 24 24" className={c('rounded-full overflow-hidden', classes)}>
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }

  return (
    <img alt={alt} src={src} className={c('rounded-full overflow-hidden object-cover', classes)} />
  );
}
