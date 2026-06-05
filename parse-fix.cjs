const XLSX = require('xlsx');
const fs = require('fs');

function readAllSheets(filePath) {
  const wb = XLSX.readFile(filePath);
  const result = {};
  for (const name of wb.SheetNames) {
    result[name] = XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1, defval: '' });
  }
  return result;
}

// ===== UTAS GRADUATES =====
console.log('=== UTAS Graduates 2024-2025 ===');
const utasGradSheets = readAllSheets('/tmp/olearn-data/UTAS__Number_of_Graduates_from_University_of_Technology_and_Applie/Number of Graduates from University of Technology and Applied Sciences for Academic Year 2024-2025-1.xlsx');
for (const [name, rows] of Object.entries(utasGradSheets)) {
  console.log('\nSheet: ' + name + ' (' + rows.length + ' rows)');
  rows.slice(0, 8).forEach((r, i) => console.log('  [' + i + '] ' + r.slice(0, 6).join(' | ')));
}

// ===== UTAS HR =====  
console.log('\n=== UTAS HR ===');
const utasHRSheets = readAllSheets('/tmp/olearn-data/UTAS__Statistics_of_Human_Resources_Working_at_the_University_of_T/Statistics of Human Resources Working at the University of Technology and Applied Sciences for the Academic Year 2025-2026-1.xlsx');
for (const [name, rows] of Object.entries(utasHRSheets)) {
  console.log('\nSheet: ' + name + ' (' + rows.length + ' rows)');
  rows.slice(0, 12).forEach((r, i) => console.log('  [' + i + '] ' + r.slice(0, 8).join(' | ')));
}

// ===== MOE SCHOOLS =====
console.log('\n=== MOE Schools ===');
const moeSheets = readAllSheets('/tmp/olearn-data/MOE__Class_Rooms_in_Schools/class schols-1.xlsx');
for (const [name, rows] of Object.entries(moeSheets)) {
  console.log('\nSheet: ' + name + ' (' + rows.length + ' rows)');
  rows.slice(0, 6).forEach((r, i) => console.log('  [' + i + '] ' + r.slice(0, 10).join(' | ')));
}

// ===== SQU Employees (try different sheet) =====
console.log('\n=== SQU Employees ===');
const empSheets = readAllSheets('/tmp/olearn-data/SQU__Number_of_employees_at_the_university/Number of employees at the university-1.xlsx');
for (const [name, rows] of Object.entries(empSheets)) {
  console.log('\nSheet: ' + name + ' (' + rows.length + ' rows)');
  rows.slice(0, 8).forEach((r, i) => console.log('  [' + i + '] ' + r.slice(0, 6).join(' | ')));
}

// ===== SQU Students by College =====
console.log('\n=== SQU Students by College ===');
const colSheets = readAllSheets('/tmp/olearn-data/SQU__Number_of_students_admitted_registered_graduated_in_the_scie/Number of students Admitted, Registered & Graduated in the Scientific and Humanities Colleges in the Academic year-1.xlsx');
for (const [name, rows] of Object.entries(colSheets)) {
  console.log('\nSheet: ' + name + ' (' + rows.length + ' rows)');
  rows.slice(0, 8).forEach((r, i) => console.log('  [' + i + '] ' + r.slice(0, 7).join(' | ')));
}
