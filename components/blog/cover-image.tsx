import Link from "next/link";
import Image from "next/image";

type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: CoverImageProps) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="h-full w-full brightness-[0.8] transition-shadow duration-200 hover:brightness-100"
      width={1300}
      height={630}
    />
  );
  return (
    <div className="h-full">
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
