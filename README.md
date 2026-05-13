# Hintro Frontend Dashboard

Frontend internship assignment submission for Hintro built using React, SCSS, and Axios. The project recreates the provided Figma dashboard design while integrating mock APIs and handling multiple frontend states such as loading, empty, and populated dashboards.

The application focuses on responsive UI implementation, reusable component architecture, clean API integration, and production-style frontend engineering practices.

---

## Live Demo

- Live URL: [ Add deployed link here ]
- Video Walkthrough: [ Add video link here ]

---

## Features

### Dashboard & UI
- Responsive dashboard UI across desktop and mobile layouts
- Sidebar navigation with mobile drawer support
- Dashboard statistic cards with dynamic API-driven data
- Recent call history section with responsive rendering
- Logout confirmation modal flow
- Consistent SCSS-based design system using reusable variables and mixins

### State Handling
- Loading state handling for async dashboard requests
- Empty state handling for new users (`u1`)
- Populated dashboard handling for active users (`u2`)
- Error state handling for failed API requests

### API Integration
- API-driven dashboard rendering using Axios
- Centralized API abstraction layer
- Dynamic user-based rendering using request headers
- Utility-based formatting for durations and timestamps

### Feedback System
- Feedback submission flow
- Feedback persistence using localStorage
- Persistent UI state across refreshes

### Frontend Engineering
- Reusable component-based architecture
- Modular SCSS organization
- Separation of concerns between UI, state, hooks, and services
- Shared utility functions for reusable formatting logic

---

## Tech Stack

### Frontend
- React
- Vite
- React Router

### Styling
- SCSS (Sass)
- CSS Variables

### Data & API
- Axios
- Context API

### Other
- localStorage
- Responsive Design Principles

---

## Project Structure

```text
HINTRO/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   └── Layout/
│   │       ├── Layout.jsx
│   │       ├── Navbar.jsx
│   │       └── Sidebar.jsx
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   └── feedback/
│   │
│   ├── services/
│   │   └── api/
│   │       ├── client.js
│   │       └── endpoints.js
│   │
│   ├── shared/
│   │   ├── context/
│   │   │   └── UserContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useForm.js
│   │   │   ├── useUser.js
│   │   │   └── useDashboardData.js
│   │   │
│   │   └── utils/
│   │       └── formatters.js
│   │
│   ├── styles/
│   │
│   ├── ui/
│   │   └── components/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
│
├── package.json
└── README.md
```

---

## Architecture Notes

### Feature-Based Structure
The application follows a modular feature-based structure where dashboard and feedback flows are separated into dedicated feature folders for scalability and maintainability.

### Shared UI Components
Reusable UI primitives are placed under `ui/components` to avoid duplication and maintain consistent design patterns across the application.

### API Layer Abstraction
API requests are centralized through Axios wrappers and endpoint abstraction layers inside `services/api`, making the codebase easier to scale and maintain.

### Context-Based State Management
Global user-related state and asynchronous dashboard orchestration are handled through Context API and custom hooks.

### Utility-Driven Formatting
Reusable utility functions are used for formatting durations, timestamps, and reusable display transformations.

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone [ repository-url ]
cd [ project-folder ]
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Run Development Server on Mobile Network

```bash
npm run dev -- --host
```

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

---

## API Details

### Base URL

```text
https://mock-backend-hintro.vercel.app/
```

### API Endpoints Used

```text
GET /api/auth/profile
GET /api/auth/dashboard
GET /api/call-sessions/stats
GET /api/call-sessions?limit=10
```

### User Handling

The application supports two mock users through the `x-user-id` request header.

| User | Description |
|------|-------------|
| `u1` | New user with empty dashboard state |
| `u2` | Active user with populated/randomized dashboard data |

This enables validation of:
- Loading states
- Empty states
- Populated states
- Responsive rendering across different UI conditions

---

## Assumptions

- Mock API contracts remain stable during evaluation
- `u1` and `u2` are sufficient to represent major dashboard states
- Feedback persistence through localStorage is acceptable within assignment scope
- Authentication flow is simulated using request headers instead of full token-based authentication
- Mock API latency and randomized responses are expected behaviors

---

## Conventions Used

- Component-based frontend architecture
- Feature-oriented folder organization
- Reusable SCSS variables and mixins
- Responsive implementation across desktop and mobile layouts
- Separation of concerns between UI, API services, and state management
- Centralized Axios instance for request handling
- Reusable utility functions for formatting and transformations
- Modular and reusable presentational components

---

## Responsive Design Notes

- Desktop sidebar switches to mobile drawer navigation on smaller screens
- Dashboard cards adapt responsively across viewport sizes
- Typography and spacing are adjusted at responsive breakpoints
- Scroll behavior and overflow handling are optimized for mobile devices
- Interactive elements are touch-friendly and accessible on smaller devices

---

## Time & Data Formatting

The mock APIs return values such as durations and timestamps in raw formats (seconds, ISO timestamps). Utility-based formatting functions are used to transform data into user-friendly dashboard representations aligned with the Figma design.

Examples:
- Seconds → formatted durations
- ISO dates → readable timestamps
- Dynamic stats → display-friendly values

---

## Future Improvements

- Add automated testing using Vitest and React Testing Library
- Add accessibility improvements and keyboard navigation enhancements
- Introduce route-level lazy loading and code splitting
- Improve animation and transition systems
- Add toast notifications for feedback and async actions
- Move API configuration to environment variables
- Add CI/CD workflows for automated linting and build checks

---

## Deployment

- Live URL: [ Add deployed URL here ]

---

## Screenshots

### Desktop Dashboard
[ Add screenshot here ]

### Mobile Dashboard
[ Add screenshot here ]

### Empty State (u1)
[ Add screenshot here ]

### Populated State (u2)
[ Add screenshot here ]

### Feedback Flow
[ Add screenshot here ]

---

## Author

**Harshil Upadhyay**

Frontend Internship Assignment Submission  
Hintro Dashboard UI