import dotenv from 'dotenv';
dotenv.config();
export const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: '7d'
};

export const cloudinaryConfig = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
};

export const pointsConfig = {
  perItemUpload: 10,
  perItemRedeem: 10
};
