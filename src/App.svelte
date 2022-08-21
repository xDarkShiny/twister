<script>
  import Navbar from "./lib/navbar.svelte";
  import Carousel from 'svelte-carousel'
  import { Router, Link, Route } from "svelte-navigator";
  import { onMount } from "svelte";

let data

	fetch("https://api.themoviedb.org/3/movie/popular?api_key=ff086a2da1088f0f20d56034f93d6ab0&language=tr-TR&page=1")
		.then(response => { 
		   console.log(' response', response)
		   console.log(' r.json() >', response.clone().json()) //
		   response.json()
			   .then(json => {
						console.log('json', json)
				    data = json				   
		     })
		     .catch(error => console.log(error))
	});




    var w = window.innerWidth;
    let ekran = [];
    if (w > 321) {
        ekran = 2;
    } if (w < 640) {
        ekran = 3;
    } if (w > 1024) {
        ekran = 4;
    } 
    if (w > 1280) {
        ekran = 5;
    }  
    if (w > 1536) {
        ekran = 9;
    }   
     else {
        ekran = 2;
    }

    

    

    

    let carousel;
    function goToNextPage() {
      carousel.goToNext({ animated: true })
    }
    function goToPrevPage() {
      carousel.goToPrev({ animated: true })
    }
    function page () {
      return carousel.pagesCount
    }
    
</script>
<style>
  .text-font {
      font-family: 'Inter', sans-serif;
  }
</style>
<body class="bg-black">

<Navbar />



{#if data}
<Carousel
bind:this={carousel}
arrows={false}
autoplay={true}
dots={false}
autoplayDuration={9000}

autoplayProgressVisible
>
    {#each data.results as datas }
    <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <div style="background-image: url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/{datas.backdrop_path})" class="bg-cover bg-center h-[50rem] bg-black"></div>
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="absolute z-40 flex flex-col space-y-5 top-0 left-0  mt-32 2xl:ml-32 px-6 py-4">
        <img class="sm:w-56 relative w-52 rounded-[6.5px]" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/{datas.poster_path}"  alt="">
        <div class="flex absolute ml-2 sm:top-72 top-64 flex-wrap gap-2"><div class="text-md items-center flex space-x-2 bg-black bg-opacity-70 py-1 px-2 rounded-[6.5px] text-yellow-500 text-font"><i class="text-md fa-solid fa-star"></i> <h1>{datas.vote_average}</h1></div><div class="text-md  flex items-center space-x-2 bg-black bg-opacity-60 py-1 px-2 rounded-[6.5px] text-white/50 text-font text-font"> <i class="fa-solid fa-timer"></i> <h1>{datas.release_date}</h1></div></div>
         <h1 class="text-font font-extrabold text-white text-4xl">{datas.title}</h1>
         <h1 class="text-font lg:w-[60rem] w-[15rem] text-white text-sm text-ellipsis overflow-hidden truncate sm:text-lg">{datas.overview}</h1>
         <div class="flex gap-3">
           <button class="px-10 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-[6.5px] text-4xl text-font text-white"><i class=" fa-duotone fa-circle-play"></i></button>
           <button class="px-10 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-[6.5px] text-3xl text-font text-white"><i class="fa-duotone fa-rectangle-history"></i></button>
         </div>
      </div>
      </div>
    {/each}
  </Carousel>

 {:else}
    <p>
      Loading...
    </p>
{/if}
     
   


 
 
<div class="absolute flex gap-3 2xl:top-[44rem] xl:top-[44rem] lg:top-[44rem] md:top-[44rem] top-[46rem] right-5">
  <button class="px-3 py-2 backdrop-blur-sm rounded-[6.5px] bg-black/50 text-white" on:click={goToPrevPage}><i class="text-2xl fa-solid fa-chevron-left"></i></button>
  <button class="px-3 py-2 backdrop-blur-sm rounded-[6.5px] bg-black/50 text-white" on:click={goToNextPage}><i class="text-2xl fa-solid fa-chevron-right"></i></button>

</div>


<div class="flex flex-col gap-2 min-h-screen items-start justify-start  bg-[#1B1B1B]">
  <h1 class="text-white mt-20 text-4xl 2xl:ml-32 ml-3 text-font font-bold text-font">Şuanda Trend Olan</h1>
  {#if data}
  <div class="flex 2xl:ml-20 h-auto w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] 2xl:w-[110rem] ">
      <Carousel 
      particlesToShow={ekran} 
      particlesToScroll={1} 
      arrows={true} 
      dots={false}
      autoplay={true}>
          {#each data.results as datas}
          <div class="flex gap-2 flex-col items-center">
            <img class="px-2 rounded-xl " src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/{datas.poster_path}" width="500" height="500" alt="">
            <h1 class="text-font font-normal text-white/70 text-sm">{datas.title}</h1>

          </div>
          {/each}
      </Carousel>
  </div>
  {:else}
    <p>
      Loading...
    </p>
  {/if}
  <h1 class="text-white mt-20 text-4xl 2xl:ml-32 ml-3 text-font font-bold text-font">Yükselen</h1>
  {#if data}
  <div class="flex 2xl:ml-20 h-auto w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] 2xl:w-[110rem] ">
      <Carousel 
      particlesToShow={ekran} 
      particlesToScroll={1} 
      arrows={true} 
      dots={false}
      autoplay={true}>
          {#each data.results as datas}
          <div class="flex gap-2 flex-col items-center">
            <img class="px-2 rounded-xl " src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/{datas.poster_path}" width="500" height="500" alt="">
            <h1 class="text-font font-normal text-white/70 text-sm">{datas.title}</h1>

          </div>
          {/each}
      </Carousel>
  </div>
  {:else}
    <p>
      Loading...
    </p>
  {/if}
  <h1 class="text-white mt-20 text-4xl 2xl:ml-32 ml-3 text-font font-bold text-font">Şuanda Trend Olan</h1>
  {#if data}
  <div class="flex 2xl:ml-20 h-auto w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] 2xl:w-[110rem] ">
      <Carousel 
      particlesToShow={ekran} 
      particlesToScroll={1} 
      arrows={true} 
      dots={false}
      autoplay={true}>
          {#each data.results as datas}
          <div class="flex gap-2 flex-col items-center">
            <img class="px-2 rounded-xl " src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/{datas.poster_path}" width="500" height="500" alt="">
            <h1 class="text-font font-normal text-white/70 text-sm">{datas.title}</h1>

          </div>
          {/each}
      </Carousel>
  </div>
  {:else}
    <p>
      Loading...
    </p>
  {/if}
</div>


</body>
