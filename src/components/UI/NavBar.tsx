import Link from 'next/link'

interface NavBarProps {
  title?: string
  data?: {
    id: string | number
    title: string
    href: string
  }[]
}
export default function NavBar({ data, title }: NavBarProps) {
  return (
    <div className='navbar bg-base-200'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>
          {data && (
            <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              {data.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {title && <a className='btn btn-ghost text-xl'>{title}</a>}
      </div>
      <div className='navbar-center hidden lg:flex'>
        {data && (
          <ul className='menu menu-horizontal px-1'>
            {data.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
