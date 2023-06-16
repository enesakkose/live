import IcoMoon, { IconProps } from 'react-icomoon'
import iconSet from './selection.json'

export type IconNameType = 
  | 'left-chevron'
  | 'right-chevron'
  | 'chevron'
  | 'star'
  | 'basket'
  | 'gear'
  | 'house'
  | 'left'
  | 'search'
  | 'soccer'
  | 'tennis'
  | 'calendar4-week'
  | 'favourites'
  | 'bell'
  | 'fillbell'
  | 'redcard'
  | 'yellowcard'
  | 'a'
  | 'round'
  | 'subs'
  | 'warning'
  | 'user'

type IconPropsType = { icon: IconNameType } & IconProps

const Icon = ({ size = '24px', ...props }: IconPropsType) => (
  <IcoMoon iconSet={iconSet} size={size} {...props} />
)

export default Icon
