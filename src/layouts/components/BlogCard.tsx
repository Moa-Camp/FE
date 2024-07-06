import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import readingTime from "@/lib/utils/readingTime";
import { plainify, slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ data }: { data: Post }) => {
  const { summary_length } = config.settings;

  const { frontmatter, slug, content } = data;
  const { title, image, author, date, author_img } =
    frontmatter;


  return (
    <article className="mt-7 rounded-2xl border-0 shadow">
      <Link href={`/blog/${slug}`}>
        <Image
          src={image}
          alt={title}
          className="h-auto max-w-full rounded-t-[18px]"
          width={570}
          height={335}
        />
      </Link>
      <div className="px-[1.875rem] pb-[0.625rem] pt-[2.1rem]">
        <h3 className="card-title h4 mb-2 font-semibold hover:underline">
          <a href={`/blog/${slug}`}>{title}</a>
        </h3>
        <p className="mb-4 text-text">
          {plainify(content!?.slice(0, Number(summary_length)))}...
        </p>
      </div>
      <div className="card-footer border-t-0 bg-transparent px-[1.875rem] pb-[2.1rem]">
        <div className="card-author">
          <div className="flex items-center">
            <div className="user-image mr-4">
              <Link href={`/authors/${slugify(author)}`}>
                 <ImageFallback
                    src={author_img}
                    alt={author}
                    className="max-w-full rounded-full"
                    width={70}
                    height={70}
                  />
              </Link>
            </div>
            <div className="user-info">
              <p className="mb-0 font-medium">
                <Link href={`/authors/${slugify(author)}`}>{author}</Link>
              </p>
              <span>
                {dateFormat(date)} - {readingTime(content!)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
