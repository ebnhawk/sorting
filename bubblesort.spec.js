describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a sorted array', function() {
    let arr = [1, 2, 3, 4];
    expect( bubbleSort(arr) ).toEqual( [1, 2, 3, 4] )
  });

  it('handles an unsorted array', function() {
    let arr = [3, 7, 8, 4, 1, 6, 9, 0, 2, 5];
    let expected = arr.slice().sort()
    expect( bubbleSort(arr)).toEqual( expected )
  });
});
