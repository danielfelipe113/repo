import { CriticModel } from "./Critic.model";

export class Book {
	id:            number;
	name:          string;
	author:        string;
	publishedYear: number;
	isbn10:        string;
	isbn13:        string;
	image:         string;
	synopsis:      string;
	critics:       CriticModel[];
	genre:         string;
	rented:        boolean;
	rentedDaysLeft: number;
	constructor() {
		this.id = 0;
		this.name = "";
		this.author = "";
		this.publishedYear = 0;
		this.isbn10 = "";
		this.isbn13 = "";
		this.image = "";
		this.synopsis = "";
		this.critics = [];
		this.genre = "";
		this.rented = false;
		this.rentedDaysLeft = 0;
	}
}
