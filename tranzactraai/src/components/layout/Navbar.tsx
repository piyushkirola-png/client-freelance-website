import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, LogOut, User as UserIcon } from 'lucide-react';
import { navLinks } from '../../lib/navigation';
import { useAuth } from '../../lib/AuthContext';
import Button from '../ui/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setUserMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-ink-200/60 shadow-sm'
          : 'bg-transparent'
          }`}
      >
        <nav className="container-8xl flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/assets/images/logo.png" alt="Tranzactra AI" className="h-14 w-14 rounded-lg" />
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-ink-900' : 'text-ink-900'}`}>
              Tranzactra <span className="text-primary-600">AI</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors rounded-lg"
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-56"
                    >
                      <div className="glass-card rounded-2xl p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-ink-600 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div
                className="relative"
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-ink-700 hover:text-ink-900 rounded-lg transition-colors">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                    {user.email?.[0]?.toUpperCase()}
                  </div>
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 pt-2 w-64"
                    >
                      <div className="glass-card rounded-2xl p-2">
                        <div className="px-4 py-3 border-b border-ink-100">
                          <div className="flex items-center gap-2 text-xs text-ink-500">
                            <UserIcon className="h-3.5 w-3.5" />
                            Signed in as
                          </div>
                          <div className="mt-1 text-sm font-medium text-ink-900 truncate">
                            {user.email}
                          </div>
                        </div>
                        <button
                          onClick={() => signOut()}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-ink-600 hover:text-danger-600 hover:bg-danger-50 rounded-xl transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Button to="/login" variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button to="/signup" variant="primary" size="sm">
                  Get Started
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-ink-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-ink-950/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-20 px-6 pb-8 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.href}
                      className="block py-3 text-base font-medium text-ink-800 hover:text-primary-700"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 border-l-2 border-ink-100 ml-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block py-2 text-sm text-ink-500 hover:text-primary-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6 space-y-3">
                  {user ? (
                    <>
                      <div className="px-4 py-3 rounded-xl bg-ink-50 text-sm text-ink-600">
                        {user.email}
                      </div>
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-ink-200 text-ink-700 hover:text-danger-600 hover:border-danger-300 font-semibold text-sm transition-all"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Button to="/login" variant="outline" size="md" className="w-full">
                        Sign In
                      </Button>
                      <Button to="/signup" variant="primary" size="md" className="w-full">
                        Get Started
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}