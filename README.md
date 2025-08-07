# Literary Photography Site

Welcome to the Literary Photography Site! This project is designed to be a unified platform that combines a literary blog, a photography showcase, and a print store. Below is an overview of the project's structure and features.

## Project Structure

The project is organized as follows:

```
literary-photography-site
├── src
│   ├── pages
│   │   ├── index.astro           # Landing page with introduction and highlights
│   │   ├── about.astro           # Information about the site or author
│   │   ├── subscribe.astro       # Newsletter signup page
│   │   ├── blog
│   │   │   ├── index.astro       # Main blog index listing all posts
│   │   │   ├── literary
│   │   │   │   ├── index.astro   # Literary-only posts index
│   │   │   │   └── [slug].astro   # Individual literary blog post
│   │   │   └── [slug].astro      # Individual blog post
│   │   ├── photography
│   │   │   ├── index.astro       # Photo gallery grid
│   │   │   └── [slug].astro      # Individual photography project
│   │   └── store
│   │       ├── index.astro       # Print store landing page (to be built later)
│   │       └── [slug].astro      # Individual print/product page (later)
│   ├── components
│   │   ├── Header.astro          # Header component for navigation
│   │   ├── Footer.astro          # Footer component for additional info
│   │   └── Layout.astro          # Layout component for consistent structure
│   ├── layouts
│   │   └── BaseLayout.astro      # Base layout for all pages
│   ├── styles
│   │   └── global.css            # Global styles for the site
│   └── content
│       ├── blog                  # Directory for blog content
│       └── photography           # Directory for photography content
├── public
│   └── favicon.svg               # Favicon for the site
├── astro.config.mjs              # Configuration settings for the Astro project
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
```

## Features

- **Literary Blog**: A dedicated section for literary posts, allowing for rich text content and embedded images.
- **Photography Showcase**: A visually appealing gallery to display photography in a grid format, with lightbox functionality for individual images.
- **Print Store**: A future feature that will allow users to purchase prints and merchandise.
- **Responsive Design**: The site is designed to be clean and responsive, ensuring a good user experience across devices.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd literary-photography-site
npm install
```

To run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the site in action.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.