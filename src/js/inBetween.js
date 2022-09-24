import { async } from 'regenerator-runtime'
import * as fetch from './fetch.js'

const getAllData = async function () {
  try {
    await fetch.getDataPosts()
    console.log(fetch.state.post)
  } catch (err) {
    console.error(err)
  }
}
getAllData()
