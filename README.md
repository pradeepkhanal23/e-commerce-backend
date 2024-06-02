# E-Commerce Backend REST API

This project is a backend REST API for an e-commerce application, built using Node.js, Express, PostgreSQL (pg), and Sequelize. The API provides endpoints for managing products, categories, tags, and their associations, allowing for CRUD operations and efficient data handling.

## Features

- **CRUD Operations** : Full support for Create, Read, Update, and Delete operations on Products, Tags, Categories and their associations.

- **Database Seeding** : Automatic database seeding on server start to initialize data.

- **Associations** : Efficient handling of many-to-many relationships between Products and Tags using a join table.

- **RESTful Endpoints** : Well-structured and easy-to-use RESTful API endpoints.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express**: Web framework for handling routing and middleware.
- **PostgreSQL**: Relational database for storing data.
- **Sequelize**: ORM for interacting with the PostgreSQL database.
- **pg**: PostgreSQL client for Node.js.

## Demo

The full demonstration on this project is available [here](https://youtu.be/hg7doYra2u8).

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./assets/project-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./assets/project-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./assets/project-demo-03.gif)

## Installation

1. Clone the repository:

```sh
git clone git@github.com:pradeepkhanal23/e-commerce-backend.git
cd e-commerce-backend
```

2. Install Dependencies

```sh
npm install
```

3. Use the `schema.sql` file in the `db` folder to create your database with PostgreSQL shell commands.

```sh
#postgres=# \i db/schema.sql
```

4. Use environment variables to store sensitive data like your PostgreSQL username, password, and database name by create a `.env` file in the root directory and add the following:

```sh
DB_NAME='your_database_name'
DB_USER='your_username'
DB_PASSWORD='your_password'
```

5. Run the server

```sh
npm run start
```

## Database Setup

This project uses Sequelize for database interactions. Ensure you have PostgreSQL installed and running.

1. **Database Configuration:**
   Update the database configuration in the config/config.json file with your PostgreSQL credentials.

2. **Sequelize Models:**
   The models are defined in the models directory and include Category, Product, Tag, and ProductTag.

3. **Database Seeding:**
   The seeds directory contains the seeding logic. The database is seeded automatically when the server starts.

## API Endpoints

**Tags**

- Get All Tags: GET /api/tags
- Get Tag by ID: GET /api/tags/:id
- Create New Tag: POST /api/tags
- Update Tag: PUT /api/tags/:id
- Delete Tag: DELETE /api/tags/:id

**Products**

- Get All Products: GET /api/products
- Get Product by ID: GET /api/products/:id
- Create New Product: POST /api/products
- Update Product: PUT /api/products/:id
- Delete Product: DELETE /api/products/:id

**Categories**

- Get All Categories: GET /api/categories
- Get Category by ID: GET /api/categories/:id
- Create New Category: POST /api/categories
- Update Category: PUT /api/categories/:id
- Delete Category: DELETE /api/categories/:id

**Product Tags**

- Get All Product Tags: GET /api/product-tags
- Get Product Tag by ID: GET /api/product-tags/:id
- Create New Product Tag: POST /api/product-tags
- Update Product Tag: PUT /api/product-tags/:id
- Delete Product Tag: DELETE /api/product-tags/:id

## License

This project is licensed under the `MIT License`.

## Questions

If you have any questions, feel free to reach out:

- **GitHub**: [pradeepkhanal23](https://github.com/pradeepkhanal23)
- **Email**: [pradeepkhanal642@gmail.com](mailto:pradeepkhanal642@gmail.com)
