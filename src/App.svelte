<script>
  import Navbar from "./lib/navbar.svelte";
  import data from "./data.json";
  import Carousel from 'svelte-carousel'
  import Client from 'discord-oauth2-api';
  import { Router, Link, Route } from "svelte-navigator";
const client = new Client({
    clientID: '1006576126925230090',
    clientSecret: 'vhD2QgeIDdsGBGKzQ7ZUsPsaiGgfJNX6',
    scopes: ['identify', 'guilds'],
    redirectURI: 'http://127.0.0.1:5173'
});
 


client.getUser('OwxOnwxbAMzsa8ZE9ugYQk5feIJL6K').then(user => console.log(user.tag));

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

  <Carousel
  bind:this={carousel}
  arrows={false}
  autoplay={true}
  dots={false}
  autoplayDuration={9000}
  let:currentPageIndex
  let:pagesCount
  let:showPage
  autoplayProgressVisible
  pauseOnFocus
>


 
  {#each data as { largeImage, smallImage, season, description, name, puan, width, height}}
  <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
    <div style="background-image: url({largeImage})" class="bg-cover min-h-screen bg-black"></div>
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="absolute z-40 flex flex-col space-y-5 top-0 left-0 2xl:mt-52 mt-32 2xl:ml-32 px-6 py-4">
      <img class="" src={smallImage} width={width} height="" alt="">
       <div class="flex  gap-2"><h1 class="text-lg bg-cyan-500 py-1 px-4 rounded-[6.5px] text-white text-font">{season}</h1><h1 class="text-lg bg-yellow-600 py-1 px-4 rounded-[6.5px] text-white text-font text-font">{puan}</h1></div>
       <h1 class="text-font font-extrabold text-white text-4xl">{name}</h1>
       <p class="text-font lg:w-[60rem] w-auto font-light text-white">{description}</p>
       <div class="flex gap-3">
         <button class="px-10 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-[6.5px] text-4xl text-font text-white"><i class=" fa-duotone fa-circle-play"></i></button>
         <button class="px-10 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-[6.5px] text-3xl text-font text-white"><i class="fa-duotone fa-rectangle-history"></i></button>
       </div>
    </div>
    </div>
  {/each}
  

</Carousel>
<div class="absolute flex gap-3 2xl:top-[54rem] xl:top-[44rem] lg:top-[44rem] md:top-[44rem] top-[44rem] right-5">
  <button class="px-3 py-2 backdrop-blur-sm rounded-[6.5px] bg-black/50 text-white" on:click={goToPrevPage}><i class="text-2xl fa-solid fa-chevron-left"></i></button>
  <button class="px-3 py-2 backdrop-blur-sm rounded-[6.5px] bg-black/50 text-white" on:click={goToNextPage}><i class="text-2xl fa-solid fa-chevron-right"></i></button>

</div>

</body>
