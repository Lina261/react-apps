import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { EmployeeContextProvider } from "./contexts/employeeContext";
import { DepartmentContextProvider } from "./contexts/departmentsContext";
import { VacationContextProvider } from "./contexts/vacationsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <EmployeeContextProvider>
      <DepartmentContextProvider>
        <VacationContextProvider>
          <App />
        </VacationContextProvider>
      </DepartmentContextProvider>
    </EmployeeContextProvider>
);
