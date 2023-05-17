const BASE_URL = 'http://127.0.0.1:8000';

export async function getDepartments() {
  const response = await fetch(`${BASE_URL}/api/department`);

  console.log(response);
  return await response.json();
}

export async function postDepartment(department) {
  const response = await fetch(`${BASE_URL}/api/department`, {
    method: 'POST',
    body: JSON.stringify(department),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log(response);
  return await response.json();
}

export async function deleteDepartment(departmentId) {
  return await fetch(`${BASE_URL}/api/department/${departmentId}`, { method: 'DELETE' });
}

export async function putDepartment(department) {
  const response = await fetch(`${BASE_URL}/api/department/${department.id}/`, {
    method: 'PUT',
    body: JSON.stringify(department),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log(response);
  return await response.json();
}

export async function getEmployees() {
  const response = await fetch(`${BASE_URL}/api/employee`);

  console.log(response);
  return await response.json();
}

export async function postEmployee(employee) {
  const response = await fetch(`${BASE_URL}/api/employee`, {
    method: 'POST',
    body: JSON.stringify(employee),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log(response);
  return await response.json();
}

export async function deleteEmployee(employeeId) {
  return await fetch(`${BASE_URL}/api/employee/${employeeId}`, { method: 'DELETE' });
}

export async function putEmployee(employee) {
  const response = await fetch(`${BASE_URL}/api/employee/${employee.id}/`, {
    method: 'PUT',
    body: JSON.stringify(employee),
    headers: { 'Content-Type': 'application/json' }
  });

  console.log(response);
  return await response.json();
}

export async function getVacations(departmentId) {
  const response = await fetch(`${BASE_URL}/api/vacations/${departmentId}`);

  console.log(response);
  return await response.json();
}

export async function deleteVacation({ departmentId, employeeId }) {
  return await fetch(`${BASE_URL}/api/vacations/${departmentId}/`, {
    method: 'PATCH',
    body: JSON.stringify({ id: employeeId }),
    headers: { 'Content-Type': 'application/json' }
  });
}
