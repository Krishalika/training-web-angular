export class Post {
    constructor(
        public user: string,
        public title: string,
        public description: string,
        public created: Date
    ) { }
}