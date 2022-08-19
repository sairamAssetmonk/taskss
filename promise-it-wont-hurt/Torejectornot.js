var promise = new Promise(function(resolve,reject) {
  resolve('I FIRED')
  reject(Error('I DID NOT FIRE'))
})
.then(console.log,onRejected)
function onRejected(error) {
  console.log(error.message);
}