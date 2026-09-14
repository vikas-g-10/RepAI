# AI Performance Lab

Redesign the FRONTEND of my uploaded RepAI Fitness project into a premium, unique AI fitness product UI.

CRITICAL — BACKEND LOCKED:

Do NOT modify, refactor, replace, or add anything to the backend.

Do NOT change API routes, request/response formats, Groq configuration, database logic, or backend behavior.

Use the existing backend exactly as it is.

Also preserve all existing functionality. Do NOT use mock data or remove features.

EXISTING FEATURES THAT MUST KEEP WORKING:

• AI Meal Scanner

• Diet Planner

• Gym Finder (/api/gyms/recommend)

• Workout Planner

• Gym Buddy / AI Coach

• Performance Analyzer

• Habit Predictor

• AI Posture Trainer

Only redesign the frontend presentation and interaction.

DESIGN:

Create a distinctive "AI Performance Lab" aesthetic — premium sports technology rather than a generic fitness dashboard.

Use:

• Dark carbon/graphite background

• Refined gold/amber accents

• Sora + Manrope typography

• Clean futuristic interface

• Modern adaptive sidebar/navigation

• Premium cards with subtle depth

• Smooth micro-interactions and transitions

• Strong spacing and visual hierarchy

• Responsive desktop/tablet/mobile design

• Minimal, professional animations

Avoid:

• Generic admin-dashboard appearance

• Excessive neon

• Excessive glassmorphism

• Clutter

• Stock-photo-heavy layouts

• Fake statistics

UX STRUCTURE:

Dashboard:

Create an impressive overview with today's workout, recent performance, quick actions and feature shortcuts. Show only data already available; never invent statistics.

AI Posture Trainer:

Make this the visual centerpiece.

Use a large camera/workout area with exercise name, rep count, form score, live feedback and controls.

Keep the EXISTING camera/pose detection logic unchanged.

Gym:

Use two polished tabs:

Gym Finder | Workout Planner

Gym Finder must continue using the existing /api/gyms/recommend API exactly as it does now.

Workout Planner must preserve:

Muscle Gain / Strength / Fat Loss

Monday–Saturday Push/Pull/Legs

Sunday Rest/Recovery

and all existing workout data.

Meal Scanner:

Create a polished upload/scan experience with image preview, loading state and nutrition result cards while keeping the existing API integration.

Gym Buddy:

Create a premium modern AI chat interface while keeping the existing chat/history/API behavior.

Performance + Habits:

Present the existing results in clean visual cards/progress views without changing calculations.

IMPORTANT IMPLEMENTATION RULE:

Inspect the current frontend and REUSE its existing functionality/API calls.

Change only components, layout, styling and frontend presentation needed for the redesign.

Do not rewrite working business logic unnecessarily.

Do not install unnecessary packages.

Make the result feel like a completely new premium product while preserving the underlying application.

Before finishing:

• Build the frontend

• Fix any frontend errors

• Verify navigation

• Verify all existing feature integrations remain connected

• Confirm ZERO backend files were changed

Do not spend time explaining the plan. Implement the redesign directly.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d3d4b19d-1f84-494c-8a06-a7ebd5ced6c7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
