import CustomNavbar from "@/components/shared/CustomNavbar";
import Footer from "@/components/shared/Footer";

export function Provider({ children }) {
  return (
    <div style={{overflowX : "hidden"}}>
      <CustomNavbar />
      {children}
      <div className="bg-[#161616]">
        <Footer />
      </div> 
    </div>
  );
}
