import type { APIRoute } from 'astro';

interface Device {
  name: string;
  battery: string;
  connection: string;
  charging: string;
  time: number;
}

interface LastMessage {
  apple: Device[];
}

const config = {
  api_pw: 'Flint1UndauntedElevate'
};

let lastmessage: LastMessage = {
  apple: []
};

const pushWebsockets = (data: LastMessage) => {
  // Implement your websocket push logic here
};

// Mark this endpoint as server-rendered
export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  console.log('Full URL:', url.toString());
  console.log('Pathname:', url.pathname);
  console.log('Search params:', url.searchParams.toString());
  
  const entries = url.searchParams;
  console.log('All parameters:', Object.fromEntries(entries));
  
  const receivedPassword = entries.get("password");
  const percentage = entries.get("percentage");
  const name = entries.get("name");
  
  console.log({
    receivedPassword
  });

  if (url.pathname === "/api/battery") {
    console.log('Received parameters:', Array.from(entries.entries())); // Log all received parameters
    console.log('Received password:', receivedPassword);
    console.log('Expected password:', config.api_pw);

    if (receivedPassword === config.api_pw) {
      // If we have percentage and name, update or add the device
      if (percentage && name) {
        let device = lastmessage.apple.find(device => device.name === name);
        if (!device) {
          // Add new device if not found
          device = {
            name: name,
            battery: percentage,
            connection: entries.get("connection") || "WiFi",
            charging: entries.get("charging") || "false",
            time: new Date().getTime()
          };
          lastmessage.apple.push(device);
        } else {
          // Update existing device
          device.battery = percentage;
          device.connection = entries.get("connection") || device.connection;
          device.charging = entries.get("charging") || device.charging;
          device.time = new Date().getTime();
        }
        console.log('Updated device information:', device);
      }

      // Return the current state of devices
      return new Response(JSON.stringify({ apple: lastmessage.apple }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  return new Response(JSON.stringify({ error: 'Not Found' }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const POST: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  console.log('POST request received:', url.pathname); // Log the request path
  if (url.pathname === "/api/battery") {
    const entries = new URLSearchParams(await request.text());
    console.log('Received parameters:', Array.from(entries.entries())); // Log all received parameters
    const receivedPassword = entries.get("password");
    console.log('Received password:', receivedPassword);
    console.log('Expected password:', config.api_pw);

    if (receivedPassword === config.api_pw) {
      let device = lastmessage.apple.find(device => device.name === entries.get("name"));
      if (!device) {
        // Add new device if not found
        device = {
          name: entries.get("name") || "",
          battery: entries.get("percentage") || "0",
          connection: entries.get("connection") || "",
          charging: entries.get("charging") || "false",
          time: new Date().getTime()
        };
        lastmessage.apple.push(device);
      } else {
        // Update existing device
        device.battery = entries.get("percentage") || device.battery;
        device.connection = entries.get("connection") || device.connection;
        device.charging = entries.get("charging") || device.charging;
        device.time = new Date().getTime();
      }
      pushWebsockets({ apple: lastmessage.apple });
      
      // Log the updated device information to the console
      console.log('Updated device information:', device);
      
      return new Response("OK", { statusText: "OK", status: 200 });
    }
    return new Response("Unauthorized", { statusText: "Unauthorized", status: 401 });
  }
  return new Response("Not Found", { statusText: "Not Found", status: 404 });
};
