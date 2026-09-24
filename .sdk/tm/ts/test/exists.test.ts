
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KokkaiKaigirokuApiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = KokkaiKaigirokuApiSDK.test()
    equal(testsdk instanceof KokkaiKaigirokuApiSDK, true,
      'KokkaiKaigirokuApiSDK.test() must return a client synchronously')
  })

})
