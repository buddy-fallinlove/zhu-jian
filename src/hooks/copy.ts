export const useCopy = () => {
  const copy = (url: string) => {
    let input = document.createElement("input") // 直接构建input
    input.value = url // 设置内容
    document.body.appendChild(input)  // 添加临时实例
    input.select() // 选择实例内容
    document.execCommand("Copy") // 执行复制
    document.body.removeChild(input) // 删除临时实例
  }
  return {
    copy,
  }
}
