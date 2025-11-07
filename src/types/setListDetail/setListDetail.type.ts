export interface Track {
  likes: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseDate: string;
  albumImgUrl: string;
}

export interface Song {
  youtubeUrl: string;
  lyrics: string;
}

export interface TeamMember {
  session: string;
  name: string;
  instagramId: string | null;
}

export interface SetListDetail {
  track: Track;
  song: Song;
  team: TeamMember[];
}
