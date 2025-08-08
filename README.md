# Literary Photography Site

A modern Astro-powered website showcasing the intersection of literature and photography. Built for [arnabdey.art](https://arnabdey.art).

✅ **Automatic Deployment**: Connected to Vercel for automatic deployments on every push to main branch.

## 🌟 Features

- **Literary Blog**: Substack-like experience with general and literary-focused posts
- **Photography Gallery**: Grid-based showcase with individual photo stories
- **Print Store**: Foundation for future e-commerce integration
- **Responsive Design**: Beautiful across all devices
- **SEO Optimized**: Proper meta tags and structured data
- **Content Collections**: Type-safe blog posts and photography

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Styling**: Modern CSS with utility classes
- **Content**: Markdown with frontmatter
- **TypeScript**: Full type safety

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arnabdey73/literary-photography-site.git
   cd literary-photography-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Adding Content

### Blog Posts

Create new blog posts by adding Markdown files to `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2025-01-01
author: "Your Name"
tags: ["tag1", "tag2"]
category: "general" # or "literary"
featured: false
---

Your content here...
```

### Photography

Add new photographs by creating Markdown files in `src/content/photography/`:

```markdown
---
title: "Photo Title"
description: "Photo description"
pubDate: 2025-01-01
image: "/images/photography/your-photo.jpg"
altText: "Descriptive alt text"
location: "Photo location"
tags: ["tag1", "tag2"]
featured: false
available_for_print: true
---

The story behind this photograph...
```

## 🗂️ Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── blog/
│   │   └── photography/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── blog/
│   │   ├── photography/
│   │   └── config.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   ├── photography/
│   │   ├── store/
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── subscribe.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## 🎨 Customization

- **Styling**: Edit `src/styles/global.css`
- **Components**: Modify components in `src/components/`
- **Layout**: Update `src/layouts/BaseLayout.astro`
- **Site Config**: Edit `astro.config.mjs`

## 📦 Building & Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

The site automatically deploys to Vercel when you push to the main branch. You can also deploy manually:

```bash
npx vercel --prod
```

## 🔗 Links

- **Live Site**: [arnabdey.art](https://arnabdey.art)
- **GitHub Repository**: [github.com/arnabdey73/literary-photography-site](https://github.com/arnabdey73/literary-photography-site)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Astro](https://astro.build/)