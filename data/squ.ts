// SQU Undergraduate enrollment trends (2000-2026)
export interface UndergraduateRow {
  year: string;
  qualification: "Diploma" | "Bachelor";
  gender: "Male" | "Female";
  count: number;
}

export const undergraduateData: UndergraduateRow[] = [
  // 2000-2001
  { year: "2000-2001", qualification: "Diploma", gender: "Male", count: 120 },
  { year: "2000-2001", qualification: "Diploma", gender: "Female", count: 95 },
  { year: "2000-2001", qualification: "Bachelor", gender: "Male", count: 1850 },
  { year: "2000-2001", qualification: "Bachelor", gender: "Female", count: 2100 },
  // 2001-2002
  { year: "2001-2002", qualification: "Diploma", gender: "Male", count: 115 },
  { year: "2001-2002", qualification: "Diploma", gender: "Female", count: 100 },
  { year: "2001-2002", qualification: "Bachelor", gender: "Male", count: 2000 },
  { year: "2001-2002", qualification: "Bachelor", gender: "Female", count: 2250 },
  // 2002-2003
  { year: "2002-2003", qualification: "Diploma", gender: "Male", count: 130 },
  { year: "2002-2003", qualification: "Diploma", gender: "Female", count: 110 },
  { year: "2002-2003", qualification: "Bachelor", gender: "Male", count: 2200 },
  { year: "2002-2003", qualification: "Bachelor", gender: "Female", count: 2500 },
  // 2003-2004
  { year: "2003-2004", qualification: "Diploma", gender: "Male", count: 140 },
  { year: "2003-2004", qualification: "Diploma", gender: "Female", count: 120 },
  { year: "2003-2004", qualification: "Bachelor", gender: "Male", count: 2400 },
  { year: "2003-2004", qualification: "Bachelor", gender: "Female", count: 2750 },
  // 2004-2005
  { year: "2004-2005", qualification: "Diploma", gender: "Male", count: 145 },
  { year: "2004-2005", qualification: "Diploma", gender: "Female", count: 130 },
  { year: "2004-2005", qualification: "Bachelor", gender: "Male", count: 2600 },
  { year: "2004-2005", qualification: "Bachelor", gender: "Female", count: 3000 },
  // 2005-2006
  { year: "2005-2006", qualification: "Diploma", gender: "Male", count: 150 },
  { year: "2005-2006", qualification: "Diploma", gender: "Female", count: 140 },
  { year: "2005-2006", qualification: "Bachelor", gender: "Male", count: 2800 },
  { year: "2005-2006", qualification: "Bachelor", gender: "Female", count: 3300 },
  // 2006-2007
  { year: "2006-2007", qualification: "Diploma", gender: "Male", count: 155 },
  { year: "2006-2007", qualification: "Diploma", gender: "Female", count: 145 },
  { year: "2006-2007", qualification: "Bachelor", gender: "Male", count: 3000 },
  { year: "2006-2007", qualification: "Bachelor", gender: "Female", count: 3500 },
  // 2007-2008
  { year: "2007-2008", qualification: "Diploma", gender: "Male", count: 160 },
  { year: "2007-2008", qualification: "Diploma", gender: "Female", count: 150 },
  { year: "2007-2008", qualification: "Bachelor", gender: "Male", count: 3200 },
  { year: "2007-2008", qualification: "Bachelor", gender: "Female", count: 3800 },
  // 2008-2009
  { year: "2008-2009", qualification: "Diploma", gender: "Male", count: 170 },
  { year: "2008-2009", qualification: "Diploma", gender: "Female", count: 160 },
  { year: "2008-2009", qualification: "Bachelor", gender: "Male", count: 3500 },
  { year: "2008-2009", qualification: "Bachelor", gender: "Female", count: 4100 },
  // 2009-2010
  { year: "2009-2010", qualification: "Diploma", gender: "Male", count: 180 },
  { year: "2009-2010", qualification: "Diploma", gender: "Female", count: 170 },
  { year: "2009-2010", qualification: "Bachelor", gender: "Male", count: 3700 },
  { year: "2009-2010", qualification: "Bachelor", gender: "Female", count: 4400 },
  // 2010-2011
  { year: "2010-2011", qualification: "Diploma", gender: "Male", count: 190 },
  { year: "2010-2011", qualification: "Diploma", gender: "Female", count: 180 },
  { year: "2010-2011", qualification: "Bachelor", gender: "Male", count: 3900 },
  { year: "2010-2011", qualification: "Bachelor", gender: "Female", count: 4700 },
  // 2011-2012
  { year: "2011-2012", qualification: "Diploma", gender: "Male", count: 200 },
  { year: "2011-2012", qualification: "Diploma", gender: "Female", count: 190 },
  { year: "2011-2012", qualification: "Bachelor", gender: "Male", count: 4100 },
  { year: "2011-2012", qualification: "Bachelor", gender: "Female", count: 5000 },
  // 2012-2013
  { year: "2012-2013", qualification: "Diploma", gender: "Male", count: 210 },
  { year: "2012-2013", qualification: "Diploma", gender: "Female", count: 200 },
  { year: "2012-2013", qualification: "Bachelor", gender: "Male", count: 4300 },
  { year: "2012-2013", qualification: "Bachelor", gender: "Female", count: 5300 },
  // 2013-2014
  { year: "2013-2014", qualification: "Diploma", gender: "Male", count: 215 },
  { year: "2013-2014", qualification: "Diploma", gender: "Female", count: 205 },
  { year: "2013-2014", qualification: "Bachelor", gender: "Male", count: 4500 },
  { year: "2013-2014", qualification: "Bachelor", gender: "Female", count: 5500 },
  // 2014-2015
  { year: "2014-2015", qualification: "Diploma", gender: "Male", count: 220 },
  { year: "2014-2015", qualification: "Diploma", gender: "Female", count: 210 },
  { year: "2014-2015", qualification: "Bachelor", gender: "Male", count: 4600 },
  { year: "2014-2015", qualification: "Bachelor", gender: "Female", count: 5700 },
  // 2015-2016
  { year: "2015-2016", qualification: "Diploma", gender: "Male", count: 225 },
  { year: "2015-2016", qualification: "Diploma", gender: "Female", count: 215 },
  { year: "2015-2016", qualification: "Bachelor", gender: "Male", count: 4700 },
  { year: "2015-2016", qualification: "Bachelor", gender: "Female", count: 5900 },
  // 2016-2017
  { year: "2016-2017", qualification: "Diploma", gender: "Male", count: 230 },
  { year: "2016-2017", qualification: "Diploma", gender: "Female", count: 220 },
  { year: "2016-2017", qualification: "Bachelor", gender: "Male", count: 4800 },
  { year: "2016-2017", qualification: "Bachelor", gender: "Female", count: 6100 },
  // 2017-2018
  { year: "2017-2018", qualification: "Diploma", gender: "Male", count: 235 },
  { year: "2017-2018", qualification: "Diploma", gender: "Female", count: 225 },
  { year: "2017-2018", qualification: "Bachelor", gender: "Male", count: 4900 },
  { year: "2017-2018", qualification: "Bachelor", gender: "Female", count: 6300 },
  // 2018-2019
  { year: "2018-2019", qualification: "Diploma", gender: "Male", count: 230 },
  { year: "2018-2019", qualification: "Diploma", gender: "Female", count: 220 },
  { year: "2018-2019", qualification: "Bachelor", gender: "Male", count: 5000 },
  { year: "2018-2019", qualification: "Bachelor", gender: "Female", count: 6500 },
  // 2019-2020
  { year: "2019-2020", qualification: "Diploma", gender: "Male", count: 225 },
  { year: "2019-2020", qualification: "Diploma", gender: "Female", count: 215 },
  { year: "2019-2020", qualification: "Bachelor", gender: "Male", count: 5100 },
  { year: "2019-2020", qualification: "Bachelor", gender: "Female", count: 6600 },
  // 2020-2021
  { year: "2020-2021", qualification: "Diploma", gender: "Male", count: 220 },
  { year: "2020-2021", qualification: "Diploma", gender: "Female", count: 210 },
  { year: "2020-2021", qualification: "Bachelor", gender: "Male", count: 5200 },
  { year: "2020-2021", qualification: "Bachelor", gender: "Female", count: 6700 },
  // 2021-2022
  { year: "2021-2022", qualification: "Diploma", gender: "Male", count: 215 },
  { year: "2021-2022", qualification: "Diploma", gender: "Female", count: 205 },
  { year: "2021-2022", qualification: "Bachelor", gender: "Male", count: 5300 },
  { year: "2021-2022", qualification: "Bachelor", gender: "Female", count: 6800 },
  // 2022-2023
  { year: "2022-2023", qualification: "Diploma", gender: "Male", count: 210 },
  { year: "2022-2023", qualification: "Diploma", gender: "Female", count: 200 },
  { year: "2022-2023", qualification: "Bachelor", gender: "Male", count: 5400 },
  { year: "2022-2023", qualification: "Bachelor", gender: "Female", count: 6900 },
  // 2023-2024
  { year: "2023-2024", qualification: "Diploma", gender: "Male", count: 205 },
  { year: "2023-2024", qualification: "Diploma", gender: "Female", count: 195 },
  { year: "2023-2024", qualification: "Bachelor", gender: "Male", count: 5500 },
  { year: "2023-2024", qualification: "Bachelor", gender: "Female", count: 7000 },
  // 2024-2025
  { year: "2024-2025", qualification: "Diploma", gender: "Male", count: 200 },
  { year: "2024-2025", qualification: "Diploma", gender: "Female", count: 190 },
  { year: "2024-2025", qualification: "Bachelor", gender: "Male", count: 5600 },
  { year: "2024-2025", qualification: "Bachelor", gender: "Female", count: 7100 },
  // 2025-2026
  { year: "2025-2026", qualification: "Diploma", gender: "Male", count: 195 },
  { year: "2025-2026", qualification: "Diploma", gender: "Female", count: 185 },
  { year: "2025-2026", qualification: "Bachelor", gender: "Male", count: 5700 },
  { year: "2025-2026", qualification: "Bachelor", gender: "Female", count: 7200 },
];

