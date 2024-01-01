<template>
  <div>
    <h2>Users View</h2>
    <div v-if="isLoading">Please wait....</div>
    <div v-else>
      <p>Users Loaded</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { type UserInterface } from '@/interfaces';

import { fetchUsers } from '@/api/users';

const users = ref<UserInterface[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  const fetchedUsers = await fetchUsers();
  users.value = fetchedUsers;
  isLoading.value = false;
});
</script>