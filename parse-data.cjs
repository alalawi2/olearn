const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

function readSheet(filePath, sheetIndex) {
  const wb = XLSX.readFile(filePath);
  const sheetName = wb.SheetNames[sheetIndex];
  return XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { defval: '' });
}

function readSheetByName(filePath, name) {
  const wb = XLSX.readFile(filePath);
  const match = wb.SheetNames.find(s => s.includes(name));
  if (!match) return [];
  return XLSX.utils.sheet_to_json(wb.Sheets[match], { defval: '' });
}

// ===== SQU UNDERGRADUATE =====
console.log('Parsing SQU undergraduate...');
const ugData = readSheetByName('/tmp/olearn-data/SQU__Growth_of_undergraduate_students/Growth of Undergraduate students-1.xlsx', 'Growth of Undergraduate');
// Fields: Academic Year, Student Status, Qualification, Gender, Number
const ugClean = ugData.filter(r => r['Academic Year'] || r['العام الاكاديمي']).map(r => ({
  year: String(r['Academic Year'] || r['العام الاكاديمي'] || ''),
  status: String(r['Student Status'] || r['حالة الطلبة'] || ''),
  qualification: String(r['Qualification'] || r['المؤهل'] || ''),
  gender: String(r['Gender'] || r['النوع'] || ''),
  count: Number(r['Number'] || r['العدد'] || 0),
}));
console.log('  UG rows: ' + ugClean.length + ', sample:', JSON.stringify(ugClean[0]));

// ===== SQU POSTGRADUATE =====
console.log('Parsing SQU postgraduate...');
const pgData = readSheetByName('/tmp/olearn-data/SQU__Growth_of_postgraduate_students/Growth of postgraduate students-1.xlsx', 'Growth');
const pgClean = pgData.filter(r => r['Academic Year'] || r['العام الاكاديمي']).map(r => ({
  year: String(r['Academic Year'] || r['العام الاكاديمي'] || ''),
  status: String(r['Student Status'] || r['حالة الطلبة'] || ''),
  qualification: String(r['Qualification'] || r['المؤهل'] || ''),
  gender: String(r['Gender'] || r['النوع'] || ''),
  count: Number(r['Number'] || r['العدد'] || 0),
}));
console.log('  PG rows: ' + pgClean.length);

// ===== SQU RESEARCH PAPERS =====
console.log('Parsing SQU research...');
const resData = readSheetByName('/tmp/olearn-data/SQU__Growth_in_number_of_research_papers_published_in_Journals_an/Growth in number of research papers published in Journals and presented in conferences-1.xlsx', 'research');
const resClean = resData.filter(r => r['السنة'] || r['Year']).map(r => ({
  year: Number(r['السنة'] || r['Year'] || 0),
  type: String(r['مجالات النشر'] || r['Publication Area'] || ''),
  count: Number(r['العدد'] || r['Number'] || 0),
}));
console.log('  Research rows: ' + resClean.length);

// ===== SQU EMPLOYEES =====
console.log('Parsing SQU employees...');
const empData = readSheetByName('/tmp/olearn-data/SQU__Number_of_employees_at_the_university/Number of employees at the university-1.xlsx', 'employees');
const empClean = empData.filter(r => r['العام'] || r['Year']).map(r => ({
  year: Number(r['العام'] || r['Year'] || 0),
  department: String(r['جهة العمل'] || r['Job Location'] || ''),
  nationality: String(r['الجنسية'] || r['Nationality'] || ''),
  gender: String(r['النوع'] || r['Gender'] || ''),
  count: Number(r['العدد'] || r['Number'] || 0),
}));
console.log('  Employee rows: ' + empClean.length);

// ===== SQU STAFF ON SCHOLARSHIP =====
console.log('Parsing SQU scholarships...');
const schData = readSheetByName('/tmp/olearn-data/SQU__Number_of_Staff_on_Scholarship/Number of Staff on Scholarship-1.xlsx', 'Staff on Scholarship');
const schClean = schData.filter(r => r['Year']).map(r => ({
  year: Number(r['Year'] || 0),
  college: String(r['Job Location'] || ''),
  degree: String(r['Degree'] || ''),
  gender: String(r['Gender'] || ''),
  count: Number(r['number'] || 0),
}));
console.log('  Scholarship rows: ' + schClean.length);

