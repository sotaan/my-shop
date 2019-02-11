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
      <p class="card-footer-item field is-grouped">
        <b-input
          v-model="quantity"
          data-cy="quantity-input"
          class="quantity-input"
          placeholder="How much?"
          type="number"
          min="1"
        />
        <a
          class="button is-primary is-rounded"
          data-cy="add-in-cart-button"
          @click="handleProductQuantity"
        >
          <span class="icon is-small">
            <i class="fas fa-plus" />
          </span>
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
import PhotosCarousel from './PhotosCarousel'

export default {
  name: 'ProductCard',

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
    },
    cartRowCount: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      quantity: 0,
      carousels: null
    }
  },

  watch: {
    cartRowCount () {
      this.quantity = 0
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
