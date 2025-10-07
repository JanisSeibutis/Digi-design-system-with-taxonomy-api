# Digi Design Taxonomy – Job Search Application

## Overview

This project is a **group-built web application** that leverages **Arbetsförmedlingen’s open source Design System** and the **Taxonomy API** to create a modern, accessible, and responsive platform for searching and viewing job ads.

The application is inspired by Arbetsförmedlingen’s own job search tools but is designed with our own UX, colors, and layout choices — ensuring both functionality and originality while maintaining accessibility and consistency through the design system.

---

## Key Features

- 🔍 Search for jobs using Arbetsförmedlingen’s **Taxonomy and Job Search API**
- 🧭 Browse, filter, and explore job ads dynamically
- 🎨 Built with Arbetsförmedlingen’s **open source design system**
- ⚙️ Built using **Vite + React + TypeScript**
- 📊 Structured API data presentation (lists, charts, filters)
- ♿ Accessible and responsive user interface

---

## Tech Stack

| Category        | Tools / Libraries                                                     |
| --------------- | --------------------------------------------------------------------- |
| Framework       | [React](https://react.dev/)                                           |
| Build Tool      | [Vite](https://vitejs.dev/)                                           |
| Language        | [TypeScript](https://www.typescriptlang.org/)                         |
| Styling         | Arbetsförmedlingen Design System + Styled Components                  |
| API             | [Arbetsförmedlingen JobSearch & Taxonomy API](https://jobtechdev.se/) |
| Data Fetching   | Fetch API / Axios                                                     |
| Version Control | Git & GitHub                                                          |

---

## APIs Used

The project integrates with the following endpoints:

- **Job Search API** → `https://jobsearch.api.jobtechdev.se/`  
  Used to fetch current and historical job ads.

- **Taxonomy API** → Provides access to job categories, occupations, and related metadata for structured filtering.

Documentation and further resources are available at [Jobtech Dev](https://jobtechdev.se/).

---

## Development Approach

- We used **React Context** to manage shared state (e.g. job data, filters).
- API integration was abstracted into dedicated services for maintainability.
- The UI follows **Arbetsförmedlingen’s design principles** for accessibility and structure.
- Each component is modular, reusable, and strongly typed with TypeScript.

---

## Contributors

This project was developed as part of a **group assignment** within the Front-End Development course.

**Team Members:**

- JanisSeibutis
- mikaelakihl
- axandranathalie

---

## License

This project is for educational purposes only and is **not affiliated with Arbetsförmedlingen**.  
All API data and design system resources are used according to [Jobtech Dev’s open data and design system license](https://jobtechdev.se/).

---
