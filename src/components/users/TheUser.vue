<template>
    <fwb-card href="#" class="m-2">
        <div class="p-5">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ user.name }} - {{ user.username }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <div class="mt-8 px-2 flex flex-col gap-3">
                <div class="flex items-center gap-2">
                    <v-icon name="ri-mail-fill" />
                    <span class="text-sm font-semibold">{{ user.email }}</span>
                </div>
                <div class="flex items-center gap-2">
                    <v-icon name="la-city-solid" />
                    <span class="text-sm font-semibold">{{ user.address.city }} - {{ user.address.street }}</span>
                </div>
            </div>
        </div>
    </fwb-card>
</template>

<script setup lang="ts">
import { type UserInterface } from '@/interfaces';

import { FwbCard } from 'flowbite-vue';

interface UserComponentProps {
    user: UserInterface
}
defineProps<UserComponentProps>();
</script>