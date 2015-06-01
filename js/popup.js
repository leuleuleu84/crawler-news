function renderNewsFeed(feedUrl) {
    var xslUrl = chrome.extension.getURL("/xsl/NewsFeedControl_id_1.xsl");

    loadXMLDoc(xslUrl, function(xsl) {
    
        if (feedUrl == "") {
            feedUrl = chrome.extension.getURL("/xsl/rss_feed.xml");
        }

        loadXMLDoc(feedUrl, function(xml) {
            var xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsl);
            var resultDocument = xsltProcessor.transformToFragment(xml, document);

            document.getElementById("NewsFeedControl_id_1").appendChild(resultDocument);
        });
    });
}
function loadXMLDoc(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseXML);
        }
    };
    xhr.send(null);
}

document.addEventListener('DOMContentLoaded', function () {


      renderNewsFeed('http://vnexpress.net/rss/tin-moi-nhat.rss');
      renderNewsFeed('http://dantri.com.vn/trangchu.rss');
      vietNam();
      theGioi()
      kinhDoanh();
      congNghe();
      khoaHocVaMoiTruong();
      sucKhoe();
      giaiTri();

          
});



var _vietNam = 0;
var _theGioi = 1
var _kinhDoanh = 2;
var _congNghe=3;
var _khoaHocVaMoiTruong=4;
var _sucKhoe=5;
var _giaiTri=6;
var _chungkhoan=7;
function clearAll()
{
    document.getElementById('NewsFeedControl_id_1').remove();
    var div1=document.createElement('div');
    div1.id='NewsFeedControl_id_1';
    document.getElementById('templete').appendChild(div1);
}
/*function chungkhoan()
{
	var x=document.getElementsByClassName('nav-item');
   	 x[_vietNam].addEventListener('click',function (){
     	 clearAll();
	var div2=document.createElement('div');
   	 div1.class='parent_box';
	document.getElementById('templete')
)};
}*/
function vietNam()
{
    var x=document.getElementsByClassName('nav-item');
    x[_vietNam].addEventListener('click',function (){
      clearAll();
      renderNewsFeed('http://vietnamnet.vn/rss/chinh-tri.rss');
      renderNewsFeed('http://vietnamnet.vn/rss/moi-nong.rss');
      renderNewsFeed('http://www.xaluan.com/XaHoi.rss');
      renderNewsFeed('http://dantri.com.vn/xa-hoi.rss');
      renderNewsFeed('http://antg.cand.com.vn/vi-VN/vuan.rss');
      renderNewsFeed('http://antg.cand.com.vn/vi-VN/phongsu.rss');
      
      renderNewsFeed('http://congnghe.nld.com.vn/rss/thoi-su-trong-nuoc');
      renderNewsFeed('http://www.thanhnien.com.vn/_layouts/newsrss.aspx?Channel=Ch%C3%ADnh+tr%E1%BB%8B+-+X%C3%A3+h%E1%BB%99i');

    });
}
function theGioi()
{
    var x=document.getElementsByClassName('nav-item');
    x[_theGioi].addEventListener('click',function (){
      clearAll();
      renderNewsFeed('http://antg.cand.com.vn/vi-VN/sukien.rss');
      renderNewsFeed('http://antg.cand.com.vn/vi-VN/hautruong.rss');
      renderNewsFeed('http://antg.cand.com.vn/vi-VN/hosomat.rss');
      renderNewsFeed('http://antg.cand.com.vn/vi-VN/hosointepol.rss');
      renderNewsFeed('http://congnghe.nld.com.vn/rss/thoi-su-quoc-te');
      renderNewsFeed('http://tuoitre.vn/Pages/RssFeeds.aspx?ChannelID=2');

    });
}
function kinhDoanh()
{
    var x=document.getElementsByClassName('nav-item');
    x[_kinhDoanh].addEventListener('click',function (){
      clearAll();
     
renderNewsFeed('http://vnexpress.net/rss/kinh-doanh.rss');
	renderNewsFeed('http://dantri.com.vn/kinhdoanh.rss');
 renderNewsFeed('http://vietnamnet.vn/rss/kinh-te.rss');
      renderNewsFeed('http://vietstock.vn/144/chung-khoan.rss');
      renderNewsFeed('http://vietstock.vn/733/doanh-nghiep.rss');
      renderNewsFeed('http://www.stockbiz.vn/RSS/News/TopStories.ashx');
      renderNewsFeed('http://www.stockbiz.vn/RSS/News/All.ashx');
      renderNewsFeed('http://cafef.vn/Thi-truong-chung-khoan.rss');
      renderNewsFeed('http://cafef.vn/Doanh-nghiep.rss');
      renderNewsFeed('http://cafef.vn/Kinh-te-vi-mo.rss');
      renderNewsFeed('http://cafef.vn/Lich-su-kien.rss');
      renderNewsFeed('http://cafef.vn/Tin-doanh-nghiep.rss');
      renderNewsFeed('http://congnghe.nld.com.vn/rss/kinh-te');
      renderNewsFeed('http://congnghe.nld.com.vn/rss/vnmoney');
      renderNewsFeed('http://ictnews.vn/rss/kinh-doanh');
	
renderNewsFeed('http://www.thesaigontimes.vn/rssview/doanhnghiep/');
renderNewsFeed('http://www.thesaigontimes.vn/rssview/taichinh/');
renderNewsFeed('http://www.thesaigontimes.vn/rssview/kinhdoanh/');
renderNewsFeed('http://doanhnhan.net/RSS/Tin-tuc-Su-kien.rss');
renderNewsFeed('http://dddn.com.vn/rss/thi-truong');
renderNewsFeed('http://dddn.com.vn/rss/khoi-nghiep');
renderNewsFeed('http://dddn.com.vn/rss/dau-tu');
renderNewsFeed('http://dddn.com.vn/rss/doanh-nghiep');
renderNewsFeed('http://dddn.com.vn/rss/bao-doanh-nhan');
renderNewsFeed('http://www.tinmoi.vn/rss/Kinh-doanh.rss');

renderNewsFeed('http://seatimes.com.vn/doanh-nghiep.rss');
renderNewsFeed('http://seatimes.com.vn/dau-tu.rss');
renderNewsFeed('http://dddn.com.vn/rss/bat-dong-san');
renderNewsFeed('http://kienthuc.net.vn/rss/kinh-doanh-9.rss');

      

    });
}
function congNghe()
{
    var x=document.getElementsByClassName('nav-item');
    x[_congNghe].addEventListener('click',function (){
      clearAll();
      renderNewsFeed('http://www.pcworld.com.vn/articles.rss');
      renderNewsFeed('http://echip.com.vn/he-thong-c1046.rss');
      renderNewsFeed('http://echip.com.vn/van-phong-c1047.rss');
      renderNewsFeed('http://echip.com.vn/voc-online-c1077.rss');
      renderNewsFeed('http://echip.com.vn/nghe-nhin-c1078.rss');
      renderNewsFeed('http://echip.com.vn/bao-mat---av-c1130.rss');
      renderNewsFeed('http://echip.com.vn/tien-ich-c1079.rss');
      renderNewsFeed('http://tapchicongnghe.org/feed/');
      renderNewsFeed('http://www.khoahoc.com.vn/congnghemoi/cong-nghe-moi/rss.aspx');
      renderNewsFeed('http://www.khoahoc.com.vn/congnghemoi/may-tinh/rss.aspx');
      renderNewsFeed('http://www.khoahoc.com.vn/congnghemoi/phan-mem/rss.aspx');
      renderNewsFeed('http://ictnews.vn/rss/cntt');
      renderNewsFeed('http://ictnews.vn/rss/internet');
      renderNewsFeed('http://ictnews.vn/rss/cntt/phan-mem');
      renderNewsFeed('http://ictnews.vn/rss/cntt/phan-cung');
      renderNewsFeed('http://ictnews.vn/rss/cntt/bao-mat');
      renderNewsFeed('http://ictnews.vn/rss/the-gioi-so');
      renderNewsFeed('http://ictnews.vn/rss/the-gioi-so/thu-thuat');
      renderNewsFeed('http://ictnews.vn/rss/khoi-nghiep/bao-cao-thong-ke-cac-con-so');
      renderNewsFeed('http://ictnews.vn/rss/khoi-nghiep');
    });
}
function khoaHocVaMoiTruong()
{
    var x=document.getElementsByClassName('nav-item');
    x[_khoaHocVaMoiTruong].addEventListener('click',function (){
      clearAll();
      
      renderNewsFeed('http://antg.cand.com.vn/vi-VN/ktvhkh.rss');
      renderNewsFeed('http://congnghe.nld.com.vn/rss/khoa-hoc');
      renderNewsFeed('http://www.khoahoc.com.vn/sukien/cau-chuyen/rss.aspx');
      renderNewsFeed('http://www.khoahoc.com.vn/doisong/ung-dung/rss.aspx');
      renderNewsFeed('http://www.khoahoc.com.vn/doisong/moi-truong/rss.aspx');
      renderNewsFeed('http://www.khoahoc.com.vn/sukien/cong-trinh/rss.aspx');
      renderNewsFeed('http://xahoithongtin.com.vn/feed.rss');
    });
}
function sucKhoe()
{
    var x=document.getElementsByClassName('nav-item');
    x[_sucKhoe].addEventListener('click',function (){
      clearAll();
      renderNewsFeed('http://congnghe.nld.com.vn/rss/suc-khoe');
      renderNewsFeed('http://www.khoahoc.com.vn/doisong/yhoc/rss.aspx');
    });
}
function giaiTri()
{
    var x=document.getElementsByClassName('nav-item');
    x[_giaiTri].addEventListener('click',function (){
      clearAll();
      renderNewsFeed('http://vnexpress.net/rss/tin-moi-nhat.rss')
    });
}





