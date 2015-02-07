# Instructions

# Write a function capitals that takes a single string (word) as argument. The functions must return an ordered list containing the indexes of all capital letters in the string.

# Example

# Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

# pseudocode
# split word into letters
# for each letter check to see if the char is equal to the uppercase version
  # if so add the index to the array to return

capitals = (word) ->
  word.split('').reduce (caps, char, idx) ->
    if char is char.toUpperCase() then caps.concat(idx) else caps
  , []
