const { log } = console;
//
// ㅜ 배열의 모든 순열을 출력하는 함수 (재귀 함수 사용)
function swap(strArr, index1, index2) {
  //
  let temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
}
function permute(strArr, begin, end) {
  //
  if (begin === end) {
    //
    log("**************", strArr);
  }
  //
  else {
    for (let i = begin; i < end + 1; i++) {
      // 0, 1, 2
      //
      log(begin === i, begin, i);
      //
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      //
      swap(strArr, begin, i);
      log("toDoList:", begin === i, begin, i);
    }
  }
}
function permuteArray(strArr) {
  //
  permute(strArr, 0, strArr.length - 1);
}
permuteArray(["A", "B", "C"]);
//
// 정답 코드
