const setLanguage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const getLanguage = (key: string) => localStorage.getItem(key)

export { setLanguage, getLanguage }
