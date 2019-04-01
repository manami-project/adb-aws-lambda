import { APIGatewayProxyHandler } from 'aws-lambda';
import { AnimeDatabase } from './entities'
import { createSourceLink, MetaDataProvider } from './linkmapper'
import { findInFile } from './finder';

const db: AnimeDatabase = require('../anime-offline-database.json')

export const dbLambda: APIGatewayProxyHandler = async (event, _context) => {
  const { id, metaDataProvider } = event.pathParameters

  const url = createSourceLink(id, MetaDataProvider[metaDataProvider.toUpperCase()])

  if (url === undefined) {
    return {
      statusCode: 404,
      body: null
    };
  }

  const resultEntry = findInFile(db.data, url)

  return {
    statusCode: 200,
    body: JSON.stringify(
      resultEntry
    ),
  };
}