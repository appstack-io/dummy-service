import { Empty } from './google/protobuf/empty';
export interface ProviderCreateOneInput {
  userId: string;
  name: string;
  description: string;
  photo: string;
  onboardingFlags: ProviderOnboardingFlags | undefined;
}

export interface ProviderOnboardingFlags {
  initial: boolean;
}

export interface Provider {
  id: string;
  createdAt: number;
  updatedAt: number;
  userId: string;
  name: string;
  description: string;
  photo: string;
  onboardingFlags: ProviderOnboardingFlags | undefined;
}

export interface ProviderUpdateOneInput {
  id: string;
  userId: string;
  name: string;
  description: string;
  photo: string;
  onboardingFlags: ProviderOnboardingFlags | undefined;
}

export interface ProviderFindOneInput {
  id: string;
}

export interface ProviderFindByUserInput {
  userId: string;
}

export interface ProviderRemoveOneInput {
  id: string;
}

export interface ProviderSearchInput {
  filter: ProviderSearchFilter | undefined;
  opts: ProviderSearchOpts | undefined;
}

export interface ProviderSearchFilter {
  name: string;
}

export interface ProviderSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface ProviderSearchResult {
  meta: ProviderSearchResultMeta | undefined;
  providers: Provider[];
}

export interface ProviderSearchResultMeta {
  offset: number;
}

import { postToUnary } from './utils';

export class ProviderService {
  private readonly serviceName: string = 'ProviderService';

  async createOne(data: Partial<ProviderCreateOneInput>): Promise<Provider> {
    return postToUnary<Provider>(this.serviceName, 'createOne', data);
  }

  async updateOne(data: Partial<ProviderUpdateOneInput>): Promise<Provider> {
    return postToUnary<Provider>(this.serviceName, 'updateOne', data);
  }

  async findOne(data: Partial<ProviderFindOneInput>): Promise<Provider> {
    return postToUnary<Provider>(this.serviceName, 'findOne', data);
  }

  async findByUser(data: Partial<ProviderFindByUserInput>): Promise<Provider> {
    return postToUnary<Provider>(this.serviceName, 'findByUser', data);
  }

  async findMe(data: Partial<Empty>): Promise<Provider> {
    return postToUnary<Provider>(this.serviceName, 'findMe', data);
  }

  async removeOne(data: Partial<ProviderRemoveOneInput>): Promise<Empty> {
    return postToUnary<Empty>(this.serviceName, 'removeOne', data);
  }

  async search(
    data: Partial<ProviderSearchInput>,
  ): Promise<ProviderSearchResult> {
    return postToUnary<ProviderSearchResult>(this.serviceName, 'search', data);
  }
}
