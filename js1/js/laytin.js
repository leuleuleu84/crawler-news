
  google.load("feeds", "1");


   function OnLoad(feedUrl) {  

      var feed = new google.feeds.Feed(feedUrl);

      // Add two feeds.
	  feed.setNumEntries(1);   
      feed.load(function(result) {
      if (!result.error) {
        $content = $('.NewsFeedControl_id_1');
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          $box = $('<div class="parent_box"><div class="box-header"><a href="' + entry.link + '" class="fancybox fancybox.iframe" target="_blank" ><h4>' + entry.title  + '</h4><div class="pubDate">' + entry.publishedDate + '</div></a></div><div class="box">'+ entry.content + '</div></div>');
		  $content.append($box);
        }
      }
      });
    }
    //google.setOnLoadCallback(OnLoad);

document.addEventListener('DOMContentLoaded', function () {
      tinnoibat();
      kinhte();
      phapluat();
      giaoduc();
      xahoi();
      khcn();
      thethao();
      game();
      xe();
      thegioi();
      giaitri();
      thoitrang();
      suckhoe();
      tinhcam();

});

function tinnoibat(){
      $("#tinnoibat").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#tinnoibat1').append('<div class="NewsFeedControl_id_1"></div>');
      var tinnoibat = ['http://vnexpress.net/rss/tin-moi-nhat.rss',
                      'http://dantri.com.vn/trangchu.rss',
                      'http://www.24h.com.vn/upload/rss/tintuctrongngay.rss',
                      'http://www.doisongphapluat.com/rss/tin-tuc/su-kien-hang-ngay.rss',
                      'http://vietnamnet.vn/rss/tin-noi-bat.rss',
                      'http://vietbao.vn/rss2/trang-nhat.rss',
                      'http://www.thuocbietduoc.com.vn/tin-moi.rss',
                      'http://congnghe.nld.com.vn/rss/tin-tuc',
                      'http://giacngo.vn/thongtin/rss/?ID=1',
                      'http://baodientu.chinhphu.vn/_RSS_/1.rss',
                      'http://game.tech24.vn/rss/news.rss',
                      'http://vnreview.vn/feed/-/rss/13414',
                      'http://www.vnthethao.com/rss/tin-tong-hop.rss',
                      'http://dinhduong.com.vn/rss/tin-tuc.rss'];
      for (var j = 0 ; j < tinnoibat.length ; j++){
      OnLoad(tinnoibat[j]);
     }
   });
}

function kinhte(){
      $("#kinhte").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#kinhte1').append('<div class="NewsFeedControl_id_1"></div>');
      var kinhte=['http://vietnamnet.vn/rss/kinh-te.rss',
                      'http://vietstock.vn/144/chung-khoan.rss',
                      'http://vietstock.vn/733/doanh-nghiep.rss',
                      'http://www.stockbiz.vn/RSS/News/TopStories.ashx',
                      'http://www.stockbiz.vn/RSS/News/All.ashx',
                      'http://cafef.vn/Thi-truong-chung-khoan.rss',
                      'http://cafef.vn/Doanh-nghiep.rss',
                      'http://cafef.vn/Kinh-te-vi-mo.rss',
                      'http://cafef.vn/Lich-su-kien.rss',
                      'http://cafef.vn/Tin-doanh-nghiep.rss',
                      'http://congnghe.nld.com.vn/rss/kinh-te',
                      'http://congnghe.nld.com.vn/rss/vnmoney',
                      'http://ictnews.vn/rss/kinh-doanh',
                      'http://voz.vn/muc/tin/feed/atom/',
                      'http://rss.pcworld.com.vn/articles/kinh-doanh/',
                      'http://ictnews.vn/rss/kinh-doanh',
                      'http://vnreview.vn/feed/-/rss/13414/13418',
                      'http://www.quantrimang.com.vn/doanhnghiep/doanh-nghiep/rss.aspx',
                      'http://beta.gik.vn/rss/categories/kinh-doanh.rss',
                      'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Ch%E1%BB%A9ng+kho%C3%A1n',
                      'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=G%C6%B0%C6%A1ng+m%E1%BA%B7t+doanh+nh%C3%A2n',
                      'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=86',
                      'http://vnexpress.net/rss/kinh-doanh.rss',
                      'http://baodientu.chinhphu.vn/_RSS_/7.rss',
                      'http://www.stockbiz.vn/RSS/News/Economy.ashx',
                      'http://gamek.vn/thi-truong.rss',
                      'http://laodong.com.vn/rss/kinh-te-63.rss',
                      'http://www.24h.com.vn/upload/rss/taichinhbatdongsan.rss'];
      for (var j = 0 ; j < kinhte.length ; j++){
      OnLoad(kinhte[j]);
     }
   });
}

