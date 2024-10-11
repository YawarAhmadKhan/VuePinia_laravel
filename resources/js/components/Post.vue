<style scoped>
.post-enter-active,
.post-leave-active {
    transition: all 1s ease-in-out;
}

.post-enter, .post-leave-to /* .post-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
</style>
<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-8">
                <!-- <div class="row">
                    <div
                        transition-group
                        name="post"
                        tag="div"
                        class="col-md-4 mt-1"
                        v-for="post in posts"
                        :key="post.id"
                    >
                        <div class="card">
                            <img
                                class="card-img-top"
                                src="https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?t=st=1728420561~exp=1728424161~hmac=ec02798a0de0fa4dc1a216a0621c24256304b537e2c22c9a3073f8a08b54a1cc&w=900"
                                alt="Card image"
                                style="width: 100%"
                                v-if="posts.image"
                            />
                            <div class="card-body">
                                <h4 class="card-title">{{ post.title }}</h4>
                                <p class="card-text">
                                    {{ post.description }}
                                </p>
                                <a href="#" class="btn">See more..</a>
                            </div>
                            <div
                                class="card-footer d-flex justify-content-between bg-transparent border-top-0"
                            >
                                <button class="btn btn-primary">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div> -->
                <transition-group name="post" tag="div" class="row">
                    <div
                        class="col-md-4 mt-1"
                        v-for="post in posts"
                        :key="post.id"
                    >
                        <div class="card">
                            <img
                                class="card-img-top"
                                :src="
                                    post.image ||
                                    'https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg'
                                "
                                alt="Card image"
                                style="width: 100%"
                            />
                            <div class="card-body">
                                <h4 class="card-title">{{ post.title }}</h4>
                                <p class="card-text">{{ post.description }}</p>
                                <a href="#" class="btn">See more..</a>
                            </div>
                            <div
                                class="card-footer d-flex justify-content-between bg-transparent border-top-0"
                            >
                                <button
                                    class="btn btn-primary"
                                    @click="editItem(post.id)"
                                >
                                    Edit
                                </button>
                                <button
                                    class="btn btn-danger"
                                    @click="deleteItem(post.id)"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
            <div class="col-md-4">
                <form @submit.prevent="addItems">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input
                            v-model="title"
                            type="text"
                            class="form-control"
                            id="title"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label"
                            >Description</label
                        >
                        <textarea
                            v-model="description"
                            class="form-control"
                            rows=""
                            id="description"
                            placeholder="Enter Descritption"
                        ></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <label class="form-label" for="exampleCheck1"
                            >Upload Photo</label
                        >
                        <input
                            type="file"
                            class="form-control"
                            id="exampleCheck1"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        {{ edit_id ? "Update" : "Save" }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { PostStore } from "../store/post/StorePost";
const { posts, title, description, edit_id } = storeToRefs(PostStore());
const { addItems, fetchPosts, editItem, deleteItem } = PostStore();
fetchPosts();
</script>
