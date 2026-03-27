# Manish Kumar Sharma - Portfolio

A premium, high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**. 
Refactored from a static HTML template to a component-based architecture with a modern "Midnight & Neon" aesthetic.

## 🚀 Key Features

*   **Premium Design**: "Midnight & Neon" theme featuring deep space backgrounds and vibrant Violet/Cyan gradients.
*   **Glassmorphism 2.0**: Advanced frosted glass effects on Navbar and Cards using `backdrop-filter`.
*   **Interactive UI**:
    *   Circular social and skill icons with glow effects.
    *   Animated "Scroll Reveal" sections using `IntersectionObserver`.
    *   Authentic GitHub buttons and hover interactions.
*   **Contact Form**: Functional email implementation via **EmailJS**.
*   **Theme System**: Fully functional **Dark/Light Mode** toggle.
*   **Responsive**: Pixel-perfect responsive layout for all devices.

## 🛠️ Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Ionicons](https://ionic.io/ionicons)
*   **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## 📂 Project Structure

```bash
src/
 ├── assets/        # Images and stylistic resources
 ├── components/    # Reusable UI components
 │   ├── Hero.jsx
 │   ├── Navbar.jsx
 │   ├── About.jsx
 │   ├── Skills.jsx
 │   ├── Projects.jsx
 │   ├── Experience.jsx
 │   ├── Contact.jsx
 │   ├── Footer.jsx
 │   └── Loader.jsx
 ├── App.jsx        # Main application logic (Theme, Scroll, Layout)
 ├── main.jsx       # Entry point
 └── index.css      # Global styles & Tailwind directives
```

## ⚡ Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment Variables**:
    *   Create a `.env` file in the root directory.
    *   Add your EmailJS credentials:
        ```bash
        VITE_EMAILJS_SERVICE_ID=your_service_id
        VITE_EMAILJS_TEMPLATE_ID=your_template_id
        VITE_EMAILJS_PUBLIC_KEY=your_public_key
        ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

5.  **Deploy to GitHub Pages**:
    ```bash
    npm run deploy
    ```

## 🎨 Customization

*   **Styles**: Global CSS variables (Colors, Transitions) are defined in `src/index.css`.
*   **Content**: Edit individual components in `src/components/` to update text and links.

---
© 2026 Manish Kumar Sharma. All rights reserved.
