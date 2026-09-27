RepAI — AI FITNESS PERFORMANCE LAB

# DESCRIPTION

RepAI is an AI-powered personal fitness and performance platform designed to provide training, nutrition, habit, recovery, and gym-discovery assistance in one application.

The project combines a modern web interface with a Python FastAPI backend and AI-powered services.

Main features include:

1. AI Posture Trainer

   * Uses the device webcam for real-time exercise tracking.
   * Uses MediaPipe Pose for body-position detection.
   * Counts exercise repetitions.
   * Provides real-time form feedback.
   * Supports exercises such as:

     * Squats
     * Push-ups
     * Bicep curls
     * Lunges
     * Shoulder press
   * Provides voice-based coaching.
   * Supports workout-video upload as a backup mode.

2. Diet Planner

   * Calculates BMI, BMR and estimated daily energy requirements.
   * Generates a personalized meal plan based on:

     * Age
     * Height
     * Weight
     * Sex
     * Activity level
     * Fitness goal
     * Dietary preference
   * Provides estimated calories and macronutrients.
   * Generates a grocery list.

3. AI Meal Photo Scanner

   * Allows users to upload a meal photograph.
   * Uses an AI vision model to identify visible food items.
   * Estimates calories and macronutrients.
   * Provides confidence levels and uncertainty information.
   * Helps estimate remaining protein/calorie requirements.

4. AI Fitness Habit Tracker

   * Evaluates recent training attendance.
   * Considers sleep, stress and soreness.
   * Estimates the likelihood of skipping a workout.
   * Suggests an appropriate training-time nudge.

5. Virtual Gym Buddy / AI Coach

   * Provides conversational AI fitness coaching.
   * Supports different coaching personalities.
   * Maintains conversation history for the current browser session.
   * Provides sentiment detection and motivational tips.

6. Performance Analyzer

   * Analyzes exercise-performance telemetry.
   * Calculates performance-related metrics such as:

     * Form score
     * Range-of-motion consistency
     * Joint-angle consistency
     * Rep/tempo consistency
   * Produces an overall performance score when enough data is available.

7. Gym Finder

   * Searches for real gyms and fitness locations using Geoapify.
   * Uses location/geocoding information to find nearby facilities.
   * Provides location and map information.
   * Does not replace failed real API requests with fabricated gym listings.

8. Workout Planner

   * Provides workout plans based on training goals.
   * The planner operates locally in the frontend and does not require an AI API call.

# TECHNOLOGY STACK

Frontend:

* React
* TypeScript
* Vite
* TanStack Router / TanStack Start
* Tailwind CSS
* Lucide
* MediaPipe Pose
* Browser Web APIs for camera and voice features

Backend:

* Python
* FastAPI
* Uvicorn
* Pydantic
* HTTPX
* python-multipart
* python-dotenv
* Groq API

External services:

* Groq AI API
* Geoapify Geocoding API
* Geoapify Places API
* MediaPipe CDN

# PROJECT STRUCTURE

RepAI/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── test_meal_scanner.py
│
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   ├── src/
│   └── public/
│       └── repai/
│           └── index.html
│
├── vercel.json
└── README.txt

# HOW TO RUN

1. Clone the repository

git clone https://github.com/vikas-g-10/RepAI.git

cd RepAI

2. Set up the backend

Open a terminal in the project root and run:

cd backend

Create a Python virtual environment:

python -m venv venv

Activate it on Windows:

venv\Scripts\activate

Activate it on Linux/macOS:

source venv/bin/activate

Install the required Python packages:

pip install -r requirements.txt

3. Configure API keys

The backend requires API keys for the AI-powered meal scanner, AI Gym Buddy, and Gym Finder.

Create a file:

backend/.env

Add:

GROQ_API_KEY=your_groq_api_key
GEOAPIFY_API_KEY=your_geoapify_api_key

Optional model configuration:

REPAI_MEAL_VISION_MODEL=qwen/qwen3.8-27b
REPAI_BUDDY_CHAT_MODEL=qwen/qwen3.8-27b

Optional Gym Finder configuration:

REPAI_GYM_FINDER_TIMEOUT_SECONDS=8
REPAI_GYM_FINDER_RADIUS_METERS=27000

Never commit the .env file to GitHub.

4. Start the backend

From the backend directory:

uvicorn main:app --reload --host 0.0.0.0 --port 8000

The backend will run at:

http://localhost:8000

Health check:

http://localhost:8000/health

5. Install frontend dependencies

Open a SECOND terminal.

Go to the project root:

cd RepAI

Then:

cd frontend

Install dependencies:

npm install

6. Start the frontend

From the frontend directory:

npm run dev

The Vite development server will normally be available at:

http://localhost:5173

Open the displayed localhost URL in your browser.

# RUNNING THE COMPLETE PROJECT

You need TWO terminals running at the same time.

Terminal 1 — Backend:

cd RepAI\backend

venv\Scripts\activate

uvicorn main:app --reload --host 0.0.0.0 --port 8000

Terminal 2 — Frontend:

cd RepAI\frontend

npm install

npm run dev

Then open:

http://localhost:5173

# API ENDPOINTS

Health:

GET /health

Diet Planner:

POST /api/diet/plan

Meal Photo Scanner:

POST /api/diet/analyze-meal-photo

AI Gym Buddy:

POST /api/chat/buddy

Habit Prediction:

POST /api/habits/predict-skip

Performance Analyzer:

POST /api/performance/report

Gym Finder:

POST /api/gyms/recommend

# IMPORTANT NOTES

* Start the backend before using features that require the FastAPI server.
* The frontend automatically uses http://localhost:8000 when running locally.
* The frontend communicates with the backend through the API endpoints above.
* The AI Meal Scanner and AI Gym Buddy require GROQ_API_KEY.
* The Gym Finder requires GEOAPIFY_API_KEY.
* Webcam features require browser camera permission.
* Voice coaching requires browser microphone/audio permissions where applicable.
* Nutrition and calorie values are estimates and should not be treated as medical or clinical advice.
* Keep all API keys in backend/.env and never upload them to GitHub.

# BUILD FRONTEND

To create a production frontend build:

cd frontend

npm run build

To preview the production build:

npm run preview

# LINTING

From the frontend directory:

npm run lint

# REPOSITORY

https://github.com/vikas-g-10/RepAI
