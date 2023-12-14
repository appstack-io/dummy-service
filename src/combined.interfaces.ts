import { Empty } from './google/protobuf/empty';

import { Observable } from 'rxjs';

export interface Dummy {
  id: string;
  createdAt: number;
  updatedAt: number;
  text: string;
  isPublic: boolean;
}

export interface DummyCreateOneInput {
  text: string;
  isPublic: boolean;
}

export interface DummyUpdateOneInput {
  id: string;
  text: string;
}

export interface DummyFindOneInput {
  id: string;
}

export interface DummyRemoveOneInput {
  id: string;
}

export interface DummySearchFilter {
  text: string;
}

export interface DummySearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface DummySearchInput {
  filter: DummySearchFilter | undefined;
  opts: DummySearchOpts | undefined;
}

export interface DummySearchResultMeta {
  offset: number;
}

export interface DummySearchResult {
  meta: DummySearchResultMeta | undefined;
  results: Dummy[];
}

export interface DummyJobPayload {
  id: string;
}

export interface PublishJobInput {
  dummyJobPayload: DummyJobPayload | undefined;
  sender: string;
}

export interface Login {
  id: string;
  createdAt: number;
  updatedAt: number;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  isNew: boolean;
  credentials: Credentials | undefined;
}

export interface Credentials {
  local?: LocalCredentials | undefined;
  google?: GoogleCredentials | undefined;
}

export interface LocalCredentials {
  username: string;
  password: string;
}

export interface GoogleCredentials {
  id: string;
}

export interface LoginCreateOneInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginUpdateOneInput {
  id: string;
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
  userId: string;
  credentials: Credentials | undefined;
}

export interface LoginFindOneInput {
  id: string;
}

export interface LoginFindWhereInput {
  platform: string;
  platformLoginId: string;
  platformLoginSecret: string;
}

export interface LoginFindByPlatformIdInput {
  platform: string;
  platformLoginId: string;
}

