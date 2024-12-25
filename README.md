# Node.js Checklist System

## Description

This project is a Checklist System built using Node.js. It evaluates input data fetched from an API against pre-defined rules and displays a dashboard showing the results of the evaluation (Pass/Fail).

---

## Features

- **Dynamic Rule Evaluation**: Checklist rules are modular and easy to modify.
- **Frontend Dashboard**: Displays the evaluation results interactively.
- **Modular Codebase**: Clean separation of concerns with dedicated folders for services, configuration, and public files.
- **Animated Background**: Enhanced UI with a modern, animated gradient background.

---

## Directory Structure

```
Checklist-Dashboard/
├── server.js             # Main server logic
├── config/
│   └── checklistRules.js # Modular checklist rules
├── services/
│   └── apiService.js     # API interaction logic
├── public/
    ├── index.html        # Frontend HTML file
    ├── styles.css        # Styling for the dashboard
    └── script.js         # Frontend logic
```

---

## Setup Instructions

### Prerequisites

- Install [Node.js](https://nodejs.org/) and npm.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/D-4-DIBAKAR/Checklist-Dashboard.git
   cd Checklist-Dashboard
   ```
2. Install dependencies:
   ```bash
   npm install express axios
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open a browser and visit:
   ```
   http://localhost:3000
   ```

---

## How to Add New Rules

1. Open `config/checklistRules.js`.
2. Add a new rule object to the `checklistRules` array. Example:
   ```javascript
   {
     name: 'New Rule',
     check: (data) => data.someField === 'desiredValue',
   }
   ```
3. Save the file. The new rule will automatically apply.

---

## Example Output

When you open the browser, the dashboard will display a table showing the checklist rules and their evaluation statuses:

| Rule               | Status |
| ------------------ | ------ |
| Valuation Fee Paid | Passed |
| UK Resident        | Passed |
| Risk Rating Medium | Passed |
| LTV Below 60%      | Failed |

---

## API Details

- The application fetches data from the following endpoint:
  ```
  http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639
  ```

---

## Technologies Used

- **Node.js**: Backend framework.
- **Express.js**: For server-side logic.
- **Axios**: For API requests.
- **HTML/CSS**: Frontend design and structure.
- **JavaScript**: Frontend logic and dynamic updates.

---

## Future Enhancements

- Add more dynamic checklist rules.
- Improve UI with additional animations or a framework like React.
- Add user authentication to access the dashboard.

---
### Screenshots
![image](https://github.com/user-attachments/assets/d7a563ea-2eaa-49ae-8532-45579a65e9cc)

---
 
