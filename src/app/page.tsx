import Logo from '@/components/Logo'
import Avatar from '@/components/UI/Avatar'
import Button from '@/components/UI/Button'
import H2 from '@/components/UI/H2'
import NavBar from '@/components/UI/NavBar'
import Image from 'next/image'

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

  const tecData = [
    {
      id: 1,
      label: 'Html 5',
      alt: 'Html 5',
      src: 'assets/html5.svg',
    },
    {
      id: 2,
      label: 'Css 3',
      alt: 'Css 3',
      src: 'assets/css3.svg',
    },
  ]

  return (
    <main className='overflow-y-scroll snap-mandatory snap-y'>
      <header className='fixed w-screen z-50'>
        <NavBar data={navData} />
      </header>
      <div className='px-8 h-screen'>
        <section id='home' className='flex flex-col items-center justify-center snap-center h-full'>
          <div className='mb-2'>
            <Avatar src='/images/foto.png' alt='Minha foto' />
          </div>
          <div className='flex mb-12'>
            <Logo />
          </div>
          <div className='flex gap-x-2'>
            <Button className='btn-primary'>Portfólio</Button>
            <Button className='btn-primary btn-outline'>Contato</Button>
          </div>
        </section>
        <section id='sobre' className='flex flex-col items-center justify-center snap-center h-full'>
          <H2 className='text-center mb-8'>Sobre Mim</H2>
          <div className='flex flex-col gap-y-8'>
            <p>
              Olá, sou Igor Flores, um desenvolvedor Full Stack apaixonado por transformar ideias em realidade digital.
              Com 27 anos de idade e formado em Sistemas de Informação desde 2020, possuo uma sólida base de
              conhecimentos em diversas tecnologias web.
            </p>
            <p>
              Ao longo dos meus 5 anos de experiência profissional, tive a oportunidade de atuar como Analista de
              Sistemas por 4 anos, aprimorando minhas habilidades de análise, resolução de problemas e compreensão das
              necessidades dos usuários. Além disso, trabalhei por 1 ano como desenvolvedor Full Stack, onde pude
              explorar minha paixão pelo desenvolvimento de aplicações web abrangentes.
            </p>
          </div>
        </section>
        <section id='tecnologias' className='flex flex-col items-center justify-center snap-center h-full'>
          <H2 className='text-center mb-8'>Tecnologias que utilizo</H2>
          <div className='grid grid-cols-4 gap-x-4'>
            {tecData.map((item) => (
              <div className='flex flex-col justify-center items-center' key={item.id}>
                {item.label && <span>{item.label}</span>}
                <Image src={item.src} width={64} height={64} alt={item.alt ? item.alt : ''} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
