<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
        <router-link
          :to="{ name: 'SurveyCreate' }"
          class="
            py-2
            px-3
            text-white
            bg-emerald-500
            rounded-md
            hover:bg-emerald-600
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 -mt-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Survey
        </router-link>
      </div>
    </template>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <div
            v-for="survey in surveys"
            :key="survey.id"
            class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]"
            >
            <img :src="survey.image" alt="" class="w-full h-48 object-cover"/>
            <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
            <div v-html="survey.description" class="overflow-hidden flex-1"></div>
        </div>
    </div>
    <pre>{{surveys}}</pre>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import store from "../store"
import { computed } from "vue"

const surveys = computed(() => store.state.serveys)
</script>

<style>
</style>
