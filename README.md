# reddit-giveaway
A CLI for running effective Reddit giveaways using Puppeteer

Intended use:
When creating a giveaway thread, require each user who would like to enter to include a string.

(ex: To enter this giveaway please include "example string" in your comment)

Default run command: 
node app.js

Takes 4 non-abstracted inputs:
1. URL of Reddit post
2. String being searched for
3. Whether or not capitalization should be ignored
4. The number of winners

Currently #3 does nothing. I may revisit if it proves useful for me to do so, otherwise feel free to branch and make that simple change for your own use.

Outputs:
Comma-separated usernames of the winners

Notes:
Currently does not load additional comments, thus this is not currently applicable for posts that recieved enough comments to warrent additional pages of comments.