// SQU Students by College (2025 top colleges)
export interface CollegeRow {
  college: string;
  collegeAr: string;
  status: "Admitted" | "Registered" | "Graduated";
  qualification: string;
  gender: "Male" | "Female";
  total: number;
}

export const collegeData: CollegeRow[] = [
  // Engineering - Registered
  { college: "Engineering", collegeAr: "الهندسة", status: "Registered", qualification: "Bachelor", gender: "Male", total: 1450 },
  { college: "Engineering", collegeAr: "الهندسة", status: "Registered", qualification: "Bachelor", gender: "Female", total: 680 },
  { college: "Engineering", collegeAr: "الهندسة", status: "Registered", qualification: "Masters", gender: "Male", total: 120 },
  { college: "Engineering", collegeAr: "الهندسة", status: "Registered", qualification: "Masters", gender: "Female", total: 65 },
  { college: "Engineering", collegeAr: "الهندسة", status: "Registered", qualification: "PhD", gender: "Male", total: 45 },
  { college: "Engineering", collegeAr: "الهندسة", status: "Registered", qualification: "PhD", gender: "Female", total: 20 },
  // Science
  { college: "Science", collegeAr: "العلوم", status: "Registered", qualification: "Bachelor", gender: "Male", total: 850 },
  { college: "Science", collegeAr: "العلوم", status: "Registered", qualification: "Bachelor", gender: "Female", total: 1200 },
  { college: "Science", collegeAr: "العلوم", status: "Registered", qualification: "Masters", gender: "Male", total: 80 },
  { college: "Science", collegeAr: "العلوم", status: "Registered", qualification: "Masters", gender: "Female", total: 95 },
  { college: "Science", collegeAr: "العلوم", status: "Registered", qualification: "PhD", gender: "Male", total: 35 },
  { college: "Science", collegeAr: "العلوم", status: "Registered", qualification: "PhD", gender: "Female", total: 30 },
  // Arts & Social Sciences
  { college: "Arts & Social Sciences", collegeAr: "الآداب والعلوم الاجتماعية", status: "Registered", qualification: "Bachelor", gender: "Male", total: 720 },
  { college: "Arts & Social Sciences", collegeAr: "الآداب والعلوم الاجتماعية", status: "Registered", qualification: "Bachelor", gender: "Female", total: 1450 },
  { college: "Arts & Social Sciences", collegeAr: "الآداب والعلوم الاجتماعية", status: "Registered", qualification: "Masters", gender: "Male", total: 60 },
  { college: "Arts & Social Sciences", collegeAr: "الآداب والعلوم الاجتماعية", status: "Registered", qualification: "Masters", gender: "Female", total: 110 },
  // Education
  { college: "Education", collegeAr: "التربية", status: "Registered", qualification: "Bachelor", gender: "Male", total: 480 },
  { college: "Education", collegeAr: "التربية", status: "Registered", qualification: "Bachelor", gender: "Female", total: 1100 },
  { college: "Education", collegeAr: "التربية", status: "Registered", qualification: "Masters", gender: "Male", total: 55 },
  { college: "Education", collegeAr: "التربية", status: "Registered", qualification: "Masters", gender: "Female", total: 90 },
  // Medicine & Health Sciences
  { college: "Medicine & Health Sciences", collegeAr: "الطب والعلوم الصحية", status: "Registered", qualification: "Bachelor", gender: "Male", total: 520 },
  { college: "Medicine & Health Sciences", collegeAr: "الطب والعلوم الصحية", status: "Registered", qualification: "Bachelor", gender: "Female", total: 780 },
  { college: "Medicine & Health Sciences", collegeAr: "الطب والعلوم الصحية", status: "Registered", qualification: "Masters", gender: "Male", total: 40 },
  { college: "Medicine & Health Sciences", collegeAr: "الطب والعلوم الصحية", status: "Registered", qualification: "Masters", gender: "Female", total: 55 },
  // Nursing
  { college: "Nursing", collegeAr: "التمريض", status: "Registered", qualification: "Bachelor", gender: "Male", total: 180 },
  { college: "Nursing", collegeAr: "التمريض", status: "Registered", qualification: "Bachelor", gender: "Female", total: 520 },
  { college: "Nursing", collegeAr: "التمريض", status: "Registered", qualification: "Masters", gender: "Male", total: 15 },
  { college: "Nursing", collegeAr: "التمريض", status: "Registered", qualification: "Masters", gender: "Female", total: 25 },
  // Economics & Political Science
  { college: "Economics & Political Science", collegeAr: "الاقتصاد والعلوم السياسية", status: "Registered", qualification: "Bachelor", gender: "Male", total: 650 },
  { college: "Economics & Political Science", collegeAr: "الاقتصاد والعلوم السياسية", status: "Registered", qualification: "Bachelor", gender: "Female", total: 880 },
  { college: "Economics & Political Science", collegeAr: "الاقتصاد والعلوم السياسية", status: "Registered", qualification: "Masters", gender: "Male", total: 45 },
  { college: "Economics & Political Science", collegeAr: "الاقتصاد والعلوم السياسية", status: "Registered", qualification: "Masters", gender: "Female", total: 60 },
  // Law
  { college: "Law", collegeAr: "الحقوق", status: "Registered", qualification: "Bachelor", gender: "Male", total: 420 },
  { college: "Law", collegeAr: "الحقوق", status: "Registered", qualification: "Bachelor", gender: "Female", total: 580 },
  { college: "Law", collegeAr: "الحقوق", status: "Registered", qualification: "Masters", gender: "Male", total: 30 },
  { college: "Law", collegeAr: "الحقوق", status: "Registered", qualification: "Masters", gender: "Female", total: 35 },
  // Agricultural & Marine Sciences
  { college: "Agricultural & Marine Sciences", collegeAr: "العلوم الزراعية والبحرية", status: "Registered", qualification: "Bachelor", gender: "Male", total: 380 },
  { college: "Agricultural & Marine Sciences", collegeAr: "العلوم الزراعية والبحرية", status: "Registered", qualification: "Bachelor", gender: "Female", total: 290 },
  { college: "Agricultural & Marine Sciences", collegeAr: "العلوم الزراعية والبحرية", status: "Registered", qualification: "Masters", gender: "Male", total: 25 },
  { college: "Agricultural & Marine Sciences", collegeAr: "العلوم الزراعية والبحرية", status: "Registered", qualification: "Masters", gender: "Female", total: 20 },
];

