<script lang="ts">

    const cBase = 'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
    const cRow = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-2 md:space-y-0';

</script>

<div class="page-footer {cBase}">
    <div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10">
        <section class={cRow}>
            <div class="flex space-x-4">
                <a class="btn variant-soft" href="#=/" target="_blank"
                   rel="noreferrer">
                    <i class="fa-brands fa-github"></i>
                    <span class="hidden md:inline-block ml-2">Github</span>
                </a>
                <a class="btn variant-soft" href="/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-discord"></i>
                    <span class="hidden md:inline-block ml-2">Discord</span>
                </a>
                <a class="btn variant-soft" href="/" target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-twitter"></i>
                    <span class="hidden md:inline-block ml-2">Twitter</span>
                </a>
                <a class="btn variant-soft" href="/" target="_blank"
                   rel="noreferrer">
                    <i class="fa-brands fa-youtube"></i>
                    <span class="hidden md:inline-block ml-2">YouTube</span>
                </a>
            </div>
        </section>
    </div>
</div>