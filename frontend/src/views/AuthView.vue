<template>
  <div class="auth">
    <div class="card shadow">
      <div class="card__title">Authorization</div>
      <div v-if="!!error" class="card__error">
        {{ error }}
      </div>
      <form class="card__form" @submit.prevent="submit">
        <ui-input
          type="email"
          v-model="form.email"
          placeholder="Enter your email"
        />
        <ui-input
          type="password"
          v-model="form.password"
          placeholder="Enter your password"
        />
        <ui-button
          :disabled="submitting || !isSubmitAvailable"
          :class="{ disabled: !isSubmitAvailable }"
          >Sign In</ui-button
        >
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { mapActions } from "vuex";
export default {
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    error: "",
    submitting: false,
  }),
  computed: {
    isSubmitAvailable() {
      return !!this.form.email && !!this.form.password;
    },
  },
  methods: {
    ...mapActions({
      login: "user/login",
    }),
    async submit() {
      this.submitting = true;
      this.error = "";

      try {
        await this.login({
          email: this.form.email,
          password: this.form.password,
        });
      } catch (e: any) {
        this.error =
          e.response.status === 400
            ? "The password or email is incorrect"
            : "Internal server error, please, try later";
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>
<style scoped>
.auth {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  min-width: 436px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: var(--primary-shadow);
}
.card__title {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 24px;
}
.card__error {
  color: var(--error-color);
  margin-bottom: 12px;
}
.card__form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 480px) {
  .auth {
    display: block;
  }

  .card {
    min-width: 100%;
    max-width: 100%;
    box-shadow: none;
    padding: 12px;
  }
}
</style>
