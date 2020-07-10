const { Client } = require('pg')

import keys from './keys'

const pool = new Client(keys.database)

pool.connect()

export default pool