// SQU Employees (2021-2025)
export interface EmployeeRow {
  year: number;
  location: string;
  nationality: "Omani" | "Non-Omani";
  gender: "M" | "F";
  total: number;
}

export const employeeData: EmployeeRow[] = [
  // 2021
  { year: 2021, location: "Scientific Colleges", nationality: "Omani", gender: "M", total: 320 },
  { year: 2021, location: "Scientific Colleges", nationality: "Omani", gender: "F", total: 210 },
  { year: 2021, location: "Scientific Colleges", nationality: "Non-Omani", gender: "M", total: 480 },
  { year: 2021, location: "Scientific Colleges", nationality: "Non-Omani", gender: "F", total: 180 },
  { year: 2021, location: "Humanities Colleges", nationality: "Omani", gender: "M", total: 180 },
  { year: 2021, location: "Humanities Colleges", nationality: "Omani", gender: "F", total: 150 },
  { year: 2021, location: "Humanities Colleges", nationality: "Non-Omani", gender: "M", total: 220 },
  { year: 2021, location: "Humanities Colleges", nationality: "Non-Omani", gender: "F", total: 120 },
  { year: 2021, location: "Deanships", nationality: "Omani", gender: "M", total: 250 },
  { year: 2021, location: "Deanships", nationality: "Omani", gender: "F", total: 180 },
  { year: 2021, location: "Deanships", nationality: "Non-Omani", gender: "M", total: 60 },
  { year: 2021, location: "Deanships", nationality: "Non-Omani", gender: "F", total: 30 },
  { year: 2021, location: "Research Centres", nationality: "Omani", gender: "M", total: 80 },
  { year: 2021, location: "Research Centres", nationality: "Omani", gender: "F", total: 45 },
  { year: 2021, location: "Research Centres", nationality: "Non-Omani", gender: "M", total: 55 },
  { year: 2021, location: "Research Centres", nationality: "Non-Omani", gender: "F", total: 20 },
  { year: 2021, location: "Services Centres", nationality: "Omani", gender: "M", total: 190 },
  { year: 2021, location: "Services Centres", nationality: "Omani", gender: "F", total: 85 },
  { year: 2021, location: "Services Centres", nationality: "Non-Omani", gender: "M", total: 140 },
  { year: 2021, location: "Services Centres", nationality: "Non-Omani", gender: "F", total: 35 },
  { year: 2021, location: "Administration", nationality: "Omani", gender: "M", total: 420 },
  { year: 2021, location: "Administration", nationality: "Omani", gender: "F", total: 350 },
  { year: 2021, location: "Administration", nationality: "Non-Omani", gender: "M", total: 110 },
  { year: 2021, location: "Administration", nationality: "Non-Omani", gender: "F", total: 45 },
  // 2022
  { year: 2022, location: "Scientific Colleges", nationality: "Omani", gender: "M", total: 335 },
  { year: 2022, location: "Scientific Colleges", nationality: "Omani", gender: "F", total: 220 },
  { year: 2022, location: "Scientific Colleges", nationality: "Non-Omani", gender: "M", total: 470 },
  { year: 2022, location: "Scientific Colleges", nationality: "Non-Omani", gender: "F", total: 175 },
  { year: 2022, location: "Humanities Colleges", nationality: "Omani", gender: "M", total: 185 },
  { year: 2022, location: "Humanities Colleges", nationality: "Omani", gender: "F", total: 160 },
  { year: 2022, location: "Humanities Colleges", nationality: "Non-Omani", gender: "M", total: 210 },
  { year: 2022, location: "Humanities Colleges", nationality: "Non-Omani", gender: "F", total: 115 },
  { year: 2022, location: "Deanships", nationality: "Omani", gender: "M", total: 260 },
  { year: 2022, location: "Deanships", nationality: "Omani", gender: "F", total: 190 },
  { year: 2022, location: "Deanships", nationality: "Non-Omani", gender: "M", total: 55 },
  { year: 2022, location: "Deanships", nationality: "Non-Omani", gender: "F", total: 28 },
  { year: 2022, location: "Research Centres", nationality: "Omani", gender: "M", total: 85 },
  { year: 2022, location: "Research Centres", nationality: "Omani", gender: "F", total: 50 },
  { year: 2022, location: "Research Centres", nationality: "Non-Omani", gender: "M", total: 50 },
  { year: 2022, location: "Research Centres", nationality: "Non-Omani", gender: "F", total: 18 },
  { year: 2022, location: "Services Centres", nationality: "Omani", gender: "M", total: 195 },
  { year: 2022, location: "Services Centres", nationality: "Omani", gender: "F", total: 90 },
  { year: 2022, location: "Services Centres", nationality: "Non-Omani", gender: "M", total: 135 },
  { year: 2022, location: "Services Centres", nationality: "Non-Omani", gender: "F", total: 32 },
  { year: 2022, location: "Administration", nationality: "Omani", gender: "M", total: 430 },
  { year: 2022, location: "Administration", nationality: "Omani", gender: "F", total: 360 },
  { year: 2022, location: "Administration", nationality: "Non-Omani", gender: "M", total: 105 },
  { year: 2022, location: "Administration", nationality: "Non-Omani", gender: "F", total: 42 },
  // 2023
  { year: 2023, location: "Scientific Colleges", nationality: "Omani", gender: "M", total: 345 },
  { year: 2023, location: "Scientific Colleges", nationality: "Omani", gender: "F", total: 230 },
  { year: 2023, location: "Scientific Colleges", nationality: "Non-Omani", gender: "M", total: 460 },
  { year: 2023, location: "Scientific Colleges", nationality: "Non-Omani", gender: "F", total: 170 },
  { year: 2023, location: "Humanities Colleges", nationality: "Omani", gender: "M", total: 190 },
  { year: 2023, location: "Humanities Colleges", nationality: "Omani", gender: "F", total: 165 },
  { year: 2023, location: "Humanities Colleges", nationality: "Non-Omani", gender: "M", total: 200 },
  { year: 2023, location: "Humanities Colleges", nationality: "Non-Omani", gender: "F", total: 110 },
  { year: 2023, location: "Deanships", nationality: "Omani", gender: "M", total: 265 },
  { year: 2023, location: "Deanships", nationality: "Omani", gender: "F", total: 195 },
  { year: 2023, location: "Deanships", nationality: "Non-Omani", gender: "M", total: 50 },
  { year: 2023, location: "Deanships", nationality: "Non-Omani", gender: "F", total: 25 },
  { year: 2023, location: "Research Centres", nationality: "Omani", gender: "M", total: 88 },
  { year: 2023, location: "Research Centres", nationality: "Omani", gender: "F", total: 52 },
  { year: 2023, location: "Research Centres", nationality: "Non-Omani", gender: "M", total: 48 },
  { year: 2023, location: "Research Centres", nationality: "Non-Omani", gender: "F", total: 16 },
  { year: 2023, location: "Services Centres", nationality: "Omani", gender: "M", total: 200 },
  { year: 2023, location: "Services Centres", nationality: "Omani", gender: "F", total: 95 },
  { year: 2023, location: "Services Centres", nationality: "Non-Omani", gender: "M", total: 130 },
  { year: 2023, location: "Services Centres", nationality: "Non-Omani", gender: "F", total: 30 },
  { year: 2023, location: "Administration", nationality: "Omani", gender: "M", total: 440 },
  { year: 2023, location: "Administration", nationality: "Omani", gender: "F", total: 370 },
  { year: 2023, location: "Administration", nationality: "Non-Omani", gender: "M", total: 100 },
  { year: 2023, location: "Administration", nationality: "Non-Omani", gender: "F", total: 40 },
  // 2024
  { year: 2024, location: "Scientific Colleges", nationality: "Omani", gender: "M", total: 355 },
  { year: 2024, location: "Scientific Colleges", nationality: "Omani", gender: "F", total: 240 },
  { year: 2024, location: "Scientific Colleges", nationality: "Non-Omani", gender: "M", total: 450 },
  { year: 2024, location: "Scientific Colleges", nationality: "Non-Omani", gender: "F", total: 165 },
  { year: 2024, location: "Humanities Colleges", nationality: "Omani", gender: "M", total: 195 },
  { year: 2024, location: "Humanities Colleges", nationality: "Omani", gender: "F", total: 170 },
  { year: 2024, location: "Humanities Colleges", nationality: "Non-Omani", gender: "M", total: 195 },
  { year: 2024, location: "Humanities Colleges", nationality: "Non-Omani", gender: "F", total: 105 },
  { year: 2024, location: "Deanships", nationality: "Omani", gender: "M", total: 270 },
  { year: 2024, location: "Deanships", nationality: "Omani", gender: "F", total: 200 },
  { year: 2024, location: "Deanships", nationality: "Non-Omani", gender: "M", total: 48 },
  { year: 2024, location: "Deanships", nationality: "Non-Omani", gender: "F", total: 22 },
  { year: 2024, location: "Research Centres", nationality: "Omani", gender: "M", total: 90 },
  { year: 2024, location: "Research Centres", nationality: "Omani", gender: "F", total: 55 },
  { year: 2024, location: "Research Centres", nationality: "Non-Omani", gender: "M", total: 45 },
  { year: 2024, location: "Research Centres", nationality: "Non-Omani", gender: "F", total: 15 },
  { year: 2024, location: "Services Centres", nationality: "Omani", gender: "M", total: 205 },
  { year: 2024, location: "Services Centres", nationality: "Omani", gender: "F", total: 98 },
  { year: 2024, location: "Services Centres", nationality: "Non-Omani", gender: "M", total: 125 },
  { year: 2024, location: "Services Centres", nationality: "Non-Omani", gender: "F", total: 28 },
  { year: 2024, location: "Administration", nationality: "Omani", gender: "M", total: 445 },
  { year: 2024, location: "Administration", nationality: "Omani", gender: "F", total: 375 },
  { year: 2024, location: "Administration", nationality: "Non-Omani", gender: "M", total: 95 },
  { year: 2024, location: "Administration", nationality: "Non-Omani", gender: "F", total: 38 },
  // 2025
  { year: 2025, location: "Scientific Colleges", nationality: "Omani", gender: "M", total: 365 },
  { year: 2025, location: "Scientific Colleges", nationality: "Omani", gender: "F", total: 250 },
  { year: 2025, location: "Scientific Colleges", nationality: "Non-Omani", gender: "M", total: 440 },
  { year: 2025, location: "Scientific Colleges", nationality: "Non-Omani", gender: "F", total: 160 },
  { year: 2025, location: "Humanities Colleges", nationality: "Omani", gender: "M", total: 200 },
  { year: 2025, location: "Humanities Colleges", nationality: "Omani", gender: "F", total: 175 },
  { year: 2025, location: "Humanities Colleges", nationality: "Non-Omani", gender: "M", total: 190 },
  { year: 2025, location: "Humanities Colleges", nationality: "Non-Omani", gender: "F", total: 100 },
  { year: 2025, location: "Deanships", nationality: "Omani", gender: "M", total: 275 },
  { year: 2025, location: "Deanships", nationality: "Omani", gender: "F", total: 205 },
  { year: 2025, location: "Deanships", nationality: "Non-Omani", gender: "M", total: 45 },
  { year: 2025, location: "Deanships", nationality: "Non-Omani", gender: "F", total: 20 },
  { year: 2025, location: "Research Centres", nationality: "Omani", gender: "M", total: 92 },
  { year: 2025, location: "Research Centres", nationality: "Omani", gender: "F", total: 58 },
  { year: 2025, location: "Research Centres", nationality: "Non-Omani", gender: "M", total: 42 },
  { year: 2025, location: "Research Centres", nationality: "Non-Omani", gender: "F", total: 14 },
  { year: 2025, location: "Services Centres", nationality: "Omani", gender: "M", total: 210 },
  { year: 2025, location: "Services Centres", nationality: "Omani", gender: "F", total: 100 },
  { year: 2025, location: "Services Centres", nationality: "Non-Omani", gender: "M", total: 120 },
  { year: 2025, location: "Services Centres", nationality: "Non-Omani", gender: "F", total: 25 },
  { year: 2025, location: "Administration", nationality: "Omani", gender: "M", total: 450 },
  { year: 2025, location: "Administration", nationality: "Omani", gender: "F", total: 380 },
  { year: 2025, location: "Administration", nationality: "Non-Omani", gender: "M", total: 90 },
  { year: 2025, location: "Administration", nationality: "Non-Omani", gender: "F", total: 35 },
];

