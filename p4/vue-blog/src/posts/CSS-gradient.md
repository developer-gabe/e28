# Fluid Animated CSS Gradient Text Effect
#### Feb. 12 2019

CSS animations are awesome. Not only do they make great <a href="https://codepen.io/astrixsz/pen/RRxyKz">digital art pieces</a>, they also give us the ability to add fluid design elements, right into our web pages. Recently, I integrated a CSS gradient animation in many of my blog links to give them a living, liquid feel to them. See my 'Recent Essays' module below

![](https://thepracticaldev.s3.amazonaws.com/i/dgbkiccdcmzkaaqjp78l.gif)
*note: gif is sped up for demonstration purposes*

Neat, right? And fairly simple to accomplish. All we really need is CSS!
![](https://thepracticaldev.s3.amazonaws.com/i/vkte2wsl6qssuzx1igw0.png)

### Let's deconstruct it
So first thing in my CSS is the animation rules.
![](https://thepracticaldev.s3.amazonaws.com/i/22q5uwa3cey3rebl4vxw.png)
Here, I'm saying - play the animation named **flow** for a duration of **30 seconds**. Set the animation to **ease in and out** for a smoother effect, and have the animation loop for an **infinite** number of times.


Then there are the background rules.
![](https://thepracticaldev.s3.amazonaws.com/i/tnbnn83e1q5cxjlyt0gi.png)
I set my background to be a **linear-gradient** and give it my desired colors. *For beautiful gradients I use often <a href="https://uigradients.com/">UI Gradients</a> when I can't come up with anything nice.* I then stretch out the background to 300% the size using the **background-size** property to give the animation room to move. 

I then set the **background-clip** to be **text** and set the **text-fill-color** to be **transparent** so my default font color doesn't interfere with my gradient.
![](https://thepracticaldev.s3.amazonaws.com/i/swhf3ofsef0da4o65tnb.png)

Now on to the actual animating. I create a keyframe animation named flow and set up keyframes at the zero, fifty, and one-hundred percent marks.
![](https://thepracticaldev.s3.amazonaws.com/i/o4qwm1t4ranf88sfpw5s.png)
Final result:
![](https://thepracticaldev.s3.amazonaws.com/i/ms7hu4num9zl7w9atgkz.gif)
And there you have it - a nice, fluid animated gradient over text. Just another little fun design element courtesy of CSS.