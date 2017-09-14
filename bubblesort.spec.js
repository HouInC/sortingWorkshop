describe('Bubble Sort', function(){
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing
});


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });
  it('handles an array of numbers', function(){
    expect( bubbleSort([3, 7, 1, 8, 4]) ).toEqual( [1, 3, 4, 7, 8] );
    expect(window.swap.calls.count()).toEqual(4);
  });
  it('handles an array of numbers', function(){
    expect( bubbleSort([10, 5, 35, 15, 2, 30, 1]) ).toEqual( [1, 2, 5, 10, 15, 30, 35] );
    expect(window.swap.calls.count()).toEqual(13);
  });
  it('handles an array of numbers', function(){
    expect( bubbleSort([5, 15, 3, -4, 8, 1]) ).toEqual( [-4, 1, 3, 5, 8, 15] );
    expect(window.swap.calls.count()).toEqual(10);
  });
  it('handles an array of numbers', function(){
    expect( bubbleSort([10, 0, 5, 1, -1, -5]) ).toEqual( [-5, -1, 0, 1, 5, 10] );
    expect(window.swap.calls.count()).toEqual(13);
  });
});
