// components/ExternalLink.js
import Link from 'next/link';

export default function ExternalLink({ href, children, className = '', ...props }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} text-orange-600 hover:text-orange-700 underline`}
      {...props}
    >
      {children}
    </Link>
  );
}

