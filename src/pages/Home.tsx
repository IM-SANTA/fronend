import { NavLink } from 'react-router-dom';
import home from '../assets/home.svg';
import logo from '../assets/logo.svg';
import movie from '../assets/movie.svg';
import music from '../assets/music.svg';
import kitchen from '../assets/kitchen.svg';
import outdoor from '../assets/outdoor.svg';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative flex justify-center items-center">
        <img src={home} alt="home" />
        <section className="absolute top-10">
          <img src={logo} alt="logo" />
        </section>
        <section className="absolute grid grid-cols-2 gap-y-7 gap-x-5 w-4/5 pt-4">
          <NavLink to="/movies">
            <img src={movie} alt="movie" />
          </NavLink>
          <NavLink to="/musics">
            <img src={music} alt="music" />
          </NavLink>
          <NavLink to="/kitchen">
            <img src={kitchen} alt="kitchen" />
          </NavLink>
          <NavLink to="/outdoor">
            <img src={outdoor} alt="outdoor" />
          </NavLink>
        </section>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative flex justify-center items-center h-screen">
//         <img src={home} alt="home" className="h-full object-contain" />
//         {/* <div className="flex flex-col items-center"> */}
//         <section className="absolute top-8">
//           <img src={logo} alt="logo" />
//         </section>
//         <section className="absolute grid grid-cols-2 gap-y-7 gap-x-5 w-4/5 pt-4">
//           <NavLink to="/movies">
//             <img src={movie} alt="movie" />
//           </NavLink>
//           <NavLink to="/musics">
//             <img src={music} alt="music" />
//           </NavLink>
//           <NavLink to="/kitchen">
//             <img src={kitchen} alt="kitchen" />
//           </NavLink>
//           <NavLink to="/outdoor">
//             <img src={outdoor} alt="outdoor" />
//           </NavLink>
//         </section>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default Home;
