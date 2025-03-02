# project_management_tool_backend
# Backend Implementation

## Technologies Used
- **Node.js** for backend development
- **Type Conversion & Validation**:
  - Supported types: `boolean`, `byte`, `short`, `long`, `float`, `double`, `string`, `ArrayBuffer`
  - Special cases: Rounding, `NaN`, `BigInt`, negative zero handling
- **Buffer & Memory Management**:
  - Utilized `ArrayBuffer`, `SharedArrayBuffer`, `DataView`
- **Error Handling**:
  - Custom exception handling for invalid data
- **Functions Exported**:
  - Data validation and transformation utilities

## Project Overview
This backend ensures **data integrity, proper API request handling, and structured responses** for the project.

## How to Run
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-repo-name>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```

## Folder Structure
```
📂 backend
 ┣ 📂 src
 ┃ ┣ 📜 validation.js  # Type validation logic
 ┃ ┣ 📜 errorHandler.js  # Custom error handling
 ┃ ┣ 📜 bufferUtils.js  # Buffer & memory management
 ┃ ┗ 📜 index.js  # Main entry point
 ┣ 📜 package.json
 ┗ 📜 README.md
```

## API Endpoints (if applicable)
- `POST /validate` - Validates input data
- `GET /convert` - Converts data types

## License
This project is open-source under the **MIT License**.
