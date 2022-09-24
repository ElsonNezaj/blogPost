export const state = {
  post: {},
}

export const getDataPosts = async function () {
  const res = await fetch('http://localhost:3000/posts')
  const data = await res.json()
  state.post = data
}
