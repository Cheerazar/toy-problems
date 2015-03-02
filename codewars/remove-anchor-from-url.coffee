###
Description:

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:

# returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

# returns 'www.codewars.com?page=1'
###

# Solution
# My initial solution was able to be refined as seen in the second solution
removeUrlAnchor = (url) ->
  index = url.indexOf('#')
  if index isnt -1 then url.slice(0, index) else url

# Second Solution
removeUrlAnchor = (url) ->
  url.split('#')[0]
