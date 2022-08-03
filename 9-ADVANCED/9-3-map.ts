type Video = {
    title: string;
    author: string;
}
// type VideoOptional = {
//     title?: string;
//     author?: string;
//     description?: string;
// }
type Optional<T> = {
    [P in keyof T]?: T[P] // for... in
}
type VideoOptional = Optional<Video>
const videoOp: VideoOptional = {
    title: 'hi',
}
type Animal = {
    name: string;
    age: number;

}
const animal: Optional<Animal> = {
    name: 'dog',
}
type ReadOnly<T> = {
   readonly [P in keyof T]: T[P];
};
const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'hyunjin',
}

type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
    readonly description: string;
}
    type Nullable<T> = { [P in keyof T] : T[P] | null};
    const obj3: Nullable<Video>= {
        title: 'hi',
        author: null,
    }