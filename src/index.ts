import app from "./app";
import env from "./env";

const port = env.PORT;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(
    `📚 API Documentation available at http://localhost:${port}/docs`
  );
  console.log(
    `🔧 OpenAPI spec available at http://localhost:${port}/docs/openapi.json`
  );
});

// Test your endpoints
console.log("🧪 Test your API:");
console.log(`curl http://localhost:${port}/api/products`);
console.log(`curl http://localhost:${port}/health`);
