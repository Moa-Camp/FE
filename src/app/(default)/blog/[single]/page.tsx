import BlogCard from "@/components/BlogCard";
import Disqus from "@/components/Disqus";
import config from "@/config/config.json";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import readingTime from "@/lib/utils/readingTime";
import similerItems from "@/lib/utils/similarItems";
import { slugify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import Image from "next/image";

const { blog_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(blog_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

const PostSingle = ({ params }: { params: { single: string } }) => {
  const posts: Post[] = getSinglePage(blog_folder);
  const authors = getSinglePage("authors");
  const addAuthors = posts.map((blog) => {
    const author = authors.find(
      (author) => author.frontmatter.title === blog.frontmatter.author
    );
    return {
      ...blog,
      frontmatter: {
        ...blog.frontmatter,
        author_img: author?.frontmatter.image,
      },
    };
  });
  const post = addAuthors.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = post;
  const { title, description, image, author, author_img, categories, date } =
    frontmatter;
  const similarPosts = similerItems(post, addAuthors, post.slug!);

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={title}
        description={description}
        image={image}
      />
      <section className="section">
        <div className="container">
          <div className="row justify-center">
            <div className="col-12 mb-12 lg:col-10">
              <Image
                alt={title}
                src={image}
                width={1126}
                height={661}
                className="w-full max-w-full rounded-3xl"
              />
            </div>
            <div className="lg:col-8">
              <div className="mb-12">
                <h2 className="font-medium">{title}</h2>
                <div className="mt-6 flex items-center">
                  <div className="user-image mr-4">
                    <a href={`/authors/${slugify(author)}`} title={author}>
                      <Image
                        src={author_img!}
                        alt={author}
                        className="max-w-full rounded-full"
                        width={70}
                        height={70}
                      />
                    </a>
                  </div>
                  <div className="user-info">
                    <p className="mb-0 text-h5 font-medium">
                      <a href={`/authors/${slugify(author)}`}>{author}</a>
                    </p>
                    <span>
                      {dateFormat(date)} - {readingTime(post.content!)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="content">
                <MDXContent content={content} />
              </div>
              <Disqus />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2 className="title mb-8 text-center">Related Articles</h2>
          </div>
          <section>
            <div className="container">
              <div className="row justify-center">
                {similarPosts.map((blog, i: number) => (
                  <div className="col-12 mb-8 md:col-6 lg:col-5" key={i}>
                    <BlogCard data={blog} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default PostSingle;
