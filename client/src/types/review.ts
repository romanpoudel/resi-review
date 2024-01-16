type TReview = {
	userId?: number;
	username?: string;
	updatedAt: string;
	review: string;
	likes?: number;
	price: string;
	rating?: string;
	anonymous?: string;
	owner?: boolean;
};

export type { TReview };
