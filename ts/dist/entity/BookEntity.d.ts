import { AnapioficeandfireEntityBase } from '../AnapioficeandfireEntityBase';
import type { AnapioficeandfireSDK } from '../AnapioficeandfireSDK';
import type { Control } from '../types';
import type { Book, BookLoadMatch, BookListMatch } from '../AnapioficeandfireTypes';
declare class BookEntity extends AnapioficeandfireEntityBase<Book> {
    constructor(client: AnapioficeandfireSDK, entopts: any);
    make(this: BookEntity): BookEntity;
    load(this: any, reqmatch?: BookLoadMatch, ctrl?: Control): Promise<BookEntity>;
    list(this: any, reqmatch?: BookListMatch, ctrl?: Control): Promise<BookEntity[]>;
}
export { BookEntity };
