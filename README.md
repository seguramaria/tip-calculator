# Tip Calculator 🍔🍟

This is a **React** web app created with **Vite** and styled with **Tailwind CSS**. Lets users browse products, filter by category, and add a tip, with custom hooks managing the order state.

## Features

- **Browse and Filter Products**: Products are categorized, allowing users to filter and find what they need easily.
- **Order Management**: Custom hooks manage the state of the order, letting users add or remove products from the cart dynamically.
- **Tip Calculation**: Users can add a tip to their order, which is reflected in the final price calculation.
- **Shopping Cart**: Displays all added products with a live-updated total price.

## Installation

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/seguramaria/tip-calculator.git
   cd repository-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser to view the app.

## Code Structure

- `src/hooks`: Contains custom hooks for order management, including adding/removing products, calculating totals, and handling tips.
- `src/components`: Holds UI components, like category filters, the cart, and the tip input form.
- `src/styles`: Tailwind CSS configuration files for consistent styling.

## Available Scripts

- `npm run dev`: Runs the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build locally.

## Tech Stack

- **React** with **Vite** for fast bundling.
- **Tailwind CSS** for styling.
- **Custom Hooks** to manage order and tip calculations.
