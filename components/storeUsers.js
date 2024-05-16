// products.js
import City from "/components/images/city.jpg"
import Shoes from "/components/images/shoes.jpg"
import Spoon from "/components/images/spoon.jpg"
import Jacket from "/components/images/jacket.png"
import Shoes3 from "/components/images/shoes3.png"
import Shoes4 from "/components/images/shoes4.png"

const Userz = [
  {
    "_id": {
      "$oid": "6629029aed8b41d3b143136e"
    },
    "name": "Sneakers",
    "price": 20,
    "id": "item1",
    "description": "Shoes for walking",
    "filter": [
      "footwear",
      "foot",
      "shoes"
    ],
    "tags": [
      "shoes",
      "footwear"
    ],
    "image":Shoes,
    "quantity": 1
  },
  {
    "_id": {
      "$oid": "662a0dc65663b116c223d208"
    },
    "name": "Spoon",
    "price": 15,
    "id": "item2",
    "description": "Spoonfull of soup",
    "filter": [
      "spoon",
      "food",
      "soup",
      "utensils"
    ],
    "tags": [
      "spoon",
      "food"
    ],
    "image": Spoon,
    "quantity": 1
  },
  {
    "_id": {
      "$oid": "662f5191d9aa410fa0ee7fcf"
    },
    "name": "City",
    "price": 20,
    "id": "item3",
    "description": "Shoes for walking",
    "filter": [
      "building",
      "city"
    ],
    "tags": [
      "shoes",
      "footwear"
    ],
    "image": City,
    "quantity": 1
  },
  {
    "_id": {
      "$oid": "6629029aed8b41d3b143136e"
    },
    "name": "Sneakers2",
    "price": 125,
    "id": "item4",
    "description": "Shoes for walking",
    "filter": [
      "footwear",
      "foot",
      "shoes"
    ],
    "tags": [
      "shoes",
      "footwear"
    ],
    "image": Shoes3,
    "quantity": 1
  },
  {
    "_id": {
      "$oid": "6629029aed8b41d3b143136e"
    },
    "name": "Sneakers3",
    "price": 120,
    "id": "item1",
    "description": "Shoes for walking",
    "filter": [
      "footwear",
      "foot",
      "shoes"
    ],
    "tags": [
      "shoes",
      "footwear"
    ],
    "image":Shoes4,
    "quantity": 1
  },
  {
    "_id": {
      "$oid": "6629029aed8b41d3b143136e"
    },
    "name": "Jacket",
    "price": 55,
    "id": "item6",
    "description": "Sports jacket",
    "filter": [
      "jacket",
      "clothes",
      "sportwears"
    ],
    "tags": [
      "jacket",
      "clothes",
      "sportwears"
    ],
    "image":Jacket,
    "quantity": 1
  }
];

export default Userz;
