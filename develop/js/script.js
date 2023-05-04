//display date with the current time using dayJS
$('#currentDay').text(dayjs().format('dddd, MMMM D h:mm'));

//function that wraps up all the DOM elements using JQuery
$(function() {
  //event listener upon user clicking on the save button, function is called to store user input
  $('.saveBtn').on('click', storeUserInput);
  //function with stores user data in local storage
  function storeUserInput(){
    localStorage.setItem($(this).parents().attr('id'), $(this).siblings().eq(1).val());
  }
//function which checks current time and then uses conditional statement to determine which color the block will be
  function timeBlock(){
    var currentTime = dayjs().hour();
    $('.time-block').each(function(){
      var time = $(this).attr('id');
      if (time < currentTime){
        $(this).addClass('past');
      } else if (time == currentTime){
        $(this).addClass('present');
      } else{
        $(this).addClass('future');
      }
    });
  }
  timeBlock();
//function which keeps the user input persistent. Upon refreshing the page, the users previous input is displayed
  function loadUserData(){
    $('.description').each(function(){
      $(this).val(localStorage.getItem($(this).parents().attr('id')));
    })
  }
  loadUserData();

})