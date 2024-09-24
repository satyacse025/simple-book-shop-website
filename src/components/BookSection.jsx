import BookCard from "./BookCard";

export default function BookSection() {
  return (
    <div className="w-full bg-[#F2E9E0]">
    <div className='lg:w-5/6 mx-auto'>
        <h2 class="text-center text-2xl font-bold tracking-tight text-black sm:text-3xl mb-6">Available Books</h2>
       
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 mr-5">
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        </section>
        
    </div>
    </div>
  )
}
