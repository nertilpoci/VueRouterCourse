<template>
  <div>
    <h4>The page your are looking for could not be found</h4>
    <div>
      {{ $route.params.pathMatch }}
    </div>
  </div>
</template>
<script>
export default {};
</script>