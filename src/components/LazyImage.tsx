import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

interface LazyImageProps {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <ImageWrapper ref={ref}>
      {!isLoaded && <Loader />}
      {inView && (
        <Image
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </ImageWrapper>
  );
};

export default LazyImage;
