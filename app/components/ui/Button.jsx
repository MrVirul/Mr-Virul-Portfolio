'use client';

import React from 'react';
import Link from 'next/link';

const Button = ({ 
  variant = 'primary', 
  href, 
  onClick, 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent !text-primary hover:bg-secondary hover:!text-primary hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-transparent border border-accent !text-accent hover:bg-accent hover:!text-primary hover:shadow-lg hover:-translate-y-0.5",
    ghost: "bg-transparent text-secondary hover:!text-accent hover:bg-white/5",
  };

  const selectedVariant = variants[variant] || variants.primary;
  const combinedClassName = `${baseStyles} ${selectedVariant} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto')) {
        return (
            <a href={href} className={combinedClassName} {...props}>
              {children}
              {icon && <span className="ml-1">{icon}</span>}
            </a>
          );
    }
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;

import PropTypes from 'prop-types';

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'outline', 'ghost']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
};
