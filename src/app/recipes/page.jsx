'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegClock } from "react-icons/fa"
import Container from 'postcss/lib/container'
import styles from './recipes.module.css'

export const foods = [
  {
    id: '001',
    image: "dish4",
    title: "General Tso's Chicken (左宗棠鸡)",
    type: "Chicken Dish",
    category: "Main Dish",
    ingredients: [
      "Chicken thighs", 
      "Cornstarch", 
      "Soy sauce", 
      "Ginger",
      "Garlic", 
      "Chili peppers", 
      "Green onions",
      "Sesame oil"],
    preparation:[
 "Start by thoroughly washing and patting dry the chicken. Cut it into bite-sized pieces, ensuring uniform size for even cooking.",

"In a mixing bowl, marinate the chicken pieces with 2 tablespoons of soy sauce. Add a tablespoon of cornstarch, ensuring each piece is well coated. Allow the chicken to marinate for at least 15-20 minutes, letting the flavors penetrate.",

"Meanwhile, prepare the sauce by combining the remaining soy sauce, hoisin sauce, minced ginger, minced garlic, and chopped chili peppers in a separate bowl. Adjust the chili quantity based on your desired spice level.",

"After marinating, thoroughly coat each piece of chicken with the remaining cornstarch. This step adds a crispy texture to the chicken when it's fried.",

"Heat a generous amount of vegetable oil in a wok or deep frying pan over medium-high heat. Carefully add the coated chicken pieces in batches, ensuring they are not overcrowded. Fry until golden brown and cooked through, usually taking about 5-7 minutes. Remove the chicken with a slotted spoon and place it on a paper towel-lined plate to absorb excess oil.",

"In a clean wok or pan, add a tablespoon of oil. Sauté the minced ginger, minced garlic, and chopped chili peppers until fragrant. This forms the aromatic base for the sauce.",

"Pour the prepared sauce mixture into the wok. Allow it to simmer for a few minutes until it thickens slightly. Then, reintroduce the fried chicken back into the wok, tossing and stirring until each piece is evenly coated with the flavorful sauce.",

"Once the chicken is coated and heated through, transfer the General Tso's Chicken to a serving plate. Garnish generously with sliced green onions. Serve this delicious dish hot over a bed of steamed rice or noodles.",
    ],
    description: "A popular Chinese-American dish featuring crispy fried chicken tossed in a sweet and savory sauce with a hint of heat, garnished with green onions.",
    time: 500,
  },
  {
    id: '002',
    image: "dish",
    title: "Beef and Broccoli Stir-Fry(牛肉西兰花炒)",
    type: "Beef Dish",
    category: "Main Dish",
    ingredients: ["Beef sirloin", "Broccoli florets", "Soy sauce", "Oyster sauce", "Ginger", "Garlic", "Sesame oil", "Cornstarch"],
    preparation:  [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A classic Chinese stir-fry featuring tender beef slices and crisp broccoli in a flavorful soy and oyster sauce, finished with a touch of sesame oil.",
    time: 200
  },
  {
    id: '003',
    image: "dish3",
    title: "Sweet and Sour Pork(咕噜肉)",
    type: "Pork Dish",
    category: "Main Dish",
    ingredients: ["Pork tenderloin", "Bell peppers", "Pineapple chunks", "Soy sauce", "Vinegar", "Ketchup", "Brown sugar", "Cornstarch"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A classic Chinese dish featuring crispy fried pork tossed in a sweet and tangy sauce with colorful bell peppers and pineapple chunks.",
    time: 100
  },
  {
     id: '004',
    image: "dish1",
    title: 'Kung Pao Shrimp(宫保虾)',
    type: "Shrimp Dish",
    category: "Main Dish",
    ingredients: ["Shrimp", "Peanuts", "Bell peppers", "Soy sauce", "Hoisin sauce", "Chili paste", "Garlic", "Green onions"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A flavorful Chinese dish featuring succulent shrimp, crunchy peanuts, and vibrant bell peppers in a savory and spicy Kung Pao sauce.",
    time: 150
  },
  {
    id: '005',
    image: "dish29",
    title: "Eggplant in Garlic Sauce(蒜蓉茄子)",
    type: "Vegetarian Dish",
    category: "Main Dish",
    ingredients: ["Eggplant", "Soy sauce", "Black bean sauce", "Garlic", "Ginger", "Sesame oil", "Green onions"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A vegetarian Chinese dish featuring tender sautéed eggplant in a flavorful garlic and black bean sauce, finished with sesame oil.",
    time: 130
  },
  {
    id: '006',
    image: 'dish31',
    title: "Mongolian Beef(蒙古牛肉)",
    type: "Beef Dish",
    category: "Main Dish",
    ingredients: ["Beef sirloin", "Soy sauce", "Brown sugar", "Garlic", "Ginger", "Green onions", "Cornstarch", "Sesame oil"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A savory and slightly sweet Chinese dish featuring tender slices of beef stir-fried with garlic, ginger, and green onions in a soy-based sauce.",
    time: 180
  },
  {
    id: '007',
    image: 'dish6',
    title: "Cashew Chicken(腰果鸡)",
    type: "Chicken Dish",
    category: "Main Dish",
    ingredients: ["Chicken breast", "Cashews", "Bell peppers", "Soy sauce", "Oyster sauce", "Hoisin sauce", "Garlic", "Green onions"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A delicious Chinese dish featuring tender chicken, crunchy cashews, and colorful bell peppers in a savory and slightly sweet sauce.",
    time: 100
  },
  { 
    id: '008',
    image: 'dish22',
    title: "Hot and Sour Soup (酸辣汤)",
    type: "Vegetarian Soup",
    category: "Soup",
    ingredients: ["Tofu", "Wood ear mushrooms", "Bamboo shoots", "Eggs", "Soy sauce", "Vinegar", "White pepper"],
    preparation: "Bring a broth to a simmer, add tofu, wood ear mushrooms, and bamboo shoots. Season with soy sauce, vinegar, and white pepper. Gradually stir in beaten eggs for a silky texture.",
    description: "A classic Chinese soup with a perfect balance of heat and tanginess, featuring tofu, mushrooms, and bamboo shoots in a savory broth.",
    time: 110
  },
  {
    id: '009',
    image: 'dish23',
    title: "Wonton Soup(云吞汤)",
    type: "Dumpling Soup",
    category: "Soup",
    ingredients: ["Wonton wrappers", "Ground pork", "Shrimp", "Green onions", "Soy sauce", "Ginger", "Chicken broth"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A comforting Chinese soup with delicate wontons filled with a flavorful mixture of pork and shrimp, served in a clear chicken broth.",
    time: 130
  },
  {
    id: '010',
    image: 'dish24',
    title: "Egg Drop Soup(蛋花汤)",
    type: "Egg Soup",
    category: "Soup",
    ingredients: ["Chicken broth", "Eggs", "Cornstarch", "Green onions", "Soy sauce"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A simple and comforting Chinese soup featuring silky strands of beaten eggs in a clear, savory chicken broth with a hint of soy sauce.",
    time: 100
  },
  {
    id: '011',
    image: 'dish25',
    title: "Laksa Soup(蛋花汤)",
    type: "Seafood Soup",
    category: "Soup",
    ingredients: ["Rice noodles", "Coconut milk", "Shrimp", "Fish balls", "Bean sprouts", "Curry paste", "Lime"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A flavorful and spicy Chinese soup with a coconut milk base, loaded with rice noodles, shrimp, fish balls, and bean sprouts.",
    time: 110
  },
  {
    id: '012',
    image: 'dish26',
    title: "Chinese Chicken Noodle Soup(叻沙汤)",
    type: "Chicken Soup",
    category: "Soup",
    ingredients: ["Chicken broth", "Chicken breast", "Egg noodles", "Bok choy", "Ginger", "Garlic", "Soy sauce"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A heartwarming Chinese soup featuring tender chicken slices, egg noodles, and bok choy in a savory broth seasoned with ginger and soy sauce.",
    time: 90
  },
  {
    id: '013',
    image: 'dish27',
    title: "Corn and Crab Soup(玉米蟹汤)",
    type: "Seafood Soup",
    category: "Soup",
    ingredients: ["Chicken broth", "Crab meat", "Corn kernels", "Eggs", "Soy sauce", "White pepper", "Green onions"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A rich and indulgent Chinese soup featuring sweet crab meat and tender corn kernels in a savory broth, thickened with silky strands of beaten eggs.",
    time: 100
  },
  {
    id: '014',
    image: 'dish28',
    title: "Vegetable and Tofu Soup(玉米蟹汤)",
    type: "Vegetarian Soup",
    category: "Soup",
    ingredients: ["Vegetable broth", "Tofu", "Bok choy", "Carrots", "Mushrooms", "Soy sauce", "Sesame oil"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A healthy and flavorful Chinese soup featuring a medley of vegetables and tofu in a light and fragrant vegetable broth.",
    time: 180
  },
  {
     id: '015',
    image: 'dish12',
    title: "Chinese Chicken Salad(中国的鸡肉沙拉)",
    type: "Chicken Salad",
    category: "Salad",
    ingredients: ["Shredded chicken", "Napa cabbage", "Carrots", "Mandarin oranges", "Wonton strips"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A refreshing Chinese salad with a mix of crunchy vegetables, tender shredded chicken, and a flavorful sesame-soy dressing.",
    time: 200
  },
  {
     id: '016',
    image: 'dish19',
    title: "Sichuan Noodle Salad(四川面条沙拉)",
    type: "Noodle Salad",
    category: "Salad",
    ingredients: ["Cold noodles", "Shredded chicken", "Cucumbers", "Peanuts", "Sichuan-style dressing"],
     preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],

    description: "A spicy and satisfying Chinese noodle salad featuring cold noodles, shredded chicken, and a flavorful Sichuan-style dressing.",
    time: 250
  },
  {
     id: '017',
    image: 'dish20',
    title: "Spicy Tofu Salad(辣豆腐沙拉)",
    type: "Tofu Salad",
    category: "Salad",
    ingredients: ["Cubed tofu", "Bell peppers", "Carrots", "Scallions", "Spicy sauce"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A zesty and protein-packed Chinese tofu salad with marinated tofu, crunchy bell peppers, and a kick of spice.",
    time: 150
  },
  {
     id: '018',
    image: 'dish18',
    title: "Seaweed Salad(海藻沙拉)",
    type: "Seaweed Salad",
    category: "Salad",
    ingredients: ["Various seaweed", "Sesame oil", "Soy sauce", "Rice vinegar"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A light and nutritious Chinese seaweed salad with a delightful mix of various seaweed varieties and a savory sesame-soy dressing.",
    time: 100
  },
  {
     id: '019',
    image: 'dish36',
    title: "Cold Sesame Noodles(海藻沙拉)",
    type: "Noodle Salad",
    category: "Salad",
    ingredients: ["Thin noodles", "Sesame sauce", "Cucumbers", "Sesame seeds"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A classic Chinese noodle salad featuring cold noodles, crisp cucumbers, and a rich and nutty sesame sauce.",
    time: 200
  },
  {
     id: '020',
    image: 'dish11',
    title: "Bean Sprout Salad(豆芽沙拉)",
    type: "Vegetable Salad",
    category: "Salad",
    ingredients: ["Bean sprouts", "Shredded carrots", "Soy-based dressing"],
     preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A light and crunchy Chinese salad highlighting the freshness of bean sprouts and shredded carrots with a soy-infused dressing.",
    time: 160
  },
  {
     id: '021',
    image: 'dish14',
    title: "Cucumber Salad(黄瓜沙拉)",
    type: "Vegetable Salad",
    category: "Salad",
    ingredients: ["Sliced cucumbers", "Rice vinegar", "Soy sauce", "Sesame oil"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A simple and refreshing Chinese cucumber salad with thinly sliced cucumbers marinated in a tangy rice vinegar and soy dressing.",
    time: 120
  },
  {
     id: '022',
    image: 'dish13',
    title: "Five-Spice Beef Salad(五香牛肉沙拉)",
    type: "Beef Salad",
    category: "Salad",
    ingredients: ["Thinly sliced beef", "Mixed greens", "Cherry tomatoes", "Five-spice powder"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A flavorful Chinese beef salad featuring thinly sliced beef, mixed greens, and the distinctive taste of Chinese five-spice powder.",
    time: 190
  },
  {
     id: '023',
    image: 'dish17',
    title: "Peking Duck Salad(北京烤鸭沙拉)",
    type: "Duck Salad",
    category: "Salad",
    ingredients: ["Peking duck slices", "Mixed greens", "Cucumber", "Scallions", "Hoisin vinaigrette"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "An indulgent Chinese duck salad showcasing Peking duck slices, crisp mixed greens, and a flavorful hoisin vinaigrette.",
    time: 220
  },
  {
     id: '024',
    image: 'dish16',
    title: "Lotus Root Salad(莲藕沙拉)",
    type: "Vegetable Salad",
    category: "Salad",
    ingredients: ["Thinly sliced lotus root", "Soy sauce", "Sesame oil", "Rice vinegar"],
     preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    description: "A crunchy and refreshing Chinese salad featuring thinly sliced lotus root tossed in a savory soy, sesame, and rice vinegar dressing.",
    time: 650
  },
  {
    id: '025',
    image: 'dish40',
    title: "Spinach and Tofu Soup(菠菜豆腐汤)",
    category: "Soup",
    ingredients: ["Vegetable broth", "Tofu", "Spinach", "Garlic", "Soy sauce", "Sesame oil", "White pepper"],
   preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    time: 800,
    description: "A light and nutritious Chinese soup featuring wholesome tofu and vibrant spinach in a flavorful vegetable broth."
  },
  {
    id: '026',
    image: 'dish41',
    title: "Beef and Noodle Soup(牛肉面汤",
    category: "Soup",
    ingredients: ["Beef broth", "Beef sirloin", "Rice noodles", "Bok choy", "Ginger", "Garlic", "Soy sauce"],
    preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
    time: 500,
    description: "A hearty Chinese soup with succulent beef slices, tender rice noodles, and crisp bok choy in a savory beef broth."
  },
  {
  id: '027',
  image: 'dish42',
  category: "Salad",
  title: "Shrimp Dumplings (虾饺)",
  ingredients: ["Shrimp", "Bamboo shoots", "Water chestnuts", "Dumpling wrappers"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 98,
  description: "Delicate dumplings filled with a mixture of shrimp and crunchy vegetables, a popular dim sum choice."
},
{
  id: '028',
  image: 'dish43',
  category: "Main Dish",
  title: "Clay Pot Rice (煲仔饭)",
  ingredients: ["Rice", "Chicken or pork", "Chinese sausage", "Mushrooms", "Soy sauce"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 100,
  description: "A comforting one-pot dish with layers of rice, meats, and savory Chinese sausage, cooked in a clay pot."
},
{
  id: '029',
  image: 'dish44',
  category: "Soup",
  title: "Dan Dan Noodles (担担面)",
  ingredients: ["Noodles", "Ground pork", "Sesame paste", "Soy sauce", "Chili oil"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 360,
  description: "Spicy and savory noodles topped with a flavorful ground pork sauce, originating from Sichuan."
},
{
  id: '030',
  image: 'dish39',
  category: "Main Dish",
  title: "Stir-Fried Beef with Broccoli (西兰花炒牛肉)",
  ingredients: ["Beef", "Broccoli", "Soy sauce", "Oyster sauce"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 250,
  description: "Tender beef slices stir-fried with vibrant broccoli in a savory and flavorful sauce."
},
{
  id: '031',
  image: 'dish46',
  category: "Salad",
  title: "Fish Fragrant Eggplant (鱼香茄子)",
  ingredients: ["Eggplant", "Garlic", "Ginger", "Soy sauce", "Vinegar", "Chili bean paste"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 200,
  description: "A Sichuan dish featuring eggplant cooked in a flavorful sauce with the characteristic 'fish fragrance.'"
},
{
  id: '032',
  image: 'dish47',
  category: "Salad",
  title: "Buddha's Delight (罗汉斋)",
  ingredients: ["Tofu", "Mushrooms", "Bamboo shoots", "Water chestnuts", "Soy sauce"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 250,
  description: "A vegetarian stir-fry featuring tofu and an assortment of vegetables, symbolizing Buddhist vegetarian cuisine."
},
{
  id: '033',
  image: 'dish33',
  category: "Main Dish",
  title: "Chinese BBQ Pork (叉烧)",
  ingredients: ["Pork shoulder", "Hoisin sauce", "Soy sauce", "Honey", "Chinese five-spice"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 150,
  description: "Succulent and flavorful barbecue pork with a sweet and savory glaze, a popular Chinese barbecue dish."
},
{
  id: '034',
  image: 'dish48',
  category: "Main Dish",
  title: "Yangzhou Fried Rice (扬州炒饭)",
  ingredients: ["Rice", "Ham", "Shrimp", "Vegetables", "Eggs", "Soy sauce"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 500,
  description: "A flavorful fried rice dish from Yangzhou, featuring a mix of ham, shrimp, and fresh vegetables."
},
{
  id: '035',
  image: 'dish39',
  category: "Main Dish",
  title: "Ma La Xiang Guo (麻辣香锅)",
  ingredients: ["Assorted meats and vegetables", "Sichuan peppercorns", "Chili oil"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 200,
  description: "A spicy and numbing stir-fry dish with a variety of meats and vegetables, popular in Sichuan cuisine."
},
{
  id: '036',
  image: 'dish37',
  category: "Main Dish",
  title: "Braised Pork Belly (红烧肉)",
  ingredients: ["Pork belly", "Soy sauce", "Sugar", "Ginger", "Garlic"],
  preparation: [
      "Trim excess fat from the pork loin and cut it into bite-sized pieces. Pat the pork pieces dry with paper towels.",
  
      "In a bowl, coat the pork pieces evenly with cornstarch. This helps create a crispy texture when frying.",

  "In a separate bowl, mix ketchup, rice vinegar, brown sugar, soy sauce, and the dissolved cornstarch. Ensure the cornstarch is fully dissolved to avoid lumps in the sauce.",

  "Heat vegetable oil in a deep pan or wok over medium-high heat. Fry the coated pork pieces until golden brown and cooked through. Remove and place on a paper towel-lined plate to drain excess oil.",

  "In the same pan, sauté bell pepper, onion, carrot, and pineapple chunks until slightly tender. The vegetables should maintain a crisp texture.",

  "Pour the prepared sweet and sour sauce over the sautéed vegetables. Add the fried pork pieces back into the pan. Toss until the pork and vegetables are evenly coated with the sauce.",

  "Allow the mixture to simmer for a few minutes until the sauce thickens and coats the pork and vegetables.",

  "Transfer the Sweet and Sour Pork to a serving dish. Serve it hot over steamed rice, garnished with additional pineapple chunks if desired."
    ],
  time: 300,
  description: "Tender and flavorful pork belly slow-cooked in a savory and sweet soy-based braising liquid."
},
]

export default function Recipes() {
  const [searchBook, setSearchBook] = useState('')
  const foodCat = foods.filter(food =>
   food.title.toLowerCase().includes(searchBook.toLowerCase()) || food.category.toLowerCase().includes(searchBook.toLowerCase() ))

   function onSubmit(e){
     e.preventDefault()
     setSearchBook(e.target.search.value)
   }

  const recipeArray =foodCat.map(food =>(
   <section key={food.id} className=' shadow-2xl rounded-md h-[250px] w-[350px] gap-2' style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.600)), url(/images/${food.image}.jpeg)`}}>
<Link href={`/chinese/${food.id}`} title={`${food.category} of ${food.title}`}>
  <p>
    <span className='ml-[250px] mt-[550px] text-white text-[12px] font-medium bg-[red] rounded p-[5.8px] tracking-[2px]'>{food.category}</span>
   </p>


   <section className='mt-[150px] text-center text-white text-[14px]'>
   <h2 className='font-semibold tracking-[2.8px]'>{food.title}</h2>

    <p className='flex flex-row gap-2 ml-[110px] mt-[11px]'><FaRegClock />
    <span>{food.time > 60 ? parseInt(food.time/60)+'hr ' +(food.time % 60)+ 'mins' : food.time + 'mins'}</span>
    </p>

   
   </section>
  </Link>
   </section> 
  ))

  return (
    <section>
           <form className='flex items-center justify-center py-[2em]' onSubmit={onSubmit}>
      <input type="search" name="search" id="search" placeholder='Search For Food & Categories' className={`w-3/5 outline-8 rounded-[40px] border-[3px] border-[red] border-solid my-5 m-auto focus:shadow-2xl ${styles.sear}`} defaultValue={searchBook} />
    </form>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-20 w-[95%] m-auto">
              {recipeArray}
            </div>
    </section>
  
  )
}




