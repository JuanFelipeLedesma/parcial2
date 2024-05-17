export class Anime {
    id: number;
    name: string;
    image: string;
    rating: number;
    category: string;
    episodes: number;
    description: string;

    constructor(id: number, name: string, image: string, rating: number, category: string, episodes:number, description:string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.rating = rating;
        this.category = category;
        this.episodes = episodes;
        this.description = description;
    }
}