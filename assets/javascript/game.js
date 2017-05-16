$(document).ready(function() {
  var players = {
    anakin: {
      name: 'anakin',
      attack: 15,
      hp: 150,
      currentAttack: 15
    },
    obiwan: {
      name: 'obiwan',
      attack: 18,
      hp: 180,
      currentAttack: 18
    },
    dooku: {
      name: 'dooku',
      attack: 20,
      hp: 200,
      currentAttack: 20
    },
    vader: {
      name: 'vader',
      attack: 25,
      hp: 250,
      currentAttack: 25
    }
  }

  $('.player').off().on('click', function() {
    $(this).removeClass("player");
    $(this).addClass("user");
    $('#yourChar').append($('.user'));
    $('.player').addClass('enemy').removeClass('player');
    $('#enemies').append($('.enemy'));
    player = players[$('.user').data('user-name')];
    bindEnemy();
  });

  function bindEnemy() {
    $('.enemy').off().on('click', function() {
      if ($('.defender').length === 0) {
        console.log('called enemy event');
        $(this).removeClass("enemy");
        $(this).addClass('defender');
        $('.defender').off();
        $('#fight').append($(this));
        defender = players[$('.defender').data('user-name')];
      }
    });
  }
  $('.attack').on('click', function() {
    defender.hp = defender.hp - player.currentAttack;
    player.currentAttack += player.attack;
    console.log(player.name + " attack is : " + player.currentAttack);
    $('#' + defender.name + 'HP').text(defender.hp);
    if (defender.hp <= 0) {
      console.log(defender.name + " is dead");
      $('#enemies').append($('.defender'));
      $('#' + defender.name + 'HP').text('dead');
      $('.defender').removeClass('defender').addClass('dead');
      checkWin();
    }
    //defender attacks back
    player.hp = player.hp - defender.attack;
    $('#' + player.name + 'HP').text(player.hp);
    console.log(defender.name + " attack is : " + defender.attack);
    checkLose();
  });

  function resetButton() {
    var reset = $('<button>').text('Reset');
    reset.addClass('reset');
    $('#fight').append(reset);
    $('.reset').on('click', function() {
      location.reload();
    });
  }

  function checkWin() {
    if ($('.dead').length === 3) {
      alert('You Win!');
      $('.attack').remove();
      resetButton();
    }
  }

  function checkLose() {
    if (player.hp <= 0 && $('.dead').length < 3) {
      alert('You Lose');
      $('.attack').remove();
      resetButton();
    }
  }
});
