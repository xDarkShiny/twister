<script>
  import Navbar from "./lib/navbar.svelte";
  import data from "./data.json";
  import Carousel from 'svelte-carousel'
 

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
    <div class="absolute z-40 flex flex-col top-0 left-0 mt-52 2xl:ml-32 px-6 py-4">
      <img class="" src={smallImage} width={width} height="" alt="">
       <h1 class="text-font">{season}</h1>
    </div>
    </div>
  {/each}
  

</Carousel>
<div class="absolute flex gap-3 2xl:top-[54rem] xl:top-[44rem] lg:top-[44rem] md:top-[44rem] top-[44rem] right-5">
  <button class="px-3 py-2 backdrop-blur-sm rounded-[6.5px] bg-black/50 text-white" on:click={goToPrevPage}><i class="text-2xl fa-solid fa-chevron-left"></i></button>
  <button class="px-3 py-2 backdrop-blur-sm rounded-[6.5px] bg-black/50 text-white" on:click={goToNextPage}><i class="text-2xl fa-solid fa-chevron-right"></i></button>

</div>

</body>
