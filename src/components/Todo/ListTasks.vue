<template>
    <v-list
      class="pt-0"
      flat
    >
        <task
            v-for="task in $store.state.tasks"
            :key="task.id"
            :task="task"
        />
    </v-list>
</template>

<script>
export default {
    components: {
        'task': require('@/components/Todo/Task.vue').default,
    },
}
</script>

<style lang="sass">
  .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>