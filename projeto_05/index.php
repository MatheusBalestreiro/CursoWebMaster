<!DOCTYPE html>
<html>
<head>
	<title>Projeto 05</title>
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">
</head>
<body>

<header style="border-bottom: 3px solid #EB2D2D;">

	<div class="container">
	<div class="logo">
		<img src="imagens/logo.jpg" />
	</div><!--logo-->

	<nav class="desktop">
		<ul>
			<li><a href="home">Home</a></li>
			<li><a href="venda">Venda</a></li>
			<li><a href="sobre">Sobre</a></li>
			<li><a goto="contato" href="">Contato</a></li>
		</ul>
	</nav><!--desktop-->

	<nav class="mobile">
		<ul>
			<li><a href="home">Home</a></li>
			<li><a href="venda">Venda</a></li>
			<li><a href="sobre">Sobre</a></li>
			<li><a goto="contato" href="">Contato</a></li>
		</ul>
	</nav><!--mobile-->

	<div class="clear"></div>
	</div><!--container-->
</header>
<?php
	if(isset($_GET['url'])){
		if(file_exists($_GET['url']).'.html'){
			include($_GET['url'].'.html');
		}else{
			include('404.html');
		}
	}else{
		include('home.html');
	}
?>


<footer>
	<div class="container">
	<nav>
		<ul>
			<li><a href="home">Home</a></li>
			<li><a href="venda">Venda</a></li>
			<li><a href="sobre">Sobre</a></li>
			<li><a goto="contato" href="">Contato</a></li>
		</ul>
	</nav>
	<p>Todos os direitos reservados</p>
	<div class="clear"></div>
	</div><!--container-->
</footer>
<script src="js/jquery.js"></script>
<script src="js/functions.js"></script>
</body>
</html>