# vue-blog
This blog is sort of a clone of my live VuePress blog found on my root domain. Though this blog lacks some of the functionality that my live blog has, as I had to build it from the ground up.

 Contains three posts, all of which are markdown files located in:

`src/posts` 

Posts are converted into pages via Vue Markdown loader and are displayed using the `BlogPost.vue` component

### Project setup

Locate and CD into the `vue-blog` directory inside the p4 folder and run:
```
npm install
```

##### Development
```
npm run serve
```

##### Production
```
npm run build
```