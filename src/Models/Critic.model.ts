export class CriticModel {
	id:     number;
	name:   string;
	quote:  string;
	rating: number;
	constructor(
		id: number,
		name: string,
		quote: string,
		rating: number,
	) {
		this.id = id;
		this.name = name;
		this.quote = quote;
		this.rating = rating;
	}
}