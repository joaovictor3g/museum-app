import axios from "axios";
import Router from "next/router";

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
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response) {
      if (error.response.status === 500) Router.push("/500");
    }

    return Promise.reject(error);
  }
);
