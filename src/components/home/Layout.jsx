function Layout({ children, className }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-white dark:bg-black xl:p-24 lg:p-16 md:p-12 sm:p-8 p-5 ${className}`}
    >
      {children}
    </div>
  );
}
export default Layout;
