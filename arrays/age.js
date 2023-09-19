function getAge(date_of_birth) {
    var today = new Date();
    var birthDate = new Date(date_of_birth);
  
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
  
   if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
   }
   return age;
  }

var birthDate = prompt("Enter the date of birth");
var age = getAge(birthDate);
console.log(age);