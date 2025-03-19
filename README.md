# Personal Portfolio

This is a personal portfolio website built with Angular to showcase my skills, experience, and projects. The site features a responsive layout and a modern, user-friendly design, leveraging the latest web technologies and best practices in front-end development.

## Features

- **Hero Section:** An introduction with a brief overview of who I am and what I do.
- **About Section:** Detailed information about my skills, experience, and background.
- **Projects Section:** A showcase of design and development projects with interactive elements.
- **Education Section:** Information about my academic qualifications and certifications.
- **Contact Section:** A contact form for inquiries and links to my social media profiles.

## Getting Started

To set up this project locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (LTS version recommended)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/)

### Setup

1. **Clone the repository:**

   Open your terminal and run the following command:
   ```bash
   git clone https://github.com/nadeemalimohammed/my-portfolio.git
   ```
    Then navigate into the project folder:
    ```bash
    cd portfolio
    ```
2. **Install dependencies:**
   
     Run the following command to install the necessary dependencies:
    ```bash
    npm install
    ```
3.	**Start the development server:**

  	Run the Angular development server with:
    ```bash
    ng serve
    ```
4.	**Open your browser:**

  	Navigate to <http://localhost:4200> to view the application. The app will automatically reload whenever you modify any source files.

## Building the Project
  
  To build the project for production, run the following command:
  ```bash
  ng build --configuration production
  ```
  This will compile the project and output the production-ready files in the dist directory.

## Deployment

To deploy the project, you can use services like GitHub Pages, Netlify, or any other platform that supports static Angular apps. For GitHub Pages deployment, use the following steps:
1.	**Install Angular CLI GitHub Pages tool (if not already installed):**
```bash
npm install -g angular-cli-ghpages
```
2.	**Build the project for production:**
```bash
ng build --prod --base-href "https://nadeemalimohammed.github.io/my-portfolio/"
```
3.	**Deploy to GitHub Pages:**
Run the following command to deploy:
```bash
npx ngh --dir=dist/portfolio
```

## Contact
For any inquiries or feedback, you can reach out via the contact form on the website. Additionally, feel free to connect with me on the following social media platforms:
- [LinkedIn](https://linkedin.com/in/nadeem-ali-mohammed)
- [GitHub](https://github.com/nadeemalimohammed)
________________________________________
<em> Note: This portfolio is a work in progress. Check back regularly for updates! </em>

