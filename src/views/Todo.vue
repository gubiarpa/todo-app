<template>
  <div class="home pa-6">
    <field-add-task />
    <list-tasks />
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
