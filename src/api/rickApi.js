import {get} from './utils';

const rickApi = {
  searchCharacters: get('https://rickandmortyapi.com/api/character'),
  getCharacters: ids => get(`https://rickandmortyapi.com/api/character/${ids}`),
  getCharacter: id => get(`https://rickandmortyapi.com/api/character/${id}`),
  searchLocations: get(`https://rickandmortyapi.com/api/location/`),
  getLocations: ids => get(`https://rickandmortyapi.com/api/location/${ids}`),
  getLocation: id => get(`https://rickandmortyapi.com/api/location/${id}`),
  searchEpisodes: get('https://rickandmortyapi.com/api/episode'),
  getEpisodes: ids => get(`https://rickandmortyapi.com/api/episode/${ids}`),
  getEpisod: id => get(`https://rickandmortyapi.com/api/episode/${id}`)
}
export {rickApi}