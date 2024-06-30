import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Image, ImageWrapper } from './styles/LazyImage.styles';
import { LazyImageProps } from '../types';
import { Loader } from '../styles/GlobalStyles';

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!isLoaded) {
        setImageSrc(await require('../assets/image-not-found.png'));
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  return (
    <ImageWrapper ref={ref}>
      {!isLoaded && <Loader />}
      {inView && (
        <Image
          className={className}
          src={imageSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      )}
    </ImageWrapper>
  );
};

export default LazyImage;
