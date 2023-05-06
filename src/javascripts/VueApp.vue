<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data: () => {
    console.log("Vuejs is good");
    return {
      message: "hey ,this is vue",
    };
  },
};
</script>

<style>
p {
  color: pink;
}
</style>
