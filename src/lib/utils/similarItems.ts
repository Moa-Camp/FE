import { Post } from "@/types";

// similer products
const similarItems = (currentItem: Post, allItems: Post[], slug: string) => {
  let categories: string[] = [];
  let tags: string[] = [];

  // set categories
  if (currentItem.frontmatter.categories.length > 0) {
    categories = currentItem.frontmatter.categories;
  }

  // // set tags
  // if (currentItem.frontmatter.tags.length > 0) {
  //   tags = currentItem.frontmatter.tags;
  // }

  // filter by categories
  const filterByCategories = allItems.filter((item) =>
    categories.find((category: string) =>
      item.frontmatter.categories.includes(category)
    )
  );

  // // filter by tags
  // const filterByTags = allItems.filter((item: { data: { tags: string } }) =>
  //   tags.find((tag) => item.frontmatter.tags.includes(tag))
  // );

  // merged after filter
  const mergedItems = [...new Set(filterByCategories)];

  // filter by slug
  const filterBySlug = mergedItems.filter(
    (product: any) => product.slug !== slug
  );

  return filterBySlug;
};

export default similarItems;
