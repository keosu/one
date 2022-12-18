<script lang="ts">
</script>

<template>
  <p>main</p>
  <v-row class="my-4">
    <v-col cols="3">
      <v-btn icon color="primary">
        <v-icon icon="mdi-brightness-6" />
        <v-tooltip activator="parent" location="bottom">
          'menu.change-theme'
        </v-tooltip>
      </v-btn>
    </v-col>
    <v-col cols="3">
      <v-badge color="blue">
        <v-btn icon color="primary">
          <v-icon icon="mdi-plus-circle" />
          <v-tooltip activator="parent" location="bottom">
            'menu.increase-count'
          </v-tooltip>
        </v-btn>
      </v-badge>
    </v-col>
    <v-col cols="3">
      <v-btn icon color="red">
        <v-icon icon="mdi-file-document" />
        <v-tooltip activator="parent" location="bottom">
          'menu.documentation'
        </v-tooltip>
      </v-btn>
    </v-col>
    <v-col cols="3">
      <v-btn icon color="primary">
        <v-icon icon="mdi-github" />
        <v-tooltip activator="parent" location="bottom">
          'menu.github'
        </v-tooltip>
      </v-btn>
    </v-col>
  </v-row>
</template>