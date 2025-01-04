import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const sections = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Experience', route: '/experience' },
    { name: 'Skills', route: '/skills' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' },
  ];

  return (
    <nav className="py-4 sm:px-8 md:px-12 px-6 text-lg fixed top-0 w-full glass z-50">
      <ul className="flex justify-between items-center">
        <div className="flex space-x-4">
          {sections.map((section) => (
            <Link key={section.name} href={section.route}>
              <motion.div
                className={`relative cursor-pointer tracking-widest font-bold px-4 py-2 ${pathname === section.route ? 'text-[#BFFF00]' : 'text-white'}`}
                whileHover={{ scale: 1.1 }}
              >
                {section.name}
                {pathname === section.route && (
                  <motion.span
                    className="absolute left-0 right-0 bottom-0 h-1 bg-[#BFFF00]"
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