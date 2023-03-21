import IcoMoon, { IconProps } from 'react-icomoon'
import iconSet from '@/icons/selection.json'

const Icon = ({ size = '25', ...props }: IconProps) => (
  <IcoMoon iconSet={iconSet} size={size} {...props} />
)

export default Icon
