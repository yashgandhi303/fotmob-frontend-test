import React from 'react';
import CardSection from '../components/Cards/HomePageCard';
import InfoSection from '../containers/InfoSection';
import useDocumentTitle from '../hooks/useDocumentTitle';

export const HomePage = () => {
  return (
    <>
      {useDocumentTitle('Home', true)}
      <InfoSection />
      <CardSection />
    </>
  );
};
