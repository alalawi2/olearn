// MOE Schools data - 1270 schools across all governorates
export interface SchoolRow {
  region: string;
  regionNameAr: string;
  regionNameEn: string;
  wilaya: string;
  town: string;
  code: string;
  nameAr: string;
  classes: number;
  educationType: string;
  educationTypeEn: string;
  workingTime: string;
  workingTimeEn: string;
  schoolGender: string;
  schoolGenderEn: string;
}

// Representative school data by governorate
const generateSchools = (): SchoolRow[] => {
  const governorates: {
    region: string; nameAr: string; nameEn: string;
    wilayas: string[]; count: number;
  }[] = [
    { region: "1", nameAr: "محافظة مسقط", nameEn: "Muscat", wilayas: ["مسقط", "مطرح", "بوشر", "السيب", "العامرات", "قريات"], count: 165 },
    { region: "2", nameAr: "محافظة ظفار", nameEn: "Dhofar", wilayas: ["صلالة", "طاقة", "مرباط", "ثمريت", "رخيوت", "المزيونة"], count: 120 },
    { region: "3", nameAr: "محافظة مسندم", nameEn: "Musandam", wilayas: ["خصب", "بخا", "دبا", "مدحاء"], count: 42 },
    { region: "4", nameAr: "محافظة البريمي", nameEn: "Al Buraimi", wilayas: ["البريمي", "محضة", "السنينة"], count: 48 },
    { region: "5", nameAr: "محافظة الداخلية", nameEn: "Ad Dakhiliyah", wilayas: ["نزوى", "بهلاء", "منح", "الحمراء", "إزكي", "سمائل", "بدبد", "أدم"], count: 185 },
    { region: "6", nameAr: "محافظة شمال الباطنة", nameEn: "North Al Batinah", wilayas: ["صحار", "شناص", "لوى", "صحم", "الخابورة", "السويق"], count: 175 },
    { region: "7", nameAr: "محافظة جنوب الباطنة", nameEn: "South Al Batinah", wilayas: ["الرستاق", "العوابي", "نخل", "وادي المعاول", "بركاء", "المصنعة"], count: 155 },
    { region: "8", nameAr: "محافظة شمال الشرقية", nameEn: "North Ash Sharqiyah", wilayas: ["إبراء", "المضيبي", "بدية", "القابل", "وادي بني خالد", "دماء والطائيين"], count: 130 },
    { region: "9", nameAr: "محافظة جنوب الشرقية", nameEn: "South Ash Sharqiyah", wilayas: ["صور", "الكامل والوافي", "جعلان بني بو حسن", "جعلان بني بو علي", "مصيرة"], count: 110 },
    { region: "10", nameAr: "محافظة الظاهرة", nameEn: "Ad Dhahirah", wilayas: ["عبري", "ينقل", "ضنك"], count: 80 },
    { region: "11", nameAr: "محافظة الوسطى", nameEn: "Al Wusta", wilayas: ["هيما", "الدقم", "محوت", "الجازر"], count: 60 },
  ];

  const eduTypes = [
    { ar: "تعليم أساسي", en: "Basic Education" },
    { ar: "تعليم ما بعد الأساسي", en: "Post-Basic Education" },
    { ar: "مدرسة مستمرة", en: "Continuing School" },
  ];

  const times = [
    { ar: "صباحي", en: "Morning" },
    { ar: "مسائي", en: "Evening" },
  ];

  const genders = [
    { ar: "بنين", en: "Boys" },
    { ar: "بنات", en: "Girls" },
    { ar: "مشتركة", en: "Co-ed" },
  ];

  const schools: SchoolRow[] = [];
  let codeCounter = 1001;

  for (const gov of governorates) {
    for (let i = 0; i < gov.count; i++) {
      const wilaya = gov.wilayas[i % gov.wilayas.length];
      const eduType = eduTypes[i % eduTypes.length];
      const time = times[i < gov.count * 0.9 ? 0 : 1];
      const gender = genders[i % genders.length];
      const classes = Math.floor(Math.random() * 20) + 5;

      schools.push({
        region: gov.region,
        regionNameAr: gov.nameAr,
        regionNameEn: gov.nameEn,
        wilaya,
        town: wilaya,
        code: `S${codeCounter++}`,
        nameAr: `مدرسة ${wilaya} ${i + 1}`,
        classes,
        educationType: eduType.ar,
        educationTypeEn: eduType.en,
        workingTime: time.ar,
        workingTimeEn: time.en,
        schoolGender: gender.ar,
        schoolGenderEn: gender.en,
      });
    }
  }

  return schools;
};

export const schoolsData: SchoolRow[] = generateSchools();

// Helper: schools by governorate
export function getSchoolsByGovernorate() {
  const map = new Map<string, { nameAr: string; nameEn: string; count: number }>();
  for (const s of schoolsData) {
    const existing = map.get(s.region) || { nameAr: s.regionNameAr, nameEn: s.regionNameEn, count: 0 };
    existing.count++;
    map.set(s.region, existing);
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

// Helper: schools by education type
export function getSchoolsByEduType() {
  const map = new Map<string, { type: string; typeEn: string; count: number }>();
  for (const s of schoolsData) {
    const existing = map.get(s.educationType) || { type: s.educationType, typeEn: s.educationTypeEn, count: 0 };
    existing.count++;
    map.set(s.educationType, existing);
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

// Helper: schools by gender type
export function getSchoolsByGender() {
  const map = new Map<string, { gender: string; genderEn: string; count: number }>();
  for (const s of schoolsData) {
    const existing = map.get(s.schoolGender) || { gender: s.schoolGender, genderEn: s.schoolGenderEn, count: 0 };
    existing.count++;
    map.set(s.schoolGender, existing);
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}
