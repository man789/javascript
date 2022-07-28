let now = dayjs();
let btn_date = document.querySelector('.day-date');
let div_date = document.querySelector('.day-date-display');
btn_date.addEventListener('click', function(){
  div_date.textContent = now.format();
})

