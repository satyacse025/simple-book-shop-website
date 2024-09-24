import React, { useState, useEffect } from 'react';
import BookCard from "./BookCard";


export default function BookSection() {
  const [books, setData] = useState([]);
  const getData = () => {
    fetch('book.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="w-full bg-[#F2E9E0]">
      <div className='lg:w-5/6 mx-auto'>
        <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-3xl mb-6">Available Books</h2>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-5 mr-5">

          {books?.map((book) => (
            <BookCard key={books.bookId} book={book} />
          ))}
        </section>

      </div>
    </div>
  )
}
