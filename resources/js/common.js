function emojiCheck(text) {
  var emojitext = text;
  if(text.indexOf('0x1F') != -1){
    console.log("hasEmojis");

    emojitext = text.replace(/(0x1F\w\w\w)/g, function(matched) {
      console.log('matched', matched);
      return emoji(matched);
    } );
  }
  return emojitext;
}

function emoji(code) {
  return String.fromCodePoint(code);
}

//backup a short while::
    //emojitext = text.replaceAll(/(0x1F\w\w\w)/g, '' + String.fromCodePoint('$1'));
    //emojitext = text.replaceAll(/(0x1F\w\w\w)/g, '' + String.fromCodePoint(Number('$1')));
    //emojitext = text.replaceAll(/(0x1F\w\w\w)/g, '' + String.fromCodePoint(String.fromCharCode(parseInt('$1', 31))));
    //emojitext = text.replaceAll(/(0x1F\w\w\w)/g, 'thecode_$1_thecode' + 'String.fromCodePoint(' + '$1' + ')');
    //emojitext = text.replaceAll(/(0x1F\w\w\w)/g, emoji('$1') );
    //emojitext = text.replaceAll(/(0x1F\w\w\w)/g, 'HIHIHIHI$1' );

        //0x1F61C

        //var startindex = text.indexOf('0x1F');
        //var endindex = text.indexOf('0x1F') + 7;
        //emojitext = text.substring(0, startindex);
        //emojitext = emojitext + String.fromCodePoint(text.substring(startindex, endindex));
        //emojitext = emojitext + text.substring(endindex, text.length);

    //    if((emojitext.lastIndexOf('0x1F') != -1) && (emojitext.lastIndexOf('0x1F') > startindex)){
    //      // Two emojis
    //      var emojitext2 = emojitext;
    //      var startindex2 = emojitext.lastIndexOf('0x1F');
    //      var endindex2 = emojitext.lastIndexOf('0x1F') + 7;
    //      emojitext2 = emojitext.substring(0, startindex2);
    //      emojitext2 = emojitext2 + String.fromCodePoint(emojitext.substring(startindex2, endindex2));
    //      emojitext2 = emojitext2 + emojitext.substring(endindex2, emojitext.length);
    //      emojitext = emojitext2;
    //    }