<script>
import AppEventList from "../AppEventList.vue"

export default{
    components: {
        AppEventList
    },
}
</script>

<template>
    <main>
        <section>
            <h1>EVENTI</h1>
            <AppEventList />
        </section>
    </main>
</template>

<style scopet>
main {
    padding: 1rem;
}
</style>