function KeyHolder(key) {
  this.setKey = function(newKey) {
    if (typeof newKey === 'string' && newKey.trim() !== '') {
      this.key = newKey.trim();
    } else {
      console.error('Invalid key. Please provide a non-empty string.');
    }
  };

  this.getKey = function() {
    return this.key;
  };

  this.setKey(key); // Initialize the key property with the provided key argument
}

// Usage
var myKeyHolder = new KeyHolder('initialKey');
console.log(myKeyHolder.getKey()); // Outputs: initialKey
myKeyHolder.setKey('newKey');
console.log(myKeyHolder.getKey()); // Outputs: newKey