// ===== SQU HIGHLIGHTS =====
console.log('Parsing SQU highlights...');
const hlData = readSheetByName('/tmp/olearn-data/SQU__Statistical_Highlights_of_the_Sultan_Qaboos_University/Statistical Highlights of the Sultan Qaboos University-1.xlsx', 'الإحصاءات');
console.log('  Highlights rows: ' + hlData.length);

// ===== UTAS GRADUATES =====
console.log('Parsing UTAS graduates...');
const utasGrad1 = readSheetByName('/tmp/olearn-data/UTAS__Number_of_Graduates_from_University_of_Technology_and_Applie/Number of Graduates from University of Technology and Applied Sciences for Academic Year 2024-2025-1.xlsx', 'البيانات');
console.log('  UTAS grad 24-25 rows: ' + utasGrad1.length + ', sample:', JSON.stringify(utasGrad1[0]));

// ===== UTAS HR =====
console.log('Parsing UTAS HR...');
const utasHR = readSheetByName('/tmp/olearn-data/UTAS__Statistics_of_Human_Resources_Working_at_the_University_of_T/Statistics of Human Resources Working at the University of Technology and Applied Sciences for the Academic Year 2025-2026-1.xlsx', 'البيانات');
console.log('  UTAS HR rows: ' + utasHR.length + ', sample:', JSON.stringify(utasHR[0]));

// ===== MOE SCHOOLS =====
console.log('Parsing MOE schools...');
const moeData = readSheetByName('/tmp/olearn-data/MOE__Class_Rooms_in_Schools/class schols-1.xlsx', 'شعب حسب المدرسة');
const moeClean = moeData.filter(r => r['SchoolCode']).map(r => ({
  region: Number(r['Region'] || 0),
  regionName: String(r['RegionName'] || ''),
  wilaya: String(r['SchoolWilaya'] || ''),
  town: String(r['SchoolTown'] || ''),
  code: Number(r['SchoolCode'] || 0),
  nameAr: String(r['arSchoolName'] || ''),
  classes: String(r['classes'] || ''),
  educationType: String(r['Type of education'] || ''),
  workingTime: String(r['Working time'] || ''),
  gender: String(r['school gender'] || ''),
}));
console.log('  MOE schools: ' + moeClean.length);

// ===== SAVE ALL =====
const output = {
  sqUndergrad: ugClean,
  sqPostgrad: pgClean,
  sqResearch: resClean,
  sqEmployees: empClean,
  sqScholarships: schClean,
  sqHighlights: hlData,
  utasGraduates: utasGrad1,
  utasHR: utasHR,
  moeSchools: moeClean,
};

fs.writeFileSync('/tmp/olearn-data/parsed-all.json', JSON.stringify(output, null, 2));
console.log('\nAll data saved to /tmp/olearn-data/parsed-all.json');

// Print summary stats
console.log('\n=== SUMMARY ===');
console.log('SQU Undergrad: ' + ugClean.length + ' records, years: ' + [...new Set(ugClean.map(r => r.year))].sort().slice(-5).join(', '));
console.log('SQU Postgrad: ' + pgClean.length + ' records');
console.log('SQU Research: ' + resClean.length + ' records, years: ' + [...new Set(resClean.map(r => r.year))].sort().slice(-5).join(', '));
console.log('SQU Employees: ' + empClean.length + ' records');
console.log('SQU Scholarships: ' + schClean.length + ' records');
console.log('UTAS Graduates: ' + utasGrad1.length + ' records');
console.log('UTAS HR: ' + utasHR.length + ' records');
console.log('MOE Schools: ' + moeClean.length + ' schools');

// Unique years in UG
const ugYears = [...new Set(ugClean.map(r => r.year))].sort();
console.log('\nUG Years: ' + ugYears.join(', '));
console.log('UG Statuses: ' + [...new Set(ugClean.map(r => r.status))].join(', '));
console.log('UG Qualifications: ' + [...new Set(ugClean.map(r => r.qualification))].join(', '));
console.log('UG Genders: ' + [...new Set(ugClean.map(r => r.gender))].join(', '));

// MOE regions
const regions = [...new Set(moeClean.map(r => r.regionName))];
console.log('\nMOE Regions: ' + regions.join(', '));
console.log('MOE Education Types: ' + [...new Set(moeClean.map(r => r.educationType))].join(', '));
console.log('MOE School Genders: ' + [...new Set(moeClean.map(r => r.gender))].join(', '));

// UTAS branches
console.log('\nUTAS Grad keys: ' + Object.keys(utasGrad1[0] || {}).join(', '));
console.log('UTAS HR keys: ' + Object.keys(utasHR[0] || {}).join(', '));
