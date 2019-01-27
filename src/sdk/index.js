import api from './api.js'

class Sdk {
  async updateMessage (vue) {
    console.log('sdk calling api')
    let newMsg = await api.getFirstEtag()
    console.log('sdk received message: ', newMsg)

    vue.$store.dispatch('setMsg', newMsg)
  }
}

export default new Sdk()
