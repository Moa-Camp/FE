import { humanize } from "@/lib/utils/textConverter";
import Link from "next/link";

const PostSidebar = ({
  tags,
  categories,
  allCategories,
}: {
  tags: string[];
  categories: string[];
  allCategories: string[];
}) => {
  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <h5 className="mb-6">Categories</h5>
        <div className="dark:bg-darkmode-theme-light rounded bg-theme-light p-8">
          <ul className="space-y-4">
            {categories.map((category: string) => {
              const count = allCategories.filter(
                (c: string) => c === category
              ).length;
              return (
                <li key={category}>
                  <Link
                    className="dark:hover:text-darkmode-primary flex justify-between hover:text-primary"
                    href={`/categories/${category}`}
                  >
                    {humanize(category)} <span>({count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <!-- tags --> */}
      <div className="mb-8">
        <h5 className="mb-6">Tags</h5>
        <div className="dark:bg-darkmode-theme-light rounded bg-theme-light p-6">
          <ul>
            {tags.map((tag: string) => {
              return (
                <li className="inline-block" key={tag}>
                  <Link
                    className="dark:bg-darkmode-body dark:hover:bg-darkmode-primary m-1 block rounded bg-white px-3 py-1 hover:bg-primary hover:text-white dark:hover:text-dark"
                    href={`/tags/${tag}`}
                  >
                    {humanize(tag)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;