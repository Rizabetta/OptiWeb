import { LazyImage } from "../../components";
import { nanoid } from "nanoid";

const images = [
  {
    src: "https://images.unsplash.com/photo-1734227267138-b886e9b0a954?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "new year",
    width: 600,
    height: 400,
    placeholderSrc:
      "https://images.unsplash.com/photo-1734227267138-b886e9b0a954?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption:
      '"close the tasks and you can safely celebrate the new year with your family"',
  },
  {
    src: "https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "technical news",
    width: 600,
    height: 400,
    placeholderSrc:
      "https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: '"I also wanted to add a photo from the office"',
  },
];

const GalleryPage = () => {
  return (
    <div>
      <h2>Галерея</h2>
      {images.map((image, index) => (
        <div
          key={nanoid(8)}
          style={{ marginBottom: index === 0 ? "50px" : "34px" }}
        >
          <LazyImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            placeholderSrc={image.placeholderSrc}
            effect="blur"
          />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export { GalleryPage };
