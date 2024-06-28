import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Image, ImageWrapper, Loader } from './styles/LazyImage.styles';
import { LazyImageProps } from '../types';

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ImageWrapper ref={ref}>
      {!isLoaded && <Loader />}
      {inView && <Image src={src} alt={alt} onLoad={() => setIsLoaded(true)} style={{ opacity: isLoaded ? 1 : 0 }} />}
    </ImageWrapper>
  );
};

export default LazyImage;
