function Sort(arr) {

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var num = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = num;
        }
      }
    }
    return arr;
  }