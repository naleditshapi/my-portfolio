# IS Student Portfolio

A modern, professional React portfolio for an Information Systems student seeking entry-level roles in Business Analysis, QA Testing, Systems Analysis, and Data Analysis.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [VS Code](https://code.visualstudio.com/) (recommended)

### Setup

1. **Open the folder in VS Code**

   ```
   File → Open Folder → select the `portfolio` folder
   ```

2. **Open the integrated terminal**

   ```
   Terminal → New Terminal (or Ctrl + `)
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← PUT YOUR CV HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      ← Sticky navigation
│   │   ├── Hero.jsx        ← Landing section
│   │   ├── About.jsx       ← About me + stats
│   │   ├── Skills.jsx      ← Categorised skill cards
│   │   ├── Projects.jsx    ← Filterable project cards
│   │   ├── Resume.jsx      ← CV highlights + download
│   │   ├── Testimonials.jsx← Placeholder references
│   │   ├── Contact.jsx     ← Contact form + socials
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ✏️ Personalisation Checklist

Replace all placeholder text with your real information:

### Navbar

- [ ] Change `<YourName />` to your actual name in `Navbar.jsx`

### Hero (`Hero.jsx`)

- [ ] Replace `Your Name` with your name
- [ ] Update the intro paragraph
- [ ] Update GitHub and LinkedIn links
- [ ] Change the emoji avatar to a real photo (replace the `<div>` with `<img>`)

### About (`About.jsx`)

- [ ] Update the paragraphs with your own background
- [ ] Edit the stats (year, projects, graduation year)

### Skills (`Skills.jsx`)

- [ ] Adjust skill names and proficiency levels to match yours

### Projects (`Projects.jsx`)

- [ ] Replace sample projects with your real ones
- [ ] Add real GitHub and demo links
- [ ] Update tech stacks

### Resume (`Resume.jsx`)

- [ ] Update education, internship, and certification details
- [ ] Add `resume.pdf` to the `/public` folder

### Testimonials (`Testimonials.jsx`)

- [ ] Replace placeholder quotes with real references

### Contact (`Contact.jsx`)

- [ ] Update email, location, availability
- [ ] Update social links
- [ ] Wire the form to a real backend:
  - **Formspree** (free): https://formspree.io
  - **EmailJS** (free): https://www.emailjs.com

### Footer (`Footer.jsx`)

- [ ] Update your name

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub Pages](https://pages.github.com).

---

## 🌐 Deployment (Vercel — Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Framework: **Vite**
4. Click Deploy — done!

---

## 🛠️ VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets** — faster component creation
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **Prettier** — auto-format on save
- **GitLens** — enhanced Git support
