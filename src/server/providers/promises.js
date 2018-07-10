import { matchPath } from 'react-router-dom'

const promises = (routes, url, store) => routes
                                    .filter(route => matchPath(url, route))
                                    .map(route => route.component)
                                    .filter(comp => comp.prefetch)
                                    .map(comp => comp.prefetch(store))

export default promises;