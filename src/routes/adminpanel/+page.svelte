<comment>
	IN DEVELOPMENT
</comment>

<svelte:head>
	<title>Admin Panel</title>
	<meta name="description" content="Admin Panel" />
</svelte:head>

<script>
	import { Authentik } from "arctic";
	import { generateState, generateCodeVerifier } from "arctic";
	import { PUBLIC_CLIENT_SECRET } from '$env/static/public';
	import { PUBLIC_CLIENT_ID } from '$env/static/public';

	import { OAuth2RequestError, ArcticFetchError } from "arctic";


	const domain = "auth.inpt.fr";
	const authentik = new Authentik(domain, PUBLIC_CLIENT_ID, PUBLIC_CLIENT_SECRET, "Ton URI de redirection");

	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const scopes = ["openid", "profile"];
	const url = authentik.createAuthorizationURL(state, codeVerifier, scopes);
	console.log("Please go here and authorize:", url.href);

	async function get_token() {
		try {
			const code = new URLSearchParams(window.location.search).get("code");
			const tokens = await authentik.validateAuthorizationCode(code, codeVerifier);
			const accessToken = tokens.accessToken();
			const accessTokenExpiresAt = tokens.accessTokenExpiresAt();
			const refreshToken = tokens.refreshToken();
			console.log(accessToken, accessTokenExpiresAt, refreshToken);
		} catch (e) {
			if (e instanceof OAuth2RequestError) {
				// Invalid authorization code, credentials, or redirect URI
				const code = e.code;
				console.log(code)
				// ...
			}
			if (e instanceof ArcticFetchError) {
				// Failed to call `fetch()`
				const cause = e.cause;
				console.log(cause)

				// ...
			}
			// Parse error
		}
	}



</script>

<div>
	<h1>Admin Panel</h1>
	<button onclick={get_token}>Hello</button>
</div>