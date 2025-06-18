# 🧵 Tera Threads

**Tera Threads** is a modern e-commerce web application that showcases products using the [FakeStore API](https://fakestoreapi.com/). The project is built with React and features a clean UI, smooth navigation, dynamic data fetching, and page transitions.

## 🚀 Features

- **Four Core Pages**:
  - `Home`: Showcases product listings with sorting and filtering capabilities.
  - `Product`: Displays detailed product information and a gallery of similar items.
  - `Cart`: Allows users to view and manage their selected items.
  - `NotFound`: A styled 404 page for undefined routes.

- **Dynamic Product Fetching**:
  - Uses `axios` to fetch products from FakeStore API.

- **Product Details Page**:
  - Displays:
    - Product image
    - Title
    - Description
    - Price
    - Quantity selector
    - Gallery of 3–4 similar items

- **Sorting and Filtering**:
  - Home page includes sorting options by **name** and **category**.

- **Routing with `react-router-dom`**:
  - Handles all app routes
  - Redirects invalid paths to the `NotFound` page
  - Invalid product URLs redirect to `Home`

## 🧱 Technologies Used

- React
- React Router DOM
- Axios
- Framer Motion
- FakeStore API
- (Optional) React Slick / Swiper for carousels
