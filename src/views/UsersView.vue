<template>
  <div v-if="isLoading" class="flex justify-center items-center h-screen">
    <fwb-spinner size="10" color="red" />
  </div>
  <div v-else class="flex flex-col gap-4">
    <h2 class="text-center font-bold text-3xl">Users List</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <TheUsers :users="users" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { type UserInterface } from '@/interfaces';

import { FwbSpinner } from 'flowbite-vue'

import TheUsers from '@/components/TheUsers.vue';

import { fetchUsers } from '@/api/users';

const users = ref<UserInterface[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  const fetchedUsers = await fetchUsers();
  users.value = fetchedUsers;
  isLoading.value = false;
});
</script>