<h1 align="center">Portfolio</h1>

<p align="center">
  A dynamic personal portfolio built with Next.js and Tailwind CSS, leveraging the GitHub API to showcase selected projects. The portfolio automatically fetches public repositories, filters those with specific display configurations, and presents them in an elegant, theme-aware interface.
</p>

![image](https://img.shields.io/github/license/RiadOliveira/Portfolio)

<br/>

Contents
=================
<!--ts-->
* [🛠️ Technologies](#technologies)
* [🚀 Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation & Setup](#setup)
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

<h3 id="setup">Installation & Setup</h3>
  
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

<h2 id="features">⚙️ Features</h2>

- **Dynamic Project Showcase** - Automatically fetches and displays GitHub repositories configured with .portfolio/displayData.json.
- **Smart Filtering** - Excludes profile repositories and only includes projects with proper display configuration.
- **Theme-Aware UI** - Light/dark theme toggle with persistent preference storage.
- **Optimized Performance** - Cached API responses with 1-hour expiration for both repository listings and README content.
- **Interactive Previews** - Modal-based README viewing with background loading for seamless user experience.
- **Technology Badges** - Automatically generated badges for all project technologies using standardized shields.io formatting.
- **Responsive Design** - Fully responsive layout optimized for all device sizes.
- **Dynamic Metadata** - Route-specific metadata including project titles and descriptions.

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

<h3 id="project">Project Page</h3>

* Shows detailed project information.
* Displays technology badges.
* Highlights content with project-specific color.
* Includes action buttons for preview and GitHub access.

<h3 id="modal">README Modal</h3>

* Presents formatted README content.
* Maintains consistent styling with main UI.
* Includes loading state during fetch.

<br/>

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
  <a href = "mailto:riad.oliveira@hotmail.com"><img class="badge" src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"/></a>
  <a href = "mailto:riad.oliveira@gmail.com"><img class="badge" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"/></a>
  <a href="https://www.linkedin.com/in/ríad-oliveira" target="_blank"><img class="badge" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/></a>
</div>
