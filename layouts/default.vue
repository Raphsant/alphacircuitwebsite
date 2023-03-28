<template>
  <div>
    <!-- default will be the header and footer -->
    <h1>high</h1>
    <!-- some magical dom element that seperates the "components that I know of from react" -->
    <!-- they are seperated by normal HTML rules -->
    <!-- think with blocks -->
    <slot/>
    <h1>nibs</h1>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>