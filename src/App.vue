<template>
  <div>Hello VueJS</div>
</template>

<script>
export default {
  created() {
    console.log(process.env.NODE_ENV);
  }
}
</script>