import axios from 'axios'

class Api {
  async getFirstEtag () {
    try {
      console.log('api calling google api')
      let response = await axios.get(
        'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
      )
      console.log('api received google api response: ', response)

      return response.data.items[0].etag
    } catch (err) {
      console.log('api.getFirstEtag() caught error: ', err)
      throw err
    }
  }
}

export default new Api()
