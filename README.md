# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Toggle Theme Component

This is a simple React component that allows users to toggle between light and dark themes. It stores the user's theme preference in `localStorage` so that the chosen theme persists across sessions.

## Features
- **LocalStorage Persistence**: Saves the user's theme preference in `localStorage`, ensuring the theme persists even after a page reload or revisit.
- **Dynamic Theme Switch**: Users can toggle between dark and light themes by clicking a button.
- **Responsive UI**: The component dynamically updates the UI to reflect the current theme, displaying the active theme in the heading and button.


# React Product Card Component

This project is a simple **Product Card** component in React, where users can view products and add them to their cart. The component dynamically displays products from a JSON file and allows the user to add products to the cart.

## Features

- **Product List**: Displays a list of products fetched from a JSON file.
- **Add to Cart**: Users can click on the "Add to Cart" button to add items to their cart.
- **Cart State**: The component manages the cart state using React's `useState` hook.

### `products.json`

The products are stored in a `products.json` file and contain basic product information such as the name, image, and price.

Example JSON structure:

```json
[
  {
    "id": 1,
    "name": "Shoes",
    "img": "https://example.com/shoes.jpg",
    "price": 300
  },
  {
    "id": 2,
    "name": "Camera",
    "img": "https://example.com/camera.jpg",
    "price": 500
  }
]
