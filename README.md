# EmployeeManagementAPI

EmployeeManagementAPI is a RESTful API for managing employee data. It provides endpoints for creating, retrieving, updating, and deleting employee records.

## Installation

To run the EmployeeManagementAPI, you need to have the following dependencies installed:

- Node.js (version X.X.X)
- npm (version X.X.X)

Please follow these steps to install and run the API:

1. Clone this repository: `git clone https://github.com/SainiJapneet/EmployeeManagementAPI.git`
2. Navigate to the project directory: `cd EmployeeManagementAPI`
3. Install the dependencies: `npm install express mongoose dotenv`

## Configuration

Before running the API, you need to set up the environment variables:

1. Create a `.env` file in the project root directory.
2. Define the following environment variables in the `.env` file:

   ```
   DB_URL=your_mongodb_connection_string
   ```

   Replace `your_mongodb_connection_string` with the connection string to your MongoDB database.

## Usage

To start the API server, run the following command:

```
node server.mjs
```

The API server will start running on port 4040 by default. You can access the API endpoints using a tool like cURL, Postman, or any HTTP client.

## API Endpoints

The EmployeeManagementAPI provides the following endpoints:

- `POST /api/addEmployee` - Add a new employee.
- `GET /api/getEmployee` - Get all employees.
- `GET /api/getEmployee/:id` - Get an employee by ID.
- `PATCH /api/updateEmployee/:id` - Update an employee by ID.
- `DELETE /api/deleteEmployee/:id` - Delete an employee by ID.

Please refer to the code and the route handlers for detailed information on request and response formats.

## Contributing

Contributions to the EmployeeManagementAPI project are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on GitHub.

When contributing, please ensure that you follow the existing coding style and conventions. Additionally, provide detailed information about your changes and test them thoroughly.

## Acknowledgements

- Express.js: [https://expressjs.com](https://expressjs.com)
- Mongoose: [https://mongoosejs.com](https://mongoosejs.com)
- dotenv: [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)
