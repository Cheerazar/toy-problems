/* Prompt
Create any card game!

Create a Card Game library of classes which could be used to create any number of basic card games. You'll need at least a Deck class and a Card class.

Deck functionality

A deck has a public attribute:

cards: array of remaining cards in the deck.

...and three public methods:

count(): count of remaining cards in the deck.

shuffle(): randomize the order of the remaining cards in the deck.

draw(n): remove the last n cards from the deck and return them in an array.

Upon initialization, a deck is filled with 52 cards (13 from each of 4 suits).

Card functionality

A card has these public attributes:

suit: a symbol representing the suit of the card.
rank: an integer from 1 to 13. ("ace" is 1, "king" is 13)
Javascript: face_card: is this card a face card? (> 10)
...and these methods:

Ruby: face_card?: is this card a face card? (> 10)
to_s (JS:toString()) : human-readable string representation of the card (e.g. "Ace of Spades", "10 of Clubs", "Queen of Hearts")
Cards must be Comparable to other cards. Compare the ranks of the cards only.

Since this is a low level layer to build card games above, all test input will be valid. All ranks will be between 1 and 13 and all suits will be one of

Ruby: :hearts, :diamonds, :spades, :clubs
Javascript: Card.HEARTS, Card.DIAMONDS, Card.CLUBS, Card.SPADES
*/

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
  this.face_card = this.rank > 10;
}

Card.prototype = {
  toString: function () {
    var faceCards = {
      1: 'Ace',
      11: 'Jack',
      12: 'Queen',
      13: 'King'
    };

    if (faceCards.hasOwnProperty(this.rank)) {
      return faceCards[this.rank] + ' of ' + this.suit;
    } else {
      return '' + this.rank + ' of ' + this.suit;
    }
  },

  valueOf: function () {
    return this.rank;
  }
};

Card.SPADES = 'Spades';
Card.HEARTS = 'Hearts';
Card.CLUBS = 'Clubs';
Card.DIAMONDS = 'Diamonds';



function Deck() {
  this.cards = this._makeDeck();
}

Deck.prototype = {
  count: function() {
    return this.cards.length;
  },
  draw: function (n) {
    return this.cards.splice(this.cards.length - n, n);
  },
  shuffle: function() {
    // calculate cards length
    var cardsLength = this.cards.length;
    // initialize temp variable
    var temp, curr, randomIndex;
    // for each card in cards
    for (curr = 0; curr < cardsLength; curr++) {
      // calculate random index, k, between cardsLength and current index
      randomIndex = Math.floor(Math.random() * (cardsLength - curr + 1)) + curr;
      // set value at random index to temp
      temp = this.cards[randomIndex];
      // set random index equal to value at current index
      this.cards[randomIndex] = this.cards[curr];
      // set temp to current index
      this.cards[curr] = temp;
    }
  },
  _makeDeck: function () {
    var deck = [];
    for (var suit in Card) {
      for (var rank = 1; rank < 14; rank++) {
        deck.push(new Card(suit, rank));
      }
    }

    return deck;
  }
};
