# Next.js Country Dashboard

## Overview
This is a **Next.js** application that displays country information fetched from the [REST Countries API](https://restcountries.com/). The app allows users to search, filter, and sort countries, view details, and toggle between light and dark modes.

## Features
✅ **Country List** - Displays a list of all countries
✅ **Search Functionality** - Search for countries by name or capital
✅ **Sort Functionality** - Sort countries by population (ascending/descending)
✅ **Filter by Region** - Filter countries based on continents
✅ **Country Details** - View detailed information about each country
✅ **Dark Mode Toggle** - Switch between light and dark themes

## Tech Stack
- **Next.js** - Framework for React
- **TypeScript** - Strongly typed JavaScript
- **CSS Grid & Flexbox** - Responsive UI design
- **React Hooks** - State and effects management
- **REST API** - Fetching country data from `restcountries.com`

## Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/nextjs-country-dashboard.git
cd nextjs-country-dashboard
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```
The app will be available at: **http://localhost:3000**

## Folder Structure
```
├── src/
│   ├── components/        # UI Components
│   ├── pages/             # Next.js Pages
│   ├── hooks/             # Custom Hooks
│   ├── styles/            # Global Styles
│   ├── utils/             # Sorting & Filtering Utilities
│   ├── context/           # Theme Context API
│   ├── types/             # TypeScript Types
│   ├── tests/             # Unit Tests
```

## API Integration
The app fetches data from the **REST Countries API** via a custom **Next.js API route**.
- API Route: `/api/countries`
- External Source: `https://restcountries.com/v3.1/all`

## Deployment
This project can be deployed easily to **Vercel**:
```sh
npm run build
vercel deploy
```

## License
This project is **open-source** and free to use.
