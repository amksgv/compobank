export interface VocabWord {
  word: string;
  meaning: string;
  partOfSpeech: string;
  example: string;
}

export interface Composition {
  slug: string;
  title: string;
  description: string;
  level: number;
  wordCount: number;
  theme: string;
  body: string;
  vocabulary: VocabWord[];
}
