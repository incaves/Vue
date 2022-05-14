import { reactive, onMounted, onBeforeUnmount } from 'vue'
function savePoint() {
  // 数据
  let point = reactive({
    x: 0,
    y: 0
  })
  // 方法
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX, event.pageY);
  }
  // 生命周期
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })
  return point
}

export default savePoint
