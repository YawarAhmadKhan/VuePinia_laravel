import { defineStore } from "pinia";
export const PostStore = defineStore("post", {
    state: () => ({
        posts: [],
        title: null,
        description: null,
        edit_id: null,
    }),
    getters: {},
    actions: {
        async fetchPosts() {
            this.posts = [];
            try {
                let Allposts = await axios.get("api/all_posts");
                this.posts = Allposts.data;
            } catch (err) {
                alert(err);
            } finally {
            }
        },
        addItems() {
            if (this.title != "" && this.description != "") {
                if (edit_id > 0) {
                    let form_data = {
                        title: this.title,
                        description: this.description,
                    };
                    axios
                        .put(`api/posts/${id}`, form_data)
                        .then((res) => {
                            console.log(res);
                            this.fetchPosts();
                            this.formRest();
                        })
                        .catch((error) => {
                            // Capture error and store it in a reactive property
                            this.errorMessage =
                                error.response?.data?.message ||
                                "An unexpected error occurred";
                            console.log(this.errorMessage);
                        });
                } else {
                    let form_data = {
                        title: this.title,
                        description: this.description,
                    };
                    axios
                        .post("api/posts", form_data)
                        .then((res) => {
                            console.log(res);
                            this.fetchPosts();
                        })
                        .catch((error) => {
                            // Capture error and store it in a reactive property
                            this.errorMessage =
                                error.response?.data?.message ||
                                "An unexpected error occurred";
                            console.log(this.errorMessage);
                        });
                }
            }
        },
        editItem(id) {
            let postForEdit = this.posts.find((post) => post.id == id);
            if (postForEdit) {
                this.title = postForEdit.title;
                this.description = postForEdit.description;
                this.edit_id = postForEdit.id;
            }
        },

        deleteItem(id) {
            try {
                axios.delete(`api/deletePost/${id}`).then((res) => {
                    this.fetchPosts();
                });
            } catch (err) {
                console.log(err);
            }
        },
        formRest() {
            this.title = null;
            this.description = null;
            this.edit_id = null;
        },
    },
});
