<script>
    import { goto } from '$app/navigation';
    import { LayoutDashboardIcon } from 'lucide-svelte';
    import { Pill } from 'lucide-svelte';
    import { Container } from 'lucide-svelte';
    import { BadgeIndianRupee } from 'lucide-svelte';
    import { PackageOpen } from 'lucide-svelte';
    import { UserRound }  from 'lucide-svelte'; 
    function handleSignIn() {
        goto("/signin");
    }
</script>

<div class="flex flex-col items-center py-5 bg-[#265166] text-white w-[203px] h-screen rounded-br-xl shadow-lg shadow-foreground">
    <ul class="flex flex-col items-center pt-16 space-y-5">
        <li class="text-xl font-semibold p-5 hover:underline"><a href="/dashboard" class="flex items-center space-x-1"><LayoutDashboardIcon /><span>Dashboard</span></a></li>
        <li class="text-xl font-semibold p-5"><a href="/medicine" class="flex items-center space-x-1"><Pill /><span>Medicine</span></a></li>
        <li class="text-xl font-semibold p-5"><a href="/supplier" class="flex items-center space-x-1"><Container /><span>Supplier</span></a></li>
        <li class="text-xl font-semibold p-5"><a href="/sales" class="flex items-center space-x-1"><BadgeIndianRupee /><span>Sales</span></a></li>
        <li class="text-xl font-semibold p-5"><a href="/inventory" class="flex items-center space-x-1"><PackageOpen /><span>Inventory</span></a></li>
        <li class="text-xl font-semibold p-5"><a href="/customer" class="flex items-center space-x-1"><UserRound /><span>Customer</span></a></li>
        <div class="text-xl font-semibold p-5">
            <button>Sign In</button>
        </div>
    </ul>
</div>