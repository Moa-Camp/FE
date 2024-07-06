import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";

const { blog_folder, pagination } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {
  const allPost: Post[] = getSinglePage(blog_folder);
  const allSlug: string[] = allPost.map((item) => item.slug!);
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths: { page: string }[] = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      page: (i + 1).toString(),
    });
  }

  return paths;
};

function spreadPages(num: number): number[] {
  let pages = [];

  for (let i = 2; i <= num; i++) {
    pages.push(i);
  }

  return pages;
}

// for all regular pages
const Posts = ({ params }: { params: { page: number } }) => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);
  const allCategories = getAllTaxonomy(blog_folder, "categories");
  const categories = getTaxonomy(blog_folder, "categories");
  const tags = getTaxonomy(blog_folder, "tags");
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPage =
    params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
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
  const sortedPosts = sortByDate(addAuthors);
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <PageHeader title="Blog" />
      <section>
        <div className="container">
          <div className="row justify-center">
            {currentPosts.map((blog, i) => (
              <div className="col-12 mb-8 md:col-6 lg:col-5" key={i}>
                <BlogCard data={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination
        section={blog_folder}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <CallToAction />
    </>
  );
};

export default Posts;
