# Admin Dashboard

This project is a fullstack application that provides an admin dashboard for managing products. It consists of a backend built with Node.js and TypeScript, and a frontend developed using React and TailwindCSS.

## Tech Stack

- **Backend**: Node.js, TypeScript, Express
- **Frontend**: React, TailwindCSS
- **State Management**: React Query or SWR
- **Authentication**: Token-based authentication
- **Containerization**: Docker

## Features

- **Product Management**: List, create, edit, and delete products.
- **Responsive Design**: Suitable for mobile, tablet, and desktop views.
- **Form Validation**: Validate product forms and display error messages.
- **Authentication**: Simple token-based authentication for secure access.
- **Search and Filter**: Optional feature to search or filter products by name or tag.

## Project Structure

```
admin-dashboard
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- Docker (for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd admin-dashboard
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

To run the application using Docker, execute the following command in the root directory of the project:

```
docker-compose build
docker-compose up
```

This will start both the backend and frontend services.

### Usage

- Access the admin dashboard at `http://localhost:3000`.
- Use the provided UI to manage products.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.