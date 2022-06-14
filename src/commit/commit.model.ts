export class CommitResponse<T> {
    readonly data: any;
  
    constructor(data: any) {
      this.data = typeof data === "string" ? JSON.parse(data) : data;
    }
  }