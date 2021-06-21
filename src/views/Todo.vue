<template>
  <div class="home pa-6">
    <field-add-task />
    <list-tasks
      v-if="$store.state.tasks.length"
     />
    <no-tasks
      v-else
    />
  </div>
</template>

<script>
  export default {
    name: 'Home',    
    components: {
      'field-add-task': require('@/components/Todo/FieldAddTask.vue').default,
      'list-tasks': require('@/components/Todo/ListTasks.vue').default,
      'no-tasks': require('@/components/Todo/NoTasks.vue').default,
    },
  }
</script>
