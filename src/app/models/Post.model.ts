export class Post {
    constructor(
      public title: string,
      public content: string,
      public loveIts: number,
      public create_at: Date = new Date(),
    ) {}
}
