export type Program = {
  title: string;
  ageRange: string;
  description: string;
  detailedDescription?: string;
  duration?: string;
  groupSize?: string;
  image: string;
  tone: "peach" | "mint" | "sky";
};

export type Testimonial = {
  quote: string;
  author: string;
  childDetails?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};
