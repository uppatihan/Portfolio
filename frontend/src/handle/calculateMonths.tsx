// ฟังก์ชันคำนวณจำนวนเดือน
function calculateMonths() {
  const today = new Date();
  const endMonth = today.getMonth() + 1; // เดือนปัจจุบัน (JS เริ่ม 0)
  const endYear = today.getFullYear();    // ปีปัจจุบัน (ค.ศ.)

  // แปลง startYear จาก พ.ศ. เป็น ค.ศ.
  const startYearCE = 2568 - 543;

  return (endYear - startYearCE) * 12 + (endMonth - 1 + 1);
}

export default calculateMonths;