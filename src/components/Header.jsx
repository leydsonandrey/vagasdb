import Logo from '../assets/wwu.svg';

export default function Header() {
  return (
    <header className="border-style-bottom w-full h-20 flex justify-center items-center text-neutral-50">
      <a href="/">
        <img src={Logo} alt='Work With Us logo' className="w-20" />
      </a>
    </header>
  )
}
