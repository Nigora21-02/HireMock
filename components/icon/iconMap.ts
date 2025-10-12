import { IconType, IconProps } from './types';

// Central icon map for all app icons (now all Ionicons)
export const iconMap: Record<string, Omit<IconProps, 'size' | 'color' | 'style'>> = {
  // Navigation & Tabbar
  home: { name: 'home-outline', type: 'ion' },
  homeFilled: { name: 'home', type: 'ion' },
  search: { name: 'search-outline', type: 'ion' },
  profile: { name: 'person-outline', type: 'ion' },
  profileFilled: { name: 'person', type: 'ion' },
  camera: { name: 'camera-outline', type: 'ion' },
  cameraFilled: { name: 'camera', type: 'ion' },
  videokamera: { name: 'videocam-outline', type: 'ion' },
  videokameraFilled: { name: 'videocam', type: 'ion' },
  settings: { name: 'settings-outline', type: 'ion' },
  settingsFilled: { name: 'settings', type: 'ion' },
  notifications: { name: 'notifications-outline', type: 'ion' },
  notificationsFilled: { name: 'notifications', type: 'ion' },
  chat: { name: 'chatbubble-ellipses-outline', type: 'ion' },
  chatFilled: { name: 'chatbubble-ellipses', type: 'ion' },
  

  // Actions & status
  list: { name: 'list-outline', type: 'ion' },
  listFilled: { name: 'list', type: 'ion' },
  add: { name: 'add-outline', type: 'ion' },
  addFilled: { name: 'add', type: 'ion' },
  edit: { name: 'pencil-outline', type: 'ion' },
  editFilled: { name: 'pencil', type: 'ion' },
  delete: { name: 'trash-outline', type: 'ion' },
  deleteFilled: { name: 'trash', type: 'ion' },
  check: { name: 'checkmark-outline', type: 'ion' },
  checkFilled: { name: 'checkmark', type: 'ion' },
  close: { name: 'close-outline', type: 'ion' },
  closeFilled: { name: 'close', type: 'ion' },
  back: { name: 'arrow-back-outline', type: 'ion' },
  next: { name: 'arrow-forward-outline', type: 'ion' },
  info: { name: 'information-circle-outline', type: 'ion' },
  infoFilled: { name: 'information-circle', type: 'ion' },
  warning: { name: 'warning-outline', type: 'ion' },
  error: { name: 'alert-circle-outline', type: 'ion' },
  calendar: { name: 'calendar-outline', type: 'ion' },
  upload: { name: 'cloud-upload-outline', type: 'ion' },
  download: { name: 'cloud-download-outline', type: 'ion' },

  // Category alternatives
  apps: { name: 'apps-outline', type: 'ion' },
  appsFilled: { name: 'apps', type: 'ion' },
  folder: { name: 'folder-outline', type: 'ion' },
  folderFilled: { name: 'folder', type: 'ion' },
  grid: { name: 'grid-outline', type: 'ion' },
  gridFilled: { name: 'grid', type: 'ion' },

  // Interview specific
  mic: { name: 'mic-outline', type: 'ion' },
  micFilled: { name: 'mic', type: 'ion' },
  play: { name: 'play-outline', type: 'ion' },
  playFilled: { name: 'play', type: 'ion' },
  pause: { name: 'pause-outline', type: 'ion' },
  stop: { name: 'stop-outline', type: 'ion' },
  timer: { name: 'time-outline', type: 'ion' },
  star: { name: 'star-outline', type: 'ion' },
  starFilled: { name: 'star', type: 'ion' },
  eye: { name: 'eye-outline', type: 'ion' },
  eyeOff: { name: 'eye-off-outline', type: 'ion' },

  // Language
  globe: { name: 'globe-outline', type: 'ion' },
  globeFilled: { name: 'globe', type: 'ion' },
};
