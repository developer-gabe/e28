<template>
  <div id="comment-section">
    <h1>Site Comments</h1>
    <div class="form-feedback-error" v-if="!$v.newComment.minLength">
      Comments must be longer than 3 characters
    </div>
    <div class="form-feedback-error" v-if="!$v.newComment.required">
      Comments can not be blank
    </div>
    <ul class="comments-list">
      <li v-for="comment in comments" :key="comment.id">
        <section class="comment-box">
          <h4>Anonymous:</h4>
          {{ comment.text }}
        </section>
      </li>
    </ul>
    <div id="commentform">
      <form v-on:submit.prevent="addNewComment">
        <label for="comment"
          ><input
            data-test="comment-box"
            v-model="newComment"
            type="text"
            id="comment-box"
        /></label>
        <button data-test="submit-btn">
          Post Comment
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
const axios = require("axios");

export default {
  name: "commentSection",
  data: function() {
    return {
      comments: "",
      newComment: ""
    };
  },
  methods: {
    addNewComment: function() {
      this.id = Math.random() * 100;
      axios({
        method: "post",
        url: "https://e28-vueblog.firebaseio.com/comments.json",
        data: {
          id: this.id,
          text: this.newComment
        }
      }).then(response => {
        this.$set(this.comments, response.data.name, {
          id: this.id,
          text: this.newComment
        });
      });
    }
  },
  validations: {
    newComment: {
      required,
      minLength: minLength(3)
    }
  },
  beforeMount() {
    axios
      .get("https://e28-vueblog.firebaseio.com/comments.json")
      .then(response => {
        this.comments = response.data;
      });
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
  transition: all ease-in-out 0.2s;
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

.form-feedback-error {
	text-align: center;
	color: #f05888;
	font-weight: 600;
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
