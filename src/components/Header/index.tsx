'use client';

import React from 'react';
import { HeaderContainer, CustomIcon } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 d-flex flex-wrap">
            <p className="d-flex me-4 mb-0">
              <CustomIcon className="bi-person me-2"></CustomIcon>
              <strong className="text-dark">Welcome to Music Festival 2023</strong>
            </p>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
