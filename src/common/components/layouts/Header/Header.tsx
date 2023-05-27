import { SearchInput } from '../../form'
import { Logo } from '../../ui'

const Header = () => {
  return (
    <header className='px-8 md:px-20 py-5 flex justify-between items-center shadow-md'>
      <Logo />
      <SearchInput />
    </header>
  )
}

export default Header