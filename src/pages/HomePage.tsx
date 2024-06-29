import React from 'react';
import { useDocumentTitle } from '../hooks';
import { HomePageContainer } from '../containers/HomePageContainer';

export const HomePage = () => {
  return (
    <>
      {useDocumentTitle('Unagi - Home', true)}
      <HomePageContainer />
    </>
  );
};
