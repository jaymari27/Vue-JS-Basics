<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-resources')"
      :mode="addResButtonMode"
    >
      Add Resources
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
  components: {
    StoredResources,
    AddResources
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com'
        }
      ]
    };
  },
  provide() {
    return {
      // Providing the data to all lower level components, so they can all have access to storedResources data.
      resources: this.storedResources,
      addResource: this.addResource, // making addResource accessible to AddResource
      deleteResource: this.deleteResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: url
      };
      this.storedResources.unshift(newResource); // adding resources into the end of the storedResources object
      this.selectedTab = 'stored-resources'; // switching tab to stored-resources after adding resource
    },
    deleteResource(resID) {
      // Looks through the object for the resource that matches the provided ID.
      const resIndex = this.storedResources.findIndex(res => res.id === resID);
      // splice() will remove 1 element in the index resIndex
      this.storedResources.splice(resIndex, 1);
    }
  }
};
</script>
