import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const sections = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Contact', route: '/contact' },
  ];

  return (
    <nav className="py-4 sm:px-8 md:px-12 px-6 text-md fixed top-0 w-full glass z-50">
      <ul className="flex justify-between items-center">
        <div className="flex space-x-4">
          {sections.map((section) => (
            <Link key={section.name} href={section.route}>
              <motion.div
                className={`relative cursor-pointer tracking-widest font-bold px-4 py-2 ${pathname === section.route ? 'text-[#27c6be80]' : 'text-white'}`}
                whileHover={{ scale: 1.1 }}
              >
                {section.name}
                {pathname === section.route && (
                  <motion.span
                    className="absolute left-0 right-0 bottom-0 h-[0.20rem] bg-[#435055]"
                    layoutId="underline"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;