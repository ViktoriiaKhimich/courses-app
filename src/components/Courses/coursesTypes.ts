type Author = Array<string>;

export interface CourseInterface {
	id: string;
	title: string;
	description: string;
	duration: number;
	authors: Author[] | string[];
	creationDate: string;
}
