<template>
  <div id="comment-section">
    <h1>Site Comments</h1>
    <ul class="comments-list">
      <li v-for="(comment, index) in comments" :key="comment.id">
        <section class="comment-box">
          <h4>Anonymous:</h4>
          {{ comment.text }}
          <span data-test="remove"  v-on:click="comments.splice(index, 1)">remove</span>
        </section>
      </li>
    </ul>
    <div id="commentform">
      <label for="comment"
        ><input data-test="comment-box"  v-model="newComment" type="text" id="comment-box"
      /></label>
      <button data-test="submit-btn" v-on:click="addNewComment">Add Comment</button>
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

#comment-section {
	animation: fadeIn 2s ease-in-out;
}

#comment-box {
	display: block;
	margin: auto;
	padding: 3rem 0;
	width: 70%;
  height: 100px;
  padding-top: 0;
  padding-left: 1rem;
  font-size: 1.5rem;
  border-radius: 15px;
  border: 2px solid #4dc7a0;
}

button {
  background: #fff;
  border: 1px solid #4dc7a0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  padding: 1.5rem;
  margin: 2rem auto;
	border-radius: 10px;
	transition: all ease-in-out .2s;
	margin: 2rem auto;
	display: block;
}

button:hover {
	transform: scale(1.1);
}

.comment-box {
  border-radius: 15px;
  box-shadow: 0 1px 3px #0000001f, 0 1px 2px #0000003d;
  padding: 2rem;
  margin: 1rem auto;
	animation: zoomIn 1s ease-in-out;
	width: 70%;
}

.box p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

h4 {
  color: #4dc7a0;
}

h1 {
	color: #4dc7a0;
  margin: auto;
  text-align: center;
}

span {
  text-align: right;
  display: block;
  color: #4dc7a0;
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
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  0% {
		opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
