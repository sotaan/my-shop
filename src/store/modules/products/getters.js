export default {
  /**
   * Merge all albums with their associated photos
   *
   * @param {object} state      The module state
   * @returns {Array<object>}   The merged data
   */
  products (state) {
    const { photos, albums } = state

    if (!photos.length || !albums.length) return []

    return albums.map((album) => {
      const albumPhotos = photos.reduce((acc, photo) => {
        if (photo.albumId === album.id) {
          acc.push(photo)
        }
        return acc
      }, [])

      return {
        ...album,
        photos: albumPhotos
      }
    })
  }
}
