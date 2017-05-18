 $(document).ready(function() {
  var players = {
    anakin: {
      name: 'anakin',
      attack: 15,
      hp: 150,
      currentAttack: 15,
      restoreHealth:150,
      restoreAttack:15
    },
    obiwan: {
      name: 'obiwan',
      attack: 18,
      hp: 180,
      currentAttack: 18,
      restoreHealth:180,
      restoreAttack:18
    },
    dooku: {
      name: 'dooku',
      attack: 20,
      hp: 200,
      currentAttack: 20,
      restoreHealth:200,
      restoreAttack:20
    },
    vader: {
      name: 'vader',
      attack: 25,
      hp: 250,
      currentAttack: 25,
      restoreHealth:250,
      restoreAttack:25
    }
  }
  function init(){
    $('#yourChar').hide();
    $('#fight').hide();
    $('.reset').hide();
  }
  init();

  $('.player').on('click', function() {
    $('#chooseChar').hide();
    $('#yourChar').show();
    $('#enemies').show();

    playEnterance();
    $(this).addClass("user").removeClass("player");
    // console.log($('.user'));
    $('#yourChar').append($('.user'));
    $('#yourChar').show();
    player = players[$('.user').data('user-name')];
    bindEnemy();
  });

  function bindEnemy() {
    $('.char').off();
    $('.player').addClass('enemy').removeClass('player');
    $('#enemies').append($('.enemy'));
    $('.enemy').on('click', function() {
      $('#enemies').hide();
      $('#fight').show();
      $('.attack').show();
      playEnterance();
      // debugger;
      console.log($('.defender').length);
      if ($('.defender').length === 0) {
        $(this).removeClass('user');
        $(this).removeClass("enemy");
        $(this).addClass('defender');
        // $('.defender').off();
        $('#fight').append($(this));
        defender = players[$('.defender').data('user-name')];
      }
    });
  }

  var p1 = $('<p>');
  var p2 = $('<p>');

function animateHit(p){
  p.css("font-size", "30px");
  p.fadeIn(500);
  if(p === p1){
    p1.text(player.currentAttack);
    $('#'+ defender.name).append(p1);
  }
  else if(p === p2){
    p2.text(defender.attack);
    $('#'+ player.name).append(p2);
  }
  p.fadeOut(500);
}

  $('.attack').on('click', function() {
    animateHit(p1);
    defender.hp = defender.hp - player.currentAttack;
    player.currentAttack += player.attack;
    //defender attacks back
    animateHit(p2);
    player.hp = player.hp - defender.attack;
    $('#' + player.name + 'HP').text(player.hp);
    playAttack();
    checkLose();
    // console.log(player.name + " attack is : " + player.currentAttack);
    $('#' + defender.name + 'HP').text(defender.hp);
    if (defender.hp <= 0) {
      console.log(defender.name + " is dead");
      $('#enemies').append($('.defender'));
      $('#' + defender.name + 'HP').text('dead');
      $('.defender').removeClass('defender').addClass('dead');
      $('.dead').hide();
      $('#fight').hide();
      $('#enemies').show();
      //restoring defender health for next round
      defender.hp = defender.restoreHealth;
      $('#' + defender.name + 'HP').text(defender.hp);
      playAttack();
      checkWin();
    }

  });

  function resetButton() {
    // debugger;
    $('.reset').show();

// NOTE: Events not unbinding properly?

    $('.reset').on('click', function() {
      // $('#chooseChar').show();
      // // $('#yourChar').hide();
      //   // $('.dead').show();
      //   //reset clicks
      //   $('.enemy').off();
      //   //reset the classes
      //   $('.dead').removeClass('dead').addClass('player');
      //   $('.user').removeClass('user').addClass('player');
      //   $('.enemy').removeClass('enemy').addClass('player');
      //   $('.player').show();
      //   $('#chooseChar').append($('.player'));
      //   //reset the attacks
      //   player.attack = player.restoreAttack;
      //   //reset the health
      //   player.hp = player.restoreHealth;
      //   $('#' + player.name + 'HP').text(player.hp);
      //   console.log(players);
      //   //reset texts
      //     $('#charText').text('Your Character');
      //     init();
        //reset clicks

        location.reload();
    });
  }
  $( "#dialog" ).dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Got it!": function() {
        $(this).dialog( "close" );
      }
    }
  });

  // check win
  function checkWin() {
    if ($('.dead').length === 3) {
      $('#enemies').hide();
      // alert('You Win!');
      $('#charText').text('You Win!');
      $('.attack').hide();
      resetButton();
    }
  }
  //check lose
  function checkLose() {
    if (player.hp <= 0 && $('.dead').length < 3) {
      $('#charText').text('You Lose!');
      $('.attack').hide();
      resetButton();
    }
  }

  //Sounds go here
  //background music
  var bgm = new Audio();
  bgm.src = 'assets/sounds/bgm.mp3';
  bgm.play();
  bgm.volume = 0.1;
  bgm.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
// entrance sound
  var entrance = new Audio();
  entrance.src = 'assets/sounds/entrance.wav';
  function playEnterance(){
    entrance.currentTime = 0;
    entrance.play();
  }
//sound on attack
  var hit = new Audio();

  function playAttack(){
    var attackNum = Math.round(Math.random()*3);
    hit.src = 'assets/sounds/attackSound'+attackNum+'.wav';
    hit.currentTime = 0;
    hit.play();
  }
});
