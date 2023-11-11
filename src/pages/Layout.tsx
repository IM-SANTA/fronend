interface LayoutProps {
  position?: string;
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ position = 'static', children, ...props }: LayoutProps) => {
  const { className } = props;
  const styles = className ? className : '';

  return (
    <>
      <div
        {...props}
        className={`${styles} ${position} flex justify-center min-h-screen h-screen items-start sm:items-center`}
      >
        <main
          className={` bg-secondary overflow-scroll scrollbar-hide w-[540px] h-[1024px] md:min-w-[540px] md:min-h-[1024px]`}
        >
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
