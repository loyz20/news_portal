export interface NewsItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  imageUrl: string;
  slug: string;
}
export interface HeadlineMain {
  title: string;
  badge?: string;
  imageUrl: string;
  slug: string;
}

export interface HeadlineSecondary {
  title: string;
  imageUrl: string;
  slug: string;
}

export interface Category {
  slug: string;
  name: string;
}

export interface ArticleDetail {
  title: string;
  content: string;
  imageUrl: string;
  category?: string;
  slug: string;
}