function phapluat(){
      $("#phapluat").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#phapluat1').append('<div class="NewsFeedControl_id_1"></div>');
      var phapluat=['http://vietbao.vn/live/Cong-nghe/rss.xml',
                  'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Ph%C3%A1p+lu%E1%BA%ADt',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=266',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=133',
                  'http://vnexpress.net/rss/phap-luat.rss',
                  'http://nongnghiep.vn/nongnghiepvn/rss/phap-luat/15.rss',
                  'http://giadinh.net.vn/rss/phap-luat',
                  'http://dantri.com.vn/skphapluat.rss',
                  'http://www.tienphong.vn/rss/ban-tin-113-231.rss',
                  'http://laodong.com.vn/rss/phap-luat-65.rss',
                  'http://www.doisongphapluat.com/rss/phap-luat/an-ninh-hinh-su.rss',
                  'http://thabacninh.vn/index.php/vi/news/rss/Doi-tac/'];
      for (var j = 0 ; j < phapluat.length ; j++){
      OnLoad(phapluat[j]);
     }
   });
}

function giaoduc(){
      $("#giaoduc").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#giaoduc1').append('<div class="NewsFeedControl_id_1"></div>');
      var giaoduc=['http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Du+h%E1%BB%8Dc',
                  'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Tuy%E1%BB%83n+sinh',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=85',
                  'http://www.24h.com.vn/upload/rss/giaoducduhoc.rss',
                  'http://dantri.com.vn/giaoduc-khuyenhoc.rss',
                  'http://www.tienphong.vn/rss/tuyen-sinh2011-163.rss',
                  'http://www.tienphong.vn/rss/giao-duc-du-hoc-40.rss',
                  'http://kenhtuyensinh.vn/rss/giao-duc.rss',
                  'http://www.doisongphapluat.com/rss/giao-duc.rss'];
      for (var j = 0 ; j < giaoduc.length ; j++){
        OnLoad(giaoduc[j]);
     }
   });
}


function xahoi(){
      $( "#xahoi" ).click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#xahoi1').append('<div class="NewsFeedControl_id_1"></div>');
    var xahoi = ['http://ictnews.vn/rss/internet/xa-hoi',
                  'http://beta.gik.vn/rss/categories/nhan-vat.rss',
                  'http://congnghe.nld.com.vn/rss/doi-song-net',
                  'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Ph%C3%B3ng+s%E1%BB%B1',
                  'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Gi%E1%BA%A3i+tr%C3%AD',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=89',
                  'http://giacngo.vn/thongtin/rss/?ID=120',
                  'http://nongnghiep.vn/nongnghiepvn/rss/xa-hoi/6.rss',
                  'https://id.vtc.vn/home/pages/rss.aspx?cateid=48',
                  'http://laodong.com.vn/rss/xa-hoi-59.rss',
                  'http://giadinh.net.vn/rss/xa-hoi',
                  'http://dantri.com.vn/xa-hoi.rss',
                  'http://vietnamnet.vn/rss/xa-hoi.rss',
                  'http://ngoisao.net/rss/showbiz-viet.rss',
                  'http://www.doisongphapluat.com/rss/xa-hoi.rss'];
    for (var j = 0 ; j < xahoi.length ; j++){
      OnLoad(xahoi[j]);
     }
  });
}

