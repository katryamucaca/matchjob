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
    job-matches/ page.tsx      // AI-matched jobs for user
    progress/ page.tsx         // application progress tracker (drag-and-drop)
    profile/ page.tsx          // candidate profile editor
    about/ page.tsx            // About page
    faq/ page.tsx              // FAQs page
    contact/ page.tsx          // Contact page
    auth/
      signin/ page.tsx         // sign in
      signup/ page.tsx         // sign up

  components/
    general/                   // reusable UI components
      headers/                 // base header and composed variants
        general-header/
        guest-header/
        signed-in-header/
      button/                  // button (variants: primary/secondary)
      input/                   // text input
      textarea/                // multi-line text input
      modal/                   // base modal component
      loading-spinner/         // loading spinner
      badge/                   // status badge
      feature-card/            // landing feature card
      step-card/               // step/process card
      footer/                  // footer
      sidebar/                 // sidebar with user profile header
      job-card/                // full job card with details
      job-card-simple/         // simplified job card
      job-detail-modal/        // modal for viewing job details
      icons/                   // SVG icon components (28 icons)
      page/                    // page container
      page-content/            // inner content container

    hoc/                       // higher-order components
      withAuth.tsx             // authentication guard (redirect if not logged in)
      withGuest.tsx            // guest guard (redirect if logged in)

    pages/                     // page-level compositions (UI for app/)
      landing/
        components/            // landing page sections
          hero-section/
          how-it-works-section/
          why-matchjob-section/
          ai-matching-section/
          preview-jobs-section/
          cta-section/
          fill-form-modal/     // modal for collecting user info
          upload-resume-modal/ // modal for resume upload
      jobs/
      job-matches/
      progress/
        application-card/      // draggable application card
        column/                // droppable column for statuses
      profile/
        components/
          profile-header/
          key-information/
          resume-summary/
          edit-profile-modal/
          edit-key-info-modal/
          upload-new-resume-modal/
      about/
      faq/
      contact/
      auth/
        sign-in/
        sign-up/

  store/                       // Redux state management
    index.ts                   // configureStore with persistence rehydration
    provider.tsx               // Redux Provider with useRef store creation
    hooks.ts                   // typed hooks (useAppDispatch/useAppSelector)
    slices/
      authSlice.ts             // authentication state (userId, landingFormData)
      userSlice.ts             // user profile, key info, resume
      jobsSlice.ts             // jobs list and filters
      applicationsSlice.ts     // job applications and statuses
    selectors/
      jobsSelectors.ts         // job selectors (filtered, by ID)
      applicationsSelectors.ts // application selectors (grouped, with jobs)
    middleware/
      localStorage.ts          // localStorage persistence (save/load/clear)
    utils/
      mockApi.ts               // mock API delay and validation helpers

  hooks/
    useAuth.ts                 // auth hook (signIn, signUp, signOut)
    useSaveState.ts            // auto-save state to localStorage

  constants/
    sample-jobs.ts             // sample job data

  types/
    auth.types.ts              // auth-related types
    user.types.ts              // user profile types
    application.types.ts       // application and status types

  styles/
    globals.scss               // base styles
    reset.scss                 // CSS reset
    design-variables.module.scss // CSS variables (colors, shadows, fonts)
    breakpoints.module.scss    // responsive breakpoints
    typography/                // typography modules
      label.module.scss
      paragraph.module.scss
      title.module.scss

tsconfig.json                  // TypeScript config (alias @/* => src/*)
next.config.js                 // Next.js configuration
```

### Component patterns

- Base components with flexible props (e.g., `general-header` accepts `left`, `middle`, `right`)
- Composed components built from base ones (e.g., `guest-header` and `signed-in-header`)
- Kebab-case file/folder names; each component has `.tsx` and `.module.scss`

### Contributors

- Kateryna Shylina (@katryamucaca)
