

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AnapioficeandfireSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('BookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ANAPIOFICEANDFIRE_TEST_LIVE=TRUE.
  afterEach(liveDelay('ANAPIOFICEANDFIRE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AnapioficeandfireSDK.test()
    const ent = testsdk.Book()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ANAPIOFICEANDFIRE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'book.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"authors","req":false,"short":"An array of names of the authors that wrote this book","type":"`$ARRAY`","index$":0},{"active":true,"name":"characters","req":false,"short":"An array of character resource URLs that has been in this book","type":"`$ARRAY`","index$":1},{"active":true,"name":"country","req":false,"short":"The country that this book was published in","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"isbn","req":false,"short":"The International Standard Book Number (ISBN-13) that uniquely identifies this book","type":"`$STRING`","index$":4},{"active":true,"name":"mediaType","req":false,"short":"The type of media this book was released in","type":"`$STRING`","index$":5},{"active":true,"name":"name","req":false,"short":"The name of this book","type":"`$STRING`","index$":6},{"active":true,"name":"numberOfPages","req":false,"short":"The number of pages in this book","type":"`$INTEGER`","index$":7},{"active":true,"name":"povCharacters","req":false,"short":"An array of character resource URLs that has had a POV-chapter in this book","type":"`$ARRAY`","index$":8},{"active":true,"name":"publisher","req":false,"short":"The company that published this book","type":"`$STRING`","index$":9},{"active":true,"format":"date-time","name":"released","req":false,"short":"The date (ISO 8601) when this book was released","type":"`$STRING`","index$":10},{"active":true,"format":"uri","name":"url","req":false,"short":"The hypermedia URL of this resource","type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"book","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":10,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /books","json":"{\"operationId\":\"listBooks\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Number of items per page\",\"in\":\"query\",\"name\":\"pageSize\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":50,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"authors\":{\"description\":\"An array of names of the authors that wrote this book\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"characters\":{\"description\":\"An array of character resource URLs that has been in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"country\":{\"description\":\"The country that this book was published in\",\"type\":\"string\"},\"isbn\":{\"description\":\"The International Standard Book Number (ISBN-13) that uniquely identifies this book\",\"type\":\"string\"},\"mediaType\":{\"description\":\"The type of media this book was released in\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this book\",\"type\":\"string\"},\"numberOfPages\":{\"description\":\"The number of pages in this book\",\"type\":\"integer\"},\"povCharacters\":{\"description\":\"An array of character resource URLs that has had a POV-chapter in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"publisher\":{\"description\":\"The company that published this book\",\"type\":\"string\"},\"released\":{\"description\":\"The date (ISO 8601) when this book was released\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"The hypermedia URL of this resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/books","segments":[{"lit":"books"}],"select":{"exist":["page","page_size"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /books/{id}","json":"{\"operationId\":\"getBookById\",\"parameters\":[{\"description\":\"ID of the book to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"authors\":{\"description\":\"An array of names of the authors that wrote this book\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"characters\":{\"description\":\"An array of character resource URLs that has been in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"country\":{\"description\":\"The country that this book was published in\",\"type\":\"string\"},\"isbn\":{\"description\":\"The International Standard Book Number (ISBN-13) that uniquely identifies this book\",\"type\":\"string\"},\"mediaType\":{\"description\":\"The type of media this book was released in\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this book\",\"type\":\"string\"},\"numberOfPages\":{\"description\":\"The number of pages in this book\",\"type\":\"integer\"},\"povCharacters\":{\"description\":\"An array of character resource URLs that has had a POV-chapter in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"publisher\":{\"description\":\"The company that published this book\",\"type\":\"string\"},\"released\":{\"description\":\"The date (ISO 8601) when this book was released\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"The hypermedia URL of this resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Book not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/books/{id}","segments":[{"lit":"books"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"book","name__orig":"book","Name":"Book","name_":"book","name-":"book","NAME":"BOOK","index$":0}, {"active":true,"entity":"book","key$":"BasicBookFlow","kind":"basic","name":"BasicBookFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"book_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"book_ref01","srcdatavar":"book_ref01_data","suffix":"_dt0"},"match":{"id":"book01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-book_ref01"}}],"index$":1}]}, 'Book')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let book_ref01_data = Object.values(setup.data.existing.book)[0] as any

    // LIST
    const book_ref01_ent = client.Book()
    const book_ref01_match: any = {}

    const book_ref01_list = (await book_ref01_ent.list(book_ref01_match)).map((e: any) => e.data())


    // LOAD
    const book_ref01_match_dt0: any = {}
    book_ref01_match_dt0.id = book_ref01_data.id
    const book_ref01_data_dt0 = (await book_ref01_ent.load(book_ref01_match_dt0)).data()
    assert(book_ref01_data_dt0.id === book_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/book/BookTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AnapioficeandfireSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['book01','book02','book03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ANAPIOFICEANDFIRE_TEST_BOOK_ENTID': idmap,
    'ANAPIOFICEANDFIRE_TEST_LIVE': 'FALSE',
    'ANAPIOFICEANDFIRE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ANAPIOFICEANDFIRE_TEST_BOOK_ENTID']

  const live = 'TRUE' === env.ANAPIOFICEANDFIRE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ANAPIOFICEANDFIRE_TEST_BOOK_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AnapioficeandfireSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ANAPIOFICEANDFIRE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
