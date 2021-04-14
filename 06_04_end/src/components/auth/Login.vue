<template>
<div class="container">
  <div class="row g-3 justify-content-center">
    <div class="col">
      <form @submit="onSubmit">
        <h2>Login</h2>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            v-model="username"
            required
            class="form-control"
            id="username"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            v-model="password"
            required
            class="form-control"
            id="password"
          />
        </div>
        <div class="mb-3">Username/Password: <b>test</b></div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "Login Component",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.username);
      console.log(this.password);
      if (this.username != "test" || this.password != "test") {
        alert("Invalid username or password");
        return;
      }
      this.$store.commit("isLoggedIn", true);
      this.$router.push("/");
    },
  },
};
</script>