export class Song {
  listenings: number;
  isFavorite: boolean;

  constructor(
    public title: string, 
    public songUrl: string, 
    public lyricsUrl: string,
    public author?: string
  ) {
    this.listenings = 0;
    this.isFavorite = false;
  } 
}