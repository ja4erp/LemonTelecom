# Configuración
1. Cambia el correo y difentes opiones en `paypal_ipn.ts`
2. Recuerda inicar el servidor de back es el archivo PayPal_express.cjs asi que usa `node PayPal_express.cjs`

# Uso en codigo
```
<html>
<head>
  <title>Página de Pago</title>
</head>
<body>
  <button id="pay-button">Pagar 0.01 centimos</button>

  <script>
	import { PayPal_IPN_pay } from "./api/paypal_ipn";

    const button = document.getElementById('pay-button');
    if (button) {
      button.addEventListener('click', async () => {
        const total = 0.01;
        const products = [{ name: 'Producto' }];
        const orderId = 'ID del pedido'; // Deberías generar un ID de pedido único aquí

        const paypalUrl = await PayPal_IPN_pay(total, products, orderId);
        if (typeof paypalUrl === 'string') {
          window.location.href = paypalUrl;
        }
      });
    }
  </script>
</body>
</html>
```
