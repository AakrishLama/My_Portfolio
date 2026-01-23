# Portfolio Website

A modern, responsive, and visually immersive personal portfolio website built with React and Vite. This portfolio showcases my projects, technical skills, experience, and certifications with a premium dark-themed design featuring glassmorphism and interactive elements.

**Live Demo:** [https://aakrishlama-portfolio.vercel.app/](https://aakrishlama-portfolio.vercel.app/)

## Features

*   **Interactive Background**: A captivating "Liquid Ether" fluid simulation background using `three.js`.
*   **Modern Design**:
    *   **Glassmorphism**: Translucent, frosted-glass effects on cards and sections.
    *   **Dark Mode**: Sleek, high-contrast dark theme with vibrant accent gradients.
    *   **Smooth Animations**:
        *   Levitating hero image animation.
        *   Hover zoom effects on skills, experience timeline, and language lists.
        *   Smooth scrolling navigation.
*   **Comprehensive Sections**:
    *   **Hero**: Introduction with a levitating profile photo and bio.
    *   **Projects**: Grid of project cards with GitHub and live links.
    *   **Technical Skills**: Categorized skills with icons.
    *   **Experience**: Vertical timeline of professional history.
    *   **Leadership**: Highlighted leadership roles.
    *   **Education & Certifications**: Academic background and achievements with official logos.
    *   **Contact**: Integrated contact form using Formspree.

## Tech Stack

*   **Frontend Framework**: [React](https://reactjs.org/) (via Vite)
*   **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Animations)
*   **3D Graphics**: `three.js` (for the Liquid Ether background)
*   **Icons**: `react-icons`
*   **Deployment**: Vercel

## etting Started

To run this project locally on your machine:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/AakrishLama/My_Portfolio.git
    cd My_Portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:5173` to view the application.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── LiquidEther/   # Interactive background component
│   ├── Navbar/        # Fixed navigation
│   ├── Hero/          # Landing section
│   ├── Projects/      # Project grid
│   ├── ...            # Other sections (Skills, Experience, etc.)
├── data/
│   └── projectsData.js # Mock data for projects
├── App.jsx            # Main application layout
└── index.css          # Global styles & variables
```

