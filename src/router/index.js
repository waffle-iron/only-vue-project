import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Blog from '@/components/blog/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
