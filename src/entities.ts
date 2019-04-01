enum AnimeType { TV, Movie, OVA, ONA, Special, Music }

interface AnimeEntry {
  title: string
  synonyms: string[]
  type: AnimeType
  episodes: number
  picture: 	string
  thumbnail: string
  relations: string[]
  sources: string[]
}

export interface AnimeDatabase {
  data: AnimeEntry []
}