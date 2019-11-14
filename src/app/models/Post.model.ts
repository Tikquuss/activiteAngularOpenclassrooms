export class Post {
    constructor(
      public title: string = '',
      public content: string = '',
      public loveIts: number = 0,
      public create_at: Date = new Date(),
    ) {}
}
