<template>
  <div id="app">
    <toast-container />
    <div class="mega-container">
      <sidebar />
      <content-wrapper class="content-wrapper" />
    </div>
    <modals-container />
  </div>
</template>

<script>
import ToastContainer from "@/components/Toast/ToastContainer";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import ContentWrapper from "@/components/Content/ContentWrapper.vue";
import ModalWelcome from "@/components/Modals/ModalWelcome";
import ModalWelcomeBack from "@/components/Modals/ModalWelcomeBack";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    ToastContainer,
    Sidebar,
    ContentWrapper
  },
  computed: {
    ...mapGetters(["welcomeMessageSeen"])
  },
  methods: {
    ...mapMutations(["setWelcomeMessageSeen"])
  },
  mounted() {
    if (!this.welcomeMessageSeen) {
      // this.$modal.show(ModalWelcome, {}, { height: "auto", width: "360px" });
      this.setWelcomeMessageSeen();
    } else if (this.$store.getters["chrono/lastGain"] > 30 * 1000) {
      this.$modal.show(
        ModalWelcomeBack,
        {},
        { height: "auto", width: "400px" }
      );
    }
  }
};
</script>

<style scoped>
#app {
  height: 100%;
}

.mega-container {
  height: 100%;
  display: flex;
  align-items: stretch;
}
.mega-container * {
  height: 100%;
}
.content-wrapper {
  overflow-y: auto;
}
</style>
