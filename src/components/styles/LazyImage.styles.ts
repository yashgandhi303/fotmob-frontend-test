import { styled } from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;