function khcn(){
      $("#khcn").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#khcn1').append('<div class="NewsFeedControl_id_1"></div>');
      var khcn=['http://www.khoahoc.com.vn/congnghemoi/cong-nghe-moi/rss.aspx',
                'http://gamek.vn/internet.rss',
                'http://rss.pcworld.com.vn/articles/cong-nghe/',
                'http://ictnews.vn/rss/cntt',
                'http://beta.gik.vn/rss/categories/mobile.rss',
                'http://congnghe.nld.com.vn/rss/mobile',
                'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Kinh+nghi%E1%BB%87m',
                'http://vnexpress.net/rss/khoa-hoc.rss',
                'http://baodientu.chinhphu.vn/_RSS_/8.rss',
                'http://laodong.com.vn/rss/cong-nghe-66.rss',
                'http://www.24h.com.vn/upload/rss/congnghethongtin.rss',
                'http://rss.pcworld.com.vn/articles/tieu-dung/',
                'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=661',
                'http://vnreview.vn/feed/-/rss/13414/245386',
                'http://www.tienphong.vn/rss/cong-nghe-khoa-hoc-46.rss'];
      for (var j = 0 ; j < khcn.length ; j++){
      OnLoad(khcn[j]);
     }
   });
}


function thethao(){
      $("#thethao").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#thethao1').append('<div class="NewsFeedControl_id_1"></div>');
      var thethao=['http://vnexpress.net/rss/the-thao.rss',
                    'http://baodientu.chinhphu.vn/_RSS_/249.rss',
                    'http://laodong.com.vn/rss/the-thao-60.rss',
                    'http://www.24h.com.vn/upload/rss/thethao.rss',
                    'http://dantri.com.vn/The-Thao.rss',
                    'http://suckhoedoisong.vn/rss/van-hoa-the-thao',
                    'http://www.tienphong.vn/rss/the-thao-11.rss',
                    'http://www.ohthoitrang.com/rss/cuoc_song',
                    'http://ngoisao.net/rss/the-thao.rss',
                    'http://www.doisongphapluat.com/rss/the-thao.rss'];
      for (var j = 0 ; j < thethao.length ; j++){
      OnLoad(thethao[j]);
     }
   });
}

function game(){
      $("#game").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#thethao1').append('<div class="NewsFeedControl_id_1"></div>');
      var game=['http://ictnews.vn/rss/game',
                'http://congnghe.nld.com.vn/rss/game',
                'http://dantri.com.vn/games_asp_.rss',
                'http://gamek.vn/gaming-gear.rss',
                'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Games',
                'http://ngoisao.net/rss/game.rss'];
      for (var j = 0 ; j < game.length ; j++){
      OnLoad(game[j]);
     }
   });
}

function xe(){
      $("#xe").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#xe1').append('<div class="NewsFeedControl_id_1"></div>');
      var xe=['http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=659',
              'http://vnexpress.net/rss/oto-xe-may.rss',
              'http://www.24h.com.vn/upload/rss/otoxemay.rss',
              'http://dantri.com.vn/otoxemay.rss',
              'http://www.doisongphapluat.com/rss/oto-xemay.rss'];
      for (var j = 0 ; j < xe.length ; j++){
      OnLoad(xe[j]);
     }
   });
}


function thegioi(){
      $("#thegioi").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#thegioi1').append('<div class="NewsFeedControl_id_1"></div>');
      var thegioi=['http://antg.cand.com.vn/vi-VN/sukien.rss',
                  'http://antg.cand.com.vn/vi-VN/hautruong.rss',
                  'http://antg.cand.com.vn/vi-VN/hosomat.rss',
                  'http://antg.cand.com.vn/vi-VN/hosointepol.rss',
                  'http://congnghe.nld.com.vn/rss/thoi-su-quoc-te',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=2',
                  'http://vietnamnet.vn/rss/the-gioi-anh.rss',
                  'http://vietbao.vn/live/The-gioi/rss.xml',
                  'http://vnexpress.net/rss/the-gioi.rss',
                  'http://dantri.com.vn/Thegioi.rss',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=2',
                  'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Th%E1%BA%BF+gi%E1%BB%9Bi',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=2',
                  'http://laodong.com.vn/rss/the-gioi-62.rss',
                  'http://baodientu.chinhphu.vn/_RSS_/54.rss',
                  'http://www.tienphong.vn/rss/the-gioi-5.rss',
                  'http://ictnews.vn/rss/the-gioi-so',
                  'http://www.khoahoc.com.vn/khampha/the-gioi-dong-vat/rss.aspx',
                  'http://nongnghiep.vn/nongnghiepvn/rss/the-gioi/8.rss',
                  'http://vietnamnet.vn/rss/the-gioi-anh.rss'];
      for (var j = 0 ; j < thegioi.length ; j++){
      OnLoad(thegioi[j]);
     }
   });
}


