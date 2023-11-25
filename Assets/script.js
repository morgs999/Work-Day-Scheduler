$(function () {
  // CURRENT DATE & TIME DISPLAY //
  let timeDisplayEl = $('#currentDay');
  function displayTime() {
    let rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  };

  // BLUE SAVE BUTTON FUNCTIONALITY //
  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    let hour = $(this).parent().attr('id');
    let value = $(this).siblings('.description').val();
    localStorage.setItem(hour, value);
  });

  // ITEMS SAVED ON TODO LIST FROM LOCAL STORAGE //
  function textBlocks() {
    $(".description").each(function () {
      let timeBlock = $(this).parent().attr('id');
      const value = localStorage.getItem(timeBlock);
      $(this).val(value);
    });
  };

  // PAST, PRESENT, FUTURE COLOR CODING //
  function colorIn() {
    // can use dayjs('2020-01-01 12:00:00') to check colors
    let hour = dayjs().hour();
    $(".time-block").each(function () {
      let timeBlock = (this.id);

      if (hour > timeBlock) {
        $(this).addClass('past');
      } else if (hour == timeBlock) {
        $(this).addClass('present')
      } else {
        $(this).addClass('future');
      };
    });
  };

  // FUNCTIONS RUNNING //
  displayTime();
  setInterval(displayTime, 1000);
  textBlocks();
  colorIn();
});