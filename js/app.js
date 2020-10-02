/* eslint-disable no-undef */
'use strict';



$(document).ready(function () {


  // };

  // }

  // let hornsArray = [];
  function Horn(item) {
    this.image_url = item.image_url;
    this.title = item.title;
    this.description = item.description;
    this.keyword = item.keyword;
    this.horns = item.horns;

    // hornsArray.push(this);


  }

  Horn.prototype.render = function () {
    let $photoClone = $(' #photo-template').clone();
    $('section').append($photoClone);
    $photoClone.removeAttr('id');
    $photoClone.attr('id', this.item);

    $photoClone.find('h2').text(this.title);
    $photoClone.find('img').attr('src', this.image_url);

  };

  // Horn.readJson = () => {
  //   const ajaxSettings = {
  //     method: 'get',
  //     dataType: 'json'

  //   };



  $.ajax('./data/page-1.json')
    .then(data => {

      data.forEach(item => {

        let horn = new Horn(item);

        horn.render();


      });


    });

  // $(() => Horn.readJson());
});
