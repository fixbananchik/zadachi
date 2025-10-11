let a = [1, 2, 3, 4, 5, 6]

for(let i; i<=a.length/2;i++){
    console.log(a.slice(0,2))
    a.pop(a[0])
    a.pop(a[0])
}