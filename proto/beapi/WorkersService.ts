import { Empty } from './google/protobuf/empty';
export interface PublishJobInput {
  dummyJobPayload: DummyJobPayload | undefined;
}

export interface DummyJobPayload {
  id: string;
}

export interface PublishJobResult {
  jobId: string;
}

export interface WorkersHealthCheckResult {
  ok: boolean;
}

import { postToUnary } from './utils';

export class WorkersService {
  private readonly serviceName: string = 'WorkersService';

  async publishJob(data: Partial<PublishJobInput>): Promise<PublishJobResult> {
    return postToUnary<PublishJobResult>(this.serviceName, 'publishJob', data);
  }

  async healthCheck(data: Partial<Empty>): Promise<WorkersHealthCheckResult> {
    return postToUnary<WorkersHealthCheckResult>(
      this.serviceName,
      'healthCheck',
      data,
    );
  }
}
