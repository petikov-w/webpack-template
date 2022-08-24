<template lang="pug">
Header
.wrapper
   h1 Webpack Template v.2
   p
       | Студия Web-Boss всегда готова решить любую задачу.
       | Консультация с широким активом позволяет
       | выполнять важные задания по разработке систем массового участия.
   //+image("angular")
</template>

<script>
import Header from "@/components/header";
export default {
  name: "App",
  components: { Header }
}
</script>

<style scoped>

</style>