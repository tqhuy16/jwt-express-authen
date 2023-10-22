const ROUTER_PATH = {
  HOME: '/',
  EXAMPLE: '/examples',
  REDUX: '/redux',
  PAGE_NOT_FOUND: '/404',

  // Auth
  LOGIN: '/login'
}

const MENU_ITEMS = [
  {
    link: `${ROUTER_PATH.HOME}`,
    name: 'home'
  },
  {
    link: `${ROUTER_PATH.EXAMPLE}`,
    name: 'examples'
  },
  {
    link: `${ROUTER_PATH.REDUX}`,
    name: 'redux'
  }
]

const LANGUAGE_ITEMS = ['en', 'vi']

const DATE_FORMAT_LIST = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY']

export { ROUTER_PATH, MENU_ITEMS, LANGUAGE_ITEMS, DATE_FORMAT_LIST }
