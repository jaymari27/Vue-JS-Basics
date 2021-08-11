<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // references the data we declared under provide. NOTE: You can only inject data from a sub-/parent component. Since the provide object is under App.vue, it is a parent of KnowledgeGrid, which allows us to reference its data.
  inject: ['topics']
};
</script>
