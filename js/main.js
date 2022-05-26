const isLeapYear = year => {
  return (year %4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const years = [2020,2021];

years.forEach(function(elem) {
  if(isLeapYear(elem)){
    console.log(elem + '年はうるう年');
  }else{
    console.log(elem + '年はうるう年ではない');
  }
});


