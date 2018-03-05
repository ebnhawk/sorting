function swap(index1, index2) {
  return [index2, index1]
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) [array[i], array[j]] = swap(array[i], array[j])
    }
  }
  return array
}
