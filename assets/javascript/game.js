$(document).ready(function() {
  var Players = function(name, attack, hp) {
    this.name = name;
    this.attack = attack;
    this.hp = hp;
  }
  var anakin = new Players('anakin', 15, 150);
  var obiwan = new Players('obiwan', 18, 180);
  var dooku = new Players('dooku', 20, 200);
  var vader = new Players('vader', 30, 250);

  $('.player').on('click', function() {
    $(this).removeClass("enemy");
    $(this).addClass("user");
    $('#yourChar').append($('.user'));
    $('#enemies').append($('.enemy'));
    $('.enemy').on('click', function() {
      $(this).removeClass("user");
      $(this).addClass('defender');
      $('#fight').append($(this));
    });
  });

  $('.attack').on('click', function() {
//ANAKIN
      if ($(".user").hasClass("anakin")) {
        //if enemy is obiwan
        if ($('.defender').hasClass('obiwan')) {
          obiwan.hp = obiwan.hp - anakin.attack;
          anakin.attack += 15;
          console.log("Anakin's attack is : " + anakin.attack);
          $('#obiwanHP').text(obiwan.hp);
          if ($('#obiwanHP').text() < 0) {
            console.log("obiwan is dead");
            $('#enemies').append($('.obiwan'));
            $('#obiwanHP').text('dead');
            $('.obiwan').removeClass('defender');
          }
          //obi wan attacks back
          anakin.hp = anakin.hp - obiwan.attack;
          $('#anakinHP').text(anakin.hp);
          console.log("Obiwan's attack is : " + obiwan.attack);
          //health is checked
        }
        //if enemy is dooku
        if ($('.defender').hasClass('dooku')) {
          dooku.hp = dooku.hp - anakin.attack;
          anakin.attack += 15;
          $('#dookuHP').text(dooku.hp);
          console.log("Anakin's attack is : " + anakin.attack);
          if ($('#dookuHP').text() < 0) {
            console.log("dooku is dead");
            $('#enemies').append($('.dooku'));
            $('#dookuHP').text('dead');
            $('.dooku').removeClass('defender');
          }
          //dooku attacks back
          anakin.hp = anakin.hp - dooku.attack;
          $('#anakinHP').text(anakin.hp);
          console.log("Dooku's attack is : " + dooku.attack);
          //health is checked
        }
        //if enemy is vader
        if ($('.defender').hasClass('vader')) {
          vader.hp = vader.hp - anakin.attack;
          anakin.attack += 15;
          console.log("Anakin's attack is : " + anakin.attack);
          $('#vaderHP').text(vader.hp);
          if ($('#vaderHP').text() < 0) {
            console.log("vader is dead");
            $('#enemies').append($('.vader'));
            $('#vaderHP').text('dead');
            $('.vader').removeClass('defender');
          }
          //vader attacks back
          anakin.hp = anakin.hp - vader.attack;
          $('#anakinHP').text(anakin.hp);
          console.log("Vader's attack is : " + vader.attack);
          //health is checked
        }
      }
//OBIWAN
      else if ($(".user").hasClass("obiwan")) {
        //if enemy is vader
        if ($('.defender').hasClass('vader')) {
          vader.hp = vader.hp - obiwan.attack;
          obiwan.attack += 18;
          console.log("Obiwan's attack is : " + obiwan.attack);
          $('#vaderHP').text(vader.hp);
          if ($('#vaderHP').text() < 0) {
            console.log("vader is dead");
            $('#enemies').append($('.vader'));
            $('#vaderHP').text('dead');
            $('.vader').removeClass('defender');
          }
          //vader attacks back
          obiwan.hp = obiwan.hp - vader.attack;
          $('#obiwanHP').text(obiwan.hp);
          console.log("Vader's attack is : " + vader.attack);
          //health is checked
        }
        //if enemy is dooku
        if ($('.defender').hasClass('dooku')) {
          dooku.hp = dooku.hp - obiwan.attack;
          obiwan.attack += 18;
          console.log("Obiwan's attack is : " + obiwan.attack);
          $('#dookuHP').text(dooku.hp);
          if ($('#dookuHP').text() < 0) {
            console.log("dooku is dead");
            $('#enemies').append($('.dooku'));
            $('#dookuHP').text('dead');
            $('.dooku').removeClass('defender');
          }
          //dooku attacks back
          obiwan.hp = obiwan.hp - dooku.attack;
          $('#obiwanHP').text(obiwan.hp);
          console.log("Dooku's attack is : " + dooku.attack);
          //health is checked
        }

        //if enemy is anakin
        if ($('.defender').hasClass('anakin')) {
          anakin.hp = anakin.hp - obiwan.attack;
          obiwan.attack += 18;
          console.log("Obiwan's attack is : " + obiwan.attack);
          $('#anakinHP').text(anakin.hp);
          if ($('#anakinHP').text() < 0) {
            console.log("anakin is dead");
            $('#enemies').append($('.anakin'));
            $('#anakinHP').text('dead');
            $('.anakin').removeClass('defender');
          }
          //anakin attacks back
          obiwan.hp = obiwan.hp - anakin.attack;
          $('#obiwanHP').text(obiwan.hp);
          console.log("anakin's attack is : " + anakin.attack);
          //health is checked
        }
      }

//DOOKU
      else if ($(".user").hasClass("dooku")) {
        //if enemy is anakin
        if ($('.defender').hasClass('anakin')) {
          anakin.hp = anakin.hp - dooku.attack;
          dooku.attack += 20;
          console.log("Dooku's attack is : " + dooku.attack);
          $('#anakinHP').text(anakin.hp);
          if ($('#anakinHP').text() < 0) {
            console.log("anakin is dead");
            $('#enemies').append($('.anakin'));
            $('#anakinHP').text('dead');
            $('.anakin').removeClass('defender');
          }
          //anakin attacks back
          dooku.hp = dooku.hp - anakin.attack;
          $('#dookuHP').text(dooku.hp);
          console.log("anakin's attack is : " + anakin.attack);
          //health is checked
        }
        //if enemy is obiwan
        if ($('.defender').hasClass('obiwan')) {
          obiwan.hp = obiwan.hp - dooku.attack;
          dooku.attack += 20;
          console.log("Dooku's attack is : " + dooku.attack);
          $('#obiwanHP').text(obiwan.hp);
          if ($('#obiwanHP').text() < 0) {
            console.log("obiwan is dead");
            $('#enemies').append($('.obiwan'));
            $('#obiwanHP').text('dead');
            $('.obiwan').removeClass('defender');
          }
          //obiwan attacks back
          dooku.hp = dooku.hp - obiwan.attack;
          $('#dookuHP').text(dooku.hp);
          console.log("obiwan's attack is : " + obiwan.attack);
          //health is checked
        }
        //if enemy is vader
        if ($('.defender').hasClass('vader')) {
          vader.hp = vader.hp - dooku.attack;
          dooku.attack += 20;
          console.log("Dooku's attack is : " + dooku.attack);
          $('#vaderHP').text(vader.hp);
          if ($('#vaderHP').text() < 0) {
            console.log("vader is dead");
            $('#enemies').append($('.vader'));
            $('#vaderHP').text('dead');
            $('.vader').removeClass('defender');
          }
          //vader attacks back
          dooku.hp = dooku.hp - vader.attack;
          $('#dookuHP').text(dooku.hp);
          console.log("vader's attack is : " + vader.attack);
          //health is checked
        }
      }
//VADER
      else if ($(".user").hasClass("vader")) {
        //if enemy is obiwan
        if ($('.defender').hasClass('obiwan')) {
          obiwan.hp = obiwan.hp - vader.attack;
          vader.attack += 20;
          console.log("vader's attack is : " + vader.attack);
          $('#obiwanHP').text(obiwan.hp);
          if ($('#obiwanHP').text() < 0) {
            console.log("obiwan is dead");
            $('#enemies').append($('.obiwan'));
            $('#obiwanHP').text('dead');
            $('.obiwan').removeClass('defender');
          }
          //obiwan attacks back
          vader.hp = vader.hp - obiwan.attack;
          $('#vaderHP').text(vader.hp);
          console.log("obiwan's attack is : " + obiwan.attack);
          //health is checked
        }
        //if enemy is anakin
        if ($('.defender').hasClass('anakin')) {
          anakin.hp = anakin.hp - vader.attack;
          vader.attack += 20;
          console.log("vader's attack is : " + vader.attack);
          $('#anakinHP').text(anakin.hp);
          if ($('#anakinHP').text() < 0) {
            console.log("anakin is dead");
            $('#enemies').append($('.anakin'));
            $('#anakinHP').text('dead');
            $('.anakin').removeClass('defender');
          }
          //anakin attacks back
          vader.hp = vader.hp - anakin.attack;
          $('#vaderHP').text(vader.hp);
          console.log("anakin's attack is : " + anakin.attack);
          //health is checked
        }
        //if enemy is obiwan
        if ($('.defender').hasClass('dooku')) {
          dooku.hp = dooku.hp - vader.attack;
          vader.attack += 20;
          console.log("vader's attack is : " + vader.attack);
          $('#dookuHP').text(dooku.hp);
          if ($('#dookuHP').text() < 0) {
            console.log("dooku is dead");
            $('#enemies').append($('.dooku'));
            $('#dookuHP').text('dead');
            $('.dooku').removeClass('defender');
          }
          //dooku attacks back
          vader.hp = vader.hp - dooku.attack;
          $('#vaderHP').text(vader.hp);
          console.log("dooku's attack is : " + dooku.attack);
          //health is checked
        }
      }
  });
});
