<template>
  <div class="main">

  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Main",
  data() {
    return {

    };
  },
  methods: {

    ...mapActions({
      doTest: "getTest",
    }),
  },
  beforeMount() {
    //this.doTest(array or object or nothing);
  },
};
</script>
