import mongoose from 'mongoose'
import config from '../config'

mongoose.Promise = global.Promise

export default {
  connect () {
    return mongoose.connect(config.DATABASE_URL, config.DATABASE_OPTIONS)
  },
}
