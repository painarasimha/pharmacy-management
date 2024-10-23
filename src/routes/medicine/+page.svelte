<script>
  let medicines = [
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Pain reliever and fever reducer.',
      price: 3.99,
      stock_qty: 100,
      expiry_date: '2024-12-31',
    },
    {
      id: 2,
      name: 'Ibuprofen',
      description: 'Anti-inflammatory and pain reliever.',
      price: 5.49,
      stock_qty: 50,
      expiry_date: '2023-08-15',
    },
  ]
</script>

<main class="container mx-auto p-10">
  <h1 class="text-2xl font-bold mb-4">Medicine Inventory</h1>

  <table class="min-w-full table-auto bg-background shadow-md rounded-lg">
    <thead>
      <tr class="bg-[#524A4A] text-foreground uppercase text-sm leading-normal">
        <th class="py-3 px-6 text-left">Med ID</th>
        <th class="py-3 px-6 text-left">Name</th>
        <th class="py-3 px-6 text-left">Description</th>
        <th class="py-3 px-6 text-left">Price ($)</th>
        <th class="py-3 px-6 text-left">Stock Quantity</th>
        <th class="py-3 px-6 text-left">Expiry Date</th>
      </tr>
    </thead>
    <tbody class="text-foreground text-sm font-light">
      {#each medicines as medicine}
        <tr class="border-b border-white hover:bg-gray-600">
          <td class="py-3 px-6">{medicine.id}</td>
          <td class="py-3 px-6">{medicine.name}</td>
          <td class="py-3 px-6">{medicine.description}</td>
          <td class="py-3 px-6">${medicine.price.toFixed(2)}</td>
          <td class="py-3 px-6">{medicine.stock_qty}</td>
          <td class="py-3 px-6">{medicine.expiry_date}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>