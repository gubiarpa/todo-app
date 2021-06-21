<template>
  <div class="home pa-6">
    <field-add-task />
    <list-tasks
      v-if="$store.state.tasks.length"
     />
    <div
      v-else
      class="no-tasks"
    >
        <v-icon
            color="primary"
            size="100"
        >
            mdi-check
        </v-icon>
        <div class="text-h5 primary--text">
            No tasks
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',    
    components: {
      'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
      'list-tasks': require('@/components/Todo/ListTasks.vue').default,
    },
  }
</script>
