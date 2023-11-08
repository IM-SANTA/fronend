// import { Outlet } from 'react-router-dom';

interface LayoutProps {
  // title: string;
  className?: string;
  children: React.ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div {...props} className="flex flex-col min-h-screen justify-between">
      {/* <header className="max-w-md mx-auto w-full"> {title}</header> */}
      <main className="bg-secondary max-w-md mx-auto w-full flex-1">{children}</main>
      {/* 여기에 필요하다면 footer를 추가할 수 있습니다. */}
    </div>
  );
};

export default Layout;
