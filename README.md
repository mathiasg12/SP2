# Semester project 2 (Bid House)

![image](/pictures/homePage.png)

## Description

This is a website built for a fictional auction site called Bid house and is a school project. The site is responsive and is built with a mobile first approach, the site is responsive down to at least 280px width. The website consists of six pages, the landing page, sign-up page, login page, profile page, auction page, and the auction-specific page. The header has a logo and navigation elements. The header for mobile has a hamburger menu and for desktop it is links. the header changes depending on whether the user is logged in or not, if a user is logged in the navigation elements consist of links to the auction page, profile page, logout, and credit, if they are not logged in the header elements consist of login, signup, auctions.

the user first access the landing page here the user can look through recently added auctions and auctions that are ending soon, the two sections are carousels and display 1 post for mobile and two for desktop, the last section on the landing page includes some information and a CTA button that directs to the auction page. The auction page consists of a search bar, a sorting tab, and the auction section, the search bar gets all auctions and stores them in an array, and then searches through the array to look for matches, the user can search for both titles and descriptions, the sort functionality sorts auction eighter from newest to oldest or oldest to newest. The auction section uses JS to display auctions from the API and fetches 20 auctions at a time, if a user presses the more button the next 20 auctions are displayed under the first 20. if a user clicks on an auction they are directed to the auction-specific page, here the user can look thru the aviable pictures, read the description, and view a bid history, if a user clicks the bid now CTA the input field will appear and the user can bid on the auction, if the user try to bid on their item they will receive a message telling them that they cannot do that. The bid input is validated with JS so a user cannot bid under the current leading bid, and they cannot bid more than their credit if they try, they will receive an error message. The website has a login page and a signup page which work and look almost the same the main difference is the number of input fields and that the signup page form registers a user to the Api while the login form logs an existing user in when a user is logged in the access token and the name is stored in local storage so the user can use functionality only authorized requests can execute, request such as bid on items and create listings. all form inputs on both login page and signup page are validated with JS except the avatar URL input because this input field is optional, and the user will get an error message if one or more of these validations fail. The profile page has four sections, the first section is where user information is displayed, and the user can change their avatar. The next section is a form where users can create a listing that sends an auction object to the API, the next section is where the user's listings are displayed, and the last section is a user's bid history.

### Lading page:

the landing page has a welcome heading and three sections, recently added where the 12 newest auctions are displayed in a carousel made with JS, the next section is ending soon and is the same as recently added only that the 12 auctions that are ending first are displayed. The last section is the Discover section which has a little bit of information and a CTA leading to the auction page.

### Auction page:

The auction page is divided into two sections, the search and sort section where users can search for auctions and sort newest to oldest or oldest to newest. the other section is where the auctions are displayed, they are dispalyed 20 at the time and if a user clicks more the next 20 will be displayed under the first 20

### Login page:

The login page is where a user that is allready registered to the API can log in and a accesstoken will be stored in local storage, the form validation is made with js and if a user makes a mistake or fills in invalid credentials an error message is displayed to the user

### Signup page:

The signup page is where a user can register a new account to the api, if the sign up is successful the login function will run automatically and the user will be logged in, the form validation is made with js and if a user makes a mistake or fills in invalid credentials an error message is displayed to the user

### Profile page:

The profile page has four sections the first section is where the users information is displayed, its also where the user avatar is dispalyed and the user can change avatar if they like,
the next section is the create a listing form where a user can add images,title,descriptions, and when the auction will end the form is validated with JS and the user recives an error message if they makes a mistake, the form is then converted to a object with js and posted to the api. the next section is where the users own auctions is diplayed, the last section is the users bid history

### Auction specific page:

The auction specific is where the user is directed when a user clicks on an auction, the page is dynamically created with JS to display the item clicked on. the page contains a title, a media gallery, description, when the auction ends, amount of bids, current leading bid, bid history and a CTA button that creates a bid input, the bid input is where a user can create a bid and if the bid is to small or larger than the aviable credit the user gets an error message else the page will reload and the bid is displayed in the bid history section, the user will get an message if they are leading the bid round. a user can not bid on their own message if they try the button will be diasbled and a message will be displayed.

### Design

- colors: the primary colors used are black(#000000) and white(#FFFFFF), secondary colors include a golden color(#d0a933) for some text that I wanted to stick out, and the logo, a lighter golden(#fceb72) for some text that is close to the other golden color, a light green color(#14ff00) used for success messages and for displaying credit on profile page, gray(#e0e0e0) for search bar and sort, red(#ff0000) for the error message and dark green(#2d7e26) for success message where white is background and the light green color do not have high enough contrast.
- grid: the website uses both flex and bootstrap grid system, most of the pages uses bootstrap grid system for the main layout, and the smaller sections either uses bootstrap or flex depending on what makes sense in that situation, the grid system is often single column for mobile and two column and up depending on the screen width for desktop, on the index page the carousel has single column layout for mobile and two column layout for desktop, on the auction site the auction section is using bootstrap container and row but the div that holds the auctions itself is using flex and adds columns if the screen size allows it
- fonts: I used a font called Isodora for the logo, Bemirs for headings, and poppins for the text
- margins: I use bootstrap pre-chosen margin system but needed to add some larger margins, so a lot of sections and components follow the m1-m5 bootstrap margins this is mainly done to repeat the same styles on the different components, sections often use m5 or around 48px top and bottom

### Functionality

- header updates when a user logs in, the header is different for logged in users and not logged in users
- carousel made with js
- get requests to fetch Auctions from the API
- registered users can log in
- users can register to the API
- users that is logged in can log out and local storage is cleared
- un registered users can search thru all auctions
- users can sort the auctions from oldest to newest or newset to oldest
- users can add a avatar image to their profile when signing up or/and update it on the profile page
- users can add a media gallery to their auctions
- users can see and browse a media gallery on a auction
- users may create an auction
- users may bid on an auction
- header changes depending if the user is logged in or not
- auction specific page is dynamically created
- auction specific title is dynamically created
- users may press the more button and see 20 more auctions
- all form inputs are validated with js and the user can see an error message if something is wrong
- users may see their own auctions they made
- users may see their own bid history
- login form
- signup form
- users can delete their own posts on the ptofile page

## Built With

- JS
- SCSS
- HTML
- Bootstrap
- Noroff Auction house API

### Requirements

##### for development you need:

- a code editor
- Node.js version 20.9.0 or later is recomended
- npm(Node Package Manager)

##### for users:

- a web browser

### Installation(for development locally)

- clone the repository from github
- open the repository in a code editor
- install bootstrap version 5.3.2 if needed
- open with live server extension

### Running

https://bid-house.netlify.app/

## Contact

My email address: mathiasgausl@gmail.com
