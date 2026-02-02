import Nav from '../Nav'

export default function Header({ scrollToSection }) {
  
  return (
    <header className='header'>
      <h1 className='text-2xl'>Kent Tuneberg</h1>
      <Nav scrollToSection={scrollToSection}/>

    </header>

  )
}