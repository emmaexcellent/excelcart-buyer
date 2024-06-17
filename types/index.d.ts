declare type AuthValues = {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

declare type SignUpValues = {
  username: string;
  email: string;
  phone: string;
  password: string;
}

declare type LoggedInUserProps = {
  user: Models.User<Models.Preferences> | null;
}

declare type CampusProps = {
  $id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  imageUrl: string;  
}

declare type ProductCategory = {
  id: number;
  name: string;
  image: string;
};

declare type ReviewsProp = {
  rating: 2;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

declare type ProductProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  discountPercentage: number;
  colors: string[];
  thumbnail: string;
  images: string[];
  rating: number;
  
  reviews: ReviewsProp[];
};