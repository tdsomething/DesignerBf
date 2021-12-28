import { test, assert } from 'vitest'
import { getWelcome } from '../../src/utils'

test('test', () => {
  const name = getWelcome()
  assert.equal(name, 'Hello, World!!!')
})
