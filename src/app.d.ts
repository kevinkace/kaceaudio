// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type Mp3 = {
		dropbox: string;
		drive: string;
	}

	type Wav = {
		dropbox: string;
		drive: string;
	}

	type Song = {
		live: boolean;
		title: string;
		desc: string;
		img: string;
		href: string;
		embed: string;
		soundcloud: string;
		mp3: Mp3;
		wav: Wav;
		bpm: number;
		scale: string;
		length: string;
	}

	type Songs = {
		[key: string]: Song;
	};
	// type Songs = Object.<string, Song>

	type Sample = {
		title: string;
		preview: string;
		href: string;
		desc: string;
		tags: string[];
	}

	type Samples = Sample[];

	type Filter = undefined|string;
}

export {};
