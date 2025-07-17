<h1 align="center">Portfolio</h1>

<p align="center">
  A dynamic personal portfolio built with Next.js and Tailwind CSS, leveraging the GitHub API to showcase selected projects. The portfolio automatically fetches public repositories, filters those with specific display configurations, and presents them in an theme-aware interface.
</p>

![Preview](https://github.com/user-attachments/assets/3887ca9a-bdc8-4b51-969c-7d21bcadd62b)
![License](https://img.shields.io/github/license/RiadOliveira/Portfolio)

<br/>

Contents
=================
<!--ts-->
* [🛠️ Technologies](#technologies)
* [🚀 Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Live Demo](#demo)
  * [Local Setup](#setup)
* [⚙️ Features](#features)
* [📂 Project Structure](#structure)
  * [Display Configuration](#display-config)
  * [API Integration](#api-integration)
  * [Routing System](#routing)
* [🎨 UI Components](#components)
* [📷 Application Screenshots](#screenshots)
  * [Home Page](#home)
  * [Project Page](#project)
  * [README Modal](#modal)
* [📝 License](#license)
* [👨‍💻 Author](#author)
* [🌐 Socials](#socials)
<!--te-->
<br/>

<h2 id="technologies">🛠️ Technologies</h2>
Built with:

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [GitHub API](https://docs.github.com/en/rest) <br/><br/>

<h2 id="getting-started">🚀 Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>

Before running the application, ensure the following tools are installed on your system:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)

<h3 id="demo">Live Demo</h3>
The application is hosted on Vercel and can be accessed directly:
<a href="https://portfolio-riadoliveira.vercel.app">https://portfolio-riadoliveira.vercel.app</a>

<h3 id="setup">Local Setup</h3>
  
```bash
# Clone the repository
$ git clone https://github.com/RiadOliveira/Portfolio.git

# Navigate to project directory
$ cd Portfolio

# Install dependencies
$ npm install

# Start the development server
$ npm run dev
```

<br/>

<h2 id="features">⚙️ Features</h2>

- **Dynamic Project Showcase** - Automatically fetches and displays GitHub repositories configured with .portfolio/displayData.json.
- **Smart Filtering** - Excludes profile repositories and only includes projects with proper display configuration.
- **Theme-Aware UI** - Light/dark theme toggle with persistent preference storage.
- **Optimized Performance** - Cached API responses with 1-hour expiration for both repository listings and README content.
- **Interactive Previews** - Modal-based README viewing with background loading for seamless user experience.
- **Technology Badges** - Automatically generated badges for all project technologies using standardized shields.io formatting.
- **Responsive Design** - Fully responsive layout optimized for all device sizes.
- **Dynamic Metadata** - Route-specific metadata including project titles and descriptions. <br/><br/>

<h2 id="structure">📂 Project Structure</h2>

<h3 id="display-config">Display Configuration</h3>

Projects are displayed when they contain a ```.portfolio/displayData.json``` file with the following structure:
```ts
type DisplayData = {
  title: string;               // Display name
  extendedDescription: string; // Detailed project description
  imageId: string;             // GitHub image identifier
  highlightColor: HighlightColor; // Tailwind color for UI accents
  technologies: Technology[];  // Technologies used
  features: Feature[];         // Key features (max 3)
  attachmentsUrl?: boolean;    // Image URL format flag
}
```

<br/>

<h3 id="api-integration">API Integration</h3>
The portfolio integrates with GitHub's API to:

* Fetch all public repositories (excluding profile README).
* Retrieve repository-specific display data.
* Load README content for project previews.
* Cache responses for optimal performance.

<h3 id="routing">Routing System</h3>

* Home Route (```/```): Displays filtered project list.
* Project Routes (```/[repositoryName]```): Shows detailed project information.
* Parallel Routes: Enables background loading of README content via ```@modal```.

<h2 id="components">🎨 UI Components</h2>

* Theme Toggle: Light/dark mode switcher.
* Project Cards: Responsive cards displaying project image, title, and brief description.
* Technology Badges: Standardized badges for all supported technologies.
* Feature Displays: Highlighted project features with descriptive icons.
* README Modal: Interactive preview with loading states and caching.
* Dynamic Metadata: Route-specific page titles and descriptions.

<h2 id="screenshots">📷 Application Screenshots</h2>

<h3 id="home">Home Page</h3>

* Displays filtered project list with cards.
* Shows profile information and social links.
* Includes theme toggle in header.

![Home_Desktop](https://github.com/user-attachments/assets/3887ca9a-bdc8-4b51-969c-7d21bcadd62b)
![Home_Mobile_Light](https://github.com/user-attachments/assets/d27a278f-c49a-4e0d-935b-3712bdd88264)
![Home_Mobile_Dark](https://github.com/user-attachments/assets/507009ea-42f6-49c5-b246-2daca9827c45)

<h3 id="project">Project Page</h3>

* Shows detailed project information.
* Displays technology badges.
* Highlights content with project-specific color.
* Includes action buttons for preview and GitHub access.

![Project_Desktop](https://github.com/user-attachments/assets/a4658f7a-8235-41ef-a439-b9dfc6769ce4)
![Project_Mobile_Light](https://github.com/user-attachments/assets/f971b8d3-2dcd-446d-a12c-a2c28192f7fe)
![Project_Mobile_Dark](https://github.com/user-attachments/assets/0bb03bd7-1926-43a0-9060-c8db5aa807bd)

<h3 id="modal">README Modal</h3>

* Presents formatted README content.
* Maintains consistent styling with main UI.
* Includes loading state during fetch.

![Readme_Desktop](https://github.com/user-attachments/assets/a822e593-bb9a-4d13-b73a-960a06cdc969)
![Readme_Mobile_Light](https://github.com/user-attachments/assets/1fa939cc-12fa-4e03-b373-89a5eb1265dd)
![Readme_Mobile_Dark](https://github.com/user-attachments/assets/96c40de1-64f5-43e6-9c42-b5098b5c17ba)

<h2 id="license">📝 License</h2>
This project is MIT Licensed. See <a href="https://github.com/RiadOliveira/Tradelous-desktop/blob/main/LICENSE">LICENSE</a> file for more details.

<br/>

<h2 id="author">👨‍💻 Author</h2>

<kbd>
  <a href="https://github.com/RiadOliveira">
    <img src="https://avatars.githubusercontent.com/u/69125013?v=4" width="100" alt="Ríad Oliveira"/>
    <br/><br/>
    <p align="center"><b>Ríad Oliveira</b></p>
  </a>
</kbd>

## 🌐 Socials

<div id="socials">
  <a href="https://portfolio-riadoliveira.vercel.app"><img class="badge" src="https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139" alt="Portfolio" target="_blank"></a>
  <a href = "mailto:riad.oliveira@hotmail.com"><img class="badge" src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" alt="E-mail" target="_blank"/></a>
  <a href = "mailto:riad.oliveira@gmail.com"><img class="badge" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" target="_blank"/></a>
  <a href="https://www.linkedin.com/in/ríad-oliveira" target="_blank"><img class="badge" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" target="_blank"/></a>
</div>
