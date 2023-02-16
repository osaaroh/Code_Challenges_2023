function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
   let appleLanding = apples.map((apple)=>{return parseInt(apple) + parseInt(a)}).filter((apple)=>{return apple>=s&&apple<=t}).length;
   let orangeLanding = oranges.map((orange)=>{return parseInt(orange) + parseInt(b)}).filter((orange)=>{return orange>=s&&orange<=t}).length;
  
  console.log(appleLanding)
  console.log(orangeLanding)
}
