import { createSourceLink, MetaDataProvider } from './linkmapper'
import { expect } from 'chai';

describe('linkmapper', () => {
    it('must map ANILIST correctly to string', () => {
        const result = MetaDataProvider['ANILIST']

        expect(result).to.eq(MetaDataProvider.ANILIST)
    })

    it('must return anilist url for path variable /anilist', () => {
        const id = '234'
        const result = createSourceLink(id, MetaDataProvider.ANILIST)

        expect(result).to.eq(`https://anilist.net/anime/${id}`)
    })

    it('must return myanimelist url for path variable /mal', () => {
        const id = '1535'
        const result = createSourceLink(id, MetaDataProvider.MAL)

        expect(result).to.eq(`https://myanimelist.net/anime/${id}`)
    })

    it('must return anidb url for path variable /anidb', () => {
        const id = '4563'
        const result = createSourceLink(id, MetaDataProvider.ANIDB)

        expect(result).to.eq(`https://anidb.net/a${id}`)
    })

    it('must return ann url for path variable /ann', () => {
        const id = '6592'
        const result = createSourceLink(id, MetaDataProvider.ANN)

        expect(result).to.eq(`https://animenewsnetwork.com/encyclopedia/anime.php?id=${id}`)
    })

    it('must return kitsu url for path variable /kitsu', () => {
        const id = '1376'
        const result = createSourceLink(id, MetaDataProvider.KITSU)

        expect(result).to.eq(`https://kitsu.io/anime/${id}`)
    })
})