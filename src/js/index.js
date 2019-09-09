import Swiper from 'swiper'
import APlayer from 'aplayer'
import list from '../source/songList.js'
import { timingSafeEqual } from 'crypto';

$(function() {
  let aplayer = null;
  let date = new Date();
  let day = date.getMonth()+1+String(date.getDate());
  let strHtml = '';
  let index = 0;
  let lock = false;
  // 1567872000000    9月8号0点0分0秒
  if(date.getTime() < 1567872000000){
    $(".cover").removeClass('hide');
  }
  list.forEach((item,i)=>{    
    if(day == item.day){
      // item.num = "本期"
      strHtml += `<div class="swiper-slide swiper-slide-active"><div class="default active">`;
      index = i;
      // lock = true;
    }else{
      // if(lock&&i==index+1){
      //   item.num = "下期"
      // }
      strHtml += `<div class="swiper-slide"><div class="default">`
    };
    strHtml += `<div class="sort_num">${item.num}</div>
                        <div class="title">${item.name}</div>
                    </div> 
                </div>`
  })
  $('.swiper-wrapper').html(strHtml);
  new Swiper('.swiper-container', {
    initialSlide:index>0?index-1:index,
    slidesPerView: 3.2,
    spaceBetween: 10
  });
  //初始化播放器
  playAudio(index)
  //记录一下初始化的高度
  let textHeight = $(".lyarc .text").height();
  $('#look_lyr').click(function(e){
    if($(this).find('span').hasClass('down')) {
      $(this).prev().height('auto')
      $(this).html('收起歌词<span class="up"></span>')
    }else{
      $(this).prev().height(textHeight)
      $(this).html('查看歌词<span class="down"></span>')
    }   
  })

  $('.swiper-wrapper').on('click',function(e){
    let j = $(e.target).parents('.swiper-slide').index();
    //时间不到 先不可点
    if(j>index) return;
    //目前正在播放也不可点
    if($(e.target).parents(".active").length>0){
      return;
    }
    $('.swiper-wrapper').find(".swiper-slide").find('.default').removeClass('active')
    if($(e.target).parents(".default").length>0){
      $(e.target).parents(".default").addClass('active')
      playAudio(j);
    }    
  })
  
  $("#iwant").click(function(){
    window.location = "http://weizan.dianzhenkeji.com/addons/xiaof_toupiao/index.php?c=entry&do=index&m=xiaof_toupiao&i=2&sid=55759&wxref=mp.weixin.qq.com#wechat_redirect";
  })
  function playAudio(index=0){
    if(aplayer instanceof APlayer){
      aplayer.destroy();
    };  
    let options = {
      container: document.getElementById('aplayer'),
        audio: [
          list[index]
        ]
    }
    aplayer = new APlayer(options);
    $('.lyarc .text').html(list[index].geci).height(textHeight);
    $('#look_lyr').html('查看歌词<span class="down"></span>');
  }
})

