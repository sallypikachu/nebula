exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return (arr.indexOf(item))
  },

  sum : function(arr) {
    for (var s = 0, i = 0; i < arr.length; i++){
      s += arr[i]
    }
    return s
  },

  remove : function(arr, item) {
    var index = [];
    for (i = arr.length; i > 0; i--){
      if (arr[i-1] == item){
        index.push(i-1);
      }
    };
    for (x = 0; x < index.length; x++) {
      arr.splice(index[x], 1);
    }
    return arr;
  },

  reverseString : function(str) {
    var reverse = '';
    for (i = str.length-1; i >= 0; i--) {
      reverse += str[i];
    }
    return reverse;
  },

  longestSubString : function(str) {
    var longest = '';
    str_split = str.split(' ');
    for (i = 0; i < str_split.length; i++) {
      if (str_split[i].length > longest.length) {
        longest = str_split[i];
      }
    }
    return longest;
  },

  letterMoveForward : function(str) {
    new_str = '';
    for (i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'y') {
        new_str += String.fromCharCode(str.charCodeAt(i) + 1);
      }
      else if (str[i] == 'z') {
        new_str += 'a';
      }
      else {
        new_str += str[i];
      }
    }
    return new_str;
  },

  capitalizeWords : function(str) {
    var str_split = str.split(' ');
    for (i = 0; i < str_split.length; i++) {
      str_split[i] = str_split[i].replace(str_split[i][0], str_split[i][0].toUpperCase());
    }
    return str_split.join(' ');
  }
};
