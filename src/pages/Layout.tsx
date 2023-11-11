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
      <div {...props} className={`${styles} ${position} flex justify-center items-start min-h-screen h-screen`}>
        {/* <div {...props} className="flex justify-center web:items-start md:items-center min-h-screen h-screen"> */}
        <main
          className={` bg-secondary overflow-scroll scrollbar-hide w-[540px] h-[1024px] md:min-w-[540px] md:min-h-[1024px]`}
        >
          {/* <main className="bg-secondary overflow-scroll scrollbar-hide w-[540px] h-[1024px] md:min-w-[540px] md:min-h-[1024px]"> */}
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
