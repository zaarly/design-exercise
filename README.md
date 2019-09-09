[**Jump to instrcutions 👇**](#instructions--boundaries)
# Design Exercise: Better Promoted Tweets
**Keep in mind, this is all fake.** We don't have any special knowledge about Twitter's revenue models, business challenges, or user goals (other than what common sense tells us). While this scenario is imaginary, it _is_ a close approximation to how we like to work at Zaarly. As a designer here, this is the kind of project outline you would receive each [project cycle](https://basecamp.com/shapeup/2.2-chapter-08#six-week-cycles).
## Scenario
Congratualtions – you just started a new job at Twitter on the Desktop Design Team. You're excited and nervous and are also questioning whether or not you _really_ want to work in social media... but none of that matters right now, because today you received your first assignment: **Increase the `Follow Rate` from promoted tweets.**

## The Problem – promoted tweets don't attract new followers
The majority of our revenue at Twitter comes from our advertising accounts. We call these `Promoted Tweets`. Here's an example:

[![A promoted tweet from The New York Times that reads 'Here are the best films of 2019 (so far), chosen by New York Times critics'. An image is included of a man lying on a bed smoking a cigarette and a woman sitting on the floor beside him.](https://github.com/zaarly/design-exercise/blob/master/images/promoted-tweet.png)](https://twitter.com/nytimes/status/1151963867649589250)

These promoted tweets get a lot of retweets and a lot of likes, but very few legitimate follows on the promoting account. While 2K people retweeted and 10K people liked the above example tweet within 24 hours, only 15 people followed `@nytimes` from that tweet. The more followers our ads generate, the more valuable they are for us and our advertising accounts.

![A chart showing increased follows over increased tweets equals increased money](https://github.com/zaarly/design-exercise/blob/master/images/chart.jpg)

### The Struggle
Twitter's user research team interviewed desktop users who _did_ follow accounts from promoted tweets and learned there were three main points of friction they overcame on their own:
1. They had to take time to consider why they might want to follow this account based on the content of the promoted tweet.
2. They generally assumed retweets and likes were fake (i.e. purchased somehow) and were much more interested in the quality of the replies as social proof.
3. They had to hunt for the follow button.

#### Here's a heatmap that helped inform the questions we asked in our interviews:
![A heat map of a promoted tweet's status page, showing that the mojority of the interaction happens in the center of the page around the tweet itself.](https://github.com/zaarly/design-exercise/blob/master/images/heatmap.png)

---

## Our Solution
There are probably a hundred good ideas to explore here, but we can be certain that addressing these three areas will help us make some meaningful progress.

### Surface the benefit
Include some copy on the promoted tweet that describes _why_ the user should follow this account. What will they get out of it? Anticipate this copy is something the promoting account will create on their own, but we need you to demonstrate a palatable example.

![A fat marker sketch of a potential solution](https://github.com/zaarly/design-exercise/blob/master/images/cta.jpg)

### Summarize the quality of the replies
There are a lot of lenses to look at this through, and you could really run down some rabbit trails. In the interest of keeping this project quick and light, let's start with surfacing overall likes and retweets across the number of replies.

![A fat marker sketch of a potential solution](https://github.com/zaarly/design-exercise/blob/master/images/summary.jpg)

Seriously - it will be super tempting to argue to measure reply quality in some different ways. We get it. Let's skip that argument for now though. Trust us, it's a can of worms 🐛🐛🐛

### Emphasize the Follow Button
Right now, it's buried under a dropdown and/or way off in the right column where nobody is looking.
![A fat marker sketch of a potential solution](https://github.com/zaarly/design-exercise/blob/master/images/follow.jpg)

## Instructions & Boundaries

### Instructions
* Clone this repo and make your updates on a branch named with your intials (e.g., `fl-design-exercise`).
* The project is bundled with webpack. Run `yarn run develop` to preview it locally.
* All of your edits should be made in the `/src` directory.
* The base project was made with Bootstrap. Please don't use any other frameworks for this exercise.
* Any  CSS, JS, iconography, or other design assets outside of Bootstrap should be made from scratch.
* **To submit your exercise:** Create a Pull Request on this repo and name your PR using the same naming convention as your branch.

### Out-of-bounds
* Do not worry about mobile for this. Twitter will only be releasing this update to desktop browsers.
* You don't need to show multiple options. You have the pitch, give us your best shot.
* Don't worry about the logged out modal version of the status screen. Just recreate the logged-in version.
* Don't worry about re-creating the comment thread. All we want to see is the promoted tweet and the side columns. You could use placeholder divs or something for the first few comments if that helps your design.
* Nothing server-side. The only code you are writing is HTML, CSS (or Sass if you prefer), and presentational JS (if youre design requires it and you're up to it).


