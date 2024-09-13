import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersWhitePattern1 from '../components/headers-white-pattern/IndexSectionHeadersWhitePattern1';
import IndexSectionFeaturesWhitePattern2 from '../components/features-white-pattern/IndexSectionFeaturesWhitePattern2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersWhitePattern1 />
      <IndexSectionFeaturesWhitePattern2 />
    </React.Fragment>
  );
}