export interface LoginRemoveOneInput {
  id: string;
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

export interface UserOnboardingFlags {
  initial: boolean;
}

export interface UserCreateOneInput {
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

export interface UserSearchFilter {
  name: string;
}

export interface UserSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface UserSearchInput {
  filter: UserSearchFilter | undefined;
  opts: UserSearchOpts | undefined;
}

export interface UserSearchResultMeta {
  offset: number;
}

export interface UserSearchResult {
  meta: UserSearchResultMeta | undefined;
  users: User[];
}

export interface Permission {
  id: string;
  createdAt: number;
  updatedAt: number;
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface AuthorizableAs {
  entity: string;
  entityId: string;
}

export interface Permissions {
  permissions: Permission[];
}

export interface PermissionCreateOneInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionCreateManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindOneInput {
  id: string;
}

export interface PermissionFindWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionFindWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindWhereOrStarInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface Permitted {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionValidateOneInput {
  entity: string;
  entityId: string;
  action: string;
  permitted: Permitted[];
}

export interface PermissionValidateOneResult {
  validated: boolean;
}

export interface PermissionRemoveOneInput {
  id: string;
}

export interface PermissionRemoveWhereInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
  action: string;
}

export interface PermissionRemoveWhereManyInput {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityIds: string[];
  action: string;
}

export interface PermissionFindByPermittedFilter {
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindByPermittedOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByPermittedInput {
  filter: PermissionFindByPermittedFilter | undefined;
  opts: PermissionFindByPermittedOpts | undefined;
}

export interface PermissionFindByPermittedResultMeta {
  offset: number;
}

export interface PermissionFindByPermittedResult {
  meta: PermissionFindByPermittedResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindByEntityFilter {
  entity: string;
  entityId: string;
  action: string;
}

export interface PermissionFindByEntityOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindByEntityInput {
  filter: PermissionFindByEntityFilter | undefined;
  opts: PermissionFindByEntityOpts | undefined;
}

export interface PermissionFindByEntityResultMeta {
  offset: number;
}

export interface PermissionFindByEntityResult {
  meta: PermissionFindByEntityResultMeta | undefined;
  results: Permission[];
}

export interface PermissionFindAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionFindAllActionsOpts {
  limit: number;
  offset: number;
}

export interface PermissionFindAllActionsInput {
  filter: PermissionFindAllActionsFilter | undefined;
  opts: PermissionFindAllActionsOpts | undefined;
}

export interface PermissionFindAllActionsResultMeta {
  offset: number;
}

export interface PermissionFindAllActionsResult {
  meta: PermissionFindAllActionsResultMeta | undefined;
  results: Permission[];
}

export interface PermissionRemoveAllActionsFilter {
  entity: string;
  entityId: string;
  permittedEntity: string;
  permittedEntityId: string;
}

export interface PermissionRemoveAllActionsInput {
  filter: PermissionRemoveAllActionsFilter | undefined;
}

export interface UserFollowCreateOneInput {
  followerId: string;
  followeeId: string;
}

export interface UserFollowRemoveOneInput {
  id: string;
}

export interface UserFindFollowersFilter {
  followeeId: string;
}

export interface UserFindFollowersOpts {
  limit: number;
  offset: number;
}

export interface UserFindFollowersInput {
  filter: UserFindFollowersFilter | undefined;
  opts: UserFindFollowersOpts | undefined;
}

export interface UserFindFollowersResultMeta {
  offset: number;
}

export interface UserFindFollowersResult {
  meta: UserFindFollowersResultMeta | undefined;
  followers: Follower[];
}

export interface Follower {
  id: string;
  createdAt: number;
  updatedAt: number;
  followeeId: string;
  followerId: string;
}

export interface UserFindFolloweesFilter {
  followerId: string;
}

export interface UserFindFolloweesOpts {
  limit: number;
  offset: number;
}

export interface UserFindFolloweesInput {
  filter: UserFindFolloweesFilter | undefined;
  opts: UserFindFolloweesOpts | undefined;
}

export interface UserFindFolloweesResultMeta {
  offset: number;
}

export interface UserFindFolloweesResult {
  meta: UserFindFolloweesResultMeta | undefined;
  followees: Followee[];
}

export interface Followee {
  id: string;
  createdAt: number;
  updatedAt: number;
  followerId: string;
  followeeId: string;
}

export interface Conversation {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  description: string;
  lastMessageAt: number;
}

export interface ConversationCreateOneInput {
  name: string;
  description: string;
}

export interface ConversationUpdateOneInput {
  id: string;
  name: string;
  description: string;
  lastMessageAt: number;
}

export interface ConversationFindOneInput {
  id: string;
}

export interface ConversationRemoveOneInput {
  id: string;
}

export interface ConversationFindByParticipantFilter {
  participantId: string;
  fromLastMessageAt: number;
}

export interface ConversationFindByParticipantOpts {
  limit: number;
  offset: number;
}

export interface ConversationFindByParticipantInput {
  filter: ConversationFindByParticipantFilter | undefined;
  opts: ConversationFindByParticipantOpts | undefined;
}

export interface ConversationFindByParticipantResultMeta {
  offset: number;
}

export interface ConversationFindByParticipantResult {
  meta: ConversationFindByParticipantResultMeta | undefined;
  results: Conversation[];
}

export interface ConversationParticipant {
  id: string;
  createdAt: number;
  updatedAt: number;
  conversationId: string;
  participantId: string;
  writeableAs: AuthorizableAs | undefined;
}

export interface ConversationParticipantCreateOneInput {
  conversationId: string;
  participantId: string;
}

export interface ConversationParticipantFindOneInput {
  id: string;
}

export interface ConversationParticipantRemoveOneInput {
  id: string;
}

export interface ConversationParticipantFindByConversationFilter {
  conversationId: string;
}

export interface ConversationParticipantFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface ConversationParticipantFindByConversationInput {
  filter: ConversationParticipantFindByConversationFilter | undefined;
  opts: ConversationParticipantFindByConversationOpts | undefined;
}

export interface ConversationParticipantFindByConversationResultMeta {
  offset: number;
}

export interface ConversationParticipantFindByConversationResult {
  meta: ConversationParticipantFindByConversationResultMeta | undefined;
  results: ConversationParticipant[];
}

export interface Message {
  id: string;
  createdAt: number;
  updatedAt: number;
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  sentToIds: string[];
  receivedByIds: string[];
  seenByIds: string[];
  deleted: boolean;
  uniqueness: string;
}

export interface MessageMedia {
  text: string;
}

export interface MessageCreateOneInput {
  conversationId: string;
  media: MessageMedia | undefined;
  senderId: string;
  uniqueness: string;
}

export interface MessageUpdateOneInput {
  id: string;
  media: MessageMedia | undefined;
}

export interface MessageFindOneInput {
  id: string;
}

export interface MessageFindUniqueInput {
  uniqueness: string;
}

export interface MessageRemoveOneInput {
  id: string;
}

export interface MessageFindByConversationFilter {
  conversationId: string;
}

export interface MessageFindByConversationOpts {
  limit: number;
  offset: number;
}

export interface MessageFindByConversationInput {
  filter: MessageFindByConversationFilter | undefined;
  opts: MessageFindByConversationOpts | undefined;
}

export interface MessageFindByConversationResultMeta {
  offset: number;
}

export interface MessageFindByConversationResult {
  meta: MessageFindByConversationResultMeta | undefined;
  results: Message[];
}

export interface MessageJobPayload {
  id: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

export interface DummyService {
  CreateOne(request: DummyCreateOneInput): Promise<Dummy>;
  UpdateOne(request: DummyUpdateOneInput): Promise<Dummy>;
  FindOne(request: DummyFindOneInput): Promise<Dummy>;
  RemoveOne(request: DummyRemoveOneInput): Promise<Empty>;
  Search(request: DummySearchInput): Promise<DummySearchResult>;
}

export interface LoginService {
  CreateOne(request: LoginCreateOneInput): Promise<Login>;
  FindOne(request: LoginFindOneInput): Promise<Login>;
  FindWhere(request: LoginFindWhereInput): Promise<Login>;
  FindByPlatformId(request: LoginFindByPlatformIdInput): Promise<Login>;
  UpdateOne(request: LoginUpdateOneInput): Promise<Login>;
  RemoveOne(request: LoginRemoveOneInput): Promise<Empty>;
}

export interface UserService {
  CreateOne(request: UserCreateOneInput): Promise<User>;
  UpdateOne(request: UserUpdateOneInput): Promise<User>;
  FindOne(request: UserFindOneInput): Promise<User>;
  FindMe(request: Empty): Promise<User>;
  RemoveOne(request: UserRemoveOneInput): Promise<Empty>;
  Search(request: UserSearchInput): Promise<UserSearchResult>;
}

export interface PermissionService {
  CreateOne(request: PermissionCreateOneInput): Promise<Permission>;
  CreateMany(request: PermissionCreateManyInput): Promise<Permissions>;
  FindOne(request: PermissionFindOneInput): Promise<Permission>;
  FindWhere(request: PermissionFindWhereInput): Promise<Permission>;
  FindWhereMany(request: PermissionFindWhereManyInput): Promise<Permissions>;
  FindWhereOrStar(request: PermissionFindWhereOrStarInput): Promise<Permission>;
  FindByPermitted(
    request: PermissionFindByPermittedInput,
  ): Promise<PermissionFindByPermittedResult>;
  FindByEntity(
    request: PermissionFindByEntityInput,
  ): Promise<PermissionFindByEntityResult>;
  FindAllActions(
    request: PermissionFindAllActionsInput,
  ): Promise<PermissionFindAllActionsResult>;
  ValidateOne(
    request: PermissionValidateOneInput,
  ): Promise<PermissionValidateOneResult>;
  RemoveOne(request: PermissionRemoveOneInput): Promise<Empty>;
  RemoveWhere(request: PermissionRemoveWhereInput): Promise<Empty>;
  RemoveWhereMany(request: PermissionRemoveWhereManyInput): Promise<Empty>;
  RemoveAllActions(request: PermissionRemoveAllActionsInput): Promise<Empty>;
}

export interface UserFollowService {
  CreateOne(request: UserFollowCreateOneInput): Promise<Follower>;
  RemoveOne(request: UserFollowRemoveOneInput): Promise<Follower>;
  FindFollowers(
    request: UserFindFollowersInput,
  ): Promise<UserFindFollowersResult>;
  FindFollowees(
    request: UserFindFolloweesInput,
  ): Promise<UserFindFolloweesResult>;
}

export interface ConversationService {
  CreateOne(request: ConversationCreateOneInput): Promise<Conversation>;
  UpdateOne(request: ConversationUpdateOneInput): Promise<Conversation>;
  FindOne(request: ConversationFindOneInput): Promise<Conversation>;
  RemoveOne(request: ConversationRemoveOneInput): Promise<Conversation>;
  FindByParticipant(
    request: ConversationFindByParticipantInput,
  ): Promise<ConversationFindByParticipantResult>;
}

export interface ConversationParticipantService {
  CreateOne(
    request: ConversationParticipantCreateOneInput,
  ): Promise<ConversationParticipant>;
  FindOne(
    request: ConversationParticipantFindOneInput,
  ): Promise<ConversationParticipant>;
  RemoveOne(
    request: ConversationParticipantRemoveOneInput,
  ): Promise<ConversationParticipant>;
  FindByConversation(
    request: ConversationParticipantFindByConversationInput,
  ): Promise<ConversationParticipantFindByConversationResult>;
}

export interface MessageService {
  CreateOne(request: MessageCreateOneInput): Promise<Message>;
  UpdateOne(request: MessageUpdateOneInput): Promise<Message>;
  FindOne(request: MessageFindOneInput): Promise<Message>;
  FindUnique(request: MessageFindUniqueInput): Promise<Message>;
  RemoveOne(request: MessageRemoveOneInput): Promise<Message>;
  FindByConversation(
    request: MessageFindByConversationInput,
  ): Promise<MessageFindByConversationResult>;
}

export interface WorkersService {
  PublishJob(request: PublishJobInput): Promise<PublishJobResult>;
  HealthCheck(request: Empty): Promise<WorkersHealthCheckResult>;
}
