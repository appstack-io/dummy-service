import { Injectable, OnModuleInit } from '@nestjs/common';
import { ArangodbService } from '@appstack-io/arangodb';
import { DocumentCollection } from 'arangojs/collection';
import {
  Dummy,
  DummyCreateOneInput,
  DummyFindOneInput,
  DummyRemoveOneInput,
  DummySearchInput,
  DummyUpdateOneInput,
} from '../../../combined.interfaces';

@Injectable()
export class DummyService implements OnModuleInit {
  collection: DocumentCollection;

  constructor(private arangodb: ArangodbService) {
    this.collection = this.arangodb.db.collection('dummy');
  }

  async createOne(input: DummyCreateOneInput): Promise<Dummy> {
    return this.arangodb.utils.format(
      (
        await this.collection.save(this.arangodb.utils.addTs(input), {
          returnNew: true,
        })
      ).new,
    );
  }

  async findOne(input: DummyFindOneInput): Promise<Dummy | void> {
    try {
      return this.arangodb.utils.format(
        await this.collection.document(input.id),
      );
    } catch (e) {
      if (e.message === 'document not found') {
        return;
      }
      throw e;
    }
  }

  async updateOne(input: Partial<DummyUpdateOneInput>): Promise<Dummy> {
    return this.arangodb.utils.format(
      (
        await this.collection.update(
          input.id,
          this.arangodb.utils.addUpdatedAt(input),
          { returnNew: true },
        )
      ).new,
    );
  }

  async removeOne(input: DummyRemoveOneInput): Promise<void> {
    const found = await this.findOne(input);
    if (found) {
      await this.collection.remove(found.id);
    }
  }

  async search(input: DummySearchInput): Promise<Dummy[]> {
    const { filter, opts } = input;
    const query = `
      FOR doc IN dummySearch
      SEARCH ANALYZER(doc.text IN TOKENS(@text, 'text_en'), 'text_en')
      OPTIONS { waitForSync: @waitForSync }
      SORT BM25(doc) DESC, doc.text ASC
      LIMIT @offset, @limit
      RETURN doc
    `;
    const vars = {
      ...filter,
      offset: Number(opts.offset) || 0,
      limit: Number(opts.limit) || 0,
      waitForSync: Boolean(opts.waitForSync),
    };
    const cursor = await this.arangodb.db.query(query, vars);
    return (await cursor.all()).map(this.arangodb.utils.format);
  }

  async onModuleInit(): Promise<void> {
    await this.arangodb.utils.tryDdl(
      () => this.arangodb.db.createCollection('dummy', {}),
      () =>
        this.arangodb.db.view('dummySearch').create({
          type: 'arangosearch',
          links: {
            dummy: {
              analyzers: ['text_en'],
              fields: {
                text: {},
              },
              includeAllFields: false,
              storeValues: 'none',
              trackListPositions: false,
            },
          },
        }),
    );
  }
}
