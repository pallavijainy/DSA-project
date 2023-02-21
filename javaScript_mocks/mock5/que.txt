# Masai carWale

## Instructions

- You should use json-server for this.
- Use HTML, CSS and JS DOM to solve this question.
- Read entire question carefully for atleast 15 mins, understand it and code it.
- Use HTML, CSS and JS DOM to solve this question.
- Use pure CSS, don’t use any external libraries.
- You will have to deploy both JSON server and app.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)

## Problem Statement:

- Your app should have a navbar with 3 pages
    - Ad page
    - Cars page
    - Wishlist page

## Ad page:

- Create a form which takes following information from the user to post an Ad
    - Brand of car (select tag)
    - Manual or Automated (select tag)
    - Year of purchase (select tag)
    - KM driven
    - Description
    - Price
- Use JSON server to manage the data (using local storage or dummy object data will lead to disqualification)
- Your db.json should look something like this
    
    ```jsx
    {
      "cars": [
        {
          "id": 1,
          "brand": "Tata",
    			"type":"Manual",
          "year": 2019,
          "kms": 10000,
          "Description": "Tata Altroz with all original documents",
          "Price": 500000
        },
        {
          "id": 2,
          "brand": "Tata",
    			"type":"AMT",
          "year": 2017,
          "kms": 8000,
          "Description": "Tata Nexon with all original documents",
          "Price": 800000
        }
      ]
    }
    ```
    
- On clicking on submit, store details in JSON server

## Cars page:

- All the Ads which you have posted in Ads page should be displayed here in form of cards.
- Fetch this data from JSON server and display in the form of cards.
- Make sure your  UI looks close to this, use dummy or placeholder images.

![Screenshot 2022-09-16 at 11.18.07 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ce58892-559a-412f-962f-d62b538d3c4e/Screenshot_2022-09-16_at_11.18.07_AM.png)

- This page should also have sort and filter functionality
    - Sort by price
    - Sort by Kms driven
    - Filter by brand.
- **Note that sorting and filter should work together.**
- Each card should have also `edit, delete and wishlist` icons.
- You should also able to `delete` an Ad
    - when deleting an Ad, delete it from JSON data as well and display the updated data.
- When user clicks on `edit`, user should be able to edit/change price of particular car in JSON data (you can use modal for this) and display the updated data.
- Whenever user clicks on `wishlist icon` for any Ad, that particular Ad should be added to JSON server as `wishlisted_cars`

```jsx
{
  "cars": [
    {
      "id": 1,
      "brand": "Tata",
      "year": 2019,
			"type":"Manual",
      "kms": 10000,
      "Description": "Tata Altroz with all original documents",
      "Price": 500000
    },
    {
      "id": 2,
      "brand": "Tata",
			"type":"AMT",
      "year": 2017,
      "kms": 8000,
      "Description": "Tata Nexon with all original documents",
      "Price": 800000
    }
  ],
"wishlisted_cars": [
    {
      "id": 1,
      "brand": "Tata",
      "year": 2019,
			"type":"Manual",
      "kms": 10000,
      "Description": "Tata Altroz with all original documents",
      "Price": 500000
    }
  ]
}

```

## Wishlist page:

- Fetch data of  all the `wishlisted_cars` from JSON server and display on DOM.
- Follow same design pattern.
- You should use JSON server for this, usage of Local storage will be considered as invalid submission.

## Note:

- Maintain flow of app as mentioned.
- Error messages should be shown
- Use loaders.
- Good designs will fetch bonus marks.
- Submitting local host links for mock server will lead to disqualification.

### Submission

- Please submit deployed link and Github link of code.
- ***Deploy JSON server too. (submitting [localhost](http://localhost) link will lead to disqualification)
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it)
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Any issues in deployed link will be considered null and void.
- Please verify your submissions.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### Rubrics / Criteria to be judged upon

- CRUD Operations***
- JSON server***
- DOM events.
- JSON server deployment.
- Fetch
- Promises
- UI
- Code cleanliness and folder structure will be looked into.
- Usage of Javascript (using react will lead to disqualification)
- Git hygeine

 

### Time Limit - `4 Hours`

## Rubrics:

**On form submit in Ads page, post data to JSON server.- (1)**

**Was able to get data in cars page from JSON server and display on DOM in form of cards - (1)**

**Was able to filter by brand - (0.5)**

**Sort by Price and filter by brand should work together - (1)**

**Sort by Kms and filter by brand should work together - (1)**

**Was able to edit price of car using JSON server - (1.5)**

**Was able to delete Ad using JSON server - (1)**

**Was able to wishlist cars and post on JSON server with a new key - (1)**

**Was able to get data in wishlist page from JSON server and display on DOM form of cards-(1)**

**UI is good - (1)**