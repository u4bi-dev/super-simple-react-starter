import axios from 'axios'

export function fetchCircuits() {
  return axios.get('https://restcountries.eu/rest/v1/all').then(res => {
    return [
      {
        circuitId: 'albert_park',
        url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
        circuitName: 'Albert Park Grand Prix Circuit',
        Location: { lat: '-37.8497', long: '144.968', locality: 'Melbourne', country: 'Australia' },
      },
    ]
  })
}
