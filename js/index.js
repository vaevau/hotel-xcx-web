// var oFilterMenu = document.getElementById('filter-menu');
// var aLi = oFilterMenu.getElementsByTagName('div');
// var oSortDis = document.getElementById('sort-distance');
// var aSpan = oFilterMenu.getElementsByTagName('div');
// var oSortPlace = document.getElementById('sort-place-detail');


// for (var i = 0;i<aSpan.length; i++){
//    aSpan[i].index = i;
//     aSpan[i].onmouseover = function(){
//         this.className = 'active';
//         if(this.index == 0){
//             oSortDis.style.display = 'block';
//         }else if (this.index == 1){
//             oSortPlace.style.display = 'block';
//         }      
//     }
   
// }


// var list = [
//     {
//         name: '距离排序',
//         active: true
//     },
//     {
//         name: '品牌价格'
//     },
//     {
//         name: '其他筛选'
//     },
//     {
//         name: '位置区域'
//     }
// ]
// var oFilter = document.getElementById('filter-menu');
// console.log(oFilter.innerHTML);
// var temp = '';
// for (var index = 0; index < list.length; index++) {
//     var el = list[index];
//     // console.log(el.name);
//     var odiv = '<div>'+el.name+'</div>'
//     // console.log(odiv);
//     temp += odiv
// }
// console.log(temp);

// oFilter.innerHTML = temp;



//添加酒图片评论等店数据


// var oHotelMsg = hotelMsg.hotelData.map(function(d){
//     var oHotelImg = d.pic-hotel, oHotelImg2 = d.pic-hotel02,
//     oComment = d.comment, oPrice = d.price, oRcmd = d.rcmd,
//     oDistance = d.distance;
// })