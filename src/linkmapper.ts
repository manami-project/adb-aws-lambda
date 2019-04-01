export enum MetaDataProvider {
    MAL='mal',
    ANN='ann',
    ANIDB='anidb',
    KITSU='kitsu',
    ANILIST='anilist'
}

export function createSourceLink(id: string, metaDataProvider: MetaDataProvider): string {
    switch (metaDataProvider) {
        case MetaDataProvider.MAL:
            return `https://myanimelist.net/anime/${id}`
        case MetaDataProvider.ANN:
            return `https://animenewsnetwork.com/encyclopedia/anime.php?id=${id}`
        case MetaDataProvider.ANIDB:
            return `https://anidb.net/a${id}`
        case MetaDataProvider.KITSU:
            return `https://kitsu.io/anime/${id}`
        case MetaDataProvider.ANILIST:
            return `https://anilist.net/anime/${id}`
        default:
            return undefined
    }
}