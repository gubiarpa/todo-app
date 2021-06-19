<template>
  <div class="home pa-6">
    <v-list
      class="pt-0"
      flat
    >
    <div
      v-for="task in tasks"
      :key="task.id"
    >
      <v-list-item>
        <template v-slot:default="{ active, }">
          <v-list-item-action>
            <v-checkbox
              :input-value="active"
              color="primary"
            ></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ task.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ task.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
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
          },
          {
            id: 2,
            title: `Get bananas`,
            subtitle: `Now we're going to buy some bananas`,
          },
          {
            id: 3,
            title: `Eat bananas`,
            subtitle: `Here we can drink a banana juice`,
          },
        ]
      }
    },
  }
</script>
