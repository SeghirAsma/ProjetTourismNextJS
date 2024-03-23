'use client'
import '../StylesCss/team.css';
import axios from 'axios';
import React , {useState, useEffect} from "react";
import ReactPaginate from 'react-paginate';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation'

export default function Team() {
    const navigation = [
        { name: 'Home', href: '/content' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Our Partners', href: '/team' },
      ]

      const [users, setUsers] = useState([]);
      const [pageNumber, setPageNumber] = useState(0);
      const usersPerPage = 8;
      const pagesVisited = pageNumber * usersPerPage;
      const [spoken, setSpoken] = useState(false);
      const router = useRouter();


      const handleSignIn = () => {
        router.push('/signin'); 
      };

       // get all approved user 
       useEffect(() => {
        const getAllUsers = async () => {
          try {
            const response = await axios.get('http://localhost:8099/api/users/approved');
            const usersWithCreatorRole = response.data.filter(user => user.role === 'createur' || user.role === 'agence');
            const sortedUsers = usersWithCreatorRole.sort((a, b) => {
                if (a.role === 'agence' && b.role === 'createur') {return -1;}
                if (a.role === 'createur' && b.role === 'agence') { return 1; }
                return 0;
            });
            setUsers(sortedUsers);
          } catch (error) {
            console.error('Error fetching unapproved users:', error);
          }
        };
        getAllUsers();
      }, []);

      const pageCount = Math.ceil(users.length / usersPerPage);
      const changePage = ({ selected }) => {
          setPageNumber(selected);
      };

   // animation parag
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.05, ease: 'power1.out' } });
        const words = "Discover the companies and creators who bring you the best travel experiences. From boutique hotels to local guides, our partners are dedicated to providing you with unforgettable adventures around the world.".split(' ');
        words.forEach((word, index) => {
            tl.fromTo(`#word-${index}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, `+=${index * 0.05}`);
        });
        tl.play();
        if (!spoken) {
            playText();
            setSpoken(true);
        }
      }, [spoken]);

    const playText = () => {
      const text = "Discover the companies and creators who bring you the best travel experiences. From boutique hotels to local guides, our partners are dedicated to providing you with unforgettable adventures around the world.";
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    };
   
  
    return (
<div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-12 w-auto"
                  src="/logotou.png"
                  alt=""
                />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
         onClick={handleSignIn}
          className="flex-none rounded-full bg-purple-700 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
          Log In <span aria-hidden="true">&rarr;</span>
        </button>
            </div>
          </nav>
        </header>
  
        
  <div className="relative isolate px-6  lg:px-8">
  
          {/* el zina l al ajneb ml fouk */}
          <div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(80%+3rem)] aspect-[1155/678] w-[90.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        </div>
        {/* Contenu*/}
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl" style={{marginTop:'70px'}}>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" style={{color:'rgb(97, 9, 180)'}}>Meet Our Partners</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {("Discover the companies and creators who bring you the best travel experiences. From boutique hotels to local guides, our partners are dedicated to providing you with unforgettable adventures around the world.".split(' ').map((word, index) => (
                <span key={index} id={`word-${index}`}>{word} </span>
            )))}
        </p>
        
        </div>

        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
          {users.slice(pagesVisited, pagesVisited + usersPerPage)
          .map((user) => (
            <li key={user.id}>
            <div className="flex items-center gap-x-6">
             <div className="card">
                 <div className="card-image">  {user.profileImageUrl && (
                 <img className="card-image" src={`http://localhost:8099/api/users/images/${encodeURIComponent(user.profileImageUrl.split('/').pop())}`} alt="" />
             )}  </div>
                <div className="category">    <h3 >  {user.role}</h3>
                </div>
                <div className="heading"> {user.lastName.toUpperCase()} {user.firstName}
                </div>
            </div> 
         </div>
            </li>
          ))}
           <div className="flex justify-end xl:col-span-4" >
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
        </ul>
    </div>
     
    </div>

          {/* el zina l al ajneb ml louta */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
   

  </div>

             {/* footer*/}
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl text-center">
      <p className="my-1 text-gray-500 dark:text-gray-400">  Explore our collection of travel guides, exciting itineraries, 
      and expert tips to plan your next adventures. </p> 
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-2">
         
          <a href="https://www.facebook.com/"
        className="rounded-full bg-[#3b5998] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512">
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
           </a>

      <a
        href="https://www.twitter.com/"
        type="button"
        className="rounded-full bg-[#55acee] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      </a>

      <a
        href="https://www.gmail.com/"
        type="button"
        className="rounded-full bg-[#dd4b39] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 488 512">
            <path
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </span>
      </a>

      <a
        href="https://www.instagram.com/"
        type="button"
        className="rounded-full bg-[#ac2bac] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      </a>
    </div>
  </div>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 
      © {new Date().getFullYear()}-{new Date().getFullYear() + 1} Tourism_Content™. All Rights Reserved.</span>
  </div>
    </footer>

</div>
      
    )
  }
  
