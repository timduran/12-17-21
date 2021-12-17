async function getPosts() {
  const { data: post } = await axios.get('api/posts')
  return posts 
}

async function renderPosts() {
  const posts = await getyPosts()
  posts.forEach(post => {
    const postElem = document.createElement("div)"
  })
}
