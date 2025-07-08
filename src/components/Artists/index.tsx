'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArtistsSection,
  Title,
  ArtistsThumb,
  ArtistsImageWrap,
  ArtistsHover,
} from './styles';

const artistsData = [
  {
    name: 'Madona',
    birthdate: 'August 16, 1958',
    music: 'Pop, R&B',
    youtube: '#',
    image: '/images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg',
    width: 416,
    height: 416,
  },
  {
    name: 'Rihana',
    birthdate: 'Feb 20, 1988',
    music: 'Country',
    youtube: '#',
    image: '/images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg',
    width: 416,
    height: 277,
  },
  {
    name: 'Bruno Bros',
    birthdate: 'October 8, 1985',
    music: 'Pop',
    youtube: '#',
    image: '/images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg',
    width: 416,
    height: 277,
  },
];

const Artists: React.FC = () => {
  return (
    <ArtistsSection id="section_3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <Title>Conheça os Artistas</Title>
          </div>

          <div className="col-lg-5 col-12">
            <ArtistsThumb>
              <ArtistsImageWrap>
                <Image
                  src={artistsData[0].image}
                  alt={artistsData[0].name}
                  width={artistsData[0].width}
                  height={artistsData[0].height}
                  className="artists-image img-fluid"
                />
              </ArtistsImageWrap>
              <ArtistsHover>
                <p>
                  <strong>Nome:</strong> {artistsData[0].name}
                </p>
                <p>
                  <strong>Data de Nascimento:</strong> {artistsData[0].birthdate}
                </p>
                <p>
                  <strong>Música:</strong> {artistsData[0].music}
                </p>
                <hr />
                <p className="mb-0">
                  <strong>Canal do Youtube:</strong>
                  <a href={artistsData[0].youtube}> {artistsData[0].name} Oficial</a>
                </p>
              </ArtistsHover>
            </ArtistsThumb>
          </div>

          <div className="col-lg-5 col-12">
            <ArtistsThumb>
              <ArtistsImageWrap>
                <Image
                  src={artistsData[1].image}
                  alt={artistsData[1].name}
                  width={artistsData[1].width}
                  height={artistsData[1].height}
                  className="artists-image img-fluid"
                />
              </ArtistsImageWrap>
              <ArtistsHover>
                <p>
                  <strong>Nome:</strong> {artistsData[1].name}
                </p>
                <p>
                  <strong>Data de Nascimento:</strong> {artistsData[1].birthdate}
                </p>
                <p>
                  <strong>Música:</strong> {artistsData[1].music}
                </p>
                <hr />
                <p className="mb-0">
                  <strong>Canal do Youtube:</strong>
                  <a href={artistsData[1].youtube}> {artistsData[1].name} Oficial</a>
                </p>
              </ArtistsHover>
            </ArtistsThumb>

            <ArtistsThumb>
              <ArtistsImageWrap>
                <Image
                  src={artistsData[2].image}
                  alt={artistsData[2].name}
                  width={artistsData[2].width}
                  height={artistsData[2].height}
                  className="artists-image img-fluid"
                />
              </ArtistsImageWrap>
              <ArtistsHover>
                <p>
                  <strong>Nome:</strong> {artistsData[2].name}
                </p>
                <p>
                  <strong>Data de Nascimento:</strong> {artistsData[2].birthdate}
                </p>
                <p>
                  <strong>Música:</strong> {artistsData[2].music}
                </p>
                <hr />
                <p className="mb-0">
                  <strong>Canal do Youtube:</strong>
                  <a href={artistsData[2].youtube}> {artistsData[2].name} Oficial</a>
                </p>
              </ArtistsHover>
            </ArtistsThumb>
          </div>
        </div>
      </div>
    </ArtistsSection>
  );
};

export default Artists;
