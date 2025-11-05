// Netlify Identity redirect handler
// This script handles authentication flows (login, signup, invite acceptance, password recovery)

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      // Redirect to admin after login
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });

      // Redirect to admin after signup/invitation completion
      window.netlifyIdentity.on("signup", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
