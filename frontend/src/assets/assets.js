import logo from "./logo.jpg";
import userIcon from "./icons/user.png";
import cartIcon from "./icons/cart.png";
import searchIcon from "./icons/search.png";
import menuIcon from "./icons/menu.png";
import backIcon from "./icons/back.png";
import p1Img from "./products/p1.jpg";
import p2Img from "./products/p2.jpg";
import p3Img from "./products/p3.jpg";

export const assets = {
  logo,
  userIcon,
  cartIcon, 
  searchIcon,
  menuIcon,
  backIcon,
};   

export const products = [
  {
    _id: 1,
    name: "Product 1",
    description: "This is a description of Product 1.",
    price: 19.99,
    image: [p1Img],
    category: "Category 1",
    subcategory: "Subcategory 1",
    size: ["S", "M", "L"],
    date: 32312231,
    bestSeller: true,
  },

  {
    _id: 2,
    name: "Product 2",
    description: "This is a description of Product 1.",
    price: 19.99,
    image: [p2Img],
    category: "Category 1",
    subcategory: "Subcategory 1",
    size: ["S", "M", "L"],
    date: 32312231,
    bestSeller: true,
  },

  {
    _id: 3,
    name: "Product 3",
    description: "This is a description of Product 1.",
    price: 19.99,
    image: [p3Img],
    category: "Category 1",
    subcategory: "Subcategory 1",
    size: ["S", "M", "L"],
    date: 32312231,
    bestSeller: true,
  }
]
