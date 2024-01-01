<template>
    <fwb-navbar class="bg-gray-200">
        <template #default="{ isShowMenu }">
            <fwb-navbar-collapse :is-show-menu="isShowMenu">
                <fwb-navbar-link class="text-md">
                    <RouterLink to="/" active-class="text-blue-600">Home</RouterLink>
                </fwb-navbar-link>
                <fwb-navbar-link class="text-md">
                    <RouterLink to="/users" active-class="text-blue-600">Users</RouterLink>
                </fwb-navbar-link>
            </fwb-navbar-collapse>
        </template>
    </fwb-navbar>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
} from 'flowbite-vue'
</script>