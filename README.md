# Simple REST API with MySQL

---

#### 1. Setup Node.js Project:
- Initialize a Node.js project and install necessary dependencies like Express, Sequelize (an ORM for MySQL), and Body-parser.

```bash
npm init -y
npm install express sequelize body-parser mysql2
```
#### 2. MySQL Installation and Setup:
- Install MySQL on your ``local machine`` or use a cloud-based service like `Amazon RDS`.

#### 3. Create Express Server:
- Create a file named ``server.js`` and set up your Express server.

```bash
touch server.js
```
#### 4. Define Product Model:
- Create a directory named models and within that directory, create a file named ``Product.js`` to define your product model using Sequelize.

```bash
mkdir models
touch models/Product.js
```

#### 5. Create Routes for Products:
- Create a directory named routes and within that directory, create a file named ``products.js`` to define routes for handling products.

```bash
mkdir routes
touch routes/products.js
```

#### 6. Run the Server:
- Now, you can run your server by executing this command:

```bash
node server.js
```
