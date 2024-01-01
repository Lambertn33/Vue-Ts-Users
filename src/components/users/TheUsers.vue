<template>
    <TheUser v-for="user in users" :key="user.id" :user="user"/>
</template>

<script setup lang="ts">
import { type UserInterface } from '@/interfaces';

import TheUser from './TheUser.vue';

interface UsersComponentProps {
    users: UserInterface[]
}

defineProps<UsersComponentProps>();
</script>