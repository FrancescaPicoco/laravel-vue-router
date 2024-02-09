<script>
import AppCard from "../AppCard.vue"

export default{
    components: {
        AppCard
    },
}
</script>

<template>
    <main>        
        <section>
            <div class="container">
		       <div class="row">
			     <div class="col-12">
				   <h1 class="text-center fw-bold">Eventi</h1>
			     </div>
		        </div>
                <AppCard />
            </div>          
        </section>
    </main>
</template>

<style scoped>
</style>