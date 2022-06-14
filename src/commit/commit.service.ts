import {Injectable} from '@nestjs/common';
import {AxiosRequestConfig} from 'axios';
import * as axios from 'axios';

@Injectable()
export class CommitService {

  async getCommit(url:string){
    const options: AxiosRequestConfig = {
      url : url,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        "content-type": "application/json"
      }
    };
    const commit = await axios.default.request(options);
    return commit.data;
  }
}