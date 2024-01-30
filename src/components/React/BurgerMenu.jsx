import { scaleDown as Menu } from 'react-burger-menu'

export default function BurgerMenu({ pageWrapId, outerContainerId }) {
  return (
    <div>
        <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId} width={'280px'}>
        <Link to='/'>Item 1</Link>
        <Link to='/'>Item 2</Link>
        <Link to='/'>Item 3</Link>
        <Link to='/'>Item 4</Link>
      </Menu>
    </div>
  )
}
