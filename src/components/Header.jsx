import Nav from './Nav'

export default function Header() {
  
  return (
    <header className='flex justify-between px-3 py-3 bg-light-bg text-primary border-b-2 border-primary'>
      <h1 className='text-4xl'>Kent Tuneberg</h1>
      <Nav />

    </header>

  )
}