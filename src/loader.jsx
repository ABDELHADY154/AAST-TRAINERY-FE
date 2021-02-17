/** @format */

import React from "react";
import ContentLoader from "react-content-loader";

export const Loader = (props) => (
  <ContentLoader
    speed={1}
    width={1000}
    height={129}
    viewBox="0 0 1000 129"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="6" y="7" rx="2" ry="2" width="120" height="50" />
    <rect x="271" y="8" rx="2" ry="2" width="120" height="50" />
    <rect x="138" y="7" rx="2" ry="2" width="120" height="50" />
  </ContentLoader>
);
export const Loader2 = (props) => (
  <ContentLoader
    speed={1}
    width={1000}
    height={129}
    viewBox="0 0 1000 129"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="7" y="4" rx="2" ry="2" width="230" height="21" />
  </ContentLoader>
);
