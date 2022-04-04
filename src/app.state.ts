import { Post } from './models/post.model';

export interface AppState {
    readonly card: Post[];
}