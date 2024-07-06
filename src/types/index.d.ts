export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Video = {
  title: string;
  subtitle: string;
  thumbnail: string;
  video_id: string;
  description: string;
};

export type Post = {
  frontmatter: {
    id: string;
    title: string;
    meta_title: string;
    description: string;
    date: Date;
    image: string;
    author: string;
    author_img?: string;
    categories: Array<string>;
    draft: boolean;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    socials: ISocial[];
  };
  content?: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Button = {
  enable?: boolean;
  label: string;
  href: string;
};


export interface ISocial {
  name: string;
  icon: string;
  link: string;
}