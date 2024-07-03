import React from 'react';
import { CreatePlayerContainer } from '../containers/CreateCardContainer';
import { useDocumentTitle } from '../hooks';

export const CreateCard = () => (
  <>
    {useDocumentTitle('Unagi - Create New Player', true)}
    <CreatePlayerContainer />
  </>
);
