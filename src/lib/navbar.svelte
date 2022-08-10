<script>
  import Client from 'discord-oauth2-api';
  import { Router, Link, Route } from "svelte-navigator";
  import login from "../login.svelte";
</script>

<style>
    .text-font {
        font-family: 'Inter', sans-serif;
    }
</style>
<Router>
        <div class="w-full  left-0 top-0 z-40 fixed px-5 py-3 bg-gradient-to-b">
                    <div class="flex items-center justify-between">
                    <div class="flex gap-2 items-center">
                        <img class="h-8" src="https://media.discordapp.net/attachments/938854772570718238/985242585679413248/f3fcad5b273b3a1bf44f06db104b3109.png" alt="">
                        <div class="sm:block hidden">
                        <div class="w-full backdrop-blur-sm bg-black/10 rounded-[6.5px] px-5 py-3  items-center justify-center ">
                            <div class="flex  gap-5">
                                <div class="text-font  flex-col font-bold">
                                    <a href="aaga" class="text-font  text-lg text-white hover:text-cyan-500 outline-none focus:outline-none  ease-linear transition-all duration-150 font-light">
                                        Anasayfa
                                    </a>
                                </div>
                                <div class="text-font flex-col font-bold">
                                    <a href="aaga" class="text-font text-lg text-white ml-1  hover:text-cyan-500 outline-none focus:outline-none  ease-linear transition-all duration-150 font-light">
                                        Trendler
                                    </a>
                                </div>
                                <div class="text-font items-center flex-col font-bold">
                                    <a href="aaga" class="text-font text-lg text-white ml-2 hover:text-cyan-500 outline-none focus:outline-none  ease-linear transition-all duration-150 font-light">
                                        Keşfet
                                    </a>
                                </div>
                            </div>  
                        </div>  
                    </div>                
                </div> 
                    <Link to="login" class="bg-cyan-500 text-style hover:bg-cyan-700 text-white font-bold uppercase text-sm md:px-6 md:py-3 px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Oturum Aç 
                    </Link>
                    </div> 
            </div>
</Router>      
   
