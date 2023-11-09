// import { Outlet } from 'react-router-dom';

interface LayoutProps {
  // title: string;
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div {...props} className="flex justify-center items-center min-h-screen h-screen">
      <main className="bg-secondary overflow-scroll w-[540px] h-[1024px] min-w-[540px] min-h-[1024px]">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
