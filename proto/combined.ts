/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import Long = require("long");

export const protobufPackage = "main";

export enum Maturity {
  Skeleton = 0,
  Draft = 1,
  Solid = 2,
  UNRECOGNIZED = -1,
}

export function maturityFromJSON(object: any): Maturity {
  switch (object) {
    case 0:
    case "Skeleton":
      return Maturity.Skeleton;
    case 1:
    case "Draft":
      return Maturity.Draft;
    case 2:
    case "Solid":
      return Maturity.Solid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Maturity.UNRECOGNIZED;
  }
}

export function maturityToJSON(object: Maturity): string {
  switch (object) {
    case Maturity.Skeleton:
      return "Skeleton";
    case Maturity.Draft:
      return "Draft";
    case Maturity.Solid:
      return "Solid";
    case Maturity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

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

export interface ProviderOnboardingFlags {
  initial: boolean;
}

export interface ProviderCreateOneInput {
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

export interface ProviderSearchFilter {
  name: string;
}

export interface ProviderSearchOpts {
  limit: number;
  offset: number;
  waitForSync: boolean;
}

export interface ProviderSearchInput {
  filter: ProviderSearchFilter | undefined;
  opts: ProviderSearchOpts | undefined;
}

export interface ProviderSearchResultMeta {
  offset: number;
}

export interface ProviderSearchResult {
  meta: ProviderSearchResultMeta | undefined;
  providers: Provider[];
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

export interface HealthCheckResult {
  ok: boolean;
}

export interface IntRange {
  min: number;
  max: number;
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

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

function createBaseDummy(): Dummy {
  return { id: "", createdAt: 0, updatedAt: 0, text: "", isPublic: false };
}

export const Dummy = {
  encode(message: Dummy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    if (message.isPublic === true) {
      writer.uint32(40).bool(message.isPublic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dummy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isPublic = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dummy {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      text: isSet(object.text) ? String(object.text) : "",
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
    };
  },

  toJSON(message: Dummy): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.isPublic === true) {
      obj.isPublic = message.isPublic;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dummy>, I>>(base?: I): Dummy {
    return Dummy.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Dummy>, I>>(object: I): Dummy {
    const message = createBaseDummy();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.text = object.text ?? "";
    message.isPublic = object.isPublic ?? false;
    return message;
  },
};

function createBaseDummyCreateOneInput(): DummyCreateOneInput {
  return { text: "", isPublic: false };
}

export const DummyCreateOneInput = {
  encode(message: DummyCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.isPublic === true) {
      writer.uint32(40).bool(message.isPublic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isPublic = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyCreateOneInput {
    return {
      text: isSet(object.text) ? String(object.text) : "",
      isPublic: isSet(object.isPublic) ? Boolean(object.isPublic) : false,
    };
  },

  toJSON(message: DummyCreateOneInput): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.isPublic === true) {
      obj.isPublic = message.isPublic;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyCreateOneInput>, I>>(base?: I): DummyCreateOneInput {
    return DummyCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyCreateOneInput>, I>>(object: I): DummyCreateOneInput {
    const message = createBaseDummyCreateOneInput();
    message.text = object.text ?? "";
    message.isPublic = object.isPublic ?? false;
    return message;
  },
};

function createBaseDummyUpdateOneInput(): DummyUpdateOneInput {
  return { id: "", text: "" };
}

export const DummyUpdateOneInput = {
  encode(message: DummyUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyUpdateOneInput {
    return { id: isSet(object.id) ? String(object.id) : "", text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: DummyUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyUpdateOneInput>, I>>(base?: I): DummyUpdateOneInput {
    return DummyUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyUpdateOneInput>, I>>(object: I): DummyUpdateOneInput {
    const message = createBaseDummyUpdateOneInput();
    message.id = object.id ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummyFindOneInput(): DummyFindOneInput {
  return { id: "" };
}

export const DummyFindOneInput = {
  encode(message: DummyFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyFindOneInput>, I>>(base?: I): DummyFindOneInput {
    return DummyFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyFindOneInput>, I>>(object: I): DummyFindOneInput {
    const message = createBaseDummyFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDummyRemoveOneInput(): DummyRemoveOneInput {
  return { id: "" };
}

export const DummyRemoveOneInput = {
  encode(message: DummyRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyRemoveOneInput>, I>>(base?: I): DummyRemoveOneInput {
    return DummyRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyRemoveOneInput>, I>>(object: I): DummyRemoveOneInput {
    const message = createBaseDummyRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDummySearchFilter(): DummySearchFilter {
  return { text: "" };
}

export const DummySearchFilter = {
  encode(message: DummySearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchFilter {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: DummySearchFilter): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchFilter>, I>>(base?: I): DummySearchFilter {
    return DummySearchFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchFilter>, I>>(object: I): DummySearchFilter {
    const message = createBaseDummySearchFilter();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDummySearchOpts(): DummySearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const DummySearchOpts = {
  encode(message: DummySearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: DummySearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchOpts>, I>>(base?: I): DummySearchOpts {
    return DummySearchOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchOpts>, I>>(object: I): DummySearchOpts {
    const message = createBaseDummySearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseDummySearchInput(): DummySearchInput {
  return { filter: undefined, opts: undefined };
}

export const DummySearchInput = {
  encode(message: DummySearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      DummySearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      DummySearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = DummySearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = DummySearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchInput {
    return {
      filter: isSet(object.filter) ? DummySearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? DummySearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: DummySearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = DummySearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = DummySearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchInput>, I>>(base?: I): DummySearchInput {
    return DummySearchInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchInput>, I>>(object: I): DummySearchInput {
    const message = createBaseDummySearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? DummySearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? DummySearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseDummySearchResultMeta(): DummySearchResultMeta {
  return { offset: 0 };
}

export const DummySearchResultMeta = {
  encode(message: DummySearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: DummySearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchResultMeta>, I>>(base?: I): DummySearchResultMeta {
    return DummySearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchResultMeta>, I>>(object: I): DummySearchResultMeta {
    const message = createBaseDummySearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseDummySearchResult(): DummySearchResult {
  return { meta: undefined, results: [] };
}

export const DummySearchResult = {
  encode(message: DummySearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      DummySearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Dummy.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummySearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummySearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = DummySearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Dummy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummySearchResult {
    return {
      meta: isSet(object.meta) ? DummySearchResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Dummy.fromJSON(e)) : [],
    };
  },

  toJSON(message: DummySearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = DummySearchResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Dummy.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummySearchResult>, I>>(base?: I): DummySearchResult {
    return DummySearchResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummySearchResult>, I>>(object: I): DummySearchResult {
    const message = createBaseDummySearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? DummySearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Dummy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDummyJobPayload(): DummyJobPayload {
  return { id: "" };
}

export const DummyJobPayload = {
  encode(message: DummyJobPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DummyJobPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDummyJobPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DummyJobPayload {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: DummyJobPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DummyJobPayload>, I>>(base?: I): DummyJobPayload {
    return DummyJobPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DummyJobPayload>, I>>(object: I): DummyJobPayload {
    const message = createBaseDummyJobPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePublishJobInput(): PublishJobInput {
  return { dummyJobPayload: undefined };
}

export const PublishJobInput = {
  encode(message: PublishJobInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dummyJobPayload !== undefined) {
      DummyJobPayload.encode(message.dummyJobPayload, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dummyJobPayload = DummyJobPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobInput {
    return {
      dummyJobPayload: isSet(object.dummyJobPayload) ? DummyJobPayload.fromJSON(object.dummyJobPayload) : undefined,
    };
  },

  toJSON(message: PublishJobInput): unknown {
    const obj: any = {};
    if (message.dummyJobPayload !== undefined) {
      obj.dummyJobPayload = DummyJobPayload.toJSON(message.dummyJobPayload);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishJobInput>, I>>(base?: I): PublishJobInput {
    return PublishJobInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishJobInput>, I>>(object: I): PublishJobInput {
    const message = createBasePublishJobInput();
    message.dummyJobPayload = (object.dummyJobPayload !== undefined && object.dummyJobPayload !== null)
      ? DummyJobPayload.fromPartial(object.dummyJobPayload)
      : undefined;
    return message;
  },
};

function createBaseProvider(): Provider {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    userId: "",
    name: "",
    description: "",
    photo: "",
    onboardingFlags: undefined,
  };
}

export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.photo !== "") {
      writer.uint32(58).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      ProviderOnboardingFlags.encode(message.onboardingFlags, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.onboardingFlags = ProviderOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Provider {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      userId: isSet(object.userId) ? String(object.userId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags)
        ? ProviderOnboardingFlags.fromJSON(object.onboardingFlags)
        : undefined,
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = ProviderOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Provider>, I>>(base?: I): Provider {
    return Provider.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? ProviderOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseProviderOnboardingFlags(): ProviderOnboardingFlags {
  return { initial: false };
}

export const ProviderOnboardingFlags = {
  encode(message: ProviderOnboardingFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initial === true) {
      writer.uint32(8).bool(message.initial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderOnboardingFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderOnboardingFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.initial = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderOnboardingFlags {
    return { initial: isSet(object.initial) ? Boolean(object.initial) : false };
  },

  toJSON(message: ProviderOnboardingFlags): unknown {
    const obj: any = {};
    if (message.initial === true) {
      obj.initial = message.initial;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderOnboardingFlags>, I>>(base?: I): ProviderOnboardingFlags {
    return ProviderOnboardingFlags.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderOnboardingFlags>, I>>(object: I): ProviderOnboardingFlags {
    const message = createBaseProviderOnboardingFlags();
    message.initial = object.initial ?? false;
    return message;
  },
};

function createBaseProviderCreateOneInput(): ProviderCreateOneInput {
  return { userId: "", name: "", description: "", photo: "", onboardingFlags: undefined };
}

export const ProviderCreateOneInput = {
  encode(message: ProviderCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.photo !== "") {
      writer.uint32(58).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      ProviderOnboardingFlags.encode(message.onboardingFlags, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.onboardingFlags = ProviderOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderCreateOneInput {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags)
        ? ProviderOnboardingFlags.fromJSON(object.onboardingFlags)
        : undefined,
    };
  },

  toJSON(message: ProviderCreateOneInput): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = ProviderOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderCreateOneInput>, I>>(base?: I): ProviderCreateOneInput {
    return ProviderCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderCreateOneInput>, I>>(object: I): ProviderCreateOneInput {
    const message = createBaseProviderCreateOneInput();
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? ProviderOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseProviderUpdateOneInput(): ProviderUpdateOneInput {
  return { id: "", userId: "", name: "", description: "", photo: "", onboardingFlags: undefined };
}

export const ProviderUpdateOneInput = {
  encode(message: ProviderUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.photo !== "") {
      writer.uint32(58).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      ProviderOnboardingFlags.encode(message.onboardingFlags, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.description = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.onboardingFlags = ProviderOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags)
        ? ProviderOnboardingFlags.fromJSON(object.onboardingFlags)
        : undefined,
    };
  },

  toJSON(message: ProviderUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = ProviderOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderUpdateOneInput>, I>>(base?: I): ProviderUpdateOneInput {
    return ProviderUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderUpdateOneInput>, I>>(object: I): ProviderUpdateOneInput {
    const message = createBaseProviderUpdateOneInput();
    message.id = object.id ?? "";
    message.userId = object.userId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? ProviderOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseProviderFindOneInput(): ProviderFindOneInput {
  return { id: "" };
}

export const ProviderFindOneInput = {
  encode(message: ProviderFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ProviderFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderFindOneInput>, I>>(base?: I): ProviderFindOneInput {
    return ProviderFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderFindOneInput>, I>>(object: I): ProviderFindOneInput {
    const message = createBaseProviderFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseProviderFindByUserInput(): ProviderFindByUserInput {
  return { userId: "" };
}

export const ProviderFindByUserInput = {
  encode(message: ProviderFindByUserInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderFindByUserInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderFindByUserInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderFindByUserInput {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: ProviderFindByUserInput): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderFindByUserInput>, I>>(base?: I): ProviderFindByUserInput {
    return ProviderFindByUserInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderFindByUserInput>, I>>(object: I): ProviderFindByUserInput {
    const message = createBaseProviderFindByUserInput();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseProviderRemoveOneInput(): ProviderRemoveOneInput {
  return { id: "" };
}

export const ProviderRemoveOneInput = {
  encode(message: ProviderRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ProviderRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderRemoveOneInput>, I>>(base?: I): ProviderRemoveOneInput {
    return ProviderRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderRemoveOneInput>, I>>(object: I): ProviderRemoveOneInput {
    const message = createBaseProviderRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseProviderSearchFilter(): ProviderSearchFilter {
  return { name: "" };
}

export const ProviderSearchFilter = {
  encode(message: ProviderSearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchFilter {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ProviderSearchFilter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderSearchFilter>, I>>(base?: I): ProviderSearchFilter {
    return ProviderSearchFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderSearchFilter>, I>>(object: I): ProviderSearchFilter {
    const message = createBaseProviderSearchFilter();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseProviderSearchOpts(): ProviderSearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const ProviderSearchOpts = {
  encode(message: ProviderSearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: ProviderSearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderSearchOpts>, I>>(base?: I): ProviderSearchOpts {
    return ProviderSearchOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderSearchOpts>, I>>(object: I): ProviderSearchOpts {
    const message = createBaseProviderSearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseProviderSearchInput(): ProviderSearchInput {
  return { filter: undefined, opts: undefined };
}

export const ProviderSearchInput = {
  encode(message: ProviderSearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      ProviderSearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      ProviderSearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = ProviderSearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = ProviderSearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchInput {
    return {
      filter: isSet(object.filter) ? ProviderSearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? ProviderSearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: ProviderSearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = ProviderSearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = ProviderSearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderSearchInput>, I>>(base?: I): ProviderSearchInput {
    return ProviderSearchInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderSearchInput>, I>>(object: I): ProviderSearchInput {
    const message = createBaseProviderSearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ProviderSearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? ProviderSearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseProviderSearchResultMeta(): ProviderSearchResultMeta {
  return { offset: 0 };
}

export const ProviderSearchResultMeta = {
  encode(message: ProviderSearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ProviderSearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderSearchResultMeta>, I>>(base?: I): ProviderSearchResultMeta {
    return ProviderSearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderSearchResultMeta>, I>>(object: I): ProviderSearchResultMeta {
    const message = createBaseProviderSearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseProviderSearchResult(): ProviderSearchResult {
  return { meta: undefined, providers: [] };
}

export const ProviderSearchResult = {
  encode(message: ProviderSearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      ProviderSearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderSearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderSearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = ProviderSearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.providers.push(Provider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProviderSearchResult {
    return {
      meta: isSet(object.meta) ? ProviderSearchResultMeta.fromJSON(object.meta) : undefined,
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : [],
    };
  },

  toJSON(message: ProviderSearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = ProviderSearchResultMeta.toJSON(message.meta);
    }
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => Provider.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProviderSearchResult>, I>>(base?: I): ProviderSearchResult {
    return ProviderSearchResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProviderSearchResult>, I>>(object: I): ProviderSearchResult {
    const message = createBaseProviderSearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? ProviderSearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.providers = object.providers?.map((e) => Provider.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLogin(): Login {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    platform: "",
    platformLoginId: "",
    platformLoginSecret: "",
    userId: "",
    isNew: false,
    credentials: undefined,
  };
}

export const Login = {
  encode(message: Login, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.isNew === true) {
      writer.uint32(64).bool(message.isNew);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Login {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.isNew = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Login {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      isNew: isSet(object.isNew) ? Boolean(object.isNew) : false,
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: Login): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.isNew === true) {
      obj.isNew = message.isNew;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Login>, I>>(base?: I): Login {
    return Login.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Login>, I>>(object: I): Login {
    const message = createBaseLogin();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.isNew = object.isNew ?? false;
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseCredentials(): Credentials {
  return { local: undefined, google: undefined };
}

export const Credentials = {
  encode(message: Credentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.local !== undefined) {
      LocalCredentials.encode(message.local, writer.uint32(10).fork()).ldelim();
    }
    if (message.google !== undefined) {
      GoogleCredentials.encode(message.google, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Credentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.local = LocalCredentials.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.google = GoogleCredentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Credentials {
    return {
      local: isSet(object.local) ? LocalCredentials.fromJSON(object.local) : undefined,
      google: isSet(object.google) ? GoogleCredentials.fromJSON(object.google) : undefined,
    };
  },

  toJSON(message: Credentials): unknown {
    const obj: any = {};
    if (message.local !== undefined) {
      obj.local = LocalCredentials.toJSON(message.local);
    }
    if (message.google !== undefined) {
      obj.google = GoogleCredentials.toJSON(message.google);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Credentials>, I>>(base?: I): Credentials {
    return Credentials.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Credentials>, I>>(object: I): Credentials {
    const message = createBaseCredentials();
    message.local = (object.local !== undefined && object.local !== null)
      ? LocalCredentials.fromPartial(object.local)
      : undefined;
    message.google = (object.google !== undefined && object.google !== null)
      ? GoogleCredentials.fromPartial(object.google)
      : undefined;
    return message;
  },
};

function createBaseLocalCredentials(): LocalCredentials {
  return { username: "", password: "" };
}

export const LocalCredentials = {
  encode(message: LocalCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocalCredentials {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LocalCredentials): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalCredentials>, I>>(base?: I): LocalCredentials {
    return LocalCredentials.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocalCredentials>, I>>(object: I): LocalCredentials {
    const message = createBaseLocalCredentials();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseGoogleCredentials(): GoogleCredentials {
  return { id: "" };
}

export const GoogleCredentials = {
  encode(message: GoogleCredentials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleCredentials {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleCredentials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GoogleCredentials {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GoogleCredentials): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GoogleCredentials>, I>>(base?: I): GoogleCredentials {
    return GoogleCredentials.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GoogleCredentials>, I>>(object: I): GoogleCredentials {
    const message = createBaseGoogleCredentials();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginCreateOneInput(): LoginCreateOneInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginCreateOneInput = {
  encode(message: LoginCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginCreateOneInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginCreateOneInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginCreateOneInput>, I>>(base?: I): LoginCreateOneInput {
    return LoginCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginCreateOneInput>, I>>(object: I): LoginCreateOneInput {
    const message = createBaseLoginCreateOneInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginUpdateOneInput(): LoginUpdateOneInput {
  return { id: "", platform: "", platformLoginId: "", platformLoginSecret: "", userId: "", credentials: undefined };
}

export const LoginUpdateOneInput = {
  encode(message: LoginUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.platform !== "") {
      writer.uint32(34).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(42).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(50).string(message.platformLoginSecret);
    }
    if (message.userId !== "") {
      writer.uint32(58).string(message.userId);
    }
    if (message.credentials !== undefined) {
      Credentials.encode(message.credentials, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.credentials = Credentials.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      credentials: isSet(object.credentials) ? Credentials.fromJSON(object.credentials) : undefined,
    };
  },

  toJSON(message: LoginUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.credentials !== undefined) {
      obj.credentials = Credentials.toJSON(message.credentials);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginUpdateOneInput>, I>>(base?: I): LoginUpdateOneInput {
    return LoginUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginUpdateOneInput>, I>>(object: I): LoginUpdateOneInput {
    const message = createBaseLoginUpdateOneInput();
    message.id = object.id ?? "";
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    message.userId = object.userId ?? "";
    message.credentials = (object.credentials !== undefined && object.credentials !== null)
      ? Credentials.fromPartial(object.credentials)
      : undefined;
    return message;
  },
};

function createBaseLoginFindOneInput(): LoginFindOneInput {
  return { id: "" };
}

export const LoginFindOneInput = {
  encode(message: LoginFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: LoginFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginFindOneInput>, I>>(base?: I): LoginFindOneInput {
    return LoginFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginFindOneInput>, I>>(object: I): LoginFindOneInput {
    const message = createBaseLoginFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseLoginFindWhereInput(): LoginFindWhereInput {
  return { platform: "", platformLoginId: "", platformLoginSecret: "" };
}

export const LoginFindWhereInput = {
  encode(message: LoginFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    if (message.platformLoginSecret !== "") {
      writer.uint32(26).string(message.platformLoginSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.platformLoginSecret = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindWhereInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
      platformLoginSecret: isSet(object.platformLoginSecret) ? String(object.platformLoginSecret) : "",
    };
  },

  toJSON(message: LoginFindWhereInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    if (message.platformLoginSecret !== "") {
      obj.platformLoginSecret = message.platformLoginSecret;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginFindWhereInput>, I>>(base?: I): LoginFindWhereInput {
    return LoginFindWhereInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginFindWhereInput>, I>>(object: I): LoginFindWhereInput {
    const message = createBaseLoginFindWhereInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    message.platformLoginSecret = object.platformLoginSecret ?? "";
    return message;
  },
};

function createBaseLoginFindByPlatformIdInput(): LoginFindByPlatformIdInput {
  return { platform: "", platformLoginId: "" };
}

export const LoginFindByPlatformIdInput = {
  encode(message: LoginFindByPlatformIdInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    if (message.platformLoginId !== "") {
      writer.uint32(18).string(message.platformLoginId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginFindByPlatformIdInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginFindByPlatformIdInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platformLoginId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginFindByPlatformIdInput {
    return {
      platform: isSet(object.platform) ? String(object.platform) : "",
      platformLoginId: isSet(object.platformLoginId) ? String(object.platformLoginId) : "",
    };
  },

  toJSON(message: LoginFindByPlatformIdInput): unknown {
    const obj: any = {};
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.platformLoginId !== "") {
      obj.platformLoginId = message.platformLoginId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginFindByPlatformIdInput>, I>>(base?: I): LoginFindByPlatformIdInput {
    return LoginFindByPlatformIdInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginFindByPlatformIdInput>, I>>(object: I): LoginFindByPlatformIdInput {
    const message = createBaseLoginFindByPlatformIdInput();
    message.platform = object.platform ?? "";
    message.platformLoginId = object.platformLoginId ?? "";
    return message;
  },
};

function createBaseLoginRemoveOneInput(): LoginRemoveOneInput {
  return { id: "" };
}

export const LoginRemoveOneInput = {
  encode(message: LoginRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: LoginRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRemoveOneInput>, I>>(base?: I): LoginRemoveOneInput {
    return LoginRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginRemoveOneInput>, I>>(object: I): LoginRemoveOneInput {
    const message = createBaseLoginRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", createdAt: 0, updatedAt: 0, name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserOnboardingFlags(): UserOnboardingFlags {
  return { initial: false };
}

export const UserOnboardingFlags = {
  encode(message: UserOnboardingFlags, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initial === true) {
      writer.uint32(8).bool(message.initial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserOnboardingFlags {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserOnboardingFlags();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.initial = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserOnboardingFlags {
    return { initial: isSet(object.initial) ? Boolean(object.initial) : false };
  },

  toJSON(message: UserOnboardingFlags): unknown {
    const obj: any = {};
    if (message.initial === true) {
      obj.initial = message.initial;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserOnboardingFlags>, I>>(base?: I): UserOnboardingFlags {
    return UserOnboardingFlags.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserOnboardingFlags>, I>>(object: I): UserOnboardingFlags {
    const message = createBaseUserOnboardingFlags();
    message.initial = object.initial ?? false;
    return message;
  },
};

function createBaseUserCreateOneInput(): UserCreateOneInput {
  return { name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const UserCreateOneInput = {
  encode(message: UserCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateOneInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: UserCreateOneInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserCreateOneInput>, I>>(base?: I): UserCreateOneInput {
    return UserCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserCreateOneInput>, I>>(object: I): UserCreateOneInput {
    const message = createBaseUserCreateOneInput();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserUpdateOneInput(): UserUpdateOneInput {
  return { id: "", name: "", email: "", photo: "", onboardingFlags: undefined };
}

export const UserUpdateOneInput = {
  encode(message: UserUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.photo !== "") {
      writer.uint32(50).string(message.photo);
    }
    if (message.onboardingFlags !== undefined) {
      UserOnboardingFlags.encode(message.onboardingFlags, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.photo = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.onboardingFlags = UserOnboardingFlags.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      email: isSet(object.email) ? String(object.email) : "",
      photo: isSet(object.photo) ? String(object.photo) : "",
      onboardingFlags: isSet(object.onboardingFlags) ? UserOnboardingFlags.fromJSON(object.onboardingFlags) : undefined,
    };
  },

  toJSON(message: UserUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.photo !== "") {
      obj.photo = message.photo;
    }
    if (message.onboardingFlags !== undefined) {
      obj.onboardingFlags = UserOnboardingFlags.toJSON(message.onboardingFlags);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUpdateOneInput>, I>>(base?: I): UserUpdateOneInput {
    return UserUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserUpdateOneInput>, I>>(object: I): UserUpdateOneInput {
    const message = createBaseUserUpdateOneInput();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.photo = object.photo ?? "";
    message.onboardingFlags = (object.onboardingFlags !== undefined && object.onboardingFlags !== null)
      ? UserOnboardingFlags.fromPartial(object.onboardingFlags)
      : undefined;
    return message;
  },
};

function createBaseUserFindOneInput(): UserFindOneInput {
  return { id: "" };
}

export const UserFindOneInput = {
  encode(message: UserFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindOneInput>, I>>(base?: I): UserFindOneInput {
    return UserFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindOneInput>, I>>(object: I): UserFindOneInput {
    const message = createBaseUserFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserRemoveOneInput(): UserRemoveOneInput {
  return { id: "" };
}

export const UserRemoveOneInput = {
  encode(message: UserRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRemoveOneInput>, I>>(base?: I): UserRemoveOneInput {
    return UserRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserRemoveOneInput>, I>>(object: I): UserRemoveOneInput {
    const message = createBaseUserRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserSearchFilter(): UserSearchFilter {
  return { name: "" };
}

export const UserSearchFilter = {
  encode(message: UserSearchFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchFilter {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: UserSearchFilter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchFilter>, I>>(base?: I): UserSearchFilter {
    return UserSearchFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchFilter>, I>>(object: I): UserSearchFilter {
    const message = createBaseUserSearchFilter();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseUserSearchOpts(): UserSearchOpts {
  return { limit: 0, offset: 0, waitForSync: false };
}

export const UserSearchOpts = {
  encode(message: UserSearchOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    if (message.waitForSync === true) {
      writer.uint32(24).bool(message.waitForSync);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitForSync = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      waitForSync: isSet(object.waitForSync) ? Boolean(object.waitForSync) : false,
    };
  },

  toJSON(message: UserSearchOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.waitForSync === true) {
      obj.waitForSync = message.waitForSync;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchOpts>, I>>(base?: I): UserSearchOpts {
    return UserSearchOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchOpts>, I>>(object: I): UserSearchOpts {
    const message = createBaseUserSearchOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    message.waitForSync = object.waitForSync ?? false;
    return message;
  },
};

function createBaseUserSearchInput(): UserSearchInput {
  return { filter: undefined, opts: undefined };
}

export const UserSearchInput = {
  encode(message: UserSearchInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserSearchFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserSearchOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserSearchFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserSearchOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchInput {
    return {
      filter: isSet(object.filter) ? UserSearchFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserSearchOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserSearchInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserSearchFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserSearchOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchInput>, I>>(base?: I): UserSearchInput {
    return UserSearchInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchInput>, I>>(object: I): UserSearchInput {
    const message = createBaseUserSearchInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserSearchFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserSearchOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserSearchResultMeta(): UserSearchResultMeta {
  return { offset: 0 };
}

export const UserSearchResultMeta = {
  encode(message: UserSearchResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserSearchResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchResultMeta>, I>>(base?: I): UserSearchResultMeta {
    return UserSearchResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchResultMeta>, I>>(object: I): UserSearchResultMeta {
    const message = createBaseUserSearchResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserSearchResult(): UserSearchResult {
  return { meta: undefined, users: [] };
}

export const UserSearchResult = {
  encode(message: UserSearchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserSearchResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSearchResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSearchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserSearchResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSearchResult {
    return {
      meta: isSet(object.meta) ? UserSearchResultMeta.fromJSON(object.meta) : undefined,
      users: Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserSearchResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserSearchResultMeta.toJSON(message.meta);
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSearchResult>, I>>(base?: I): UserSearchResult {
    return UserSearchResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserSearchResult>, I>>(object: I): UserSearchResult {
    const message = createBaseUserSearchResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserSearchResultMeta.fromPartial(object.meta)
      : undefined;
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHealthCheckResult(): HealthCheckResult {
  return { ok: false };
}

export const HealthCheckResult = {
  encode(message: HealthCheckResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ok = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheckResult {
    return { ok: isSet(object.ok) ? Boolean(object.ok) : false };
  },

  toJSON(message: HealthCheckResult): unknown {
    const obj: any = {};
    if (message.ok === true) {
      obj.ok = message.ok;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckResult>, I>>(base?: I): HealthCheckResult {
    return HealthCheckResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckResult>, I>>(object: I): HealthCheckResult {
    const message = createBaseHealthCheckResult();
    message.ok = object.ok ?? false;
    return message;
  },
};

function createBaseIntRange(): IntRange {
  return { min: 0, max: 0 };
}

export const IntRange = {
  encode(message: IntRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).uint32(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).uint32(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntRange {
    return { min: isSet(object.min) ? Number(object.min) : 0, max: isSet(object.max) ? Number(object.max) : 0 };
  },

  toJSON(message: IntRange): unknown {
    const obj: any = {};
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IntRange>, I>>(base?: I): IntRange {
    return IntRange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntRange>, I>>(object: I): IntRange {
    const message = createBaseIntRange();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseConversation(): Conversation {
  return { id: "", createdAt: 0, updatedAt: 0, name: "", description: "", lastMessageAt: 0 };
}

export const Conversation = {
  encode(message: Conversation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.lastMessageAt !== 0) {
      writer.uint32(48).uint64(message.lastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Conversation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.lastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Conversation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      lastMessageAt: isSet(object.lastMessageAt) ? Number(object.lastMessageAt) : 0,
    };
  },

  toJSON(message: Conversation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.lastMessageAt !== 0) {
      obj.lastMessageAt = Math.round(message.lastMessageAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Conversation>, I>>(base?: I): Conversation {
    return Conversation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Conversation>, I>>(object: I): Conversation {
    const message = createBaseConversation();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.lastMessageAt = object.lastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationCreateOneInput(): ConversationCreateOneInput {
  return { name: "", description: "" };
}

export const ConversationCreateOneInput = {
  encode(message: ConversationCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationCreateOneInput {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: ConversationCreateOneInput): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationCreateOneInput>, I>>(base?: I): ConversationCreateOneInput {
    return ConversationCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationCreateOneInput>, I>>(object: I): ConversationCreateOneInput {
    const message = createBaseConversationCreateOneInput();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseConversationUpdateOneInput(): ConversationUpdateOneInput {
  return { id: "", name: "", description: "", lastMessageAt: 0 };
}

export const ConversationUpdateOneInput = {
  encode(message: ConversationUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.lastMessageAt !== 0) {
      writer.uint32(48).uint64(message.lastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.lastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      lastMessageAt: isSet(object.lastMessageAt) ? Number(object.lastMessageAt) : 0,
    };
  },

  toJSON(message: ConversationUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.lastMessageAt !== 0) {
      obj.lastMessageAt = Math.round(message.lastMessageAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationUpdateOneInput>, I>>(base?: I): ConversationUpdateOneInput {
    return ConversationUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationUpdateOneInput>, I>>(object: I): ConversationUpdateOneInput {
    const message = createBaseConversationUpdateOneInput();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.lastMessageAt = object.lastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationFindOneInput(): ConversationFindOneInput {
  return { id: "" };
}

export const ConversationFindOneInput = {
  encode(message: ConversationFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindOneInput>, I>>(base?: I): ConversationFindOneInput {
    return ConversationFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindOneInput>, I>>(object: I): ConversationFindOneInput {
    const message = createBaseConversationFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationRemoveOneInput(): ConversationRemoveOneInput {
  return { id: "" };
}

export const ConversationRemoveOneInput = {
  encode(message: ConversationRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationRemoveOneInput>, I>>(base?: I): ConversationRemoveOneInput {
    return ConversationRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationRemoveOneInput>, I>>(object: I): ConversationRemoveOneInput {
    const message = createBaseConversationRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationFindByParticipantFilter(): ConversationFindByParticipantFilter {
  return { participantId: "", fromLastMessageAt: 0 };
}

export const ConversationFindByParticipantFilter = {
  encode(message: ConversationFindByParticipantFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.participantId !== "") {
      writer.uint32(10).string(message.participantId);
    }
    if (message.fromLastMessageAt !== 0) {
      writer.uint32(16).uint64(message.fromLastMessageAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.participantId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.fromLastMessageAt = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantFilter {
    return {
      participantId: isSet(object.participantId) ? String(object.participantId) : "",
      fromLastMessageAt: isSet(object.fromLastMessageAt) ? Number(object.fromLastMessageAt) : 0,
    };
  },

  toJSON(message: ConversationFindByParticipantFilter): unknown {
    const obj: any = {};
    if (message.participantId !== "") {
      obj.participantId = message.participantId;
    }
    if (message.fromLastMessageAt !== 0) {
      obj.fromLastMessageAt = Math.round(message.fromLastMessageAt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantFilter>, I>>(
    base?: I,
  ): ConversationFindByParticipantFilter {
    return ConversationFindByParticipantFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantFilter>, I>>(
    object: I,
  ): ConversationFindByParticipantFilter {
    const message = createBaseConversationFindByParticipantFilter();
    message.participantId = object.participantId ?? "";
    message.fromLastMessageAt = object.fromLastMessageAt ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantOpts(): ConversationFindByParticipantOpts {
  return { limit: 0, offset: 0 };
}

export const ConversationFindByParticipantOpts = {
  encode(message: ConversationFindByParticipantOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: ConversationFindByParticipantOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantOpts>, I>>(
    base?: I,
  ): ConversationFindByParticipantOpts {
    return ConversationFindByParticipantOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantOpts>, I>>(
    object: I,
  ): ConversationFindByParticipantOpts {
    const message = createBaseConversationFindByParticipantOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantInput(): ConversationFindByParticipantInput {
  return { filter: undefined, opts: undefined };
}

export const ConversationFindByParticipantInput = {
  encode(message: ConversationFindByParticipantInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      ConversationFindByParticipantFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      ConversationFindByParticipantOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = ConversationFindByParticipantFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = ConversationFindByParticipantOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantInput {
    return {
      filter: isSet(object.filter) ? ConversationFindByParticipantFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? ConversationFindByParticipantOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: ConversationFindByParticipantInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = ConversationFindByParticipantFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = ConversationFindByParticipantOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantInput>, I>>(
    base?: I,
  ): ConversationFindByParticipantInput {
    return ConversationFindByParticipantInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantInput>, I>>(
    object: I,
  ): ConversationFindByParticipantInput {
    const message = createBaseConversationFindByParticipantInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ConversationFindByParticipantFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? ConversationFindByParticipantOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseConversationFindByParticipantResultMeta(): ConversationFindByParticipantResultMeta {
  return { offset: 0 };
}

export const ConversationFindByParticipantResultMeta = {
  encode(message: ConversationFindByParticipantResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ConversationFindByParticipantResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantResultMeta>, I>>(
    base?: I,
  ): ConversationFindByParticipantResultMeta {
    return ConversationFindByParticipantResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantResultMeta>, I>>(
    object: I,
  ): ConversationFindByParticipantResultMeta {
    const message = createBaseConversationFindByParticipantResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationFindByParticipantResult(): ConversationFindByParticipantResult {
  return { meta: undefined, results: [] };
}

export const ConversationFindByParticipantResult = {
  encode(message: ConversationFindByParticipantResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      ConversationFindByParticipantResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Conversation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationFindByParticipantResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationFindByParticipantResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = ConversationFindByParticipantResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Conversation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationFindByParticipantResult {
    return {
      meta: isSet(object.meta) ? ConversationFindByParticipantResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Conversation.fromJSON(e)) : [],
    };
  },

  toJSON(message: ConversationFindByParticipantResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = ConversationFindByParticipantResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Conversation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationFindByParticipantResult>, I>>(
    base?: I,
  ): ConversationFindByParticipantResult {
    return ConversationFindByParticipantResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationFindByParticipantResult>, I>>(
    object: I,
  ): ConversationFindByParticipantResult {
    const message = createBaseConversationFindByParticipantResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? ConversationFindByParticipantResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Conversation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConversationParticipant(): ConversationParticipant {
  return { id: "", createdAt: 0, updatedAt: 0, conversationId: "", participantId: "", writeableAs: undefined };
}

export const ConversationParticipant = {
  encode(message: ConversationParticipant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.participantId !== "") {
      writer.uint32(42).string(message.participantId);
    }
    if (message.writeableAs !== undefined) {
      AuthorizableAs.encode(message.writeableAs, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.participantId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.writeableAs = AuthorizableAs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipant {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      participantId: isSet(object.participantId) ? String(object.participantId) : "",
      writeableAs: isSet(object.writeableAs) ? AuthorizableAs.fromJSON(object.writeableAs) : undefined,
    };
  },

  toJSON(message: ConversationParticipant): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.participantId !== "") {
      obj.participantId = message.participantId;
    }
    if (message.writeableAs !== undefined) {
      obj.writeableAs = AuthorizableAs.toJSON(message.writeableAs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipant>, I>>(base?: I): ConversationParticipant {
    return ConversationParticipant.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipant>, I>>(object: I): ConversationParticipant {
    const message = createBaseConversationParticipant();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.conversationId = object.conversationId ?? "";
    message.participantId = object.participantId ?? "";
    message.writeableAs = (object.writeableAs !== undefined && object.writeableAs !== null)
      ? AuthorizableAs.fromPartial(object.writeableAs)
      : undefined;
    return message;
  },
};

function createBaseConversationParticipantCreateOneInput(): ConversationParticipantCreateOneInput {
  return { conversationId: "", participantId: "" };
}

export const ConversationParticipantCreateOneInput = {
  encode(message: ConversationParticipantCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.participantId !== "") {
      writer.uint32(42).string(message.participantId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.participantId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantCreateOneInput {
    return {
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      participantId: isSet(object.participantId) ? String(object.participantId) : "",
    };
  },

  toJSON(message: ConversationParticipantCreateOneInput): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.participantId !== "") {
      obj.participantId = message.participantId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantCreateOneInput>, I>>(
    base?: I,
  ): ConversationParticipantCreateOneInput {
    return ConversationParticipantCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantCreateOneInput>, I>>(
    object: I,
  ): ConversationParticipantCreateOneInput {
    const message = createBaseConversationParticipantCreateOneInput();
    message.conversationId = object.conversationId ?? "";
    message.participantId = object.participantId ?? "";
    return message;
  },
};

function createBaseConversationParticipantFindOneInput(): ConversationParticipantFindOneInput {
  return { id: "" };
}

export const ConversationParticipantFindOneInput = {
  encode(message: ConversationParticipantFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationParticipantFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantFindOneInput>, I>>(
    base?: I,
  ): ConversationParticipantFindOneInput {
    return ConversationParticipantFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantFindOneInput>, I>>(
    object: I,
  ): ConversationParticipantFindOneInput {
    const message = createBaseConversationParticipantFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationParticipantRemoveOneInput(): ConversationParticipantRemoveOneInput {
  return { id: "" };
}

export const ConversationParticipantRemoveOneInput = {
  encode(message: ConversationParticipantRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ConversationParticipantRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantRemoveOneInput>, I>>(
    base?: I,
  ): ConversationParticipantRemoveOneInput {
    return ConversationParticipantRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantRemoveOneInput>, I>>(
    object: I,
  ): ConversationParticipantRemoveOneInput {
    const message = createBaseConversationParticipantRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConversationParticipantFindByConversationFilter(): ConversationParticipantFindByConversationFilter {
  return { conversationId: "" };
}

export const ConversationParticipantFindByConversationFilter = {
  encode(
    message: ConversationParticipantFindByConversationFilter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(10).string(message.conversationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conversationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationFilter {
    return { conversationId: isSet(object.conversationId) ? String(object.conversationId) : "" };
  },

  toJSON(message: ConversationParticipantFindByConversationFilter): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantFindByConversationFilter>, I>>(
    base?: I,
  ): ConversationParticipantFindByConversationFilter {
    return ConversationParticipantFindByConversationFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantFindByConversationFilter>, I>>(
    object: I,
  ): ConversationParticipantFindByConversationFilter {
    const message = createBaseConversationParticipantFindByConversationFilter();
    message.conversationId = object.conversationId ?? "";
    return message;
  },
};

function createBaseConversationParticipantFindByConversationOpts(): ConversationParticipantFindByConversationOpts {
  return { limit: 0, offset: 0 };
}

export const ConversationParticipantFindByConversationOpts = {
  encode(message: ConversationParticipantFindByConversationOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: ConversationParticipantFindByConversationOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantFindByConversationOpts>, I>>(
    base?: I,
  ): ConversationParticipantFindByConversationOpts {
    return ConversationParticipantFindByConversationOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantFindByConversationOpts>, I>>(
    object: I,
  ): ConversationParticipantFindByConversationOpts {
    const message = createBaseConversationParticipantFindByConversationOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationParticipantFindByConversationInput(): ConversationParticipantFindByConversationInput {
  return { filter: undefined, opts: undefined };
}

export const ConversationParticipantFindByConversationInput = {
  encode(
    message: ConversationParticipantFindByConversationInput,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.filter !== undefined) {
      ConversationParticipantFindByConversationFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      ConversationParticipantFindByConversationOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = ConversationParticipantFindByConversationFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = ConversationParticipantFindByConversationOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationInput {
    return {
      filter: isSet(object.filter)
        ? ConversationParticipantFindByConversationFilter.fromJSON(object.filter)
        : undefined,
      opts: isSet(object.opts) ? ConversationParticipantFindByConversationOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: ConversationParticipantFindByConversationInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = ConversationParticipantFindByConversationFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = ConversationParticipantFindByConversationOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantFindByConversationInput>, I>>(
    base?: I,
  ): ConversationParticipantFindByConversationInput {
    return ConversationParticipantFindByConversationInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantFindByConversationInput>, I>>(
    object: I,
  ): ConversationParticipantFindByConversationInput {
    const message = createBaseConversationParticipantFindByConversationInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? ConversationParticipantFindByConversationFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? ConversationParticipantFindByConversationOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseConversationParticipantFindByConversationResultMeta(): ConversationParticipantFindByConversationResultMeta {
  return { offset: 0 };
}

export const ConversationParticipantFindByConversationResultMeta = {
  encode(
    message: ConversationParticipantFindByConversationResultMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: ConversationParticipantFindByConversationResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantFindByConversationResultMeta>, I>>(
    base?: I,
  ): ConversationParticipantFindByConversationResultMeta {
    return ConversationParticipantFindByConversationResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantFindByConversationResultMeta>, I>>(
    object: I,
  ): ConversationParticipantFindByConversationResultMeta {
    const message = createBaseConversationParticipantFindByConversationResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseConversationParticipantFindByConversationResult(): ConversationParticipantFindByConversationResult {
  return { meta: undefined, results: [] };
}

export const ConversationParticipantFindByConversationResult = {
  encode(
    message: ConversationParticipantFindByConversationResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.meta !== undefined) {
      ConversationParticipantFindByConversationResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      ConversationParticipant.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConversationParticipantFindByConversationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConversationParticipantFindByConversationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = ConversationParticipantFindByConversationResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(ConversationParticipant.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConversationParticipantFindByConversationResult {
    return {
      meta: isSet(object.meta) ? ConversationParticipantFindByConversationResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => ConversationParticipant.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ConversationParticipantFindByConversationResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = ConversationParticipantFindByConversationResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => ConversationParticipant.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConversationParticipantFindByConversationResult>, I>>(
    base?: I,
  ): ConversationParticipantFindByConversationResult {
    return ConversationParticipantFindByConversationResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConversationParticipantFindByConversationResult>, I>>(
    object: I,
  ): ConversationParticipantFindByConversationResult {
    const message = createBaseConversationParticipantFindByConversationResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? ConversationParticipantFindByConversationResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => ConversationParticipant.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    conversationId: "",
    media: undefined,
    senderId: "",
    sentToIds: [],
    receivedByIds: [],
    seenByIds: [],
    deleted: false,
    uniqueness: "",
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    for (const v of message.sentToIds) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.receivedByIds) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.seenByIds) {
      writer.uint32(74).string(v!);
    }
    if (message.deleted === true) {
      writer.uint32(80).bool(message.deleted);
    }
    if (message.uniqueness !== "") {
      writer.uint32(90).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sentToIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.receivedByIds.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.seenByIds.push(reader.string());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
      senderId: isSet(object.senderId) ? String(object.senderId) : "",
      sentToIds: Array.isArray(object?.sentToIds) ? object.sentToIds.map((e: any) => String(e)) : [],
      receivedByIds: Array.isArray(object?.receivedByIds) ? object.receivedByIds.map((e: any) => String(e)) : [],
      seenByIds: Array.isArray(object?.seenByIds) ? object.seenByIds.map((e: any) => String(e)) : [],
      deleted: isSet(object.deleted) ? Boolean(object.deleted) : false,
      uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "",
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.sentToIds?.length) {
      obj.sentToIds = message.sentToIds;
    }
    if (message.receivedByIds?.length) {
      obj.receivedByIds = message.receivedByIds;
    }
    if (message.seenByIds?.length) {
      obj.seenByIds = message.seenByIds;
    }
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.conversationId = object.conversationId ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    message.senderId = object.senderId ?? "";
    message.sentToIds = object.sentToIds?.map((e) => e) || [];
    message.receivedByIds = object.receivedByIds?.map((e) => e) || [];
    message.seenByIds = object.seenByIds?.map((e) => e) || [];
    message.deleted = object.deleted ?? false;
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageMedia(): MessageMedia {
  return { text: "" };
}

export const MessageMedia = {
  encode(message: MessageMedia, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageMedia {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageMedia();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageMedia {
    return { text: isSet(object.text) ? String(object.text) : "" };
  },

  toJSON(message: MessageMedia): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageMedia>, I>>(base?: I): MessageMedia {
    return MessageMedia.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageMedia>, I>>(object: I): MessageMedia {
    const message = createBaseMessageMedia();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseMessageCreateOneInput(): MessageCreateOneInput {
  return { conversationId: "", media: undefined, senderId: "", uniqueness: "" };
}

export const MessageCreateOneInput = {
  encode(message: MessageCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(34).string(message.conversationId);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    if (message.senderId !== "") {
      writer.uint32(50).string(message.senderId);
    }
    if (message.uniqueness !== "") {
      writer.uint32(90).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.conversationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.senderId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageCreateOneInput {
    return {
      conversationId: isSet(object.conversationId) ? String(object.conversationId) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
      senderId: isSet(object.senderId) ? String(object.senderId) : "",
      uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "",
    };
  },

  toJSON(message: MessageCreateOneInput): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    if (message.senderId !== "") {
      obj.senderId = message.senderId;
    }
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageCreateOneInput>, I>>(base?: I): MessageCreateOneInput {
    return MessageCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageCreateOneInput>, I>>(object: I): MessageCreateOneInput {
    const message = createBaseMessageCreateOneInput();
    message.conversationId = object.conversationId ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    message.senderId = object.senderId ?? "";
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageUpdateOneInput(): MessageUpdateOneInput {
  return { id: "", media: undefined };
}

export const MessageUpdateOneInput = {
  encode(message: MessageUpdateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.media !== undefined) {
      MessageMedia.encode(message.media, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageUpdateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageUpdateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.media = MessageMedia.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageUpdateOneInput {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      media: isSet(object.media) ? MessageMedia.fromJSON(object.media) : undefined,
    };
  },

  toJSON(message: MessageUpdateOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.media !== undefined) {
      obj.media = MessageMedia.toJSON(message.media);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageUpdateOneInput>, I>>(base?: I): MessageUpdateOneInput {
    return MessageUpdateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageUpdateOneInput>, I>>(object: I): MessageUpdateOneInput {
    const message = createBaseMessageUpdateOneInput();
    message.id = object.id ?? "";
    message.media = (object.media !== undefined && object.media !== null)
      ? MessageMedia.fromPartial(object.media)
      : undefined;
    return message;
  },
};

function createBaseMessageFindOneInput(): MessageFindOneInput {
  return { id: "" };
}

export const MessageFindOneInput = {
  encode(message: MessageFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindOneInput>, I>>(base?: I): MessageFindOneInput {
    return MessageFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindOneInput>, I>>(object: I): MessageFindOneInput {
    const message = createBaseMessageFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMessageFindUniqueInput(): MessageFindUniqueInput {
  return { uniqueness: "" };
}

export const MessageFindUniqueInput = {
  encode(message: MessageFindUniqueInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uniqueness !== "") {
      writer.uint32(10).string(message.uniqueness);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindUniqueInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindUniqueInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uniqueness = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindUniqueInput {
    return { uniqueness: isSet(object.uniqueness) ? String(object.uniqueness) : "" };
  },

  toJSON(message: MessageFindUniqueInput): unknown {
    const obj: any = {};
    if (message.uniqueness !== "") {
      obj.uniqueness = message.uniqueness;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindUniqueInput>, I>>(base?: I): MessageFindUniqueInput {
    return MessageFindUniqueInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindUniqueInput>, I>>(object: I): MessageFindUniqueInput {
    const message = createBaseMessageFindUniqueInput();
    message.uniqueness = object.uniqueness ?? "";
    return message;
  },
};

function createBaseMessageRemoveOneInput(): MessageRemoveOneInput {
  return { id: "" };
}

export const MessageRemoveOneInput = {
  encode(message: MessageRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageRemoveOneInput>, I>>(base?: I): MessageRemoveOneInput {
    return MessageRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageRemoveOneInput>, I>>(object: I): MessageRemoveOneInput {
    const message = createBaseMessageRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMessageFindByConversationFilter(): MessageFindByConversationFilter {
  return { conversationId: "" };
}

export const MessageFindByConversationFilter = {
  encode(message: MessageFindByConversationFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conversationId !== "") {
      writer.uint32(10).string(message.conversationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.conversationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationFilter {
    return { conversationId: isSet(object.conversationId) ? String(object.conversationId) : "" };
  },

  toJSON(message: MessageFindByConversationFilter): unknown {
    const obj: any = {};
    if (message.conversationId !== "") {
      obj.conversationId = message.conversationId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationFilter>, I>>(base?: I): MessageFindByConversationFilter {
    return MessageFindByConversationFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationFilter>, I>>(
    object: I,
  ): MessageFindByConversationFilter {
    const message = createBaseMessageFindByConversationFilter();
    message.conversationId = object.conversationId ?? "";
    return message;
  },
};

function createBaseMessageFindByConversationOpts(): MessageFindByConversationOpts {
  return { limit: 0, offset: 0 };
}

export const MessageFindByConversationOpts = {
  encode(message: MessageFindByConversationOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: MessageFindByConversationOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationOpts>, I>>(base?: I): MessageFindByConversationOpts {
    return MessageFindByConversationOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationOpts>, I>>(
    object: I,
  ): MessageFindByConversationOpts {
    const message = createBaseMessageFindByConversationOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseMessageFindByConversationInput(): MessageFindByConversationInput {
  return { filter: undefined, opts: undefined };
}

export const MessageFindByConversationInput = {
  encode(message: MessageFindByConversationInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      MessageFindByConversationFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      MessageFindByConversationOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = MessageFindByConversationFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = MessageFindByConversationOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationInput {
    return {
      filter: isSet(object.filter) ? MessageFindByConversationFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? MessageFindByConversationOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: MessageFindByConversationInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = MessageFindByConversationFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = MessageFindByConversationOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationInput>, I>>(base?: I): MessageFindByConversationInput {
    return MessageFindByConversationInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationInput>, I>>(
    object: I,
  ): MessageFindByConversationInput {
    const message = createBaseMessageFindByConversationInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? MessageFindByConversationFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? MessageFindByConversationOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseMessageFindByConversationResultMeta(): MessageFindByConversationResultMeta {
  return { offset: 0 };
}

export const MessageFindByConversationResultMeta = {
  encode(message: MessageFindByConversationResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: MessageFindByConversationResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationResultMeta>, I>>(
    base?: I,
  ): MessageFindByConversationResultMeta {
    return MessageFindByConversationResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationResultMeta>, I>>(
    object: I,
  ): MessageFindByConversationResultMeta {
    const message = createBaseMessageFindByConversationResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseMessageFindByConversationResult(): MessageFindByConversationResult {
  return { meta: undefined, results: [] };
}

export const MessageFindByConversationResult = {
  encode(message: MessageFindByConversationResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      MessageFindByConversationResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Message.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFindByConversationResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFindByConversationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = MessageFindByConversationResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Message.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageFindByConversationResult {
    return {
      meta: isSet(object.meta) ? MessageFindByConversationResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Message.fromJSON(e)) : [],
    };
  },

  toJSON(message: MessageFindByConversationResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = MessageFindByConversationResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Message.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageFindByConversationResult>, I>>(base?: I): MessageFindByConversationResult {
    return MessageFindByConversationResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageFindByConversationResult>, I>>(
    object: I,
  ): MessageFindByConversationResult {
    const message = createBaseMessageFindByConversationResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? MessageFindByConversationResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMessageJobPayload(): MessageJobPayload {
  return { id: "" };
}

export const MessageJobPayload = {
  encode(message: MessageJobPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageJobPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageJobPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MessageJobPayload {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MessageJobPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MessageJobPayload>, I>>(base?: I): MessageJobPayload {
    return MessageJobPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MessageJobPayload>, I>>(object: I): MessageJobPayload {
    const message = createBaseMessageJobPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermission(): Permission {
  return {
    id: "",
    createdAt: 0,
    updatedAt: 0,
    entity: "",
    entityId: "",
    permittedEntity: "",
    permittedEntityId: "",
    action: "",
  };
}

export const Permission = {
  encode(message: Permission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permission {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permission {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: Permission): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permission>, I>>(base?: I): Permission {
    return Permission.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Permission>, I>>(object: I): Permission {
    const message = createBasePermission();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBaseAuthorizableAs(): AuthorizableAs {
  return { entity: "", entityId: "" };
}

export const AuthorizableAs = {
  encode(message: AuthorizableAs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthorizableAs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizableAs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthorizableAs {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
    };
  },

  toJSON(message: AuthorizableAs): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthorizableAs>, I>>(base?: I): AuthorizableAs {
    return AuthorizableAs.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthorizableAs>, I>>(object: I): AuthorizableAs {
    const message = createBaseAuthorizableAs();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    return message;
  },
};

function createBasePermissions(): Permissions {
  return { permissions: [] };
}

export const Permissions = {
  encode(message: Permissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.permissions) {
      Permission.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permissions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permissions.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permissions {
    return {
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: Permissions): unknown {
    const obj: any = {};
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permissions>, I>>(base?: I): Permissions {
    return Permissions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Permissions>, I>>(object: I): Permissions {
    const message = createBasePermissions();
    message.permissions = object.permissions?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionCreateOneInput(): PermissionCreateOneInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionCreateOneInput = {
  encode(message: PermissionCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCreateOneInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionCreateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionCreateOneInput>, I>>(base?: I): PermissionCreateOneInput {
    return PermissionCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionCreateOneInput>, I>>(object: I): PermissionCreateOneInput {
    const message = createBasePermissionCreateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionCreateManyInput(): PermissionCreateManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionCreateManyInput = {
  encode(message: PermissionCreateManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(34).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(42).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(58).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCreateManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCreateManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCreateManyInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityIds: Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => String(e))
        : [],
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionCreateManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionCreateManyInput>, I>>(base?: I): PermissionCreateManyInput {
    return PermissionCreateManyInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionCreateManyInput>, I>>(object: I): PermissionCreateManyInput {
    const message = createBasePermissionCreateManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindOneInput(): PermissionFindOneInput {
  return { id: "" };
}

export const PermissionFindOneInput = {
  encode(message: PermissionFindOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PermissionFindOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindOneInput>, I>>(base?: I): PermissionFindOneInput {
    return PermissionFindOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindOneInput>, I>>(object: I): PermissionFindOneInput {
    const message = createBasePermissionFindOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionFindWhereInput(): PermissionFindWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereInput = {
  encode(message: PermissionFindWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereInput>, I>>(base?: I): PermissionFindWhereInput {
    return PermissionFindWhereInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereInput>, I>>(object: I): PermissionFindWhereInput {
    const message = createBasePermissionFindWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindWhereManyInput(): PermissionFindWhereManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionFindWhereManyInput = {
  encode(message: PermissionFindWhereManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(34).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereManyInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityIds: Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => String(e))
        : [],
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereManyInput>, I>>(base?: I): PermissionFindWhereManyInput {
    return PermissionFindWhereManyInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereManyInput>, I>>(object: I): PermissionFindWhereManyInput {
    const message = createBasePermissionFindWhereManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindWhereOrStarInput(): PermissionFindWhereOrStarInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionFindWhereOrStarInput = {
  encode(message: PermissionFindWhereOrStarInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindWhereOrStarInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindWhereOrStarInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindWhereOrStarInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindWhereOrStarInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindWhereOrStarInput>, I>>(base?: I): PermissionFindWhereOrStarInput {
    return PermissionFindWhereOrStarInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindWhereOrStarInput>, I>>(
    object: I,
  ): PermissionFindWhereOrStarInput {
    const message = createBasePermissionFindWhereOrStarInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermitted(): Permitted {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const Permitted = {
  encode(message: Permitted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(10).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(18).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Permitted {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermitted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Permitted {
    return {
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: Permitted): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Permitted>, I>>(base?: I): Permitted {
    return Permitted.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Permitted>, I>>(object: I): Permitted {
    const message = createBasePermitted();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionValidateOneInput(): PermissionValidateOneInput {
  return { entity: "", entityId: "", action: "", permitted: [] };
}

export const PermissionValidateOneInput = {
  encode(message: PermissionValidateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    for (const v of message.permitted) {
      Permitted.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.action = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permitted.push(Permitted.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
      permitted: Array.isArray(object?.permitted) ? object.permitted.map((e: any) => Permitted.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionValidateOneInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    if (message.permitted?.length) {
      obj.permitted = message.permitted.map((e) => Permitted.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionValidateOneInput>, I>>(base?: I): PermissionValidateOneInput {
    return PermissionValidateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionValidateOneInput>, I>>(object: I): PermissionValidateOneInput {
    const message = createBasePermissionValidateOneInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.action = object.action ?? "";
    message.permitted = object.permitted?.map((e) => Permitted.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionValidateOneResult(): PermissionValidateOneResult {
  return { validated: false };
}

export const PermissionValidateOneResult = {
  encode(message: PermissionValidateOneResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validated === true) {
      writer.uint32(8).bool(message.validated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionValidateOneResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionValidateOneResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.validated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionValidateOneResult {
    return { validated: isSet(object.validated) ? Boolean(object.validated) : false };
  },

  toJSON(message: PermissionValidateOneResult): unknown {
    const obj: any = {};
    if (message.validated === true) {
      obj.validated = message.validated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionValidateOneResult>, I>>(base?: I): PermissionValidateOneResult {
    return PermissionValidateOneResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionValidateOneResult>, I>>(object: I): PermissionValidateOneResult {
    const message = createBasePermissionValidateOneResult();
    message.validated = object.validated ?? false;
    return message;
  },
};

function createBasePermissionRemoveOneInput(): PermissionRemoveOneInput {
  return { id: "" };
}

export const PermissionRemoveOneInput = {
  encode(message: PermissionRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: PermissionRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveOneInput>, I>>(base?: I): PermissionRemoveOneInput {
    return PermissionRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveOneInput>, I>>(object: I): PermissionRemoveOneInput {
    const message = createBasePermissionRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePermissionRemoveWhereInput(): PermissionRemoveWhereInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "", action: "" };
}

export const PermissionRemoveWhereInput = {
  encode(message: PermissionRemoveWhereInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveWhereInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveWhereInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionRemoveWhereInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveWhereInput>, I>>(base?: I): PermissionRemoveWhereInput {
    return PermissionRemoveWhereInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveWhereInput>, I>>(object: I): PermissionRemoveWhereInput {
    const message = createBasePermissionRemoveWhereInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionRemoveWhereManyInput(): PermissionRemoveWhereManyInput {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityIds: [], action: "" };
}

export const PermissionRemoveWhereManyInput = {
  encode(message: PermissionRemoveWhereManyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    for (const v of message.permittedEntityIds) {
      writer.uint32(34).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(42).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveWhereManyInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveWhereManyInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityIds.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveWhereManyInput {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityIds: Array.isArray(object?.permittedEntityIds)
        ? object.permittedEntityIds.map((e: any) => String(e))
        : [],
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionRemoveWhereManyInput): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityIds?.length) {
      obj.permittedEntityIds = message.permittedEntityIds;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveWhereManyInput>, I>>(base?: I): PermissionRemoveWhereManyInput {
    return PermissionRemoveWhereManyInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveWhereManyInput>, I>>(
    object: I,
  ): PermissionRemoveWhereManyInput {
    const message = createBasePermissionRemoveWhereManyInput();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityIds = object.permittedEntityIds?.map((e) => e) || [];
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedFilter(): PermissionFindByPermittedFilter {
  return { permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindByPermittedFilter = {
  encode(message: PermissionFindByPermittedFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permittedEntity !== "") {
      writer.uint32(50).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(58).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedFilter {
    return {
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindByPermittedFilter): unknown {
    const obj: any = {};
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedFilter>, I>>(base?: I): PermissionFindByPermittedFilter {
    return PermissionFindByPermittedFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedFilter>, I>>(
    object: I,
  ): PermissionFindByPermittedFilter {
    const message = createBasePermissionFindByPermittedFilter();
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindByPermittedOpts(): PermissionFindByPermittedOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindByPermittedOpts = {
  encode(message: PermissionFindByPermittedOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindByPermittedOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedOpts>, I>>(base?: I): PermissionFindByPermittedOpts {
    return PermissionFindByPermittedOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedOpts>, I>>(
    object: I,
  ): PermissionFindByPermittedOpts {
    const message = createBasePermissionFindByPermittedOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedInput(): PermissionFindByPermittedInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindByPermittedInput = {
  encode(message: PermissionFindByPermittedInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindByPermittedFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindByPermittedOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindByPermittedFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindByPermittedOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedInput {
    return {
      filter: isSet(object.filter) ? PermissionFindByPermittedFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindByPermittedOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindByPermittedInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindByPermittedFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindByPermittedOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedInput>, I>>(base?: I): PermissionFindByPermittedInput {
    return PermissionFindByPermittedInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedInput>, I>>(
    object: I,
  ): PermissionFindByPermittedInput {
    const message = createBasePermissionFindByPermittedInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindByPermittedFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindByPermittedOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindByPermittedResultMeta(): PermissionFindByPermittedResultMeta {
  return { offset: 0 };
}

export const PermissionFindByPermittedResultMeta = {
  encode(message: PermissionFindByPermittedResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindByPermittedResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedResultMeta>, I>>(
    base?: I,
  ): PermissionFindByPermittedResultMeta {
    return PermissionFindByPermittedResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedResultMeta>, I>>(
    object: I,
  ): PermissionFindByPermittedResultMeta {
    const message = createBasePermissionFindByPermittedResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByPermittedResult(): PermissionFindByPermittedResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindByPermittedResult = {
  encode(message: PermissionFindByPermittedResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindByPermittedResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByPermittedResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByPermittedResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindByPermittedResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByPermittedResult {
    return {
      meta: isSet(object.meta) ? PermissionFindByPermittedResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindByPermittedResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindByPermittedResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByPermittedResult>, I>>(base?: I): PermissionFindByPermittedResult {
    return PermissionFindByPermittedResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByPermittedResult>, I>>(
    object: I,
  ): PermissionFindByPermittedResult {
    const message = createBasePermissionFindByPermittedResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindByPermittedResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionFindByEntityFilter(): PermissionFindByEntityFilter {
  return { entity: "", entityId: "", action: "" };
}

export const PermissionFindByEntityFilter = {
  encode(message: PermissionFindByEntityFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(50).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(58).string(message.entityId);
    }
    if (message.action !== "") {
      writer.uint32(66).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      action: isSet(object.action) ? String(object.action) : "",
    };
  },

  toJSON(message: PermissionFindByEntityFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityFilter>, I>>(base?: I): PermissionFindByEntityFilter {
    return PermissionFindByEntityFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityFilter>, I>>(object: I): PermissionFindByEntityFilter {
    const message = createBasePermissionFindByEntityFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.action = object.action ?? "";
    return message;
  },
};

function createBasePermissionFindByEntityOpts(): PermissionFindByEntityOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindByEntityOpts = {
  encode(message: PermissionFindByEntityOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindByEntityOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityOpts>, I>>(base?: I): PermissionFindByEntityOpts {
    return PermissionFindByEntityOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityOpts>, I>>(object: I): PermissionFindByEntityOpts {
    const message = createBasePermissionFindByEntityOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByEntityInput(): PermissionFindByEntityInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindByEntityInput = {
  encode(message: PermissionFindByEntityInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindByEntityFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindByEntityOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindByEntityFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindByEntityOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityInput {
    return {
      filter: isSet(object.filter) ? PermissionFindByEntityFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindByEntityOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindByEntityInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindByEntityFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindByEntityOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityInput>, I>>(base?: I): PermissionFindByEntityInput {
    return PermissionFindByEntityInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityInput>, I>>(object: I): PermissionFindByEntityInput {
    const message = createBasePermissionFindByEntityInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindByEntityFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindByEntityOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindByEntityResultMeta(): PermissionFindByEntityResultMeta {
  return { offset: 0 };
}

export const PermissionFindByEntityResultMeta = {
  encode(message: PermissionFindByEntityResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindByEntityResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityResultMeta>, I>>(
    base?: I,
  ): PermissionFindByEntityResultMeta {
    return PermissionFindByEntityResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityResultMeta>, I>>(
    object: I,
  ): PermissionFindByEntityResultMeta {
    const message = createBasePermissionFindByEntityResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindByEntityResult(): PermissionFindByEntityResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindByEntityResult = {
  encode(message: PermissionFindByEntityResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindByEntityResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindByEntityResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindByEntityResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindByEntityResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindByEntityResult {
    return {
      meta: isSet(object.meta) ? PermissionFindByEntityResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindByEntityResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindByEntityResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindByEntityResult>, I>>(base?: I): PermissionFindByEntityResult {
    return PermissionFindByEntityResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindByEntityResult>, I>>(object: I): PermissionFindByEntityResult {
    const message = createBasePermissionFindByEntityResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindByEntityResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionFindAllActionsFilter(): PermissionFindAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionFindAllActionsFilter = {
  encode(message: PermissionFindAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionFindAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsFilter>, I>>(base?: I): PermissionFindAllActionsFilter {
    return PermissionFindAllActionsFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsFilter>, I>>(
    object: I,
  ): PermissionFindAllActionsFilter {
    const message = createBasePermissionFindAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionFindAllActionsOpts(): PermissionFindAllActionsOpts {
  return { limit: 0, offset: 0 };
}

export const PermissionFindAllActionsOpts = {
  encode(message: PermissionFindAllActionsOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: PermissionFindAllActionsOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsOpts>, I>>(base?: I): PermissionFindAllActionsOpts {
    return PermissionFindAllActionsOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsOpts>, I>>(object: I): PermissionFindAllActionsOpts {
    const message = createBasePermissionFindAllActionsOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsInput(): PermissionFindAllActionsInput {
  return { filter: undefined, opts: undefined };
}

export const PermissionFindAllActionsInput = {
  encode(message: PermissionFindAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionFindAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PermissionFindAllActionsOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionFindAllActionsFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = PermissionFindAllActionsOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsInput {
    return {
      filter: isSet(object.filter) ? PermissionFindAllActionsFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? PermissionFindAllActionsOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: PermissionFindAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionFindAllActionsFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = PermissionFindAllActionsOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsInput>, I>>(base?: I): PermissionFindAllActionsInput {
    return PermissionFindAllActionsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsInput>, I>>(
    object: I,
  ): PermissionFindAllActionsInput {
    const message = createBasePermissionFindAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionFindAllActionsFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PermissionFindAllActionsOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBasePermissionFindAllActionsResultMeta(): PermissionFindAllActionsResultMeta {
  return { offset: 0 };
}

export const PermissionFindAllActionsResultMeta = {
  encode(message: PermissionFindAllActionsResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: PermissionFindAllActionsResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsResultMeta>, I>>(
    base?: I,
  ): PermissionFindAllActionsResultMeta {
    return PermissionFindAllActionsResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsResultMeta>, I>>(
    object: I,
  ): PermissionFindAllActionsResultMeta {
    const message = createBasePermissionFindAllActionsResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBasePermissionFindAllActionsResult(): PermissionFindAllActionsResult {
  return { meta: undefined, results: [] };
}

export const PermissionFindAllActionsResult = {
  encode(message: PermissionFindAllActionsResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      PermissionFindAllActionsResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      Permission.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionFindAllActionsResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionFindAllActionsResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = PermissionFindAllActionsResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.results.push(Permission.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionFindAllActionsResult {
    return {
      meta: isSet(object.meta) ? PermissionFindAllActionsResultMeta.fromJSON(object.meta) : undefined,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Permission.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionFindAllActionsResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = PermissionFindAllActionsResultMeta.toJSON(message.meta);
    }
    if (message.results?.length) {
      obj.results = message.results.map((e) => Permission.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionFindAllActionsResult>, I>>(base?: I): PermissionFindAllActionsResult {
    return PermissionFindAllActionsResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionFindAllActionsResult>, I>>(
    object: I,
  ): PermissionFindAllActionsResult {
    const message = createBasePermissionFindAllActionsResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? PermissionFindAllActionsResultMeta.fromPartial(object.meta)
      : undefined;
    message.results = object.results?.map((e) => Permission.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionRemoveAllActionsFilter(): PermissionRemoveAllActionsFilter {
  return { entity: "", entityId: "", permittedEntity: "", permittedEntityId: "" };
}

export const PermissionRemoveAllActionsFilter = {
  encode(message: PermissionRemoveAllActionsFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.entityId !== "") {
      writer.uint32(18).string(message.entityId);
    }
    if (message.permittedEntity !== "") {
      writer.uint32(26).string(message.permittedEntity);
    }
    if (message.permittedEntityId !== "") {
      writer.uint32(34).string(message.permittedEntityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entityId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permittedEntity = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permittedEntityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsFilter {
    return {
      entity: isSet(object.entity) ? String(object.entity) : "",
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      permittedEntity: isSet(object.permittedEntity) ? String(object.permittedEntity) : "",
      permittedEntityId: isSet(object.permittedEntityId) ? String(object.permittedEntityId) : "",
    };
  },

  toJSON(message: PermissionRemoveAllActionsFilter): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.entityId !== "") {
      obj.entityId = message.entityId;
    }
    if (message.permittedEntity !== "") {
      obj.permittedEntity = message.permittedEntity;
    }
    if (message.permittedEntityId !== "") {
      obj.permittedEntityId = message.permittedEntityId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveAllActionsFilter>, I>>(
    base?: I,
  ): PermissionRemoveAllActionsFilter {
    return PermissionRemoveAllActionsFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveAllActionsFilter>, I>>(
    object: I,
  ): PermissionRemoveAllActionsFilter {
    const message = createBasePermissionRemoveAllActionsFilter();
    message.entity = object.entity ?? "";
    message.entityId = object.entityId ?? "";
    message.permittedEntity = object.permittedEntity ?? "";
    message.permittedEntityId = object.permittedEntityId ?? "";
    return message;
  },
};

function createBasePermissionRemoveAllActionsInput(): PermissionRemoveAllActionsInput {
  return { filter: undefined };
}

export const PermissionRemoveAllActionsInput = {
  encode(message: PermissionRemoveAllActionsInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      PermissionRemoveAllActionsFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionRemoveAllActionsInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionRemoveAllActionsInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = PermissionRemoveAllActionsFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionRemoveAllActionsInput {
    return { filter: isSet(object.filter) ? PermissionRemoveAllActionsFilter.fromJSON(object.filter) : undefined };
  },

  toJSON(message: PermissionRemoveAllActionsInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = PermissionRemoveAllActionsFilter.toJSON(message.filter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PermissionRemoveAllActionsInput>, I>>(base?: I): PermissionRemoveAllActionsInput {
    return PermissionRemoveAllActionsInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PermissionRemoveAllActionsInput>, I>>(
    object: I,
  ): PermissionRemoveAllActionsInput {
    const message = createBasePermissionRemoveAllActionsInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? PermissionRemoveAllActionsFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseUserFollowCreateOneInput(): UserFollowCreateOneInput {
  return { followerId: "", followeeId: "" };
}

export const UserFollowCreateOneInput = {
  encode(message: UserFollowCreateOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(18).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowCreateOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowCreateOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowCreateOneInput {
    return {
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
    };
  },

  toJSON(message: UserFollowCreateOneInput): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFollowCreateOneInput>, I>>(base?: I): UserFollowCreateOneInput {
    return UserFollowCreateOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFollowCreateOneInput>, I>>(object: I): UserFollowCreateOneInput {
    const message = createBaseUserFollowCreateOneInput();
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFollowRemoveOneInput(): UserFollowRemoveOneInput {
  return { id: "" };
}

export const UserFollowRemoveOneInput = {
  encode(message: UserFollowRemoveOneInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFollowRemoveOneInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFollowRemoveOneInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFollowRemoveOneInput {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserFollowRemoveOneInput): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFollowRemoveOneInput>, I>>(base?: I): UserFollowRemoveOneInput {
    return UserFollowRemoveOneInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFollowRemoveOneInput>, I>>(object: I): UserFollowRemoveOneInput {
    const message = createBaseUserFollowRemoveOneInput();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUserFindFollowersFilter(): UserFindFollowersFilter {
  return { followeeId: "" };
}

export const UserFindFollowersFilter = {
  encode(message: UserFindFollowersFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followeeId !== "") {
      writer.uint32(10).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersFilter {
    return { followeeId: isSet(object.followeeId) ? String(object.followeeId) : "" };
  },

  toJSON(message: UserFindFollowersFilter): unknown {
    const obj: any = {};
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersFilter>, I>>(base?: I): UserFindFollowersFilter {
    return UserFindFollowersFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersFilter>, I>>(object: I): UserFindFollowersFilter {
    const message = createBaseUserFindFollowersFilter();
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBaseUserFindFollowersOpts(): UserFindFollowersOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFollowersOpts = {
  encode(message: UserFindFollowersOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFollowersOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersOpts>, I>>(base?: I): UserFindFollowersOpts {
    return UserFindFollowersOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersOpts>, I>>(object: I): UserFindFollowersOpts {
    const message = createBaseUserFindFollowersOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersInput(): UserFindFollowersInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFollowersInput = {
  encode(message: UserFindFollowersInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFollowersFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFollowersOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFollowersFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFollowersOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersInput {
    return {
      filter: isSet(object.filter) ? UserFindFollowersFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFollowersOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFollowersInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFollowersFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFollowersOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersInput>, I>>(base?: I): UserFindFollowersInput {
    return UserFindFollowersInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersInput>, I>>(object: I): UserFindFollowersInput {
    const message = createBaseUserFindFollowersInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFollowersFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFollowersOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFollowersResultMeta(): UserFindFollowersResultMeta {
  return { offset: 0 };
}

export const UserFindFollowersResultMeta = {
  encode(message: UserFindFollowersResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFollowersResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersResultMeta>, I>>(base?: I): UserFindFollowersResultMeta {
    return UserFindFollowersResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersResultMeta>, I>>(object: I): UserFindFollowersResultMeta {
    const message = createBaseUserFindFollowersResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFollowersResult(): UserFindFollowersResult {
  return { meta: undefined, followers: [] };
}

export const UserFindFollowersResult = {
  encode(message: UserFindFollowersResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFollowersResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followers) {
      Follower.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFollowersResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFollowersResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFollowersResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followers.push(Follower.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFollowersResult {
    return {
      meta: isSet(object.meta) ? UserFindFollowersResultMeta.fromJSON(object.meta) : undefined,
      followers: Array.isArray(object?.followers) ? object.followers.map((e: any) => Follower.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserFindFollowersResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFollowersResultMeta.toJSON(message.meta);
    }
    if (message.followers?.length) {
      obj.followers = message.followers.map((e) => Follower.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFollowersResult>, I>>(base?: I): UserFindFollowersResult {
    return UserFindFollowersResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFollowersResult>, I>>(object: I): UserFindFollowersResult {
    const message = createBaseUserFindFollowersResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFollowersResultMeta.fromPartial(object.meta)
      : undefined;
    message.followers = object.followers?.map((e) => Follower.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollower(): Follower {
  return { id: "", createdAt: 0, updatedAt: 0, followeeId: "", followerId: "" };
}

export const Follower = {
  encode(message: Follower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followeeId !== "") {
      writer.uint32(34).string(message.followeeId);
    }
    if (message.followerId !== "") {
      writer.uint32(42).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Follower {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followeeId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Follower {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
    };
  },

  toJSON(message: Follower): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Follower>, I>>(base?: I): Follower {
    return Follower.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Follower>, I>>(object: I): Follower {
    const message = createBaseFollower();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followeeId = object.followeeId ?? "";
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesFilter(): UserFindFolloweesFilter {
  return { followerId: "" };
}

export const UserFindFolloweesFilter = {
  encode(message: UserFindFolloweesFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followerId !== "") {
      writer.uint32(10).string(message.followerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.followerId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesFilter {
    return { followerId: isSet(object.followerId) ? String(object.followerId) : "" };
  },

  toJSON(message: UserFindFolloweesFilter): unknown {
    const obj: any = {};
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesFilter>, I>>(base?: I): UserFindFolloweesFilter {
    return UserFindFolloweesFilter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesFilter>, I>>(object: I): UserFindFolloweesFilter {
    const message = createBaseUserFindFolloweesFilter();
    message.followerId = object.followerId ?? "";
    return message;
  },
};

function createBaseUserFindFolloweesOpts(): UserFindFolloweesOpts {
  return { limit: 0, offset: 0 };
}

export const UserFindFolloweesOpts = {
  encode(message: UserFindFolloweesOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(16).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesOpts {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesOpts {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: UserFindFolloweesOpts): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesOpts>, I>>(base?: I): UserFindFolloweesOpts {
    return UserFindFolloweesOpts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesOpts>, I>>(object: I): UserFindFolloweesOpts {
    const message = createBaseUserFindFolloweesOpts();
    message.limit = object.limit ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesInput(): UserFindFolloweesInput {
  return { filter: undefined, opts: undefined };
}

export const UserFindFolloweesInput = {
  encode(message: UserFindFolloweesInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      UserFindFolloweesFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      UserFindFolloweesOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesInput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesInput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = UserFindFolloweesFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.opts = UserFindFolloweesOpts.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesInput {
    return {
      filter: isSet(object.filter) ? UserFindFolloweesFilter.fromJSON(object.filter) : undefined,
      opts: isSet(object.opts) ? UserFindFolloweesOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: UserFindFolloweesInput): unknown {
    const obj: any = {};
    if (message.filter !== undefined) {
      obj.filter = UserFindFolloweesFilter.toJSON(message.filter);
    }
    if (message.opts !== undefined) {
      obj.opts = UserFindFolloweesOpts.toJSON(message.opts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesInput>, I>>(base?: I): UserFindFolloweesInput {
    return UserFindFolloweesInput.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesInput>, I>>(object: I): UserFindFolloweesInput {
    const message = createBaseUserFindFolloweesInput();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? UserFindFolloweesFilter.fromPartial(object.filter)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? UserFindFolloweesOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseUserFindFolloweesResultMeta(): UserFindFolloweesResultMeta {
  return { offset: 0 };
}

export const UserFindFolloweesResultMeta = {
  encode(message: UserFindFolloweesResultMeta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).uint64(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResultMeta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResultMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResultMeta {
    return { offset: isSet(object.offset) ? Number(object.offset) : 0 };
  },

  toJSON(message: UserFindFolloweesResultMeta): unknown {
    const obj: any = {};
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesResultMeta>, I>>(base?: I): UserFindFolloweesResultMeta {
    return UserFindFolloweesResultMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesResultMeta>, I>>(object: I): UserFindFolloweesResultMeta {
    const message = createBaseUserFindFolloweesResultMeta();
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseUserFindFolloweesResult(): UserFindFolloweesResult {
  return { meta: undefined, followees: [] };
}

export const UserFindFolloweesResult = {
  encode(message: UserFindFolloweesResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meta !== undefined) {
      UserFindFolloweesResultMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.followees) {
      Followee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindFolloweesResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindFolloweesResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.meta = UserFindFolloweesResultMeta.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.followees.push(Followee.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindFolloweesResult {
    return {
      meta: isSet(object.meta) ? UserFindFolloweesResultMeta.fromJSON(object.meta) : undefined,
      followees: Array.isArray(object?.followees) ? object.followees.map((e: any) => Followee.fromJSON(e)) : [],
    };
  },

  toJSON(message: UserFindFolloweesResult): unknown {
    const obj: any = {};
    if (message.meta !== undefined) {
      obj.meta = UserFindFolloweesResultMeta.toJSON(message.meta);
    }
    if (message.followees?.length) {
      obj.followees = message.followees.map((e) => Followee.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindFolloweesResult>, I>>(base?: I): UserFindFolloweesResult {
    return UserFindFolloweesResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFindFolloweesResult>, I>>(object: I): UserFindFolloweesResult {
    const message = createBaseUserFindFolloweesResult();
    message.meta = (object.meta !== undefined && object.meta !== null)
      ? UserFindFolloweesResultMeta.fromPartial(object.meta)
      : undefined;
    message.followees = object.followees?.map((e) => Followee.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFollowee(): Followee {
  return { id: "", createdAt: 0, updatedAt: 0, followerId: "", followeeId: "" };
}

export const Followee = {
  encode(message: Followee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).uint64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(24).uint64(message.updatedAt);
    }
    if (message.followerId !== "") {
      writer.uint32(34).string(message.followerId);
    }
    if (message.followeeId !== "") {
      writer.uint32(42).string(message.followeeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Followee {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFollowee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.createdAt = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.updatedAt = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.followerId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.followeeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Followee {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      followerId: isSet(object.followerId) ? String(object.followerId) : "",
      followeeId: isSet(object.followeeId) ? String(object.followeeId) : "",
    };
  },

  toJSON(message: Followee): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.createdAt !== 0) {
      obj.createdAt = Math.round(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      obj.updatedAt = Math.round(message.updatedAt);
    }
    if (message.followerId !== "") {
      obj.followerId = message.followerId;
    }
    if (message.followeeId !== "") {
      obj.followeeId = message.followeeId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Followee>, I>>(base?: I): Followee {
    return Followee.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Followee>, I>>(object: I): Followee {
    const message = createBaseFollowee();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.followerId = object.followerId ?? "";
    message.followeeId = object.followeeId ?? "";
    return message;
  },
};

function createBasePublishJobResult(): PublishJobResult {
  return { jobId: "" };
}

export const PublishJobResult = {
  encode(message: PublishJobResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jobId !== "") {
      writer.uint32(10).string(message.jobId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishJobResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishJobResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jobId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishJobResult {
    return { jobId: isSet(object.jobId) ? String(object.jobId) : "" };
  },

  toJSON(message: PublishJobResult): unknown {
    const obj: any = {};
    if (message.jobId !== "") {
      obj.jobId = message.jobId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishJobResult>, I>>(base?: I): PublishJobResult {
    return PublishJobResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishJobResult>, I>>(object: I): PublishJobResult {
    const message = createBasePublishJobResult();
    message.jobId = object.jobId ?? "";
    return message;
  },
};

function createBaseWorkersHealthCheckResult(): WorkersHealthCheckResult {
  return { ok: false };
}

export const WorkersHealthCheckResult = {
  encode(message: WorkersHealthCheckResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorkersHealthCheckResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorkersHealthCheckResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ok = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WorkersHealthCheckResult {
    return { ok: isSet(object.ok) ? Boolean(object.ok) : false };
  },

  toJSON(message: WorkersHealthCheckResult): unknown {
    const obj: any = {};
    if (message.ok === true) {
      obj.ok = message.ok;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WorkersHealthCheckResult>, I>>(base?: I): WorkersHealthCheckResult {
    return WorkersHealthCheckResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WorkersHealthCheckResult>, I>>(object: I): WorkersHealthCheckResult {
    const message = createBaseWorkersHealthCheckResult();
    message.ok = object.ok ?? false;
    return message;
  },
};

export interface DummyService {
  CreateOne(request: DummyCreateOneInput): Promise<Dummy>;
  UpdateOne(request: DummyUpdateOneInput): Promise<Dummy>;
  FindOne(request: DummyFindOneInput): Promise<Dummy>;
  RemoveOne(request: DummyRemoveOneInput): Promise<Empty>;
  Search(request: DummySearchInput): Promise<DummySearchResult>;
}

export interface ProviderService {
  CreateOne(request: ProviderCreateOneInput): Promise<Provider>;
  UpdateOne(request: ProviderUpdateOneInput): Promise<Provider>;
  FindOne(request: ProviderFindOneInput): Promise<Provider>;
  FindByUser(request: ProviderFindByUserInput): Promise<Provider>;
  FindMe(request: Empty): Promise<Provider>;
  RemoveOne(request: ProviderRemoveOneInput): Promise<Empty>;
  Search(request: ProviderSearchInput): Promise<ProviderSearchResult>;
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

export interface HealthService {
  HealthCheck(request: Empty): Promise<HealthCheckResult>;
}

export interface ConversationService {
  CreateOne(request: ConversationCreateOneInput): Promise<Conversation>;
  UpdateOne(request: ConversationUpdateOneInput): Promise<Conversation>;
  FindOne(request: ConversationFindOneInput): Promise<Conversation>;
  RemoveOne(request: ConversationRemoveOneInput): Promise<Conversation>;
  FindByParticipant(request: ConversationFindByParticipantInput): Promise<ConversationFindByParticipantResult>;
}

export interface ConversationParticipantService {
  CreateOne(request: ConversationParticipantCreateOneInput): Promise<ConversationParticipant>;
  FindOne(request: ConversationParticipantFindOneInput): Promise<ConversationParticipant>;
  RemoveOne(request: ConversationParticipantRemoveOneInput): Promise<ConversationParticipant>;
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
  FindByConversation(request: MessageFindByConversationInput): Promise<MessageFindByConversationResult>;
}

export interface PermissionService {
  CreateOne(request: PermissionCreateOneInput): Promise<Permission>;
  CreateMany(request: PermissionCreateManyInput): Promise<Permissions>;
  FindOne(request: PermissionFindOneInput): Promise<Permission>;
  FindWhere(request: PermissionFindWhereInput): Promise<Permission>;
  FindWhereMany(request: PermissionFindWhereManyInput): Promise<Permissions>;
  FindWhereOrStar(request: PermissionFindWhereOrStarInput): Promise<Permission>;
  FindByPermitted(request: PermissionFindByPermittedInput): Promise<PermissionFindByPermittedResult>;
  FindByEntity(request: PermissionFindByEntityInput): Promise<PermissionFindByEntityResult>;
  FindAllActions(request: PermissionFindAllActionsInput): Promise<PermissionFindAllActionsResult>;
  ValidateOne(request: PermissionValidateOneInput): Promise<PermissionValidateOneResult>;
  RemoveOne(request: PermissionRemoveOneInput): Promise<Empty>;
  RemoveWhere(request: PermissionRemoveWhereInput): Promise<Empty>;
  RemoveWhereMany(request: PermissionRemoveWhereManyInput): Promise<Empty>;
  RemoveAllActions(request: PermissionRemoveAllActionsInput): Promise<Empty>;
}

export interface UserFollowService {
  CreateOne(request: UserFollowCreateOneInput): Promise<Follower>;
  RemoveOne(request: UserFollowRemoveOneInput): Promise<Follower>;
  FindFollowers(request: UserFindFollowersInput): Promise<UserFindFollowersResult>;
  FindFollowees(request: UserFindFolloweesInput): Promise<UserFindFolloweesResult>;
}

export interface WorkersService {
  PublishJob(request: PublishJobInput): Promise<PublishJobResult>;
  HealthCheck(request: Empty): Promise<WorkersHealthCheckResult>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
