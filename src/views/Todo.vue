<template>
  <div class="home pa-6">
    <v-text-field
      v-model="newTaskTitle"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus"
      hide-details
      clearable
    >
    </v-text-field>
    <v-list
      class="pt-0"
      flat
    >
    <div
      v-for="task in tasks"
      :key="task.id"
    >
      <v-list-item
        @click="doneTask(task.id)"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox
              :input-value="task.done"
              color="primary"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-decoration-line-through': task.done }"
            >
              {{ task.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ task.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              @click.stop="deleteTask(task.id)"
              icon
            >
              <v-icon color="primary lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </div>
    </v-list>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        tasks: [
          {
            id: 1,
            title: `Wake up`,
            subtitle: `It's the first activity in the day`,
            done: false
          },
          {
            id: 2,
            title: `Get bananas`,
            subtitle: `Now we're going to buy some bananas`,
            done: false
          },
          {
            id: 3,
            title: `Eat bananas`,
            subtitle: `Here we can drink a banana juice`,
            done: false
          },
        ],
        newTaskTitle: ''
      }
    },
    methods: {
      doneTask(id) {
        let task = this.tasks.filter(task => task.id === id)[0];
        task.done = ! task.done;
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    },
  }
</script>
