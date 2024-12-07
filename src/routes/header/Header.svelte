<script>
//	import logo from '/src/images/logo.png';
	import logo from "$lib/images/Logo.png";
	import Evenements from "$lib/title/Évènements.png";
	import Scoreboard from "$lib/title/Scoreboard.png";
</script>

<div id="top-of-screen-with-name">
	<!--<h1>7x Toy Story</h1>-->

	<a href="/">
		<img class="href-image" id="href-evenements" src={Evenements} alt="evenements"/>
	</a>
	<img id="logo-img" src={logo} alt="logo"/>
	<a href="/scoreboard">
		<img class="href-image" id="href-scoreboard" src={Scoreboard} alt="scoreboard"/>
	</a>

	<!--<img id="logo-img" src={logo} alt="logo"/>-->
</div>
<div id="header">
	<nav>
		<ul>
			<li>
				<a href="/">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
				</a>
			</li>
			<li>
				<a href="/scoreboard">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80H280Zm0-408v-152h-80v40q0 38 22 68.5t58 43.5Zm200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35Zm200-128q36-13 58-43.5t22-68.5v-40h-80v152Zm-200-52Z"/></svg>
				</a>
			</li>
		</ul>
	</nav>
</div>

<style>
		nav {
				background-color: #96C2EB;
				box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
				color: var(--color-white);
				padding: 10px;
		}

		nav ul {
				display: flex;
				justify-content: space-around;
				list-style: none;
		}

		nav a {
				color: var(--color-white);
				text-decoration: none;
		}

		nav a:hover {
				text-decoration: underline;
		}

		h1 {
			text-align: center;
			font-weight: bold;
			font-size: 2rem;
		}

		#header{
			z-index: 100;
		}
		@media (max-width: 768px) {
			#header {
				position: fixed;
				bottom: 0;
				width: 100%;
			}

			.href-image {
				display: none;
			}
		}
		@media (min-width: 769px) {
			#header {
				display: none;
			}

			ul{
				display: flex;
				justify-content: space-around;
				list-style: none;
				flex-direction: column;
			}
			li{
				padding: 1rem;
			}

			nav {
				border-radius: 8px;
				margin: 10px;
			}
		}

		#top-of-screen-with-name {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			background-color: #96C2EB;
			width: 100%;
			padding: 10px;
			box-shadow: 0 0 20px 0 rgba(0,0,0,0.8);
			/*mask: radial-gradient(50% 30px at bottom,transparent 99%,black 99%);*/
		}
		#logo-img {
			height: 70px;
		}
		.href-image {
			height: 50px;
			object-fit: contain;
			padding: 10px;

		}
		.href-image:hover {
			transform: scale(1.1);
		}


		/*#logo-img {
			width: 50px;
			height: 50px;
		}
*/
</style>