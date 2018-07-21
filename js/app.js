// 1.) Create the deck so when a card is dealt and then played it is excluded from
//     the deck and can't be reused until a new game.
// 2.) Make 2 functions to shuffle the deck and then deal the cards. 9 cards
//     have to be dealt out to each player however they can only use the 3 which
//     are in their hand and not part of their final hand.
// 3.) Need to make 5 exeptions for the special cards and apply those rules to
//     the game.
// 4.) Might want to add a settings element where users are able to change rules of the game.

$(() => {
  const $cardsInHand = $('.p1-hand-cards');
  const $dealButton = $('.deal-button');
  const $newGameButton = $('.new-game-button');
  const $drawCardButton = $('.draw-card');
  // const $numberCount = $('.number-count');


  // Creating the deck

  // var cardsPlayed = [];
  // var usedCardsPile = [];
  var deck = [
    {
      rank: 14,
      suit: 'clubs',
      cardImage: 'images/ace_of_clubs.png'
    },
    {
      rank: 14,
      suit: 'diamonds',
      cardImage: 'images/ace_of_diamonds.png'
    },
    {
      rank: 14,
      suit: 'hearts',
      cardImage: 'images/ace_of_hearts.png'
    },
    {
      rank: 14,
      suit: 'spades',
      cardImage: 'images/ace_of_spades.png'
    },
    {
      rank: 2,
      suit: 'clubs',
      cardImage: 'images/2_of_clubs.png'
    },
    {
      rank: 2,
      suit: 'diamonds',
      cardImage: 'images/2_of_diamonds.png'
    },
    {
      rank: 2,
      suit: 'hearts',
      cardImage: 'images/2_of_hearts.png'
    },
    {
      rank: 2,
      suit: 'spades',
      cardImage: 'images/2_of_spades.png'
    },
    {
      rank: 3,
      suit: 'clubs',
      cardImage: 'images/3_of_clubs.png'
    },
    {
      rank: 3,
      suit: 'diamonds',
      cardImage: 'images/3_of_diamonds.png'
    },
    {
      rank: 3,
      suit: 'hearts',
      cardImage: 'images/3_of_hearts.png'
    },
    {
      rank: 3,
      suit: 'spades',
      cardImage: 'images/3_of_spades.png'
    },
    {
      rank: 4,
      suit: 'clubs',
      cardImage: 'images/4_of_clubs.png'
    },
    {
      rank: 4,
      suit: 'diamonds',
      cardImage: 'images/4_of_diamonds.png'
    },
    {
      rank: 4,
      suit: 'hearts',
      cardImage: 'images/4_of_hearts.png'
    },
    {
      rank: 4,
      suit: 'spades',
      cardImage: 'images/4_of_spades.png'
    },
    {
      rank: 5,
      suit: 'clubs',
      cardImage: 'images/5_of_clubs.png'
    },
    {
      rank: 5,
      suit: 'diamonds',
      cardImage: 'images/5_of_diamonds.png'
    },
    {
      rank: 5,
      suit: 'hearts',
      cardImage: 'images/5_of_hearts.png'
    },
    {
      rank: 5,
      suit: 'spades',
      cardImage: 'images/5_of_spades.png'
    },
    {
      rank: 6,
      suit: 'clubs',
      cardImage: 'images/6_of_clubs.png'
    },
    {
      rank: 6,
      suit: 'diamonds',
      cardImage: 'images/6_of_diamonds.png'
    },
    {
      rank: 6,
      suit: 'hearts',
      cardImage: 'images/6_of_hearts.png'
    },
    {
      rank: 6,
      suit: 'spades',
      cardImage: 'images/6_of_spades.png'
    },
    {
      rank: 7,
      suit: 'clubs',
      cardImage: 'images/7_of_clubs.png'
    },
    {
      rank: 7,
      suit: 'diamonds',
      cardImage: 'images/7_of_diamonds.png'
    },
    {
      rank: 7,
      suit: 'hearts',
      cardImage: 'images/7_of_hearts.png'
    },
    {
      rank: 7,
      suit: 'spades',
      cardImage: 'images/7_of_spades.png'
    },
    {
      rank: 8,
      suit: 'clubs',
      cardImage: 'images/8_of_clubs.png'
    },
    {
      rank: 8,
      suit: 'diamonds',
      cardImage: 'images/8_of_diamonds.png'
    },
    {
      rank: 8,
      suit: 'hearts',
      cardImage: 'images/8_of_hearts.png'
    },
    {
      rank: 8,
      suit: 'spades',
      cardImage: 'images/8_of_spades.png'
    },
    {
      rank: 9,
      suit: 'clubs',
      cardImage: 'images/9_of_clubs.png'
    },
    {
      rank: 9,
      suit: 'diamonds',
      cardImage: 'images/9_of_diamonds.png'
    },
    {
      rank: 9,
      suit: 'hearts',
      cardImage: 'images/9_of_hearts.png'
    },
    {
      rank: 9,
      suit: 'spades',
      cardImage: 'images/9_of_spades.png'
    },
    {
      rank: 10,
      suit: 'clubs',
      cardImage: 'images/10_of_clubs.png'
    },
    {
      rank: 10,
      suit: 'diamonds',
      cardImage: 'images/10_of_diamonds.png'
    },
    {
      rank: 10,
      suit: 'hearts',
      cardImage: 'images/10_of_hearts.png'
    },
    {
      rank: 10,
      suit: 'spades',
      cardImage: 'images/10_of_spades.png'
    },
    {
      rank: 11,
      suit: 'clubs',
      cardImage: 'images/jack_of_clubs.png'
    },
    {
      rank: 11,
      suit: 'diamonds',
      cardImage: 'images/jack_of_diamonds.png'
    },
    {
      rank: 11,
      suit: 'hearts',
      cardImage: 'images/jack_of_hearts.png'
    },
    {
      rank: 11,
      suit: 'spades',
      cardImage: 'images/jack_of_spades.png'
    },
    {
      rank: 12,
      suit: 'clubs',
      cardImage: 'images/queen_of_clubs.png'
    },
    {
      rank: 12,
      suit: 'diamonds',
      cardImage: 'images/queen_of_diamonds.png'
    },
    {
      rank: 12,
      suit: 'hearts',
      cardImage: 'images/queen_of_hearts.png'
    },
    {
      rank: 12,
      suit: 'spades',
      cardImage: 'images/queen_of_spades.png'
    },
    {
      rank: 13,
      suit: 'clubs',
      cardImage: 'images/king_of_clubs.png'
    },
    {
      rank: 13,
      suit: 'diamonds',
      cardImage: 'images/king_of_diamonds.png'
    },
    {
      rank: 13,
      suit: 'hearts',
      cardImage: 'images/king_of_hearts.png'
    },
    {
      rank: 13,
      suit: 'spades',
      cardImage: 'images/king_of_spades.png'
    }
  ];

  $newGameButton.on('click', () => {
    location.reload();
  });

  // number Count

  function cardCount(){
    $('.number-count').attr('inner', 'this');
  }

  cardCount();

  // Shuffle the deck
  function shuffleDeck(){
    var i = deck.length, j, temp;
    while(i-- > 0){
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[j];
      deck[j] = deck[i];
      deck[i] = temp;
    }
  }
  shuffleDeck();

  // Deal cards when button is clicked

  const deckSplit = {
    handCards: [],
    tableCards: [],
    finalCards: [],
    aiHandCards: [],
    aiTableCards: [],
    aiFinalCards: [],
    deckPile: [],
    cardToBeat: []
  };

  $dealButton.on('click', () => {
    const deckLength = deck.length;
    for(var i = 0; i < deckLength ; i++){
      if(deckSplit.handCards < 3){
        $('.p1-hand-cards').append(`<img src='${deck[i].cardImage}'/>`);
        deckSplit.handCards++;
        deck.splice(i, 1);

      } else if(deckSplit.tableCards < 3){

        $('.p1-table-cards').append($(`<img src='${deck[i].cardImage}'/>`));
        deckSplit.tableCards++;
        deck.splice(i, 1);

      } else if(deckSplit.finalCards < 3){

        $('.p1-final-cards').append($(`<img src='images/back.png'/>`));
        deckSplit.finalCards++;
        deck.splice(i, 1);

      } else if(deckSplit.aiHandCards < 3){

        $('.p2-hand-cards').append(`<img src='${deck[i].cardImage}'/>`);
        deckSplit.aiHandCards++;
        deck.splice(i, 1);

      } else if(deckSplit.aiTableCards < 3){
        $('.p2-table-cards').append($(`<img src='${deck[i].cardImage}'/>`));
        deckSplit.aiTableCards++;
        deck.splice(i, 1);

      } else if(deckSplit.aiFinalCards < 3){
        $('.p2-final-cards').append($(`<img src='images/back.png'/>`));
        deck.splice(i, 1);
        deckSplit.aiFinalCards++;

      } else if(deckSplit.cardToBeat < 1){
        $('.card-to-beat').append($(`<img src='${deck[i].cardImage}'/>`));
        deckSplit.cardToBeat++;
        deck.splice(i, 1);

      } else {
        console.log(deck[i]);
        $('.deck').append(`<img src='images/back.png' data-suit='${deck[i].suit}' data-rank='${deck[i].rank}'/>`);

      }
    }
  });


  // Deal card button.

  $drawCardButton.on('click', () => {

    $('.deck').append();

  });


  // Rules
  // 2.) When its a players turn, if they click on one of their cards it must become the new cardToBeat
  //     and the old card to beat gets added into cardsPlayed.

  $cardsInHand.on('click', () => {
    console.log('clicked');
    if($cardsInHand.prop('rank') >= $('.card-to-beat').prop('rank')){
      $('.p1-hand-cards').appendTo($('.card-to-beat'));
    } else {
      alert('That card cannot be played, please pick another');
    }
  });
});
