<template>
  <div class="card">
    <div class="card-image">
      <PhotosCarousel
        :photos="photos"
        :current-index="currentIdx"
      />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p
            class="title is-4"
            v-text="title"
          />
          <p
            class="subtitle is-6"
            v-text="currentPhoto.title"
          />
        </div>
      </div>

      <div class="content">
        <template v-html="description" />
        by #<a>{{ userId }}</a>.
      </div>
    </div>
  </div>
</template>

<script>
import PhotosCarousel from './PhotosCarousel'

export default {
  name: 'ProductsCard',

  components: {
    PhotosCarousel
  },

  props: {
    photos: {
      type: Array,
      default: () => []
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Phasellus nec iaculis mauris.'
    },
    title: {
      type: String,
      default: 'My pretty album'
    },
    userId: {
      type: Number,
      default: -1
    }
  },

  data () {
    return {
      currentIdx: 0
    }
  },

  computed: {
    currentPhoto () {
      const { currentIdx, photos } = this
      return photos[currentIdx]
    }
  }
}
</script>

<style>
</style>
