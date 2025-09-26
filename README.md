# Dynamic Content Creation

## Lab Overview

In this lab, you will create a dynamic shopping cart application to practice and reinforce your DOM manipulation skills. The application will allow users to add, update, and remove items dynamically while keeping track of the total price. This lab focuses on modifying elements, creating and appending new elements, and updating content dynamically using JavaScript.

## Workplace Context

### Imagine you are tasked with building the shopping cart feature for an e-commerce website. Customers should be able to:

[✅] Add items to their cart dynamically.<br>
[ ] View the items they have added, along with their prices and quantities.<br>
[✅] Update the quantity of items in the cart, reflecting real-time price changes.<br>
[✅] Remove items from the cart.<br>

## Objectives

### By the end of this lab, you will:

- Dynamically create and manipulate DOM elements to build interactive features.<br>
- Update the DOM to reflect changes in user input, such as quantity updates and price calculations.<br>
- Use event handling to implement interactivity for adding, updating, and removing items.<br>
- Use efficient DOM manipulation techniques to minimize performance bottlenecks.<br>

## Activity Tasks

### Add Products:

Test adding products with different names and prices.
Ensure each product appears in the list with the correct price.

### Remove Products:

Test removing products from the cart.
Verify that the total price updates accurately after removing items.

### Edge Cases:

Attempt to add products with empty names or invalid prices and ensure the application handles these cases gracefully.

### Enhance the App (Optional):

Allow users to update the quantity of products in the cart and recalculate the total price.

## Reflection Questions

### How did you dynamically create and append new elements to the DOM?

I added a loop inside the addTask function to loop the array items were being pushed into and use createElement and appendChild

### What steps did you take to ensure accurate updates to the total price?

I hat to use parseFLoat to convert the input string to a number so it can be calculated and updated.

### How did you handle invalid input for product name or price?

I will be using the inputValidity property

### What challenges did you face when implementing the remove functionality?

The remove functionality was working in terms of removing the item but kept returning NaN instead of updating
