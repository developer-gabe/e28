import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import BlogPostList from "@/components/BlogPostList.vue";


describe("BlogPostList.vue", () => {
  it("renders list of blog posts", () => {

    let post = {
      id: 1,
      title: "",
      link: "",
      date: "",
      tags: [''],
      exceprt:
        ""
    };

    const wrapper = shallowMount(BlogPostList, {
      propsData: { post }
    });
    expect(wrapper.text()).to.include(post.title);
  });
});
