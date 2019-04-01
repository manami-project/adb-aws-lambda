export const findInFile = (data, url) => data.find( entry => 
    entry.sources.includes(url)
)