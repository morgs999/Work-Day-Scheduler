$(function () {
  // CURRENT DATE & TIME DISPLAY //
  let timeDisplayEl = $('#currentDay');
  function displayTime() {
    let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  // BLUE SAVE BUTTON FUNCTIONALITY //
  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    let hour = $(this).parent().attr('id');
    let value = $(this).siblings('.description').val();
    localStorage.setItem(hour, value);
  });

  // $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  // $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  // $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  // $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  // $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  function textBlocks() {
    $(".description").each(function () {
      let timeBlock = (this.id);
      $(this).val(localStorage.getItem("value"));
      
    })
  }

  // PAST, PRESENT, FUTURE COLOR CODING //
  function colorIn() {
    // can use dayjs('2020-01-01 12:00:00') to check colors
    let currentHour = dayjs('2020-01-01 12:00:00').hour();
    $(".time-block").each(function () {
      let timeBlock = (this.id);

      if (currentHour > timeBlock) {
        $(this).addClass('past');
      } else if (currentHour == timeBlock) {
        $(this).addClass('present')
      } else {
        $(this).addClass('future');
      }
    })
  }

  // FUNCTIONS RUNNING //
  displayTime();
  setInterval(displayTime, 1000);
  textBlocks();
  colorIn();
});