---
title: Single File Components
date: 2019-10-20 12:59:18
excerpt: Exploring single file components in the Vue framework
description: Gabe Sousa | Exploring single file components in the Vue framework
type: post
blog: true
tags:
    - Vue
    - WebDev
---


Single-File-Components or SFC, is a Vue.js feature that allows us to build our entire component - template, logic, and styles, in one `.vue` file.

Below is an example of a component which displays a paragraph element with static text and a dynamic winner.

```vue
<template>
<p>And the winner is: {{ winner }}</p>
</template>

<script>
module.exports = {
	data: function () {
		return {
			winner: 'You'
		}
	}
}
</script>


<style scoped>
p {
	color: blue;
}
</style>
```

### Template & Script
The template portion of this example is a paragraph element with some template syntax that allows us to render data to the DOM. Templates in single file components must be wrapped in one html tag, so if we wanted to include multiple paragraph elements in our example, we would have to wrap our elements in a `div` or a similar container element.

In between the script tags are where our logic and data are found. The data and DOM are linked allowing us to dynamically change our data, so if we were to change the winner data to say 'me', the DOM would reflect that change reactively.

### Style
```vue
<style scoped>
p {
	color: blue;
}
</style>
```
In the example above, the style tag features the attribute `scoped`. This attribute allows us to style the elements of the current component only. Meaning if this component is featured on a page with other paragraph elements, only the paragraph element in this component will take on the color blue, the rest will follow whatever default rules were set for the paragraph elements.

<hr>
For additional reading on single file components or the Vue framework in general, I recommend checking out the official <a href="https://vuejs.org/v2/guide/"> Vue.js documentation</a>