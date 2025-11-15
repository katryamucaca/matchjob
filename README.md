## MatchJob

MatchJob is a job‑matching platform that helps candidates quickly find relevant roles and track their application progress. Built with Next.js, TypeScript, Redux Toolkit, and SCSS modules.

### Project structure

```
src/
  app/                         // App Router pages
    layout.tsx                 // fonts, design tokens and Redux Provider
    page.tsx                   // redirect to /landing
    landing/ page.tsx          // landing page
    jobs/ page.tsx             // jobs list
    progress/ page.tsx         // progress tracker
    profile/ page.tsx          // candidate profile
    about/ page.tsx            // About
    faq/ page.tsx              // FAQs
    contact/ page.tsx          // Contact
    auth/
      signin/ page.tsx         // sign in
      signup/ page.tsx         // sign up

  components/
    general/
      headers/                 // base header and composed variants
        general-header/
        guest-header/
        signed-in-header/
      button/                  // button (variants: primary/secondary)
      input/                   // input
      footer/                  // footer
      job-card/                // job card
      icons/                   // SVG icons
      page/                    // page container
      page-content/            // inner content container

    pages/                     // page-level compositions (UI for app/)
      landing/
      jobs/
      progress/
      profile/
        components/
          profile-header/
          key-information/
          resume-summary/
      about/
      faq/
      contact/
      auth/
        sign-in/
        sign-up/

  store/
    index.ts                   // configureStore, devTools
    provider.tsx               // Redux Provider
    hooks.ts                   // typed hooks (useAppDispatch/useAppSelector)

  styles/
    globals.scss               // base styles, fonts, colors
    reset.scss                 // CSS reset
    design-variables.module.scss // CSS variables

tsconfig.json                  // alias @/* => src/*
next.config.js                 // Next configuration
```

### Component patterns

- Base components with flexible props (e.g., `general-header` accepts `left`, `middle`, `right`)
- Composed components built from base ones (e.g., `guest-header` and `signed-in-header`)
- Kebab-case file/folder names; each component has `.tsx` and `.module.scss`

### Contributors

- Kateryna Shylina (@katryamucaca)
