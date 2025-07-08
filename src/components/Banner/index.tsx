'use client';

import { BannerContainer, BannerContent, BannerTitle, SocialLink } from './styles';
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>Festava Live</BannerTitle>
        <div>
          <SocialLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <BsFacebook size={24}/>
          </SocialLink>
          <SocialLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={24}/>
          </SocialLink>
          <SocialLink href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={24}/>
          </SocialLink>
        </div>
      </BannerContent>
    </BannerContainer>
  );
};