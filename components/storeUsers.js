// products.js
import City from "/components/images/city.jpg"
import Shoes from "/components/images/shoes.jpg"
import Spoon from "/components/images/spoon.jpg"
import City from "/components/images/city.jpg"
const Userz = [
  {
    "_id": {
      "$oid": "6629029aed8b41d3b143136e"
    },
    "name": "Shoes",
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
    "name": "2ndShoes",
    "price": 25,
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
    "image": Shoes,
    "quantity": 1
  }
];

export default Userz;
