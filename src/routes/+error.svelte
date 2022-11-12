<script>

    import { error } from "@sveltejs/kit";

</script>
    <h1>{status}: {error.message}</h1>
    <pre>{error.stack}</pre>

