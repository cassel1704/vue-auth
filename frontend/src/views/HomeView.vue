<template>
  <div class="home">
    <ui-button class="home__logout" @click="logout">Logout</ui-button>
    <div class="home__info">
      <label-value label="Username">{{ user.username }}</label-value>
      <label-value label="Email">{{ user.email }}</label-value>
      <label-value label="Telegram">
        <a :href="user.telegram" target="_blank" rel="noreferrer noopener">
          {{ user.telegram }}
        </a>
      </label-value>
      <label-value label="Linkedin">
        <a :href="user.linkedin" target="_blank" rel="noreferrer noopener">
          {{ user.linkedin }}
        </a>
      </label-value>
    </div>
  </div>
</template>
<script lang="ts">
import LabelValue from "@/components/LabelValue.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { LabelValue },
  computed: {
    ...mapState({
      user: (state: any) => state.user.data,
    }),
  },
  methods: {
    ...mapActions({
      logout: "user/logout",
    }),
  },
};
</script>
<style scoped>
.home {
  padding: 20px;
}
.home__logout {
  margin-bottom: 24px;
}
.home__info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (max-width: 480px) {
  .home {
    padding: 12px;
  }
}
</style>
