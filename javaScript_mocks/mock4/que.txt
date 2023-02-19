# Masai Mart

## Instructions

- Read entire question carefully for at-least 15 mins, understand it and then code it.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS and JS DOM to solve this question.
- Usage of React will lead to disqualification.
- Make Good UI, use pure CSS, don’t use any external libraries (good UI will fetch you extra marks)

## Problem Statement:

- Your app should have a `navbar` with two routes.
    - Products (index.html)
    - Wishlist (wishlist.html)
- In Products page, use this API end point to fetch all products and populate on DOM
    
    ```jsx
    [https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products](https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products)
    ```
    
- You can find documentation here
    - Refer to **`GET`  Get all products with their price**
    
    ```jsx
    [https://documenter.getpostman.com/view/9952810/VUjQmjcF](https://documenter.getpostman.com/view/9952810/VUjQmjcF)
    ```
    
- Display these products in form of cards with following details
    - brand
    - title
    - image
    - category
    - price
    - This card should also have a wishlist icon ❤️
- Refer to below image on how each card should look like
    
    ![Screenshot 2022-09-08 at 7.21.58 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1cca3bcd-625f-4738-8091-75e63d8de6a9/Screenshot_2022-09-08_at_7.21.58_PM.png)
    

- You should have only 4 cards per row (use Grid)
- Your app should have filter and sort functionality
    - **Filter by category** (select tag with onchange event)
        - Filter according to kids, women, homedecor etc
        - When clicking on any category, products related to that category should be displayed.
    - **Sort by price**
        - High to low
        - Low to high
            - Acheive this using `orderBy` param from API itself (check documentation)
- Your app should also have **pagination**, each page should have 12 items/cards (you can use `limit` param from API)
- Also when clicking on wishlist icon, item should be added as wishlist.
- User should be able to see all wishlisted items in `wishlist.html` page (use local storage to acheive this)
- Your app should be responsive as well , apply Media Queries
    - Large screen : Default
    - Medium screen : 2 cards per row
    - Small screen : 1 card per row
- Make sure you make good UI, it will have extra weightage.

## Submission

- Please submit deployed link and Github link of code.
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### Rubrics / Criteria to be judged upon

- HTML, CSS, JS DOM.
- Fetch, promises, Local storage and responsiveness.
- Filtering, sort, Pagination functionality.
- UI (bonus marks will be given for pixel perfect UI).
- Code cleanliness.

**Time limit** : `3 hours`

## Rubrics

**Was able to build a navbar with two routes - (1)**

**Was able to fetch products from API and display on DOM in Products page - (2)**

**Was able to filter by category - (1)**

**Was able to sort by Price(1)**

**Was able to sort by Price by using API params (orderBy) - (1)**

**Was able to acheive pagination - (1)**

**Was able to acheive wishlist functionality using local storage - (1)**

**Was able to apply media queries and make page responsive - (1)**

 **if UI was decent and clean code and proper indentation - (1)**