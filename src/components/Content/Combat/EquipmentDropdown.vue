<template>
  <b-popover :target="target" triggers="click blur" placement="bottom" delay="0">
    <div class="d-flex flex-column align-items-center">
      <p class="title text-uppercase">{{equipmentSlot}}</p>
      <equipment-dropdown-item
        class="w-100"
        v-for="(itemId, index) in validItems"
        :key="index"
        :itemId="itemId"
      />
      <button v-if="currentItemId" class="btn btn-outline-danger" @click="unequip">UNEQUIP</button>
      <span v-if="!currentItemId && validItems.length == 0">No {{equipmentSlot}} items available.</span>
    </div>
  </b-popover>
</template>

<script>
import EquipmentDropdownItem from "@/components/Content/Combat/EquipmentDropdownItem";
import { getBankItemsOfSlot } from "@/utils/equipmentUtils";
export default {
  components: { EquipmentDropdownItem },
  props: ["target", "equipmentSlot"],
  computed: {
    currentItemId() {
      return this.$store.getters["inventory/equipment"][this.equipmentSlot]
        .itemId;
    },
    validItems() {
      return getBankItemsOfSlot(
        this.$store.getters["inventory/bank"],
        this.equipmentSlot
      );
    }
  },
  methods: {
    unequip() {
      this.$store.dispatch("inventory/unequip", this.currentItemId);
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 12px;
  font-weight: bold;
  color: rgb(152, 156, 165);
}
</style>