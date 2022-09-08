import Animeslist from "./Animeslist";
import useFetch from "./useFetch";

const Home =()=>{


    //  step 

   let{ data:animes, pending}= useFetch("https://api.jikan.moe/v4/anime");

    return(
        <div>

         {/* from top anime pending access  */}

         {/* <h1> loading .........</h1> */}
          {pending  && <div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}

          {
            animes  && <Animeslist animes ={animes}/>
          }


        </div>
    )
}
export default Home;