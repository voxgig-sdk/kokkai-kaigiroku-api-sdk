
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KokkaiKaigirokuApiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await KokkaiKaigirokuApiSDK.test()
    equal(null !== testsdk, true)
  })

})
