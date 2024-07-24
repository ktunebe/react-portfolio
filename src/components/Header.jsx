import Nav from './Nav'

export default function Header() {
  
  return (
    <header className='flex justify-between px-3 py-6 bg-primary rounded-xl'>
      <h1 className='text-5xl'>Kent Tuneberg</h1>
      <Nav />

    </header>

  )
}