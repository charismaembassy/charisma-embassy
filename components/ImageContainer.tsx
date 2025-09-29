import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageContainer = ({
  src,
  alt,
  styles,
}: {
  src: StaticImageData;
  alt: string;
  styles?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      placeholder="blur"
      priority
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      className={`object-cover ${styles && styles}`}
    />
  );
};

export default ImageContainer;
