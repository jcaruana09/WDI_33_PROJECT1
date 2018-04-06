#Karma, Threes, Palace, Shed

####Goal: To create a card game based on Karma.
####Technologies used: 
* HTML5
* CSS3
* Javascript (ECMAScript 6) and jQuery
* Git
* Github

###Game Instructions -

1. 2 players are dealt 3 cards into 3 different hands; hand cards, table cards and final cards. 

2. Players then take turns trying to beat the last card played by adding a higher value card from their hand cards.

3. There are 4 different special cards which have different abilities and can be played on any card no matter the value:

	* 2 - Can be played on any card.
	* 3 - The next player has to pick up played cards pile unless they also have a 3, which would mean the next player after them would have to pick up unless they also had a 3 etc.
	* 9 - Next player has to play a card lower than 9 rather than higher.
	* 10 - Moves all cards in played cards pile to used cards pile so they don't have to be picked up.

4. If a player puts down a card, when there are still cards in the deck and they have less than 3 hand cards, they must draw a card from the deck. 

5. If a player can't beat the last card played, they lose the round and have to pick up the played cards pile.

6. Once there are no cards left in the deck and a player has used all their hand cards, they can then use their table cards.

7. Once a player has used all their table cards they are then allowed to use their final cards.  

8. The player to use all their final cards first is the winner.


##Approach 

####Research and Planning

I started out by researching other versions of the game online to try and get an idea of how I wanted to design structure and layout of the web page. Once I had some inspiration I began drawing the layout plan. 

The initial plan consisted of a header which would contain both the heading and nav bar for the page. A main tag which would function as the board or table for the game where the deck and player hands would be dealt. Next to that would be an aside section which would have buttons to deal and draw the cards from the deck and also a card count section to track how many cards were left in the deck.

The next step was to write the psudocode for the game logic, listing out each step of the game. For example, I would write, a function for creating the array of cards, another one for shuffling the cards and created a function within a loop for dealing the cards etc. 

####Development 



####Challenges / Shortfalls 

I wanted to keep my code clean and easy to read by using a for loop to join multiple arrays together, which would represent the different properties of the cards. eg, one array for card suit and another for card value.




