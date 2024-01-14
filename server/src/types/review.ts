type TReview = {
  rating: string;
  estimate: string;
  review: string;
  owner?: string;
  likes?: number;
  anonymous?: string;
  user_id?: number;
  house_id?: string;
};

type TReviewDB = {
  rating: string;
  price: string;
  review: string;
  owner?: boolean;
  likes?: number;
  anonymous?: boolean;
  user_id?: number;
  house_id?: number;
};

export { TReview , TReviewDB};