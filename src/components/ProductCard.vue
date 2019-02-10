<template>
  <div class="card">
    <div class="card-image">
      <PhotosCarousel :photos="photos" />
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p
            class="title is-4"
            v-text="title"
          />
        </div>
      </div>

      <div class="content">
        <span v-html="description" />
        <br>by #
        <a>{{ userId }}</a>.
      </div>
    </div>
    <footer class="card-footer buy-zone">
      <p class="card-footer-item">
        <b-input
          v-model="quantity"
          class="quantity-input"
          placeholder="How much?"
          type="number"
          min="1"
        />
        <a
          class="button is-primary is-rounded"
          @click="handleProductQuantity"
        >
          Add to Cart
        </a>
      </p>
    </footer>
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
      default:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Phasellus nec iaculis mauris.'
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
      quantity: 0,
      carousels: null
    }
  },

  mounted () {
    this.carousels = this.$bulmaCarousel.attach()
  },

  beforeDestroy () {
    this.carousels = null
  },

  methods: {
    handleProductQuantity () {
      this.$emit('add-quantity', this.quantity)
    }
  }
}
</script>

<style lang="scss" scoped>
  .buy-zone > .card-footer-item .quantity-input {
    margin-right: 1rem;
  }
</style>
