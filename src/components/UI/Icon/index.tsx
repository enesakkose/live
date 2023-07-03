import IcoMoon, { IconProps } from 'react-icomoon'
import iconSet from './selection.json'

export type IconNameType = 
  | 'left-chevron'
  | 'right-chevron'
  | 'chevron'
  | 'star'
  | 'basketball'
  | 'gear'
  | 'house'
  | 'left'
  | 'search'
  | 'football'
  | 'tennis'
  | 'calendar4-week'
  | 'favourites'
  | 'bell'
  | 'fillbell'
  | 'red'
  | 'yellow'
  | 'redball'
  | 'a'
  | 'round'
  | 'subs'
  | 'warning'
  | 'user'
  | string

type IconPropsType = { icon: IconNameType } & IconProps

const Icon = ({ size = '24px', ...props }: IconPropsType) => (
  <IcoMoon iconSet={iconSet} size={size} {...props} />
)

export default Icon
