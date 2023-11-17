# Amazon Scraper - Web

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css">
<h1 align="center">
  <img src="./public/AmazonLogo.png" alt="Imagem da amazon" width="250" height="200" style="border-radius: 50;">
</h1>

# This is an Amazon product scraper, consisting of a Node.js backend and frontend in a web interface Node.js

## Objective

Develop a script to determine the search position of a specific product on Amazon based on its ASIN (Amazon Standard Identification Number) and a keyword.

-   for the vacancy - Full Stack Developer Internship Task

## 🔎 How to use instructions

### Make sure you have Node.js installed

<pre>
 Link: https://nodejs.org/en
</pre>

### Clone this repository

<pre>
$ git clone https://github.com/GabrielAlvesGit/AmazonScraperAsinNode.js-.git
</pre>

### Navigate to the directory

<pre>
$ cd your-repository
</pre>

### Install dependencies

<pre>
$ npm init -y
$ npm install express axios cheerio
</pre>

### Start the project with the command - ( Start the server)

<pre>
$ node server.js
</pre>

### the page will be available at

<pre>
 Google chrome: http://localhost:3000
</pre>

## 🔧 Task Requirements

**Backend (Node.js es6):**

-   Set up a basic JavaScript project with necessary dependencies for server setup and web scraping.
-   Create a script to retrieve Amazon search results for a specific keyword. Please ensure that pagination is implemented for a maximum of 5 pages.
-   Use appropriate web scraping techniques to parse the HTML content.
-   Extract and return the position of a product identified by its ASIN in the search results.

**Frontend (HTML, CSS/Bootstrap 5, Vanilla JavaScript):**

-   Design a simple and user-friendly webpage using HTML and Bootstrap 5 or pure CSS for styling.
-   Incorporate an input field for the ASIN and another for the search keyword.
-   Include a button to initiate the scraping process.
-   Utilize JavaScript to make an AJAX call to your backend script when the button is clicked.
-   Display the position of the specified product in the search results on the page.

**Documentation:**

-   Include comments in your code to explain your logic and methodologies.
-   Prepare a README.md file detailing setup and execution instructions.

**Considerations:**

-   Handle errors effectively on both the backend and frontend.
-   Provide clear, step-by-step instructions for running the application.

## Project Development 💡

The project construction was divided into three stages. Initially, I dedicated time to fully comprehend what was being proposed. After this phase, I sought information by exploring documentation and videos to better understand the proposed model.

The implementation presented challenges, mainly because a significant portion of the documentation did not provide the exact information I needed. In videos, I found only one discussing Asin using Python. Nevertheless, I persisted in development, advancing to the practical part of the project. During execution, it's possible that at some point, the message "An error occurred while scraping Amazon (if necessary, restart your PC and view it through Google's incognito tab)" may be displayed, but it's important to highlight that the code is functioning, as demonstrated in the video.

In the third stage, I applied my logic to envision how the results would be returned to the web page after the user entered the product name and ASIN.

## 💻 Layout Node.js


https://github.com/GabrielAlvesGit/AmazonScraperAsinNode.js-/assets/102634725/2273773a-7ceb-49e2-b07d-7c85d8c7eb0c







