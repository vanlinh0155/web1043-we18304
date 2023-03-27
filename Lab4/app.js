//Tao class STUDENT
class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  //Lấy tên đầy đủ
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  //Lấy tuổi theo năm
    getAgeByYear() {
      const dob = new Date(this.dob);
      const diff_ms = Date.now() - dob.getTime();
      const age_dt = new Date(diff_ms);
  
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
  //Lấy tuổi theo ngày
    getAgeByDay() {
      const dob = new Date(this.dob);
      const diff_ms = Date.now() - dob.getTime();
      const age_day = Math.floor(diff_ms / (1000 * 60 * 60 * 24));
  
      return age_day;
    }
  }
  //Tạo danh sách sinh viên
  const students = [
    new Student(1, 'Linh', 'Van', 1, 'vanlinh@gmail.com', '0901234567', '2004/05/01'),
    new Student(2, 'Hau', 'Nguyen', 1, 'haunv@gmail.com', '0901234568', '2004/03/02'),
    new Student(3, 'Loc', 'Nguyen', 1, 'locnv@gmail.com', '0901234569', '2004/05/03'),
    new Student(4, 'Anh', 'Quan', 1, 'quan@gmail.com', '0901234570', '2004/10/04'),
    new Student(5, 'Bao', 'Ha', 1, 'habao@gmail.com', '0901234571', '2004/12/05')
  ];
  //Sắp xếp danh sách các sinh viên theo thứ tự từ thấp đến cao theo số tuổi 
  students.sort((a, b) => a.getAgeByDay() - b.getAgeByDay());
  //In ra danh sách sv theo thứ tự từ thấp đén cao theo số tuổi
  console.log('Danh sách sinh viên theo thứ tự số tuổi (tính theo ngày) từ thấp đến cao: ');
  students.forEach(student => {
    console.log(
      `ID: ${student.id}, Họ và tên: ${student.getFullName()}, Tuổi (theo năm): ${student.getAgeByYear()}, Tuổi (theo ngày): ${student.getAgeByDay()}`
    );
  });
  var width = window.innerWidth;
      var height = window.innerHeight;//bom để hiển thị độ dài w và h của browser
      document.write(width+"px"+" "+height+"px");// hiển thị ta document 