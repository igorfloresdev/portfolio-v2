import Logo from '@/components/Logo'
import Avatar from '@/components/UI/Avatar'
import NavBar from '@/components/UI/NavBar'

export default function Home() {
  const navData = [
    {
      id: 1,
      title: 'Home',
      href: '#home',
    },
    {
      id: 2,
      title: 'Sobre Mim',
      href: '#about',
    },
    {
      id: 3,
      title: 'Tecnologias',
      href: '#tecnology',
    },
    {
      id: 4,
      title: 'Projetos',
      href: '#projects',
    },
    {
      id: 5,
      title: 'Contato',
      href: '#contact',
    },
  ]
  return (
    <>
      <main>
        <header>
          <NavBar data={navData} />
        </header>
        <section id='#home' className='flex flex-col items-center justify-center my-24'>
          <div>
            <Avatar src='/images/foto.png' alt='Minha foto' />
          </div>
          <div className='flex'>
            <Logo />
          </div>
        </section>
      </main>
    </>
  )
}
