import {request} from '../utils/request';

export async function query(params) {
    return request('/xxx/xxxx', {
      datas: params,
      method: 'POST',
    });
  }