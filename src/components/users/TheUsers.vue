<template>
    <fwb-card href="#" v-for="user in users" :key="user.id" class="m-2">
        <div class="p-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ user.name }} - {{ user.email }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
        </div>
    </fwb-card>
</template>

<script setup lang="ts">
import { type UserInterface } from '@/interfaces';

import { FwbCard } from 'flowbite-vue'

interface UsersComponentProps {
    users: UserInterface[]
}

defineProps<UsersComponentProps>();
</script>