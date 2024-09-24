import Banner from "../components/Banner";
import BookSection from "../components/BookSection";

import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className=" bg-[#FECD66]">
        <Navbar></Navbar>
        <Banner></Banner>
        <BookSection></BookSection>
    </div>
  )
}
