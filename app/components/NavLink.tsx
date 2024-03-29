import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, children }) => {
  return (
    <Link href={href}>
      <div className={`text-[#5c5c5c]  cursor-pointer p-2 rounded-md ${active ? 'font-bold text-black' : ''}`}>
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
