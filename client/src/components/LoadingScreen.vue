<template>
  <div class="row mb-3 justify-content-center">
    <img style="width:50%;height:50%" src="assets/img/mascot.png" />
  </div>
  <div class="row justify-content-center align-items-center">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h4>
      {{ loadingMessage }}
      <!-- <%=getText("loading-message")%> -->
    </h4>
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data() {
    return {
      loadingMessage: 'Matching you with a streamer...',
    };
  },
};
</script>

<style scoped></style>
