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
      className="h-full max-h-[37rem] w-full rounded-tl-lg rounded-tr-lg brightness-[0.8] transition-shadow duration-200 hover:brightness-100"
      width={1300}
      height={630}
      priority
      quality={100}
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
