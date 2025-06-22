# Bitsky UI – Project Documentation

---

## Figma Design

- [Figma Prototype](https://www.figma.com/design/GQOW3fM6ssfDZUkt6Kg4S2/Untitled?node-id=3-334&t=EyixI2IJlxdkoKxB-0)

## Live Demo

- *(https://win-big-in-bitsky.netlify.app/)*

 ## Git Hub
- *(https://github.com/Jeetendra1605/Win_In_Big_Bitsky)*
---

## Project Overview

Bitsky UI is a modern, responsive web application designed for a gaming platform. It features user account management, game listings, social media integration, and promotional sections. The UI emphasizes engaging visuals, smooth user experience, and modular React components for maintainability and scalability.

---

## Tech Stack

- **Frontend Framework:** [React](https://react.dev/) (functional components & hooks)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Styling:** 
  - [SCSS](https://sass-lang.com/) modules for component-level styles
  - [Bootstrap 5](https://getbootstrap.com/) for layout and utilities
  - Custom CSS variables for theming
- **UI Components:** 
  - [Reactstrap](https://reactstrap.github.io/) (Bootstrap for React)
  - [Material UI Tabs](https://mui.com/material-ui/react-tabs/) for tab navigation
  - [React Slick](https://react-slick.neostack.com/) for carousels/sliders
  - [React Icons](https://react-icons.github.io/react-icons/) for icons
- **Form Management:** [Formik](https://formik.org/)
- **Validation:** [Yup](https://github.com/jquense/yup)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Linting:** [ESLint](https://eslint.org/) with React and hooks plugins

---

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   │   ├── css/         # SCSS styles for each component/section
│   │   └── images/      # All images and SVGs used in the UI
│   ├── components/      # React components (Banner, Footer, Games, etc.)
│   ├── data/            # SVG React components and static data
│   ├── styles/          # Global styles (style.scss)
│   └── main.jsx         # App entry point
├── css/                 # Compiled CSS files (from SCSS)
├── index.html           # Main HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

---

## Main Features

- **Landing Banner:** Eye-catching hero section with call-to-action and animated elements.
- **Slider:** Auto-scrolling welcome slider using React Slick.
- **Popular Games:** Interactive grid of games with favorite toggling.
- **Refer & Earn:** Promotional section for user referrals and rewards.
- **Subscribe Section:** Email subscription form with validation.
- **Social Media:** Section with links to various social platforms.
- **User Account Page:** 
  - Tabbed navigation for account info, wallet, transactions, and affiliates.
  - Animated SVGs and styled forms with validation.
  - User dropdown menu with profile/settings/logout.
- **Footer:** Platform, about, and contact links with social icons.

---

## How to Run the Project

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview production build:**
   ```sh
   npm run preview
   ```

---

## Linting

To check code quality with ESLint:
```sh
npm run lint
```

---

## Customization

- **SCSS Variables:** Located in `src/styles/style.scss` for easy theme changes.
- **Component Styles:** Each major component has its own SCSS file in `src/assets/css/`.
- **SVGs:** Custom SVGs are React components in [`src/data/data.jsx`](src/data/data.jsx).

---

## License

This project is for demonstration and educational purposes.

---

## Author

Designed and developed as part of the Gammastack HTML Designer Task.

---

*Thank you for reviewing Bitsky UI!*