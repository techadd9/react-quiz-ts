// 배열을 섞거나 무작위 화하는 방법
// Math.random()-0.5 및-0.5에 의해 생성 된 임의성을 사용하면 다음을 호출 할 때마다 알고리즘에서 임의의 값은 양수 또는 음수 일 수 있습니다.
export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
