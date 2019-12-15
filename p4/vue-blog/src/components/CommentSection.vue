<template>
  <div>
    <h1>Site Comments</h1>
    <ul class="comments-list">
      <li v-for="(comment, index) in comments" :key="comment.id">
        <section class="comment-box">
          <h4>Anonymous:</h4>
          {{ comment.text }}
          <span v-on:click="comments.splice(index, 1)">remove</span>
        </section>
      </li>
    </ul>
    <div id="commentform">
      <label for="comment"
        ><input v-model="newComment" type="text" id="comment-box"
      /></label>
      <button v-on:click="addNewComment">Add Comment</button>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

const comments = [
  {
    id: "1",
    text: "Great Post"
  },
  {
    id: "2",
    text: "This post is okay, could of been better."
  }
];

export default {
  name: "commentSection",
  data: function() {
    return {
      comments: comments,
      newComment: ""
    };
  },
  methods: {
    addNewComment: function() {
      this.comments.push({
        id: Math.random() * 100,
        text: this.newComment
      });
    }
  },
  validations: {
    product: {
      slug: {
        required,
        minLength: minLength(4)
      },
      name: {
        required
      }
    }
  }
};
</script>

<style scoped>
#comment-box {
  padding: 3rem 0;
  display: block;
  width: 100%;
  height: 100px;
  padding-top: 0;
  padding-left: 1rem;
  font-size: 1.5rem;
  border-radius: 15px;
  border: 2px solid #f05888;
}

button {
  background: #fff;
  border: 1px solid #f05888;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  padding: 1.5rem;
  margin: 2rem auto;
  border-radius: 10px;
}

.comment-box {
  border-radius: 15px;
  box-shadow: 0 1px 3px #0000001f, 0 1px 2px #0000003d;
  padding: 2rem;
  margin: 1rem auto;
  animation: zoomIn ease-in-out 1s;
}

.box p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

h4,
h1 {
  color: #f05888;
}

h1 {
  margin: auto;
  text-align: center;
}

span {
  text-align: right;
  display: block;
  color: #f05888;
  transition: all ease-in-out 0.3s;
}

span:hover {
  font-size: 1.8rem;
}

@keyframes zoomIn {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
