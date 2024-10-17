<script>
    import { goto } from '$app/navigation'; // To programmatically navigate
  
    let orders = [
      {
        orderId: 'ORD001',
        orderDate: '2024-10-16',
        deliveryDate: '2024-10-18',
        orderStatus: 'Shipped',
      },
      {
        orderId: 'ORD002',
        orderDate: '2024-10-17',
        deliveryDate: 'N/A',
        orderStatus: 'Pending',
      },
      // Add more orders as needed
    ];
  
    // Function to navigate to order detail page
    function viewOrderDetails(orderId) {
      goto(`/orders/${orderId}`);
    }
  </script>
  
  <div class="container mx-auto mt-8">
    <h1 class="text-2xl font-semibold text-center mb-6">Orders</h1>
  
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each orders as order}
        <div 
        role="button"
        tabindex="0"
          class="bg-white p-6 rounded-lg shadow-md border cursor-pointer hover:shadow-lg transition"
          on:click={() => viewOrderDetails(order.orderId)}
          on:keydown={(e)=> {if (e.key == 'Enter' || e.key == ' ') viewOrderDetails(order.orderId);}}
        >
          <h2 class="text-xl font-bold mb-2">Order ID: {order.orderId}</h2>
  
          <p class="text-gray-600 mb-1"><strong>Order Date:</strong> {order.orderDate}</p>
          <p class="text-gray-600 mb-1"><strong>Delivery Date:</strong> {order.deliveryDate}</p>
  
          <div class="mt-4">
            <span class={`px-4 py-1 rounded-full text-sm 
                ${order.orderStatus === 'Shipped' ? 'bg-green-100 text-green-600' : 
                  order.orderStatus === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 
                  'bg-gray-100 text-gray-600'}`}>
              {order.orderStatus}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  