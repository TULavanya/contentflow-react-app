import React from 'react';
import { Link } from 'react-router-dom';

interface SafeLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SafeLink: React.FC<SafeLinkProps> = ({ to, children, className, style }) => {
  try {
    return (
      <Link to={to} className={className} style={style}>
        {children}
      </Link>
    );
  } catch (error) {
    console.warn('SafeLink error, falling back to <a> tag:', error);
    return (
      <a href={to} className={className} style={style}>
        {children}
      </a>
    );
  }
};

export default SafeLink;
