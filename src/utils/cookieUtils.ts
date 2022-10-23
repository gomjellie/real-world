export function setCookie(key: string, val: string) {
  const date = new Date()
  const value = val

  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)

  // Set it
  document.cookie =
    key + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
}

export function getCookie(key: string) {
  const value = '; ' + document.cookie
  const parts = value.split('; ' + key + '=')

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift()
  }
}

export function deleteCookie(key: string) {
  const date = new Date()

  // Set it expire in -1 days
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000)

  // Set it
  document.cookie = key + '=; expires=' + date.toUTCString() + '; path=/'
}
