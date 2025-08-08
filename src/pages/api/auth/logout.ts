export async function POST({ cookies, redirect }) {
  // Clear the authentication cookie
  cookies.delete('insights-auth', {
    path: '/'
  });
  
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
