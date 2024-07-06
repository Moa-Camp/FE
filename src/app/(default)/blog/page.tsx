import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
const { blog_folder, pagination } = config.settings;

// for all regular pages
const Posts = () => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);
  const authors = getSinglePage("authors");
  const totalPages = Math.ceil(posts.length / pagination);

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
  const sortedPosts = sortByDate(addAuthors);
  const currentPosts = sortedPosts.slice(0, pagination);
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={postIndex.frontmatter.title} />
      <section>
        <div className="container">
          <div className="row justify-center">
            {currentPosts.map((blog: Post, i: number) => (
              <div className="col-12 mb-8 md:col-6 lg:col-5" key={i}>
                <BlogCard data={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination currentPage={1} totalPages={totalPages} section="blog" />
      <CallToAction />
    </>
  );
};

export default Posts;
