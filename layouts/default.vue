<script setup>
import { useLocaleHead } from "#imports";

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>Welcome</Title>
      fff
    </Head>
    <Body>
      <MainHeader />
      <main>
        <slot />
      </main>
    </Body>
  </Html>
</template>
