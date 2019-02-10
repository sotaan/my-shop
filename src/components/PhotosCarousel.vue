<template>
  <div class="carousel carousel-animated carousel-animate-slide">
    <div class="carousel-container">
      <div
        v-for="(photo, idx) in photos"
        :key="photo.id"
        class="carousel-item has-background"
        :class="currentIndex === idx ? 'is-active' : ''"
      >
        <img
          class="is-background"
          :src="photo.thumbnailUrl"
          alt
          width="150"
          height="150"
        >
        <div class="title">
          {{ photo.title }}
        </div>
      </div>
    </div>
    <div class="carousel-navigation is-overlay">
      <div class="carousel-nav-left">
        <i
          class="fa fa-chevron-left"
          aria-hidden="true"
        />
      </div>
      <div class="carousel-nav-right">
        <i
          class="fa fa-chevron-right"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      default: -1
    },
    photos: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>
