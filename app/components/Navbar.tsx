import Link from "next/link";

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="p-4 shadow-md sticky top-0 bg-background z-10">
      <ul className="flex justify-between items-center">
        <li className="text-xl font-bold">
          <Link href="/" className="hover:underline">Dima Leichenko</Link>
        </li>
        <li className="space-x-4">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:underline">Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:underline">About</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:underline">Projects</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
} 