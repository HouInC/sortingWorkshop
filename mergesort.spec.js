describe('Merge Sort', function(){


  describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here
      expect( split([3, 7, 1, 8, 4]) ).toEqual( [ [3, 7, 1], [8, 4] ] );
    });
  });

  describe('Merge Sort', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect( merge([1, 3, 7], [4, 8]) ).toEqual( [1, 3, 4, 7, 8] );
    });

    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect( merge([1, 3, 7, 11, 12, 16, 22], [4, 8, 10, 11, 20]) ).toEqual( [1, 3, 4, 7, 8, 10, 11, 11, 12, 16, 20, 22] );
    });
  });

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles an array of numbers', function(){
    expect( mergeSort([3, 7, 1, 8, 4]) ).toEqual( [1, 3, 4, 7, 8] );
  });
  it('handles an array of numbers', function(){
    expect( mergeSort([10, 5, 35, 15, 2, 30, 1]) ).toEqual( [1, 2, 5, 10, 15, 30, 35] );
  });
  it('handles an array of numbers', function(){
    expect( mergeSort([5, 15, 3, -4, 8, 1]) ).toEqual( [-4, 1, 3, 5, 8, 15] );
  });
  it('handles an array of numbers', function(){
    expect( mergeSort([10, 0, 5, 1, -1, -5]) ).toEqual( [-5, -1, 0, 1, 5, 10] );
  });
});
