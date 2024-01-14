type TUser = {
  id?: number;
  username: string;
  email: string;
  password: string;
  refreshToken?: string;
  role?: string;
  image_url?: string;
};

export { TUser };
