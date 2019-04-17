/* export $timerBtn */
var $timerBtn=(function(){
  var cfg = {
    container:'.main',
    title:'确定',
    time:9,
    enabled:false,
    clickHander:null
  };

  var n=cfg.time;
  var init=function(conf){
    $.extend(cfg,conf);
  var $container=$(cfg.container);
  var DOM='<input class="timer-button" type="button" value="'+cfg.title+'('+n+'s)" disabled>';
  $container.html(DOM);
  var $btnAgree=$container.find('.timer-button');
  

  var timer = window.setInterval(function(){
    n--;
    if(n==0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意('+n+'s)');
    }
  },1000);

  $btnAgree.click(function(){
    alert('SPA!10-timer-button task!')
  });
}
  return {init:init}
}());