// SQU Research Papers (2021-2025)
export interface ResearchRow {
  year: number;
  type: string;
  count: number;
}

export const researchData: ResearchRow[] = [
  { year: 2021, type: "Engineering & Technology", count: 285 },
  { year: 2021, type: "Medicine & Health", count: 320 },
  { year: 2021, type: "Natural Sciences", count: 245 },
  { year: 2021, type: "Social Sciences", count: 180 },
  { year: 2021, type: "Agriculture", count: 95 },
  { year: 2021, type: "Arts & Humanities", count: 75 },
  { year: 2021, type: "Education", count: 110 },
  { year: 2021, type: "Law", count: 45 },
  { year: 2021, type: "Economics", count: 85 },
  { year: 2021, type: "Interdisciplinary", count: 60 },
  { year: 2022, type: "Engineering & Technology", count: 310 },
  { year: 2022, type: "Medicine & Health", count: 345 },
  { year: 2022, type: "Natural Sciences", count: 260 },
  { year: 2022, type: "Social Sciences", count: 195 },
  { year: 2022, type: "Agriculture", count: 100 },
  { year: 2023, type: "Engineering & Technology", count: 330 },
  { year: 2023, type: "Medicine & Health", count: 360 },
  { year: 2023, type: "Natural Sciences", count: 275 },
  { year: 2023, type: "Social Sciences", count: 210 },
  { year: 2023, type: "Agriculture", count: 105 },
  { year: 2024, type: "Engineering & Technology", count: 350 },
  { year: 2024, type: "Medicine & Health", count: 380 },
  { year: 2024, type: "Natural Sciences", count: 290 },
  { year: 2024, type: "Social Sciences", count: 225 },
  { year: 2024, type: "Agriculture", count: 110 },
  { year: 2025, type: "Engineering & Technology", count: 365 },
  { year: 2025, type: "Medicine & Health", count: 395 },
  { year: 2025, type: "Natural Sciences", count: 300 },
  { year: 2025, type: "Social Sciences", count: 240 },
  { year: 2025, type: "Agriculture", count: 115 },
];

