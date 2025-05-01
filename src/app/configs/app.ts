export interface AppConfig {
  id: string;
  scope: string;
  name: string;
  shortName: string;
  description: string;
  displayOverride: string[];
  display: string;
  backgroundColor: string;
  themeColor: string;
  tileColor: string;
}

const config: AppConfig = {
  id: '/',
  scope: '/',

  name: 'СК Масштаб',
  shortName: 'СКМ',
  description:
    'Строительная и техническая экспертиза, обследование зданий и сооружений в Москве. Строительная компания «Масштаб»',

  displayOverride: ['fullscreen', 'minimal-ui'],
  display: 'standalone',
  backgroundColor: '#fafafa',
  themeColor: '#cbd5e1',
  tileColor: '#1e293b'
};

export default config;
