# Gamehub - A Game & Apps Library

Gamehub is a modern, responsive web application built with React and Vite, designed as a comprehensive game and app library. It features user authentication, dynamic content display, and interactive elements to provide an engaging experience for users to explore and manage their favorite games and apps.

## Live Demo

🌐 **Live URL:** [https://best-store-9898.netlify.app/](https://best-store-9898.netlify.app/)

## Features

- **User Authentication:** Secure login and registration with Firebase, including Google sign-in and password reset functionality
- **Responsive Design:** Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dynamic Content:** Browse through 20+ popular games and apps with detailed information
- **Interactive UI:** Carousel banners, marquee scrolling sections, and smooth animations
- **User Profile Management:** Update profile information, change passwords, and view installed apps
- **Newsletter Subscription:** Functional newsletter signup with email validation
- **Private Routes:** Protected pages for authenticated users only
- **Installation Simulation:** Mock installation feature for games and apps with animations

## Tech Stack

### Frontend

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router 7** - Client-side routing with protected routes
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS

### Libraries & Tools

- **Firebase** - Authentication and backend services
- **React Toastify** - Toast notifications
- **React Fast Marquee** - Scrolling marquee component
- **React Spring** - Animation library
- **Lucide React** - Icon library
- **Axios** - HTTP client for API calls


### Key Dependencies

- `react-fast-marquee` - Smooth scrolling animations
- `react-spring` - Physics-based animations


## Project Structure

```
src/
├── AuthContexts/          # Authentication context and provider
├── Components/            # Reusable UI components
│   ├── HomePage/         # Homepage specific components
│   ├── ProfilePage/      # Profile management components
│   └── animation/        # Animation components
├── Hooks/                # Custom React hooks
├── Pages/                # Page components
├── Routes/               # Routing configuration
├── context/              # React contexts
├── Firebase/             # Firebase configuration
└── assets/               # Static assets

public/
├── games.json            # Games data
├── apps.json             # Apps data
└── CNAME                 # Netlify deployment configuration
```


## Authentication Features

- Email/password authentication
- Google OAuth integration
- Password reset via email
- Protected routes for authenticated users
- Profile update functionality

## Responsive Design

The application is fully responsive with breakpoints for:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px


## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
