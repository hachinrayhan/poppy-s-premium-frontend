# Poppy's Premium

Poppy's Premium is an export business web application where admins can manage products and users can browse and place orders. The application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication.

# Live Site Link: https://poppys-premium.netlify.app/

# Admin Dashboard Access:

email: admin@pp.com
password: admin123

## Features

### User Authentication and Authorization

- **Signup**: Users can create new accounts with unique email addresses and passwords.
- **Login**: Authenticate users with JWT and allow access to protected routes.
- **OAuth Login**: Users can log in using third-party services (e.g., Google).
- **Store User Data**: User data is stored securely in MongoDB.

### Profile Management

- **View Profile**: Users can view their personal information including name, email, and address.
- **Edit Profile**: Users can update their personal information and change their passwords.
- **JWT Security**: All profile management routes are secured with JWT.

### CRUD Operations

- **Create Products**: Admins can add new products with detailed information.
- **Read Products**: Display a list of products for users to browse.
- **Update Products**: Admins can edit product details.
- **Delete Products**: Admins can delete products from the database.
- **JWT Security**: All product management routes are secured with JWT.

### Dashboard Implementation

- **Admin Dashboard**: Admins can manage products, view all users, and update their profiles.
- **User Dashboard**: Users can view their order history, update their profiles, and browse products.

### Additional Features

- **Responsive Design**: The application is responsive across desktop and mobile devices for an optimal user experience.
- **Cleaner UI**: The UI is designed for a neat and user-friendly interface.

## Project Structure

- **Backend**: Node.js, Express.js, MongoDB, JWT for authentication.
- **Frontend**: React.js, Tailwind CSS for styling.
