import { useEffect, useState } from "react";

const Animeslist =({animes} )=>{

    let[wish,setwish]=useState([]);


    useEffect(()=>{

        if(localStorage.getItem("wish")==null  )//if wish array is not present before in the body then u add wish array

        {
            localStorage.setItem("wish","[]");
        }




       
    },[])

    let handlewishlist =(id)=>{
       let x = localStorage.getItem("wish");



       x=JSON.parse(x)

    //    if id is not present

       if(!x.includes(id)){  
        alert("added to wishlist")
        x.push(id);

       x =JSON.stringify(x);

       localStorage.setItem("wish",x)
       console.log(x,typeof x);

       }
       else{
        // let i=x.indexOf(id)
        // x.splice(i,1)
        // x= JSON.stringify(x)
        // localStorage.setItem("wish",x)
        // alert("wishlist already exists")
       }

    }


    return(
        <div className="animes-list d-grid justify-content-center" >
            {
                animes.map((anime)=>{

                    return(
                        <div key={anime.mal_id} classname="anime">
                            <img src={anime.images.jpg.image_url} alt="poster not found" />

                            <h2>Anime : {anime.title}</h2>
                            <h2>Ratings : {anime.score}</h2>
                            <button onClick={()=>{handlewishlist(anime.mal_id)}}>&#10084;</button>
                            
                        </div>
                    )
                })


            }
        </div>
    )

}
export default Animeslist;