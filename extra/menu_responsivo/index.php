<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/font-awesome.min.css" />
<style type="text/css">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Helvetica";
	}

	.container{
		max-width: 1280px;
		padding:0 2%;
		margin: 0 auto;
	}

	.clear{clear: both;}

	.logo{
		color: white;
		float: left;
	}

	header{
		padding: 10px 0;
		background: #1976d2;
	}

	nav.menu-desktop{
		float: right;
	}

	nav.menu-desktop > ul{
		position: relative;
		top: 4px;
		list-style-type: none;
	}

	nav.menu-desktop > ul > li{
		position: relative;
		display: inline-block;
		font-size: 16px;
		margin:0 15px;
	}
	nav.menu-desktop > ul > li:hover > ul.submenu-desktop{
		display: block;
	}
	nav.menu-desktop a{
		text-decoration: none;
		color: white;
	}

	ul.submenu-desktop{
		list-style-type: none;
		display: none;
		position: absolute;
		right: 0;
		top: 20px;
		width: 300px;
		padding: 8px 0;
		background: #01579b;
	}

	ul.submenu-desktop li{
		padding:8px;
		border-bottom:1px solid white;
	}

	nav.menu-desktop a:hover{
		text-decoration: underline;
	}

	/*Estilo para o menu mobile*/
	nav.menu-mobile{
		float: right;
		display: none;
	}

	nav.menu-mobile > ul{
		display: none;
		position: absolute;
		left: 0;
		top: 40px;
		border-top:2px solid #ccc;
		background: white;
		width: 100%;
		list-style-type: none;
	}


	nav.menu-mobile > ul > li{
		width: 100%;
		display: inline-block;
		border-bottom: 1px solid black;
		padding:10px 8px;
	}

	ul.submenu-mobile{
		list-style-type: none;
		padding:8px 15px;
	}

	nav.menu-mobile a{
		text-decoration: none;
		color: #01579b;
	}

	nav.menu-mobile > i{
		cursor: pointer;
		font-size: 25px;
		color: white;
	}

	@media screen and (max-width: 768px){
		nav.menu-desktop{display: none;}
		nav.menu-mobile{display: block;}
	}
</style>
<head>
	<title>Menu responsivo</title>
</head>
<body>
	<header>
		<div class="container">
		<div class="logo">
			<h2>Logomarca</h2>
		</div><!--logo-->

		<nav class="menu-desktop">
			<ul>
				<li>
					<a href="">Home</a>
					<ul class="submenu-desktop">
						<li><a href="">Sessão 1</a></li>
						<li><a href="">Sessão 2</a></li>
						<li><a href="">Sessão 3</a></li>
					</ul>
				</li>
				<li>
				<a href="">Sobre</a>
					<ul class="submenu-desktop">
						<li><a href="">Sessão 1</a></li>
						<li><a href="">Sessão 2</a></li>
						<li><a href="">Sessão 3</a></li>
					</ul>
				</li>
				<li>
				<a href="">Contato</a>
					<ul class="submenu-desktop">
						<li><a href="">Sessão 1</a></li>
						<li><a href="">Sessão 2</a></li>
						<li><a href="">Sessão 3</a></li>
					</ul>
				</li>
			</ul>
		</nav>
		<nav class="menu-mobile">
		<i class="fa fa-bars"></i>
			<ul>
				<li>
					<a href="">Home</a>
					<ul class="submenu-mobile">
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 1</a></li>
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 2</a></li>
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 3</a></li>
					</ul>
				</li>
				<li>
					<a href="">Sobre</a>
					<ul class="submenu-mobile">
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 1</a></li>
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 2</a></li>
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 3</a></li>
					</ul>
				</li>
				<li>
					<a href="">Contato</a>
					<ul class="submenu-mobile">
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 1</a></li>
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 2</a></li>
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="">Sessão 3</a></li>
					</ul>
				</li>
			</ul>
		</nav>
		<div class="clear"></div>
		</div>
	</header>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
	$('nav.menu-mobile > i').click(function(){
		$(this).parent().find('ul:not(.submenu-mobile)').slideToggle();
	})
</script>
</body>

</html>