export default () => ({
  albums: [],
  photos: [],
  // NOTE: how much albums per page user should see:
  // this is to preserve performance & avoid long first rendering problems (which is unacceptable)
  pageSize: 15,
  currentPageIdx: 0,
  loading: false
})
