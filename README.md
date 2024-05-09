##  Simple rest-API
------ 
###### 1. Setup NodeJS project:

```bash
npm init -y
```

Install necessary dependancies:
```bash
    npm install express mongoose body-parser
```

###### 2. MongoDB Installation and Setup:

```bash
npm install mongodb
```
-------- 
#### Set Up a MongoDB Instance:
- You have two options for running MongoDB:

###### a) Local Installation (for development purposes):
- Download the MongoDB Community Server from the official website: [Click to download](https://www.mongodb.com/docs/manual/installation/)
- Follow the installation instructions for your operating system.
Start the MongoDB server using the appropriate command (refer to the installation guide).

###### b) MongoDB Atlas (cloud-based option):
- Create a free MongoDB Atlas account: [click me](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/)
- Deploy a free cluster and create a database user.
- **Note** down the connection string provided by Atlas, which includes your cluster URL, database name, and username/password.

###### 3. Create Express Server:
- Create a file named ``server.js`` and set up your express server.

###### 4. Define Product Model:
- Create a directory named models and within that directory, create a file named ``Product.js``

###### 5. Create routes for Products:
- Create a directory named routes and within that directory, create a file named ``products.js``

###### 6. Run the Server:
- Now, you can run your server by executing this command:
```bash
    node server.js
```
- Your RESTful API for products will be accessible at:`` http://localhost:3000/products``
------------------------------

**Note:** The code provided here is just a basic example of how you could structure your project files.
