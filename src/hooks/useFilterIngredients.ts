import { Ingredient } from "@prisma/client";

interface ReturnProps {
  items: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {};
