import del from 'del'

import { dist } from '../paths'

export { dist }

const clean = () => del('./dist')

module.exports = clean