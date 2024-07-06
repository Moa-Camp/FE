import BlogCard from "@/components/BlogCard";
import Social from "@/components/Social";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getSinglePage } from "@/lib/contentParser";
import { markdownify, slugify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Author, Post } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
  const authors: Author[] = getSinglePage("authors");

  const paths = authors.map((author) => ({
    single: author.slug,
  }));

  return paths;
};

const AuthorSingle = ({ params }: { params: { single: string } }) => {
  const authors: Author[] = getSinglePage("authors");
  const author = authors.filter((page) => page.slug === params.single)[0];
  const { frontmatter, content } = author;
  const { title, socials, meta_title, description, image } = frontmatter;
  const { blog_folder } = config.settings;
  const posts: Post[] = getSinglePage(blog_folder);
  const postFilterByAuthor: Post[] = posts.filter(
    (post) => slugify(post.frontmatter.author) === slugify(title)
  );

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section">
        <div className="container">
          <div className="row gy-5 xl:gy-0">
              <div className="lg:col-4 lg:mb-0" data-aos="fade-in">
                <div className="lg:pr-1">
                  <figure className="mb-3">
                    <ImageFallback className="rounded-full border-primary border-2" width={100} height={100} src={image} alt={title} />
                    <figcaption className="mt-4">
                      <h3 dangerouslySetInnerHTML={markdownify(title)} />
                    </figcaption>
                  </figure>
                  <div className="content">
                    <p className="text-text mt-2" dangerouslySetInnerHTML={markdownify(description!)} />
                  </div>
                  <Social source={socials} className="social-icons" />
                </div>
              </div>
              <div className="lg:col-8" data-aos="fade-in" data-aos-dealy="100">
                  <h3>Recent Posts by <span className="text-primary">{title}</span></h3>
                  <div className="row pb-10 pt-8">
                    {postFilterByAuthor.map((post, index: number) => (
                      <div className="mb-2 lg:mb-3 md:col-6" key={index}>
                        <BlogCard data={post} />
                      </div>
                      ))}
                  </div>
              </div>
          </div>
          <CallToAction />
        </div>
      </section>
    </>
  );
};

export default AuthorSingle;
