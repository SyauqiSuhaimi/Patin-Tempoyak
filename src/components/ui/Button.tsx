import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-accent text-primary font-bold hover:bg-accent-hover',
      outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold',
      ghost: 'text-white hover:text-accent font-medium',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
