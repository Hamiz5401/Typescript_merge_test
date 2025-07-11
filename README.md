# TypeScript merge function with test 

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 14.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check if you have Node.js and npm installed by running:

```powershell
node --version
npm --version
```

## Installation

   **Install dependencies**:
   ```powershell
   npm install
   ```

   This will install all the required dependencies including:
   - TypeScript compiler
   - Jest testing framework
   - ts-jest (TypeScript preprocessor for Jest)
   - Type definitions for Jest

## Running Tests

### Run All Tests
```powershell
npm test
```

### Algorithm Complexity
- **Time Complexity**: O(n log n) where n is the total number of elements
- **Space Complexity**: O(n) for the temporary arrays during sorting

### Test Coverage

The test suite includes:
- ✅ Merging three sorted arrays
- ✅ Handling arrays of different lengths
- ✅ Working with empty arrays
- ✅ Handling single element arrays
- ✅ Handling duplicate values
- ✅ Working with negative numbers
- ✅ Performance testing with large arrays
