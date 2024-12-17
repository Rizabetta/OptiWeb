import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type TLazyImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholderSrc?: string;
  effect?: string;
};

const LazyImage = ({
  src,
  alt,
  width,
  height,
  placeholderSrc,
}: TLazyImageProps) => {
  return (
    <div>
      <LazyLoadImage
        alt={alt}
        src={src}
        width={width}
        height={height}
        placeholderSrc={placeholderSrc}
        effect="blur"
      />
    </div>
  );
};

export { LazyImage };
