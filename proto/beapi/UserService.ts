import { Empty } from './google/protobuf/empty';
export interface UserCreateOneInput {
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserOnboardingFlags {
  initial: boolean;
}

export interface User {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserUpdateOneInput {
  id: string;
  name: string;
  email: string;
  photo: string;
  onboardingFlags: UserOnboardingFlags | undefined;
}

export interface UserFindOneInput {
  id: string;
}

export interface UserRemoveOneInput {
  id: string;
}

export interface UserSearchInput {
  filter: UserSearchFilter | undefined;
  opts: UserSearchOpts | undefined;
}

export interface UserSearchFilter {
  name: string;
}

export interface UserSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface UserSearchResult {
  meta: UserSearchResultMeta | undefined;
  users: User[];
}

export interface UserSearchResultMeta {
  offset: number;
}

import { postToUnary } from './utils';

export class UserService {
  private readonly serviceName: string = 'UserService';

  async createOne(data: Partial<UserCreateOneInput>): Promise<User> {
    return postToUnary<User>(this.serviceName, 'createOne', data);
  }

  async updateOne(data: Partial<UserUpdateOneInput>): Promise<User> {
    return postToUnary<User>(this.serviceName, 'updateOne', data);
  }

  async findOne(data: Partial<UserFindOneInput>): Promise<User> {
    return postToUnary<User>(this.serviceName, 'findOne', data);
  }

  async findMe(data: Partial<Empty>): Promise<User> {
    return postToUnary<User>(this.serviceName, 'findMe', data);
  }

  async removeOne(data: Partial<UserRemoveOneInput>): Promise<Empty> {
    return postToUnary<Empty>(this.serviceName, 'removeOne', data);
  }

  async search(data: Partial<UserSearchInput>): Promise<UserSearchResult> {
    return postToUnary<UserSearchResult>(this.serviceName, 'search', data);
  }
}