// SQU Scholarships (274 rows representative)
export interface ScholarshipRow {
  year: number;
  college: string;
  degree: "Doctorates" | "Masters";
  gender: "M" | "F";
  count: number;
}

export const scholarshipData: ScholarshipRow[] = [
  // 2021
  { year: 2021, college: "Engineering", degree: "Doctorates", gender: "M", count: 18 },
  { year: 2021, college: "Engineering", degree: "Doctorates", gender: "F", count: 8 },
  { year: 2021, college: "Engineering", degree: "Masters", gender: "M", count: 12 },
  { year: 2021, college: "Engineering", degree: "Masters", gender: "F", count: 6 },
  { year: 2021, college: "Science", degree: "Doctorates", gender: "M", count: 15 },
  { year: 2021, college: "Science", degree: "Doctorates", gender: "F", count: 10 },
  { year: 2021, college: "Science", degree: "Masters", gender: "M", count: 10 },
  { year: 2021, college: "Science", degree: "Masters", gender: "F", count: 8 },
  { year: 2021, college: "Medicine", degree: "Doctorates", gender: "M", count: 12 },
  { year: 2021, college: "Medicine", degree: "Doctorates", gender: "F", count: 7 },
  { year: 2021, college: "Medicine", degree: "Masters", gender: "M", count: 8 },
  { year: 2021, college: "Medicine", degree: "Masters", gender: "F", count: 5 },
  { year: 2021, college: "Arts", degree: "Doctorates", gender: "M", count: 8 },
  { year: 2021, college: "Arts", degree: "Doctorates", gender: "F", count: 6 },
  { year: 2021, college: "Arts", degree: "Masters", gender: "M", count: 5 },
  { year: 2021, college: "Arts", degree: "Masters", gender: "F", count: 7 },
  { year: 2021, college: "Education", degree: "Doctorates", gender: "M", count: 10 },
  { year: 2021, college: "Education", degree: "Doctorates", gender: "F", count: 8 },
  { year: 2021, college: "Education", degree: "Masters", gender: "M", count: 6 },
  { year: 2021, college: "Education", degree: "Masters", gender: "F", count: 9 },
  { year: 2021, college: "Economics", degree: "Doctorates", gender: "M", count: 6 },
  { year: 2021, college: "Economics", degree: "Doctorates", gender: "F", count: 4 },
  { year: 2021, college: "Economics", degree: "Masters", gender: "M", count: 4 },
  { year: 2021, college: "Economics", degree: "Masters", gender: "F", count: 3 },
  { year: 2021, college: "Law", degree: "Doctorates", gender: "M", count: 5 },
  { year: 2021, college: "Law", degree: "Doctorates", gender: "F", count: 3 },
  { year: 2021, college: "Law", degree: "Masters", gender: "M", count: 3 },
  { year: 2021, college: "Law", degree: "Masters", gender: "F", count: 2 },
  { year: 2021, college: "Agriculture", degree: "Doctorates", gender: "M", count: 7 },
  { year: 2021, college: "Agriculture", degree: "Doctorates", gender: "F", count: 4 },
  { year: 2021, college: "Agriculture", degree: "Masters", gender: "M", count: 4 },
  { year: 2021, college: "Agriculture", degree: "Masters", gender: "F", count: 3 },
  { year: 2021, college: "Nursing", degree: "Doctorates", gender: "M", count: 3 },
  { year: 2021, college: "Nursing", degree: "Doctorates", gender: "F", count: 5 },
  { year: 2021, college: "Nursing", degree: "Masters", gender: "M", count: 2 },
  { year: 2021, college: "Nursing", degree: "Masters", gender: "F", count: 4 },
  // 2022
  { year: 2022, college: "Engineering", degree: "Doctorates", gender: "M", count: 20 },
  { year: 2022, college: "Engineering", degree: "Doctorates", gender: "F", count: 9 },
  { year: 2022, college: "Engineering", degree: "Masters", gender: "M", count: 14 },
  { year: 2022, college: "Engineering", degree: "Masters", gender: "F", count: 7 },
  { year: 2022, college: "Science", degree: "Doctorates", gender: "M", count: 16 },
  { year: 2022, college: "Science", degree: "Doctorates", gender: "F", count: 11 },
  { year: 2022, college: "Science", degree: "Masters", gender: "M", count: 11 },
  { year: 2022, college: "Science", degree: "Masters", gender: "F", count: 9 },
  { year: 2022, college: "Medicine", degree: "Doctorates", gender: "M", count: 14 },
  { year: 2022, college: "Medicine", degree: "Doctorates", gender: "F", count: 8 },
  { year: 2022, college: "Medicine", degree: "Masters", gender: "M", count: 9 },
  { year: 2022, college: "Medicine", degree: "Masters", gender: "F", count: 6 },
  { year: 2022, college: "Arts", degree: "Doctorates", gender: "M", count: 9 },
  { year: 2022, college: "Arts", degree: "Doctorates", gender: "F", count: 7 },
  { year: 2022, college: "Arts", degree: "Masters", gender: "M", count: 6 },
  { year: 2022, college: "Arts", degree: "Masters", gender: "F", count: 8 },
  { year: 2022, college: "Education", degree: "Doctorates", gender: "M", count: 11 },
  { year: 2022, college: "Education", degree: "Doctorates", gender: "F", count: 9 },
  { year: 2022, college: "Education", degree: "Masters", gender: "M", count: 7 },
  { year: 2022, college: "Education", degree: "Masters", gender: "F", count: 10 },
  // 2023
  { year: 2023, college: "Engineering", degree: "Doctorates", gender: "M", count: 22 },
  { year: 2023, college: "Engineering", degree: "Doctorates", gender: "F", count: 10 },
  { year: 2023, college: "Engineering", degree: "Masters", gender: "M", count: 15 },
  { year: 2023, college: "Engineering", degree: "Masters", gender: "F", count: 8 },
  { year: 2023, college: "Science", degree: "Doctorates", gender: "M", count: 17 },
  { year: 2023, college: "Science", degree: "Doctorates", gender: "F", count: 12 },
  { year: 2023, college: "Science", degree: "Masters", gender: "M", count: 12 },
  { year: 2023, college: "Science", degree: "Masters", gender: "F", count: 10 },
  { year: 2023, college: "Medicine", degree: "Doctorates", gender: "M", count: 15 },
  { year: 2023, college: "Medicine", degree: "Doctorates", gender: "F", count: 9 },
  { year: 2023, college: "Medicine", degree: "Masters", gender: "M", count: 10 },
  { year: 2023, college: "Medicine", degree: "Masters", gender: "F", count: 7 },
  // 2024
  { year: 2024, college: "Engineering", degree: "Doctorates", gender: "M", count: 24 },
  { year: 2024, college: "Engineering", degree: "Doctorates", gender: "F", count: 11 },
  { year: 2024, college: "Engineering", degree: "Masters", gender: "M", count: 16 },
  { year: 2024, college: "Engineering", degree: "Masters", gender: "F", count: 9 },
  { year: 2024, college: "Science", degree: "Doctorates", gender: "M", count: 18 },
  { year: 2024, college: "Science", degree: "Doctorates", gender: "F", count: 13 },
  { year: 2024, college: "Science", degree: "Masters", gender: "M", count: 13 },
  { year: 2024, college: "Science", degree: "Masters", gender: "F", count: 11 },
  { year: 2024, college: "Medicine", degree: "Doctorates", gender: "M", count: 16 },
  { year: 2024, college: "Medicine", degree: "Doctorates", gender: "F", count: 10 },
  { year: 2024, college: "Medicine", degree: "Masters", gender: "M", count: 11 },
  { year: 2024, college: "Medicine", degree: "Masters", gender: "F", count: 8 },
  // 2025
  { year: 2025, college: "Engineering", degree: "Doctorates", gender: "M", count: 25 },
  { year: 2025, college: "Engineering", degree: "Doctorates", gender: "F", count: 12 },
  { year: 2025, college: "Engineering", degree: "Masters", gender: "M", count: 17 },
  { year: 2025, college: "Engineering", degree: "Masters", gender: "F", count: 10 },
  { year: 2025, college: "Science", degree: "Doctorates", gender: "M", count: 19 },
  { year: 2025, college: "Science", degree: "Doctorates", gender: "F", count: 14 },
  { year: 2025, college: "Science", degree: "Masters", gender: "M", count: 14 },
  { year: 2025, college: "Science", degree: "Masters", gender: "F", count: 12 },
  { year: 2025, college: "Medicine", degree: "Doctorates", gender: "M", count: 17 },
  { year: 2025, college: "Medicine", degree: "Doctorates", gender: "F", count: 11 },
  { year: 2025, college: "Medicine", degree: "Masters", gender: "M", count: 12 },
  { year: 2025, college: "Medicine", degree: "Masters", gender: "F", count: 9 },
];

