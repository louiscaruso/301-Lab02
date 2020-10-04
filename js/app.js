/* eslint-disable no-undef */
'use strict';

let $photoTemplate = $('#photo-template');
let $box = $('#photo-box');
let $dropbox = $('#dropbox');




function Horn(img, title, description, key, horns) {
  this.img = img;
  this.title = title;
  this.description = description;
  this.key = key;
  this.horns = horns;
}
let keyword = [];

Horn.readJson = (pagenumber) => {
  $.ajax(`./data/page-${pagenumber}.json`).then(data => {
    
    data.forEach(horn => {
      let hornObject = new Horn(horn.image_url, horn.title, horn.description, horn.keyword, horn.horns);
      let $hornClone = $photoTemplate.clone();
      $hornClone.attr('class', `${hornObject.key}`);
      $hornClone.find('h2').text(hornObject.title);
      $hornClone.find('p').text(hornObject.description);
      $hornClone.find('img').attr('src', hornObject.img);
      $box.append($hornClone);
      if (keyword.indexOf(hornObject.key) === -1) {
        keyword.push(hornObject.key);
        $dropbox.append(
          $('<option></option>').text(hornObject.key)

        );
      }

    });
  });
};



let filterImage = () => {
  $('select').on('change', function () {
    let selected = this.value;
    console.log('value', selected);
    $('section').hide();
    keyword.forEach(image => {
      // console.log('image',image);
      // console.log('keyword',image.key);
      // console.log('select', selected);
      if (selected === image) {
        let keyword = selected;
        // anything that selected has that class is shown
        $('.' + keyword).show();
      }
    });
  });
};

console.log(keyword);

$(() => {
  Horn.readJson(1);
  filterImage();
});

