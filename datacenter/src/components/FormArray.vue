<template>
  <div class="form-frame">
    <div class="nav">
      <p class="headline">{{ capitalizedProperty }}</p>
      <!-- Only show the Edit button when editing is false -->
      <button class="text-button" v-if="!editing" @click="startEditing(property)">
        Edit
      </button>
      <!-- Only show the Save button when editing is true -->
      <button class="text-button" v-if="editing" @click="save">Save</button>
    </div>
    <input :class="{ input: !editing, 'input-on': editing }" v-model="editingValue" />
  </div>
</template>

<script>
export default {
  props: ["value", "property"],
  data() {
    return {
      editing: false,
      editingValue: "",
    };
  },
  computed: {
    capitalizedProperty() {
      // Convert the key to the title
      return this.property.charAt(0).toUpperCase() + this.property.slice(1);
    },
  },

  methods: {
    startEditing(property) {
      this.editing = true;
      this.editingValue = this.value.join(", ");

    },
    save() {
      let valueToEmit;
      // Assuming the input should be a comma-separated string of numbers
      const numbers = this.editingValue.split(',')
        .map(str => parseFloat(str.trim()))

      if (numbers.length) {
        valueToEmit = numbers;
      } else {
        console.error('Invalid input');
        return; // Handle error as appropriate
      }


      this.$emit("update", [this.property, valueToEmit]);
      this.editing = false;
    }
  },
};
</script>


<style lang="scss" scoped>
.input {
  width: auto;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-content, 6px);
  background: var(--4-base-dark-base, rgba(255, 255, 255, 0.07));
}

.nav {
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.form-frame {
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 4px;
}

.headline {
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: var(--3-text-dark-2nd-white,
      var(--token-secondary-text, rgba(255, 255, 255, 0.75)));
}

.input {
  width: auto;
  padding: 12px;
  border: 0px;
  border-radius: var(--border-content, 6px);
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.input-on {
  width: auto;
  padding: 12px;
  border: 1px solid var(--baseline-green, #3dc363);
  border-radius: var(--border-content, 6px);
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

// Temp

.temp-button {
  cursor: pointer;
  background-color: transparent;
  border: 0px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-button-round, 8px);
  background: var(--token-theme, #fafafa);
  color: var(--token-invert, #0e0d0f);

  font-family: Be Vietnam Pro;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

.hide {
  display: none;
}

.text-button {
  cursor: pointer;
  color: var(--2-brand-gray, #808cab);
  background-color: transparent;
  padding: 0px;

  font-family: Be Vietnam Pro;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
</style>
