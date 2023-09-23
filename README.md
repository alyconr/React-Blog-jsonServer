#  React Blog with JSON Server as API Backend

Welcome to the Alyconr React Blog project! This is a simple blog application built using React, React Router, and JSON Server as the API backend, hosted on Render.com. This README file will guide you through setting up and running the project, as well as provide an overview of the main goals and features of this application.

### The first get request method can take one minute or longer to retrieve the necessary data and render the blog.



## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The main goal of the React Blog with JSON Server project is to help you learn how to build a blog application using React and other essential technologies. In the process, you will gain experience in:

- Utilizing React hooks such as `useState` and `useEffect` to manage component state and side effects.
- Using `useParams` from React Router to access dynamic route parameters.
- Handling user interactions and events within React components.
- Managing component props and reusing components to maintain a modular and efficient codebase.
- Implementing client-side routing with `react-router-dom`.
- Making HTTP requests (GET, POST, PUT, DELETE) to a JSON Server to create, read, update, and delete blog posts.

## Features

Here are some of the key features of the Alyconr React Blog:

- View a list of all blog posts.
- Click on a blog post to view its details.
- Create a new blog post.
- Edit an existing blog post.
- Delete a blog post.
- Dynamic routing using React Router to display individual blog posts.
- State management for managing blog data and form input using React hooks.
- Reusable components for a maintainable codebase.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed on your development machine:

- Node.js: You can download and install Node.js from [nodejs.org](https://nodejs.org/).

### Installation

Follow these steps to set up and run the Alyconr React Blog project:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-blog-jsonserver.git
   ```

2. Navigate to the `react-blog-jsonserver` directory:

   ```bash
   cd react-blog-jsonserver
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the server:

   ```bash
   npm run server
   ```
5. In a new terminal window, navigate to the `react-blog-jsonserver` directory:

   ```bash
   cd react-blog-jsonserver
   ```
6. The application should now be running locally. Open your web browser and access the following URL:

   ```bash
   http://localhost:3000
   ```
You're all set! You can now explore and interact with the Alyconr React Blog application.

## Usage

Once the application is up and running, you can do the following:

- View a list of all blog posts.
- Click on a blog post to view its details.
- Create a new blog post.
- Edit an existing blog post.
- Delete a blog post.

Feel free to explore the code to understand how different features are implemented, including state management, routing, and making HTTP requests to the JSON Server.

## Folder Structure

The `react-blog-jsonserver` directory contains the following subdirectories:

```bash
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   └── manifest.json
├── src
│   ├── App.js
│   ├── BlogDetails.js
│   ├── BlogList.js
│   ├── CreateBlog.js
│   ├── Home.js
│   ├── Index.js
│   ├── Index.css
│   ├── useFetch.js
│   └── Navbar.js
|
├── .gitignore
├── .README.md
├──  package-lock.json
└── package.json
```
## API Endpoints

The Alyconr React Blog project exposes the following API endpoints:

```bash	
   GET /api/blogs
   GET /api/blogs/:id
   POST /api/blogs
   PUT /api/blogs/:id
   DELETE /api/blogs/:id
```

## Deployment

The Alyconr React Blog project is deployed tO Netlify.
The Api is deployed to Render.com.

<div align="center">
<img src="./public/Diagrama sin título.drawio.png" alt="netlify" style="width: 70%;"/>  
</div>

## Technologies Used

The Alyconr React Blog project uses the following technologies and libraries:

- React: A JavaScript library for building user interfaces.
- React Router: For client-side routing within the application.
- JSON Server: A fake REST API backend for managing blog post data.
- Node.js: A JavaScript runtime used for running the development server.
- npm: The package manager for installing and managing project dependencies.

## Contributing

Contributions to this project are welcome! If you have ideas for improvements or new features, please feel free to open an issue or submit a pull request.

## 📝 License <a name="license"></a>

This project is [MIT](LICENSE.md) licensed.




