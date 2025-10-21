# 🌿 Plantify - Paradise Nursery Shopping Application

A modern, React-based e-commerce platform for browsing and purchasing beautiful houseplants. Built with a focus on user experience and seamless shopping functionality.

![Plant Shop Banner](https://user-images.githubusercontent.com/59335572/166894759-c505d507-03c8-46d9-ad1c-570e1c8375ff.svg)

## 📋 Table of Contents
- [Features](#features)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏠 **Landing Page** | Attractive hero section with company information and call-to-action |
| 🛍️ **Product Listing** | Browse 6+ houseplants organized into 3+ categories with filtering options |
| 🛒 **Shopping Cart** | Add, remove, and adjust quantities with real-time total calculations |
| ❤️ **Wishlist** | Save favorite plants for later purchase |
| 👤 **User Authentication** | Secure login and signup with remember me functionality |
| 📱 **Responsive Design** | Fully optimized for desktop, tablet, and mobile devices |
| 🎨 **Modern UI/UX** | Clean, intuitive interface with smooth animations |

## 🚀 Live Demo

Check out the live application: **[Plantify Demo](https://plantify-paradise.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/810b0aec-ee6e-4c4c-acbc-6370bdab179e/deploy-status)](https://plantify-paradise.netlify.app/)

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library for building interactive interfaces
- **React Router** - Client-side routing for navigation
- **Context API** - State management for cart, wishlist, and authentication
- **CSS3** - Custom styling with modern CSS features
- **PeaceUI** - Component library for consistent design patterns

### Backend
- **MockBee** - Mock backend API for rapid prototyping ([Documentation](https://mockbee.netlify.app/))

### Development Tools
- **Git** - Version control
- **VS Code** - Code editor
- **npm** - Package manager
- **Netlify** - Deployment platform

## 📦 Installation & Setup

Follow these steps to run the project locally:

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/arnoldwainaina2865/plantify.git
   cd plantify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp example.env .env
   ```
   
   Add your configuration:
   ```env
   REACT_APP_JWT_SECRET=your_secret_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
plantify/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/          # Images and static files
│   ├── backend/         # MockBee backend configuration
│   ├── components/      # Reusable React components
│   ├── context/         # Context API providers
│   │   ├── auth-context.js
│   │   ├── cart-context.js
│   │   └── wishlist-context.js
│   ├── pages/           # Page components
│   │   ├── LandingPage/
│   │   ├── ProductListing/
│   │   ├── Cart/
│   │   ├── Wishlist/
│   │   ├── Login/
│   │   └── Signup/
│   ├── reducer/         # State reducers
│   ├── styles/          # CSS stylesheets
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── .gitignore
├── package.json
├── README.md
└── example.env
```

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
REACT_APP_JWT_SECRET=<<your_secret_key_here>>
```

## 💻 Usage

### For Coursera Submission
This project fulfills all requirements for the Paradise Nursery final project:

✅ **Landing Page**: Company background, hero image, and "Get Started" button  
✅ **Product Listing**: 6+ plants in 3+ categories with "Add to Cart" functionality  
✅ **Shopping Cart**: Full cart management with quantity adjustment and delete options  
✅ **Navigation**: Header with cart icon showing item count  
✅ **Responsive Design**: Works across all devices

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎯 Future Enhancements

- [ ] Search functionality with autocomplete
- [ ] Advanced filtering (price range, availability)
- [ ] Product reviews and ratings
- [ ] Order history tracking
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Social media sharing
- [ ] Dark mode toggle

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arnold Wainaina**

- GitHub: [@arnoldwainaina2865](https://github.com/arnoldwainaina2865)
- LinkedIn: [Arnold Wainaina](https://linkedin.com/in/arnoldwainaina)
- Email: arnoldwainaina2865@gmail.com

---

### 📝 Original Concept
This project was inspired by and built upon the plant shop concept by Divyansh Sareen.

### 🙏 Acknowledgments
- [Coursera](https://coursera.org) - For the project requirements
- [IBM](https://ibm.com) - For the Software Engineering course
- [MockBee](https://mockbee.netlify.app/) - For the mock backend
- [PeaceUI](https://peaceui.netlify.app/) - For UI components

---

⭐ If you found this project helpful, please consider giving it a star!

**Made with ❤️ by Arnold Wainaina**
