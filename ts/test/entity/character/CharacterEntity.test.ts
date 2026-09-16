

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


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ANAPIOFICEANDFIRE_TEST_LIVE=TRUE.
  afterEach(liveDelay('ANAPIOFICEANDFIRE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AnapioficeandfireSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ANAPIOFICEANDFIRE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"aliases","req":false,"short":"The aliases that this character goes by","type":"`$ARRAY`","index$":0},{"active":true,"name":"allegiances","req":false,"short":"An array of house resource URLs that this character is loyal to","type":"`$ARRAY`","index$":1},{"active":true,"name":"books","req":false,"short":"An array of book resource URLs that this character has been in","type":"`$ARRAY`","index$":2},{"active":true,"name":"born","req":false,"short":"Textual representation of when and where this character was born","type":"`$STRING`","index$":3},{"active":true,"name":"culture","req":false,"short":"The culture that this character belongs to","type":"`$STRING`","index$":4},{"active":true,"name":"died","req":false,"short":"Textual representation of when and where this character died","type":"`$STRING`","index$":5},{"active":true,"name":"father","req":false,"short":"The character resource URL of this character's father","type":"`$STRING`","index$":6},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"mother","req":false,"short":"The character resource URL of this character's mother","type":"`$STRING`","index$":8},{"active":true,"name":"name","req":false,"short":"The name of this character","type":"`$STRING`","index$":9},{"active":true,"name":"playedBy","req":false,"short":"An array of actor names that have played this character in the TV show","type":"`$ARRAY`","index$":10},{"active":true,"name":"povBooks","req":false,"short":"An array of book resource URLs that this character has had a POV-chapter in","type":"`$ARRAY`","index$":11},{"active":true,"name":"spouse","req":false,"short":"The character resource URL of this character's spouse","type":"`$STRING`","index$":12},{"active":true,"name":"titles","req":false,"short":"The titles that this character holds","type":"`$ARRAY`","index$":13},{"active":true,"name":"tvSeries","req":false,"short":"An array of season names that this character has been in","type":"`$ARRAY`","index$":14},{"active":true,"format":"uri","name":"url","req":false,"short":"The hypermedia URL of this resource","type":"`$STRING`","index$":15}],"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"culture","orig":"culture","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":10,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"GET /characters","json":"{\"operationId\":\"listCharacters\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Number of items per page\",\"in\":\"query\",\"name\":\"pageSize\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":50,\"type\":\"integer\"}},{\"description\":\"Filter by character name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by culture\",\"in\":\"query\",\"name\":\"culture\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"aliases\":{\"description\":\"The aliases that this character goes by\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"allegiances\":{\"description\":\"An array of house resource URLs that this character is loyal to\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"books\":{\"description\":\"An array of book resource URLs that this character has been in\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"born\":{\"description\":\"Textual representation of when and where this character was born\",\"type\":\"string\"},\"culture\":{\"description\":\"The culture that this character belongs to\",\"type\":\"string\"},\"died\":{\"description\":\"Textual representation of when and where this character died\",\"type\":\"string\"},\"father\":{\"description\":\"The character resource URL of this character's father\",\"type\":\"string\"},\"mother\":{\"description\":\"The character resource URL of this character's mother\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this character\",\"type\":\"string\"},\"playedBy\":{\"description\":\"An array of actor names that have played this character in the TV show\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"povBooks\":{\"description\":\"An array of book resource URLs that this character has had a POV-chapter in\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"spouse\":{\"description\":\"The character resource URL of this character's spouse\",\"type\":\"string\"},\"titles\":{\"description\":\"The titles that this character holds\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tvSeries\":{\"description\":\"An array of season names that this character has been in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"The hypermedia URL of this resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters","segments":[{"lit":"characters"}],"select":{"exist":["culture","name","page","page_size"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /characters/{id}","json":"{\"operationId\":\"getCharacterById\",\"parameters\":[{\"description\":\"ID of the character to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"aliases\":[\"Lord Snow\",\"Ned Stark's Bastard\",\"The Snow of Winterfell\",\"The Crow-Come-Over\",\"The 998th Lord Commander of the Night's Watch\",\"The Bastard of Winterfell\",\"The Black Bastard of the Wall\",\"Lord Crow\"],\"allegiances\":[\"https://anapioficeandfire.com/api/houses/362\"],\"books\":[\"https://anapioficeandfire.com/api/books/5\"],\"born\":\"In 283 AC\",\"culture\":\"Northmen\",\"died\":\"\",\"father\":\"\",\"mother\":\"\",\"name\":\"Jon Snow\",\"playedBy\":[\"Kit Harington\"],\"povBooks\":[\"https://anapioficeandfire.com/api/books/1\",\"https://anapioficeandfire.com/api/books/2\",\"https://anapioficeandfire.com/api/books/3\",\"https://anapioficeandfire.com/api/books/8\"],\"spouse\":\"\",\"titles\":[\"Lord Commander of the Night's Watch\"],\"tvSeries\":[\"Season 1\",\"Season 2\",\"Season 3\",\"Season 4\",\"Season 5\"],\"url\":\"https://anapioficeandfire.com/api/characters/583\"},\"schema\":{\"properties\":{\"aliases\":{\"description\":\"The aliases that this character goes by\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"allegiances\":{\"description\":\"An array of house resource URLs that this character is loyal to\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"books\":{\"description\":\"An array of book resource URLs that this character has been in\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"born\":{\"description\":\"Textual representation of when and where this character was born\",\"type\":\"string\"},\"culture\":{\"description\":\"The culture that this character belongs to\",\"type\":\"string\"},\"died\":{\"description\":\"Textual representation of when and where this character died\",\"type\":\"string\"},\"father\":{\"description\":\"The character resource URL of this character's father\",\"type\":\"string\"},\"mother\":{\"description\":\"The character resource URL of this character's mother\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this character\",\"type\":\"string\"},\"playedBy\":{\"description\":\"An array of actor names that have played this character in the TV show\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"povBooks\":{\"description\":\"An array of book resource URLs that this character has had a POV-chapter in\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"spouse\":{\"description\":\"The character resource URL of this character's spouse\",\"type\":\"string\"},\"titles\":{\"description\":\"The titles that this character holds\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"tvSeries\":{\"description\":\"An array of season names that this character has been in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"description\":\"The hypermedia URL of this resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Character not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters/{id}","segments":[{"lit":"characters"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":1}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"match":{"id":"character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

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
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ANAPIOFICEANDFIRE_TEST_CHARACTER_ENTID': idmap,
    'ANAPIOFICEANDFIRE_TEST_LIVE': 'FALSE',
    'ANAPIOFICEANDFIRE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ANAPIOFICEANDFIRE_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.ANAPIOFICEANDFIRE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ANAPIOFICEANDFIRE_TEST_CHARACTER_ENTID']
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
  
