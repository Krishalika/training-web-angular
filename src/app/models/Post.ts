export default class Post{
    private _title:string;
    private _description:string;
  
    constructor(title: string, description: string) {
      this._title = title;
      this._description = description;
    }
  
    get title(): string {
      return this._title;
    }
  
    set title(value: string) {
      this._title = value;
    }
  
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }
  }