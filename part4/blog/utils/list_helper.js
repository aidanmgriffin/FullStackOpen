const Blog = require('../models/blog')

const dummy = (blogs) => {
  return blogs ? 1 : 0
}

const totalLikes = (blogs) => {
  let likeSum = 0

  for (let blog of blogs) {
    likeSum += blog.likes
  }

  return likeSum
}

const favoriteBlog = (blogs) => {

  let maxLikes = 0
  let favorite = new Blog()

  for (let blog of blogs){
    if( blog.likes > maxLikes) {
      maxLikes = blog.likes
      favorite = blog
    }
  }

  return favorite
}

const mostBlogs = (blogs) => {
  let authors = []
  let found = false

  // Check for empty list
  if (blogs.length === 0) {
    return {}
  }

  for(let blog of blogs) {
    found = false
    for(let authorProfile of authors) {
      // Author of blog already in authors array. Increment blog count
      if(blog.author === authorProfile.author) {
        authorProfile.blogs += 1
        found = true
        break
      }
    }
    if (!found) {
      authors.push({ author: blog.author, blogs: 1 })
    }
  }

  let maxAuthor = { author: '', blogs: 0 }
  for(let author of authors) {
    if (author.blogs > maxAuthor.blogs) {
      maxAuthor = author
    }
  }

  return maxAuthor

}

const mostLikes = (blogs) => {
  let authors = []
  let found = false

  // Check for empty list
  if (blogs.length === 0) {
    return {}
  }

  for(let blog of blogs) {
    found = false
    for(let authorProfile of authors) {
      // Author of blog already in authors array. Increment blog count
      if(blog.author === authorProfile.author) {
        authorProfile.likes += blog.likes
        found = true
        break
      }
    }
    if (!found) {
      authors.push({ author: blog.author, likes: blog.likes })
    }
  }

  let maxAuthor = { author: '', likes: 0 }
  for(let author of authors) {
    if (author.likes > maxAuthor.likes) {
      maxAuthor = author
    }
  }

  return maxAuthor

}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
