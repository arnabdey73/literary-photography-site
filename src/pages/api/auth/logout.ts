export async function POST({ cookies }: { cookies: any }) {
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
