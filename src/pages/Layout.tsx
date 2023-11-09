interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <div {...props} className="flex justify-center md:items-center min-h-screen h-screen">
        <main className="bg-secondary overflow-scroll w-[540px] h-[1024px] md:min-w-[540px] md:min-h-[1024px]">
          <div>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
