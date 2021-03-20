/** @format */

import React from "react";
import ContentLoader from "react-content-loader";

export const DepLoader = (props) => (
  <ContentLoader
    speed={1}
    width={150}
    height={150}
    viewBox='0 0 150 150'
    backgroundColor='#fafafa'
    foregroundColor='#e6e6e6'
    {...props}
  >
    <circle cx='109' cy='59' r='25' />
    <rect x='67' y='106' rx='0' ry='0' width='85' height='20' />
  </ContentLoader>
);

export const Loader2 = (props) => (
  <ContentLoader
    speed={1}
    width={1000}
    height={129}
    viewBox='0 0 1000 129'
    backgroundColor='#fafafa'
    foregroundColor='#e6e6e6'
    {...props}
  >
    <rect x='7' y='4' rx='2' ry='2' width='270' height='21' />
  </ContentLoader>
);

export const AvatarLoader = (props) => (
  <ContentLoader
    speed={2}
    width={40}
    height={40}
    viewBox='0 0 40 40'
    backgroundColor='#787878'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='20' cy='17' r='15' />
  </ContentLoader>
);
export const EditImgLoader = (props) => (
  <ContentLoader
    speed={2}
    width={170}
    height={170}
    viewBox='0 0 170 170'
    backgroundColor='#787878'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='86' cy='77' r='71' />
  </ContentLoader>
);

export const ProfileImgLoader = (props) => (
  <ContentLoader
    speed={2}
    width={130}
    height={130}
    viewBox='0 0 130 130'
    backgroundColor='#787878'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='61' cy='72' r='53' />
  </ContentLoader>
);
export const LogoesCarousel = (props) => (
  <ContentLoader
    speed={1}
    width={70}
    height={70}
    viewBox='0 0 50 80'
    backgroundColor='#fafafa'
    foregroundColor='#e6e6e6'
    {...props}
  >
    <circle cx='109' cy='59' r='25' />
  </ContentLoader>
);
export const FormLoader = (props) => (
  <ContentLoader
    width={500}
    height={350}
    viewBox='0 0 700 350'
    backgroundColor='#f5f5f5'
    foregroundColor='#dbdbdb'
    {...props}
  >
    <rect x='4' y='8' rx='3' ry='3' width='8' height='317' />
    <rect x='7' y='317' rx='3' ry='3' width='669' height='8' />
    <rect x='669' y='9' rx='3' ry='3' width='7' height='313' />
    <rect x='5' y='8' rx='3' ry='3' width='669' height='7' />
    <rect x='114' y='52' rx='6' ry='6' width='483' height='15' />
    <circle cx='77' cy='60' r='15' />
    <rect x='116' y='105' rx='6' ry='6' width='420' height='15' />
    <circle cx='78' cy='113' r='15' />
    <rect x='115' y='158' rx='6' ry='6' width='483' height='15' />
    <circle cx='78' cy='166' r='15' />
    <rect x='117' y='211' rx='6' ry='6' width='444' height='15' />
    <circle cx='79' cy='219' r='15' />
    <rect x='117' y='263' rx='6' ry='6' width='483' height='15' />
    <circle cx='80' cy='271' r='15' />
  </ContentLoader>
);
