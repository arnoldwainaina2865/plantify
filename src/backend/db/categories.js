import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "perennial",
    image: "cat1.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "palm",
    image: "cat2.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "fruit",
    image: "cat3.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "indoor",
    image: "cat4.jpeg",
  },
  {
    _id: uuid(),
    categoryName: "bamboo",
    image: "cat5.webp",
  },
  {
    _id: uuid(),
    categoryName: "herb",
    image: "cat6.webp",
  },
];
