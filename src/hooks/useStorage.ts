export const useLocalStorage = (key: string, message: any) => {
  const setMessage = () => {
    if (typeof message === 'object' && !Array.isArray(message)) {
      window.localStorage.setItem(key, JSON.stringify(message))
    } else {
      window.localStorage.setItem(key, message)
    }
  }
  const getMessage = () => {
    if (typeof message === 'object' && !Array.isArray(message)) {
      return JSON.parse(window.localStorage.getItem(key)!)
    } else {
      return window.localStorage.getItem(key)
    }
  }
  const clearMessage = () => {
    window.localStorage.removeItem(key)
  }
  return {
    message,
    setMessage,
    clearMessage,
    getMessage
  }
}

export const useSessionStorage = (key: string, message: any) => {
  if (typeof message === 'object' && !Array.isArray(message)) {
    window.sessionStorage.setItem(key, JSON.stringify(message))
  } else {
    window.sessionStorage.setItem(key, message)
  }
  const setMessage = () => {
    if (typeof message === 'object' && !Array.isArray(message)) {
      window.localStorage.setItem(key, JSON.stringify(message))
    } else {
      window.localStorage.setItem(key, message)
    }
  }
  const getMessage = () => {
    if (typeof message === 'object' && !Array.isArray(message)) {
      return JSON.parse(window.sessionStorage.getItem(key)!)
    } else {
      return window.sessionStorage.getItem(key)
    }
  }
  const clearMessage = () => {
    window.sessionStorage.removeItem(key)
  }
  return {
    message,
    setMessage,
    clearMessage,
    getMessage
  }
}
