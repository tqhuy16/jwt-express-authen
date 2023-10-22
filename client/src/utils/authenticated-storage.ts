const loginStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const logoutStorage = (key: string) => {
  localStorage.removeItem(key)
}

export { loginStorage, logoutStorage }
