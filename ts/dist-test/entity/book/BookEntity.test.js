"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('BookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when ANAPIOFICEANDFIRE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('ANAPIOFICEANDFIRE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.AnapioficeandfireSDK.test();
        const ent = testsdk.Book();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.ANAPIOFICEANDFIRE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'book.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "authors", "req": false, "short": "An array of names of the authors that wrote this book", "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "characters", "req": false, "short": "An array of character resource URLs that has been in this book", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "country", "req": false, "short": "The country that this book was published in", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "isbn", "req": false, "short": "The International Standard Book Number (ISBN-13) that uniquely identifies this book", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "mediaType", "req": false, "short": "The type of media this book was released in", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "name", "req": false, "short": "The name of this book", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "numberOfPages", "req": false, "short": "The number of pages in this book", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "povCharacters", "req": false, "short": "An array of character resource URLs that has had a POV-chapter in this book", "type": "`$ARRAY`", "index$": 8 }, { "active": true, "name": "publisher", "req": false, "short": "The company that published this book", "type": "`$STRING`", "index$": 9 }, { "active": true, "format": "date-time", "name": "released", "req": false, "short": "The date (ISO 8601) when this book was released", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "uri", "name": "url", "req": false, "short": "The hypermedia URL of this resource", "type": "`$STRING`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "book", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 10, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /books", "json": "{\"operationId\":\"listBooks\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"type\":\"integer\"}},{\"description\":\"Number of items per page\",\"in\":\"query\",\"name\":\"pageSize\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":50,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"authors\":{\"description\":\"An array of names of the authors that wrote this book\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"characters\":{\"description\":\"An array of character resource URLs that has been in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"country\":{\"description\":\"The country that this book was published in\",\"type\":\"string\"},\"isbn\":{\"description\":\"The International Standard Book Number (ISBN-13) that uniquely identifies this book\",\"type\":\"string\"},\"mediaType\":{\"description\":\"The type of media this book was released in\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this book\",\"type\":\"string\"},\"numberOfPages\":{\"description\":\"The number of pages in this book\",\"type\":\"integer\"},\"povCharacters\":{\"description\":\"An array of character resource URLs that has had a POV-chapter in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"publisher\":{\"description\":\"The company that published this book\",\"type\":\"string\"},\"released\":{\"description\":\"The date (ISO 8601) when this book was released\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"The hypermedia URL of this resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/books", "segments": [{ "lit": "books" }], "select": { "exist": ["page", "page_size"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /books/{id}", "json": "{\"operationId\":\"getBookById\",\"parameters\":[{\"description\":\"ID of the book to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"authors\":{\"description\":\"An array of names of the authors that wrote this book\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"characters\":{\"description\":\"An array of character resource URLs that has been in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"country\":{\"description\":\"The country that this book was published in\",\"type\":\"string\"},\"isbn\":{\"description\":\"The International Standard Book Number (ISBN-13) that uniquely identifies this book\",\"type\":\"string\"},\"mediaType\":{\"description\":\"The type of media this book was released in\",\"type\":\"string\"},\"name\":{\"description\":\"The name of this book\",\"type\":\"string\"},\"numberOfPages\":{\"description\":\"The number of pages in this book\",\"type\":\"integer\"},\"povCharacters\":{\"description\":\"An array of character resource URLs that has had a POV-chapter in this book\",\"items\":{\"format\":\"uri\",\"type\":\"string\"},\"type\":\"array\"},\"publisher\":{\"description\":\"The company that published this book\",\"type\":\"string\"},\"released\":{\"description\":\"The date (ISO 8601) when this book was released\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"The hypermedia URL of this resource\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"description\":\"Book not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/books/{id}", "segments": [{ "lit": "books" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "book", "name__orig": "book", "Name": "Book", "name_": "book", "name-": "book", "NAME": "BOOK", "index$": 0 }, { "active": true, "entity": "book", "key$": "BasicBookFlow", "kind": "basic", "name": "BasicBookFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "book_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "book_ref01", "srcdatavar": "book_ref01_data", "suffix": "_dt0" }, "match": { "id": "book01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-book_ref01" } }], "index$": 1 }] }, 'Book');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let book_ref01_data = Object.values(setup.data.existing.book)[0];
        // LIST
        const book_ref01_ent = client.Book();
        const book_ref01_match = {};
        const book_ref01_list = (await book_ref01_ent.list(book_ref01_match)).map((e) => e.data());
        // LOAD
        const book_ref01_match_dt0 = {};
        book_ref01_match_dt0.id = book_ref01_data.id;
        const book_ref01_data_dt0 = (await book_ref01_ent.load(book_ref01_match_dt0)).data();
        (0, node_assert_1.default)(book_ref01_data_dt0.id === book_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/book/BookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.AnapioficeandfireSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['book01', 'book02', 'book03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'ANAPIOFICEANDFIRE_TEST_BOOK_ENTID': idmap,
        'ANAPIOFICEANDFIRE_TEST_LIVE': 'FALSE',
        'ANAPIOFICEANDFIRE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['ANAPIOFICEANDFIRE_TEST_BOOK_ENTID'];
    const live = 'TRUE' === env.ANAPIOFICEANDFIRE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['ANAPIOFICEANDFIRE_TEST_BOOK_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.AnapioficeandfireSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=BookEntity.test.js.map