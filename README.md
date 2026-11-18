# RepAI — AI Fitness Performance Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_App-111827?style=for-the-badge&logo=vercel)](https://rep-ai-nine.vercel.app)
[![TypeScript](https://img.shields.io/badge/Frontend-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/vikas-g-10/RepAI/tree/main/frontend)
[![Python](https://img.shields.io/badge/Backend-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://github.com/vikas-g-10/RepAI/tree/main/backend)
[![License](https://img.shields.io/badge/License-Not_Specified-lightgrey?style=for-the-badge)](#license)

RepAI is an AI-powered fitness platform that brings training, nutrition, habit tracking, performance analysis, and gym discovery into one modern web experience.

**Live application:** https://rep-ai-nine.vercel.app

## Highlights

- Real-time posture and repetition tracking with MediaPipe Pose
- Personalized diet and macro planning
- AI meal photo analysis with nutrition estimates
- Fitness habit and workout-skip risk prediction
- Conversational AI gym coach with selectable personalities
- Performance telemetry and consistency analysis
- Real gym and fitness-location discovery through Geoapify
- Goal-based workout planning
- Responsive React and TypeScript interface

## Features

### AI Posture Trainer

Uses the device webcam to analyze exercise movement in real time. Supported exercises include squats, push-ups, bicep curls, lunges, and shoulder presses.

- Counts completed repetitions
- Reports live form feedback
- Calculates an in-browser form score
- Supports webcam and uploaded workout-video modes
- Offers voice-based coaching

### Diet Planner

Generates a personalized plan from age, height, weight, sex, activity level, fitness goal, and dietary preference.

- BMI and estimated BMR calculations
- Estimated daily calorie needs
- Protein, carbohydrate, and fat targets
- Four-meal split
- Diet-specific grocery recommendations

### AI Meal Photo Scanner

Uploads meal photos to a vision model for visible-food identification and nutritional estimates.

- Item-level confidence scores
- Estimated calories and macronutrients
- Remaining protein and calorie estimates
- Clear uncertainty reporting
- Honest handling of unclear or non-food images

> Meal analysis is visual estimation, not a laboratory measurement or medical assessment.

### Habit Tracker

Uses attendance, sleep, self-reported stress, soreness, and preferred training time to estimate workout-skip risk.

- Transparent rule-based score breakdown
- Low, moderate, or high risk classification
- Suggested workout nudge
- No black-box machine-learning prediction

### AI Gym Buddy

Provides contextual fitness coaching with several distinct personas:

- Friendly Gym Bro
- Drill Sergeant
- Biomechanist
- Recovery Coach

Conversation history remains scoped to the current browser session.

### Performance Analyzer

Analyzes completed-rep telemetry to provide descriptive performance metrics.

- Range-of-motion consistency
- Joint-angle consistency
- Rep tempo consistency
- Movement degradation
- Overall performance score when sufficient data is available

### Gym Finder

Searches real fitness locations using the Geoapify Geocoding and Places APIs.

- City, neighborhood, or postal-code search
- Location and map links
- 27 km default search radius
- No fabricated fallback listings when the provider fails

### Workout Planner

Provides local workout plans for:

- Muscle gain
- Strength
- Fat loss

The planner follows a Monday-Saturday push/pull/legs structure with Sunday reserved for rest or recovery.

## Technology Stack

| Area | Technologies |
|---|---|
| Frontend | React, TypeScript, Vite, TanStack Router/Start, Tailwind CSS, Radix UI |
| Media & UX | MediaPipe Pose, Lucide, browser Camera and Speech APIs |
| Backend | Python, FastAPI, Pydantic, HTTPX, Uvicorn |
| AI Services | Groq vision and chat models |
| Location Services | Geoapify Geocoding and Places APIs |
| Deployment | Vercel |

## Repository Structure

```text
RepAI/
├── backend/
│   ├── main.py                  # FastAPI application and API routes
│   ├── requirements.txt         # Python dependencies
│   └── test_meal_scanner.py     # Meal scanner tests
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── routes/              # TanStack file-based routes
│   │   ├── hooks/               # React hooks
│   │   └── lib/                 # Shared utilities
│   ├── public/                  # Static assets
│   └── package.json
├── vercel.json                  # Deployment configuration
└── README.md
```

## Getting Started

### Prerequisites

- Python 3.10 or newer
- Node.js 18 or newer
- npm
- A Groq API key for AI chat and meal analysis
- A Geoapify API key for gym search

### 1. Clone the Repository

```bash
git clone https://github.com/vikas-g-10/RepAI.git
cd RepAI
```

### 2. Configure the Backend

```bash
cd backend
python -m venv venv
```

Activate the environment:

**Windows**

```powershell
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `backend/.env`:

```dotenv
GROQ_API_KEY=your_groq_api_key
GEOAPIFY_API_KEY=your_geoapify_api_key

# Optional overrides
REPAI_MEAL_VISION_MODEL=qwen/qwen3.8-27b
REPAI_BUDDY_CHAT_MODEL=qwen/qwen3.8-27b
REPAI_GYM_FINDER_TIMEOUT_SECONDS=8
REPAI_GYM_FINDER_RADIUS_METERS=27000
```

Never commit API keys or `.env` files.

### 3. Start the Backend

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Backend URLs:

- API: http://localhost:8000
- Health check: http://localhost:8000/health

Interactive API documentation is available at:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

### 4. Install and Start the Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The development server normally runs at http://localhost:5173.

## API Overview

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/health` | Backend health check |
| `POST` | `/api/diet/plan` | Generate a diet and grocery plan |
| `POST` | `/api/diet/analyze-meal-photo` | Analyze an uploaded meal photo |
| `POST` | `/api/chat/buddy` | Chat with the AI gym coach |
| `POST` | `/api/habits/predict-skip` | Estimate workout-skip risk |
| `POST` | `/api/performance/report` | Analyze workout performance |
| `POST` | `/api/gyms/recommend` | Search for real nearby gyms |

## Build and Quality Checks

Create a production frontend build:

```bash
cd frontend
npm run build
```

Preview the built application:

```bash
npm run preview
```

Run the frontend linter:

```bash
npm run lint
```

## Browser Requirements

- Webcam permission is required for real-time posture analysis
- Camera access is required for meal-photo capture where supported
- Microphone or audio support may be required for voice features
- External AI and location features require server-side API configuration

## Configuration Notes

- The frontend expects the backend at `http://localhost:8000` during local development
- `GROQ_API_KEY` enables the meal scanner and AI coach
- `GEOAPIFY_API_KEY` enables gym search
- API keys must remain in `backend/.env`; never expose them to frontend code
- Nutrition, calorie, and fitness estimates are guidance rather than medical advice

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes with a clear message
4. Push the branch to your fork
5. Open a pull request

Before submitting, verify that backend APIs remain compatible and run the available frontend and backend checks.

## License

No license has been specified for this repository. Please contact the repository owner before using it outside personal or educational evaluation.

## Acknowledgements

- MediaPipe for browser-based pose tracking
- Groq for vision and conversational AI models
- Geoapify for geocoding and location search
- The React, TanStack, FastAPI, and open-source ecosystem

## Repository

- GitHub: https://github.com/vikas-g-10/RepAI
- Live Demo: https://rep-ai-nine.vercel.app
