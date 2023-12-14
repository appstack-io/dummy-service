import axios from 'axios';

export async function postToUnary<T>(
  serviceName: string,
  methodName: string,
  data: any,
): Promise<T> {
  const response = await axios.post(
    'http://localhost:3000/gateway/unary',
    {
      service: serviceName,
      method: methodName,
      data,
    },
    { withCredentials: true },
  );
  return response.data;
}
