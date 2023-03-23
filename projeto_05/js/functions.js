$(function(){
	
        /*
          Sistema de pesquisa.
        */

        var currentValue = 0;
        var isDrag = false;
        var preco_maximo = 70000;
        var preco_atual = 0;

        $('.pointer-barra').mousedown(function(){
        	isDrag = true;
        })

        $(document).mouseup(function(){
        	isDrag = false;
        	enableTextSelection();
        })

        $('.barra-preco').mousemove(function(e){
        	if(isDrag){
        		disableTextSelection();
        		var elBase = $(this);
        		var mouseX = e.pageX - elBase.offset().left;
        		if(mouseX < 0)
        			mouseX = 0;
        		if(mouseX > elBase.width())
        			mouseX = elBase.width();

        		$('.pointer-barra').css('left',(mouseX-13)+'px');
        		currentValue = (mouseX / elBase.width()) * 100;
        		$('.barra-preco-fill').css('width',currentValue+'%');

        		//TODO: Ajustar o formato do preço!
        		preco_atual = (currentValue/100) * preco_maximo;
        		preco_atual = formatarPreco(preco_atual);
        		$('.preco_pesquisa').html('R$'+preco_atual);
        	}
        })

        function formatarPreco(preco_atual){
        	preco_atual = preco_atual.toFixed(2);
        	preco_arr = preco_atual.split('.');

        	var novo_preco = formatarTotal(preco_arr);

        	return novo_preco;

        }

        function formatarTotal(preco_arr){

        	if(preco_arr[0] < 1000){
        		return preco_arr[0]+','+preco_arr[1];
        	}else if(preco_arr[0] < 10000){
        		return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+
        		','+preco_arr[1];
        	}else{
        		return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+
        		','+preco_arr[1];
        	}
        
        }

        

        function disableTextSelection(){
	          $("body").css("-webkit-user-select","none");
	          $("body").css("-moz-user-select","none");
	          $("body").css("-ms-user-select","none");
	          $("body").css("-o-user-select","none");
	          $("body").css("user-select","none");
        }

        function enableTextSelection(){
	          $("body").css("-webkit-user-select","auto");
	          $("body").css("-moz-user-select","auto");
	          $("body").css("-ms-user-select","auto");
	          $("body").css("-o-user-select","auto");
	         $("body").css("user-select","auto");
        }

        /*
             Sistema de slide da página individual de cada carro.
        */

        var imgShow = 3;
        var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
        var curIndex = 0;

        initSlider();
        navigateSlider();
        clickSlider();
        function initSlider(){
           var amt = $('.mini-img-wraper').length * 33.3;
           var elScroll = $('.nav-galeria-wraper');
           var elSingle = $('.mini-img-wraper');
           elScroll.css('width',amt+'%');
           elSingle.css('width',33.3*(100/amt)+'%');
        }

        function navigateSlider(){
             $('.arrow-right-nav').click(function(){
                  if(curIndex < maxIndex){
                      curIndex++;
                      var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                      $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
                  }else{
                     //console.log("Chegamos até o final!");
                  }
              });

             $('.arrow-left-nav').click(function(){
                 if(curIndex > 0){
                      curIndex--;
                      var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                      $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
                  }else{
                      //console.log("Chegamos até o final!");
                  }
             })
        }


        function clickSlider(){
                $('.mini-img-wraper').click(function(){
                   $('.mini-img-wraper').css('background-color','transparent');
                   $(this).css('background-color','rgb(210,210,210)');
                   var img = $(this).children().css('background-image');
                   $('.foto-destaque').css('background-image',img);
                })

                $('.mini-img-wraper').eq(0).click();

        }


        /*
          Clicar e ir para div de contato com base no atributo goto
        */
        var directory = '/projetos/projeto_05/'
       
        $('[goto=contato]').click(function(){
            location.href=directory+'?contato';
            return false;
        })
        

        checkUrl();


        function checkUrl(){
            var url = location.href.split('/');
            var curPage = url[url.length-1].split('?');
       
            if(curPage[1] != undefined && curPage[1] == 'contato'){
              //$('header nav a').css('color','black');
              //$('footer nav a').css('color','white');
              $('[goto=contato]').css('color','#EB2D2D');
              $('html,body').animate({'scrollTop':$('#contato').offset().top});
            }else{
              if(curPage[0] == '')
                $('a[href=home]').css('color','#EB2D2D');
              else
                $('a[href='+curPage[0]+']').css('color','#EB2D2D');
            }

        }

        /*
            menu responsivo
        */


        $('.mobile').click(function(){
            $(this).find('ul').slideToggle();
        })

        /*
          Sistema de navegacao nos depoimentos da index.html
        */

        var amtDepoimento = $('.depoimento-single p').length;
        var curIndex = 0;

        iniciarDepoimentos();
        navegarDepoimentos();

        function iniciarDepoimentos(){
            $('.depoimento-single p').hide();
            $('.depoimento-single p').eq(0).show();
        }

        function navegarDepoimentos(){
            $('[next]').click(function(){
                 curIndex++;
                 if(curIndex >= amtDepoimento)
                    curIndex = 0;
                $('.depoimento-single p').hide();
                $('.depoimento-single p').eq(curIndex).show();
                
            })

            $('[prev]').click(function(){
                curIndex--;
                 if(curIndex < 0)
                    curIndex = amtDepoimento-1;
                $('.depoimento-single p').hide();
                $('.depoimento-single p').eq(curIndex).show();
            })
        }




})