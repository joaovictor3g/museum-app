import axios from "axios";

export const api = axios.create({
  baseURL: "https://collectionapi.metmuseum.org/public/collection/v1",
});

api.interceptors.request.use(
  (req) => {
    return {
      ...req,
      params: {
        hasImages: true,
        ...req.params,
      },
    };
  },
  (error) => Promise.reject(error)
);
