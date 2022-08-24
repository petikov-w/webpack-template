<template lang="pug">
.logos
  span.logo-box
    img(:src='logoImage' height=60)
    h1 {{ logoTitle }}
</template>

<script>
export default {
  name: "header",
  setup() {
    const logoImage = require('@/assets/images/angular.png');
    const logoTitle = "Development Inside"
    return { logoTitle, logoImage }
  }
}
</script>

<style scoped>

</style>