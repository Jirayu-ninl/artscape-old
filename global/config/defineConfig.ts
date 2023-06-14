export const app = {
  NAME: 'Artscape',
  VERSION: '2023.06.16',
  UPDATE_DATE: 'Jun 16, 2023',
  Dependencies: {
    Artscape: '0.7b',
    React: '18.2.0',
    NextJs: '13.4.5',
    ThreeJs: '153.0',
  },
  GOOGLE_TAG_MANAGER: '',
  Functions: {
    useThree: true,
    useAudio: true,
    useAuth: true,
    useWeb3: true,
  },
}

export const metaData = {
  appName: 'Artscape',
  title: 'Artscape - Official Website',
  url: 'https://Artscape.day',
  description:
    'Unleash Your Imagination, Connect with Fellow Visionaries, and Ignite Your Creative Spirit',
  coverImg: '/og.jpg',
  author: 'Jirayu Ninlapun',
  keywords: ['Artscape', 'Creative Hub'],
  twitterID: '@Artscape',
}

export const contacts = {
  facebook: 'ArtscapeDay',
  messenger: 'ArtscapeDay',
  instagram: 'Artscape_Day',
  youtube: '@Artscape',
  mail: 'hello@artscape.day',
  github: '',
  twitter: 'Artscape',
  discord: 'x',
}

export const theme = {
  defaultTheme: 'dark',
  color: {
    primary: {
      0: '#FFE171',
      1: '#FFD539',
      2: '#FFC900',
      3: '#C69C00',
      4: '#8E7000',
    },
    secondary: {
      0: '#ACFDEF',
      1: '#75FCE5',
      2: '#51FBDE',
      3: '#04C2A2',
      4: '#038A73',
    },
    tertiary: {
      0: '#C0AAFF',
      1: '#9771FF',
      2: '#7341FF',
      3: '#4300FF',
      4: '#3400C6',
    },
    quaternary: {
      0: '#FFB3B3',
      1: '#FF8080',
      2: '#ff3b3b',
      3: '#E60000',
      4: '#B30000',
    },
    background: {
      0: '#101010',
      1: '#1A1A1A',
      2: '#03131a',
      3: '#072c3b',
    },
  },
}

const defineConfig = {
  metaData: metaData,
  contacts: contacts,
  app: app,
  theme: theme,
}

export default defineConfig
