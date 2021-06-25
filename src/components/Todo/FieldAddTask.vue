<template>
  <v-text-field
    v-model="newTaskTitle"
        @keyup.enter="addTask"
        class="pa-3"
        outlined
        label="Add Task"
        hide-details
        clearable
        autocomplete="off"
    >
      <template v-slot:append>
       <v-icon
        @click="addTask"
        color="primary"
        :disabled="newTaskTitleIsInvalid"
       >
         mdi-plus
        </v-icon>
      </template>
    </v-text-field>
</template>

<script>
export default {
    data() {
      return {
        newTaskTitle: ''
      }
    },
    computed: {
      newTaskTitleIsInvalid() {
        return !this.newTaskTitle;
      }
    },
    methods: {
      addTask() {
        this.$store.dispatch('addTask', this.newTaskTitle);
        this.newTaskTitle = '';
      },
    },
}
</script>
