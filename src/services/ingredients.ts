import { axiosInstance } from "./instance";
import { Ingredient } from "@prisma/client";
import { ApiRoutes } from "./constants";

export const getAll = async (query: string): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