function giaitri(){
      $("#giaitri").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#giaitri1').append('<div class="NewsFeedControl_id_1"></div>');
      var giaitri=['http://ictnews.vn/rss/the-gioi-so/hinh-anh-am-thanh',
                  'http://game.tech24.vn/rss/video.rss',
                  'http://vnreview.vn/feed/-/rss/13414/542370',
                  'http://vnreview.vn/feed/-/rss/13414/542372',
                  'http://congnghe.nld.com.vn/rss/nghe-nhac',
                  'http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=%E1%BA%A2nh+vui',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=10',
                  'http://vnexpress.net/rss/giai-tri.rss',
                  'http://www.24h.com.vn/upload/rss/canhacmtv.rss',
                  'http://dantri.com.vn/giaitri.rss',
                  'http://www.tienphong.vn/rss/tuyen-sinh2011-163.rss',
                  'http://www.khoahoc.com.vn/giaitri/video/rss.aspx',
                  'http://www.cnet.com/rss/video/',
                  'http://www.tienphong.vn/rss/giai-tri-hau-truong-168.rss'];
      for (var j = 0 ; j < giaitri.length ; j++){
      OnLoad(giaitri[j]);
     }
   });
}


function thoitrang(){
      $("#thoitrang").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#thoitrang1').append('<div class="NewsFeedControl_id_1"></div>');
      var thoitrang=['http://vietbao.vn/live/The-gioi-giai-tri/rss.xml',
                    'http://www.ohthoitrang.com/rss/tuoi_teen',
                    'http://www.24h.com.vn/upload/rss/thoitrang.rss',
                    'http://www.ohthoitrang.com/rss/cong_so',
                    'http://www.ohthoitrang.com/rss/cuoc_song'];
      for (var j = 0 ; j < thoitrang.length ; j++){
      OnLoad(thoitrang[j]);
     }
   });
}


function suckhoe(){
      $("#suckhoe").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#suckhoe1').append('<div class="NewsFeedControl_id_1"></div>');
      var suckhoe=['http://vietbao.vn/live/Suc-khoe/rss.xml',
                  'http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=12',
                  'http://giacngo.vn/thongtin/rss/?ID=190',
                  'http://nongnghiep.vn/nongnghiepvn/rss/gia-dinh-suc-khoe/9.rss',
                  'http://www.24h.com.vn/upload/rss/suckhoedoisong.rss',
                  'http://dantri.com.vn/suckhoe.rss',
                  'http://www.thuocbietduoc.com.vn/tin-moi.rss',
                  'http://dinhduong.com.vn/rss/khoe-dep.rss',
                  'http://www.thuocvuonnha.com/News/rss/?cate=hoi-dap',
                  'http://suckhoedoisong.vn/rss/duoc-si-tu-van',
                  'http://giadinh.net.vn/rss/suc-khoe',
                  'http://ngoisao.net/rss/khoe-dep.rss',
                  'http://www.doisongphapluat.com/rss/doi-song/suc-khoe.rss'];
      for (var j = 0 ; j < suckhoe.length ; j++){
      OnLoad(suckhoe[j]);
     }
   });
}

function tinhcam(){
      $("#tinhcam").click(function(){
        $('.NewsFeedControl_id_1').remove();
        $('#tinhcam1').append('<div class="NewsFeedControl_id_1"></div>');
      var tinhcam=['http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=194',
                  'http://dantri.com.vn/tinhyeu-gioitinh.rss',
                  'http://suckhoedoisong.vn/rss/tinh-yeu-va-gioi-tinh',
                  'http://ngoisao.net/rss/tam-tinh.rss'];

      for (var j = 0 ; j < tinhcam.length ; j++){
      OnLoad(tinhcam[j]);
     }
   });
}

  
