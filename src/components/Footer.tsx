export function Footer() {
  return (
    <footer className="py-8 bg-zinc-100 dark:bg-zinc-800 text-center text-zinc-600 dark:text-zinc-400">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Siddharth Chouhan. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and Framer Motion</p>
      </div>
    </footer>
  );
}
