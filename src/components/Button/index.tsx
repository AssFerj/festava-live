'use client';

import React from 'react';
import { StyledButton, StyledButtonProps } from './styles';
import { LinkProps } from 'next/link';

type ButtonComponentProps = StyledButtonProps & LinkProps & {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonComponentProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <StyledButton className={className} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
