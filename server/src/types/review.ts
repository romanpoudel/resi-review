type TReview = {
  rating: string;
  estimate: string;
  review: string;
  owner?: string;
  anonymous?: string;
  user_id?: number;
  house_id?: string;
};

type TReviewDB = {
  rating: number;
  price: number;
  review: string;
  owner?: boolean;
  anonymous?: boolean;
  user_id?: number;
  house_id?: number;
};

export { TReview , TReviewDB};