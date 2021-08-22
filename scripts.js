function test(){
  let date = document.getElementById('birthday').value;
  let split = date.split('-');
  if (date  == '' ) {
    alert ('invalid date')
}
    else { 
        alert(GetSign(parseInt(split[1]),parseInt(split[2])));
    }
}

function GetSign(month, day) {
	if (
		(month == 3 && day >= 21) ||
		(month == 4 && day <= 19)
	) {
		return 'Aries'
	} else if (month == 3 && day > 31) {
		return  'invalid date'
	} else if (
		(month == 4 && day >= 20) ||
		(month == 5 && day <= 20)
	) {
		return  'Taurus'
	} else if (month == 4 && day > 30) {
		return  'invalid date'
	} else if (
		(month == 5 && day >= 21) ||
		(month == 6 && day <= 21)
	) {
		return  'Gemini'
	} else if (month == 5 && day > 31) {
		return  'invalid date'
	} else if (
		(month == 6 && day >= 22) ||
		(month == 7 && day <= 22)
	) {
		return  'cancer'
	} else if (month == 6 && day > 30) {
		return  'invalid date'
	} else if (
		(month == 7 && day >= 23) ||
		(month == 8 && day <= 22)
	) {
		return  'Leo'
	} else if (month == 7 && day > 31) {
		return  'invalid date'
	} else if (
		(month == 8 && day >= 23) ||
		(month == 9 && day <= 22)
	) {
		return  'virgo'
	} else if (month == 8 && day > 31) {
		return  'invalid date'
	} else if (
		(month == 9 && day >= 23) ||
		(month == 10 && day <= 22)
	) {
		return  'libra'
	} else if (month == 9 && day > 30) {
		return  'invalid date'
	} else if (
		(month == 10 && day >= 23) ||
		(month == 11 && day <= 21)
	) {
		return  'scorpio'
	} else if (month == 10 && day > 31) {
		return  'invalid date'
	} else if (
		(month == 11 && day >= 22) ||
		(month == 12 && day <= 21)
	) {
		return  'Sagittarius'
	} else if (month == 11 && day > 30) {
		return  'invalid date'
	} else if (
		(month == 12 && day >= 22) ||
		(month == 1 && day <= 19)
	) {
		return  'capricorn'
	} else if (month == 12 && day > 31) {
		return  'invalid date'
	} else if (
		(month == 1 && day >= 20) ||
		(month == 2 && day <= 18)
	) {
		return  'Aquarius'
	} else if (month == 1 && day > 31) {
		return  'invalid date'
	} else if (
		(month == 2 && day >= 19) ||
		(month == 3 && day <= 20)
	) {
		return  'pisces'
	} else if (month == 2 && day > 29) {
		return  'invalid date'
	}
}