<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="imageSrc"
          alt="Placeholder image"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p
            class="title is-4"
            v-text="albumTitle"
          />
          <p
            class="subtitle is-6"
            v-text="currentPhotoTitle"
          />
        </div>
      </div>

      <div class="content">
        <template v-html="description" />
        <a>{{ userId }}</a>.
        <a href="#">
          #css
        </a>
        <a href="#">
          #responsive
        </a>
        <br>
        <time datetime="2016-1-1">
          11:09 PM - 1 Jan 2016
        </time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: 'https://bulma.io/images/placeholders/1280x960.png'
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Phasellus nec iaculis mauris.'
    }
  }
}
</script>

<style>
</style>
