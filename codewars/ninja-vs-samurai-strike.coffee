# Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

# ninja = new Warrior('Ninja')
# samurai = new Warrior('Samurai')

# samurai.strike(ninja, 3)
# ninja.health should == 70

# Solution
class Warrior
  constructor: (@name, @health = 100) ->

  strike: (enemy, swings) ->
    enemy.health = Math.max(0, enemy.health - (swings * 10))

# Tests
ninja = new Warrior('Ninja')
samurai = new Warrior('Samurai')
Test.assertEquals(samurai.strike(ninja, 3), 70, 'Samurai should remove 30 health')
Test.assertEquals(samurai.strike(ninja, 12), 0, 'Should set health to 0 if it goes negative')
Test.assertEquals(samurai.name, 'Samurai', 'Samurai\'s name should be Samurai')
Test.assertEquals(ninja.name, 'Ninja', 'Ninja\'s name should be Ninja')