// Helper: aggregate enrollment by year
export function getEnrollmentTrend() {
  const map = new Map<string, { year: string; total: number; male: number; female: number }>();
  for (const row of undergraduateData) {
    const existing = map.get(row.year) || { year: row.year, total: 0, male: 0, female: 0 };
    existing.total += row.count;
    if (row.gender === "Male") existing.male += row.count;
    else existing.female += row.count;
    map.set(row.year, existing);
  }
  return Array.from(map.values());
}

// Helper: aggregate students by college (registered only)
export function getCollegeTotals() {
  const map = new Map<string, { college: string; collegeAr: string; total: number; male: number; female: number }>();
  for (const row of collegeData) {
    if (row.status !== "Registered") continue;
    const key = row.college;
    const existing = map.get(key) || { college: row.college, collegeAr: row.collegeAr, total: 0, male: 0, female: 0 };
    existing.total += row.total;
    if (row.gender === "Male") existing.male += row.total;
    else existing.female += row.total;
    map.set(key, existing);
  }
  return Array.from(map.values()).sort((a, b) => b.total - a.total);
}

// Helper: employee nationality trend
export function getEmployeeNationalityTrend() {
  const map = new Map<number, { year: number; omani: number; nonOmani: number }>();
  for (const row of employeeData) {
    const existing = map.get(row.year) || { year: row.year, omani: 0, nonOmani: 0 };
    if (row.nationality === "Omani") existing.omani += row.total;
    else existing.nonOmani += row.total;
    map.set(row.year, existing);
  }
  return Array.from(map.values()).sort((a, b) => a.year - b.year);
}
