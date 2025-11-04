import Header from "./components/header";
import MobileMenu from "./components/mobile-menu";
import Sidebar from "./components/sidebar";


export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
}