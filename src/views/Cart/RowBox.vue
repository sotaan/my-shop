<template>
  <b-collapse
    v-if="product"
    class="box"
  >
    <div
      slot="trigger"
      slot-scope="props"
      class="box-collapse-trigger"
    >
      <div class="box-header-title has-text-link">
        <span>{{ product.title }}</span>
        <p class="has-text-info">
          Quantity: {{ row.count }}
        </p>
      </div>
      <a
        class="button remove-button is-danger is-outlined"
        @click.once="removeFromCart"
      >
        <span>Delete</span>
        <span class="icon is-small">
          <i class="fas fa-times" />
        </span>
      </a>
      <a class="box-header-icon">
        <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
      </a>
    </div>
    <div class="content columns">
      <div
        v-for="(photo, idx) in photos"
        :key="`photo-${idx}`"
        class="column is-2"
      >
        <img
          :src="photo.thumbnailUrl"
          alt
          width="150"
          height="150"
        >
      </div>
    </div>
  </b-collapse>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    row: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    ...mapGetters('products', ['findProduct']),
    ...mapGetters('cart', ['findProductRow']),

    product () {
      return this.findProduct(this.row.id)
    },

    title () {
      const { product, row } = this
      return `${product.title} x${row.count}`
    },

    photos () {
      return this.product.photos.slice(0, 5)
    }
  },

  methods: {
    removeFromCart () {
      const idx = this.findProductRow(this.product.id)

      this.$emit('delete-row', idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-collapse-trigger {
  display: flex;
  justify-content: space-between;

  .box-header-title {
    flex-grow: 1;
  }

  &:not(:hover) .remove-button {
    display: none;
  }
}
</style>
