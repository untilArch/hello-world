var text = 'do,do,do,do,Cora,do,do,Cora'
var myName = 'Cora'
var hits = []

for (var i = 0; i < text.length; i++) {
  if (text[i] === 'C') {
    for (var j = i; j < (i + myName.length); j++) {
      hits.push(text[j])
    }
  }
}
if (hits.length === 0) {
  console.log("Your name was not found!")
} else {
  console.log(hits)
}
