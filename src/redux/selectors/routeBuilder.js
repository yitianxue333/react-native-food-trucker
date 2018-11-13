const BuildRoute = function (url, params) {
  let route = url + '?'
  route += Object.keys(params).map(key => key + '=' + params[key]).join('&')
  return route
}

export { BuildRoute }