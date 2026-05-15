
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AnapioficeandfireSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await AnapioficeandfireSDK.test()
    equal(null !== testsdk, true)
  })

})
