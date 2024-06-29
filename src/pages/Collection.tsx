import React from 'react';
import { useDocumentTitle } from '../hooks';
import { CollectionContainer } from '../containers/CollectionContainer';

export const Collection = () => (
  <>
    {useDocumentTitle('Unagi - Player Collection', true)}
    <CollectionContainer />
  </>
);
