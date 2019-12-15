# Introduction to CSS Grid
#### Feb. 10 2019

CSS Grid is the heaven sent answer to all those pesky work-arounds developers have had for laying out grids on webpages for years. Rather than having to deal with tables and floats - we now have this amazing, two dimensional layout tool, which allows us to control all aspects of our rows and columns, <a href="https://youtu.be/e0Y39QnwRvY?t=18">at the same damn time</a>. You can do so much with CSS Grid, and in the <a href="https://labs.jensimmons.com/">right hands</a>, it almost seems like magic. So for all my junior developers out there who are looking to let go of their precious bootstap framework and need a quick lesson in CSS Grids, this post is for you. Let's kick it off by learning two key terms:

### Grid Containers

The first step to setting up your grid is to define your grid container. A grid container, houses and establishes and your grid. The container sets the grid formatting context and manages how its direct child elements are spaced, sized and aligned.

### Grid Items

Grid items are the direct children of a grid container. Any element inside a grid container is considered a grid item.

## Building Out a Grid

We're going to start off by creating and setting our grid container. In our HTML document let's create a **div** element with six paragraph elements inside of it and give it a class name of **my_grid**.

```html
<div class="my_grid">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <p>4</p>
  <p>5</p>
  <p>6</p>
</div>
```

Now in our CSS, we can set the **'my_grid'** class to be a grid container using the **display** property.

```css
.my_grid {
	display: grid;
}
```

### Columns and Rows

Let's define some columns and rows - to do so, we can use the following CSS properties: **grid-template-columns** and **grid-template-rows**. I'm going to define two columns and three rows and will set all of their widths and heights to be **1fr** like so
```css
.my_grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
}
```
For those that may not know, the new **fr unit** represents a fractional unit. By setting **grid-template-columns** to be **1fr 1fr** I am creating two columns in my grid, and telling both of them to take up one fractional unit of the available space.

Here are the results of our grid so far.

![](https://thepracticaldev.s3.amazonaws.com/i/07jy46gseaq0knq15434.png)

We can easily change our grid simply by adjusting the width of the rows/columns or by adding more of them.

![](https://thepracticaldev.s3.amazonaws.com/i/v6eascyp66u1qjjqv3tr.gif)

### Gutters

Gutters are the spaces or gaps between the rows and columns of your grid. To define your gutters, we can use **grid-column-gap** and **grid-row-gap**.
```css
.my_grid {
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	grid-template-rows: 1fr 4fr 1fr;
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
}
````

![](https://thepracticaldev.s3.amazonaws.com/i/3v918qybvd329db8wtw2.gif)

Alternatively, you could use **grid-gap** by itself. With **grid-gap** you can give it two values - the first being the rows gap value, and the second being the columns.

### Keep going

Easy stuff, no? If you enjoyed reading this brief introduction on CSS grids, I highly recommend you continue learning about it. CSS Tricks has an <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">amazing guide</a> you can study up on to master the grid. Jen Simmons also published <a href="http://jensimmons.com/post/feb-27-2017/learn-css-grid">a post</a> to some great resources for learning CSS Grid. A big thank you to <a href="https://dev.to/steelwolf180">Max</a>, a developer here on Dev.to for showing me another great resource after publishing this post - <a href="https://cssgridgarden.com/">Grid Garden</a>, an awesome interactive way to learn CSS grid.

Enjoy, friends!
