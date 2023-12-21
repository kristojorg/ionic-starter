import { encode } from "blurhash";
import React from "react";
import { Blurhash } from "react-blurhash";
import { css } from "../../styled-system/css";

const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (...args) => reject(args);
    img.src = src;
  });

const getImageData = (image: HTMLImageElement) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d");
  context?.drawImage(image, 0, 0);
  return context?.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = async (imageUrl: string) => {
  const image = await loadImage(imageUrl);
  const imageData = getImageData(image);
  if (!imageData) return null;
  return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};

export const BlurhashImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const [hash, setHash] = React.useState<string | null>(null);

  React.useEffect(() => {
    encodeImageToBlurhash(src).then(setHash);
  }, [src]);

  if (!hash) return null;
  return (
    <div className={className}>
      <Blurhash
        hash={hash}
        punch={1}
        className={css({
          "&>*": {
            filter: "blur(64px)",
            blur: "3xl",
          },
        })}
        width="100%"
        height="100%"
      />
    </div>
  );
};
