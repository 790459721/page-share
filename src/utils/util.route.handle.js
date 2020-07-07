import queryString from 'query-string'
const routeJump = (props,data) => {
    const { url, params } = data
    props.history.push(`${url}?${queryString.stringify(params)}`)
}
const getQuery = (url) => {
    return queryString.parse(url)
}
export {
    routeJump,
    getQuery
}