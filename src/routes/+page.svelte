<script>
    import toast, {Toaster} from 'svelte-french-toast'

    function handleClick() {
        toast.success('Giriş Yapıldı', {
        style: 'border-radius: 100px ',
   
    });
    }
</script>

<div class="fixed top-0 flex justify-between w-full bg-black/70 items-center text-white px-10 py-3">
    <img class="h-8" src="https://media.discordapp.net/attachments/990760321549467678/1040998589738012723/twisterwhitelogo.webp" alt="">
    <div class="hidden sm:block">
        <div class="flex  font-light text-lg transition-all duration-500 font-inter gap-3">
            <button class="hover:bg-white/20 transition-all duration-500 px-4 py-1 rounded-lg ">Home</button>
            <button class="hover:bg-white/20  transition-all duration-500 px-4 py-1 rounded-lg">Trend</button>
            <button class="hover:bg-white/20 transition-all duration-500 px-4 py-1 rounded-lg">Discovery</button>
        </div>    
    </div>
    <div class="hidden sm:block">
        <div class="flex gap-3">
            <Toaster />
            <button on:click={handleClick} class="px-4 py-2  hover:bg-white/80 transition-all duration-250   bg-white text-black rounded-full font-inter">Login</button>
            <button class="px-4 py-2  hover:bg-white/80 hover:text-black transition-all duration-250 f  ring-2 ring-white/80 text-white/80 rounded-full font-inter">Sing in</button>
        </div>
    </div>
    <Toaster />

    <div class="block sm:hidden"><button on:click={handleClick} class="px-4 py-2  hover:bg-white/80 transition-all duration-250   bg-white text-black rounded-full font-inter">Menu</button>    </div>
</div>
<div class="bg-center h-[44rem]" style="background-image: url(https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWDiELyhKBpQJieCIo7mY7bjVMey1clZkrSk5uJhaSMZ8mZO78eDfkmjuoYr9vVG8ox8eA2DTUUeFHFwnB8ClWszDTreeOWml1s2.jpg?r=fb2)">

</div>
<div class="min-h-screen bg-black/80">

</div>