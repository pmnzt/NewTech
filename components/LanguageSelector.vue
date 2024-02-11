<script setup>
import { useI18n } from "#imports";

const { setLocale } = useI18n();
</script>

<template>
  <div class="bg-base-200 rounded-xl">
    <div>
      <ul
        tabindex="0"
        class="menu py-2 my-2 shadow bg-base-200 rounded-box w-[max-content]"
      >
        <li>
          <div @click="setLocale('en')">
            {{ $t("languages.en") }}
          </div>
        </li>
        <li>
          <div @click="setLocale('ar')">
            {{ $t("languages.ar") }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
